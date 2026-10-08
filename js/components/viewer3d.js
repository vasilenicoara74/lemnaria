import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';
import { STLExporter } from 'three/addons/STLExporter.js';
import { getWoodById } from '../data/woods.js';
import { getPlanById } from '../data/plans.js';

export class Studio3D {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.parts = [];
    this.hardwareMeshes = [];
    this.showHardware = true;
    this.explodeFactor = 0;
    this.selectedPart = null;
    this.woodId = options.woodId || 'stejar';
    this.init();
  }

  init() {
    this.width = this.container.clientWidth || 360;
    this.height = this.container.clientHeight || 280;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf1ebe2);

    // Camera
    this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 10, 8000);
    this.camera.position.set(900, 700, 1100);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.localClippingEnabled = true;
    this.container.appendChild(this.renderer.domElement);

    // Interactive states
    this.doorsOpen = false;
    this.doorPivots = [];
    this.isSectionActive = false;
    this.clipPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
    this.isTransparent = false;
    this.hiddenParts = new Set();
    this.isPullActive = false;

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.05; // Nu coborî sub podea
    this.controls.minDistance = 200;
    this.controls.maxDistance = 5000;

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xd0c4b4, 0.75);
    hemiLight.position.set(0, 1000, 0);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xfff6ea, 1.1);
    dirLight.position.set(800, 1400, 700);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 100;
    dirLight.shadow.camera.far = 4000;
    const d = 1000;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    this.scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xd9ebff, 0.4);
    fillLight.position.set(-600, 400, -600);
    this.scene.add(fillLight);

    // Ground Plane with grid
    const groundGeo = new THREE.PlaneGeometry(3500, 3500);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const grid = new THREE.GridHelper(2000, 20, 0xbfb2a3, 0xdfd4c5);
    grid.position.y = 0.5;
    this.scene.add(grid);

    // Raycaster for part selection
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.setupInteractions();

    // Resize observer
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.container);

    // Animation loop
    this.animate = this.animate.bind(this);
    this.animId = requestAnimationFrame(this.animate);
  }

  createWoodMaterial(woodId) {
    const wood = getWoodById(woodId);
    const baseColor = new THREE.Color(wood.colorHex || '#b89467');

    // Generează o textură procedurală pe canvas pentru fibră fină de lemn
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = wood.colorHex || '#b89467';
    ctx.fillRect(0, 0, 256, 256);

    // Linii de fibră
    for (let i = 0; i < 256; i += 2) {
      const alpha = Math.sin(i * 0.15) * 0.08 + Math.random() * 0.05;
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.max(0, alpha)})`;
      ctx.fillRect(0, i, 256, 1.5);
    }
    // Raze medulare / pori
    for (let j = 0; j < 180; j++) {
      const rx = Math.random() * 256;
      const ry = Math.random() * 256;
      const rw = Math.random() * 14 + 4;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(rx, ry, rw, 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1.5, 3);

    return new THREE.MeshStandardMaterial({
      color: baseColor,
      map: texture,
      roughness: 0.72,
      metalness: 0.04,
      transparent: this.isTransparent,
      opacity: this.isTransparent ? 0.4 : 1.0,
      clippingPlanes: this.isSectionActive ? [this.clipPlane] : []
    });
  }

  setWood(woodId) {
    this.woodId = woodId;
    const newMat = this.createWoodMaterial(woodId);
    this.parts.forEach(p => {
      if (p.mesh && !p.isHighlight) {
        p.mesh.material = newMat;
      }
    });
  }

  clearModel() {
    this.parts.forEach(p => {
      if (p.mesh) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
      }
    });
    this.hardwareMeshes.forEach(h => {
      if (h.mesh) {
        this.scene.remove(h.mesh);
        h.mesh.geometry.dispose();
      }
    });
    this.parts = [];
    this.hardwareMeshes = [];
    this.doorPivots = [];
    this.hiddenParts.clear();
    this.selectedPart = null;
    this.doorsOpen = false;
  }

  addFastener({ type = 'screw', name, pos, rot, explodeDir, color = 0xd4af37, parent = null }) {
    // Generează geometrie 3D pentru elemente de asamblare metalice (șurub, diblu, balama, minifix, broască)
    let geo;
    let mat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.85,
      roughness: 0.3,
      clippingPlanes: this.isSectionActive ? [this.clipPlane] : []
    });

    if (type === 'screw') {
      // Șurub / confirmat (cilindru fin cu cap teșit)
      geo = new THREE.CylinderGeometry(3.5, 2.5, 20, 8);
    } else if (type === 'dowel') {
      // Diblu lemn fag canelat
      mat = new THREE.MeshStandardMaterial({ color: 0xc89d66, roughness: 0.9, clippingPlanes: this.isSectionActive ? [this.clipPlane] : [] });
      geo = new THREE.CylinderGeometry(4, 4, 28, 8);
    } else if (type === 'minifix') {
      // Came cilindrică Minifix Ø15mm
      mat = new THREE.MeshStandardMaterial({ color: 0x999999, metalness: 0.9, roughness: 0.2, clippingPlanes: this.isSectionActive ? [this.clipPlane] : [] });
      geo = new THREE.CylinderGeometry(7.5, 7.5, 12, 12);
    } else if (type === 'hinge') {
      // Balama aruncătoare cu braț metalic nichelat
      mat = new THREE.MeshStandardMaterial({ color: 0xb0b5bc, metalness: 0.9, roughness: 0.25, clippingPlanes: this.isSectionActive ? [this.clipPlane] : [] });
      geo = new THREE.BoxGeometry(32, 14, 22);
    } else if (type === 'lock') {
      // Broască cilindrică de mobilier cu cheie
      mat = new THREE.MeshStandardMaterial({ color: 0xcca010, metalness: 0.8, roughness: 0.3, clippingPlanes: this.isSectionActive ? [this.clipPlane] : [] });
      geo = new THREE.CylinderGeometry(9.5, 9.5, 24, 16);
    } else if (type === 'handle') {
      // Mâner bară modernă
      mat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.3, clippingPlanes: this.isSectionActive ? [this.clipPlane] : [] });
      geo = new THREE.CylinderGeometry(4, 4, 120, 8);
    } else {
      // Colțar metalic
      mat = new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.8, roughness: 0.4, clippingPlanes: this.isSectionActive ? [this.clipPlane] : [] });
      geo = new THREE.BoxGeometry(25, 25, 4);
    }

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.position.set(pos.x || 0, pos.y || 0, pos.z || 0);
    if (rot) {
      if (rot.x) mesh.rotation.x = rot.x;
      if (rot.y) mesh.rotation.y = rot.y;
      if (rot.z) mesh.rotation.z = rot.z;
    }

    mesh.visible = this.showHardware;

    const fastData = {
      name: name || `Element Asamblare: ${type.toUpperCase()}`,
      type,
      basePos: new THREE.Vector3(pos.x || 0, pos.y || 0, pos.z || 0),
      explodeDir: explodeDir ? new THREE.Vector3(explodeDir.x, explodeDir.y, explodeDir.z).normalize() : new THREE.Vector3(0, 1, 0),
      mesh
    };
    mesh.userData = fastData;

    if (parent) {
      parent.add(mesh);
    } else {
      this.scene.add(mesh);
    }
    this.hardwareMeshes.push(fastData);
    return fastData;
  }

  toggleHardware(visible) {
    this.showHardware = visible !== undefined ? visible : !this.showHardware;
    this.hardwareMeshes.forEach(h => {
      if (h.mesh) h.mesh.visible = this.showHardware;
    });
    return this.showHardware;
  }

  addPart({ name, length, width, thickness, pos, rot, explodeDir, material, parent = null, isDoor = false, doorIndex = 0, hingeSide = 'left', geometry = null }) {
    // În coordonate 3D Three.js:
    // X = Lungime (L)
    // Y = Înălțime / Grosime (T sau H)
    // Z = Lățime (W)
    const geo = geometry || new THREE.BoxGeometry(length, thickness, width);
    const mat = material || this.createWoodMaterial(this.woodId);
    if (this.isSectionActive && mat) {
      mat.clippingPlanes = [this.clipPlane];
    }
    if (this.isTransparent && mat) {
      mat.transparent = true;
      mat.opacity = 0.4;
    }
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    mesh.position.set(pos.x || 0, pos.y || 0, pos.z || 0);
    if (rot) {
      if (rot.x) mesh.rotation.x = rot.x;
      if (rot.y) mesh.rotation.y = rot.y;
      if (rot.z) mesh.rotation.z = rot.z;
    }

    // Linii de contur tehnice fine pentru vizualizare clară a îmbinărilor
    const wireGeo = new THREE.EdgesGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x4a3622, transparent: true, opacity: 0.35 });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    mesh.add(wire);

    const partData = {
      name,
      length,
      width,
      thickness,
      basePos: new THREE.Vector3(pos.x || 0, pos.y || 0, pos.z || 0),
      explodeDir: explodeDir ? new THREE.Vector3(explodeDir.x, explodeDir.y, explodeDir.z).normalize() : new THREE.Vector3(0, 1, 0),
      mesh,
      isDoor,
      doorIndex,
      hingeSide,
      pullOffset: new THREE.Vector3(0, 0, 0)
    };
    mesh.userData = partData;

    if (parent) {
      parent.add(mesh);
    } else {
      this.scene.add(mesh);
    }
    this.parts.push(partData);
    return partData;
  }

  buildPlan(planId, params = {}) {
    this.clearModel();
    const woodMat = this.createWoodMaterial(this.woodId);

    if (planId === 'slatted-boot-tray') {
      const L = params.length || 800;
      const W = params.width || 380;
      const H = params.height || 120;
      const T = params.thickness || 18;
      const slats = params.slats || 6;
      const innerW = W - 2 * T;
      const innerL = L - 2 * T;
      const slatW = Math.max(30, Math.floor((innerW - (slats - 1) * 12) / slats));

      // 1. Față și spate (Laterale lungi)
      this.addPart({
        name: 'Laterală Lungă Față',
        length: L, width: T, thickness: H,
        pos: { x: 0, y: H / 2, z: (W - T) / 2 },
        explodeDir: { x: 0, y: 0, z: 1.2 },
        material: woodMat
      });
      this.addPart({
        name: 'Laterală Lungă Spate',
        length: L, width: T, thickness: H,
        pos: { x: 0, y: H / 2, z: -(W - T) / 2 },
        explodeDir: { x: 0, y: 0, z: -1.2 },
        material: woodMat
      });

      // 2. Capete stânga și dreapta
      this.addPart({
        name: 'Capăt Stânga',
        length: T, width: innerW, thickness: H,
        pos: { x: -(L - T) / 2, y: H / 2, z: 0 },
        explodeDir: { x: -1.2, y: 0, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Capăt Dreapta',
        length: T, width: innerW, thickness: H,
        pos: { x: (L - T) / 2, y: H / 2, z: 0 },
        explodeDir: { x: 1.2, y: 0, z: 0 },
        material: woodMat
      });

      // 3. Traverse suport fund (ridicate 10mm de la sol)
      const railH = 22;
      const railY = 10 + railH / 2;
      this.addPart({
        name: 'Traversă Suport Stânga',
        length: innerW, width: T, thickness: railH,
        pos: { x: -innerL * 0.35, y: railY, z: 0 },
        rot: { y: Math.PI / 2 },
        explodeDir: { x: 0, y: -0.8, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Traversă Suport Dreapta',
        length: innerW, width: T, thickness: railH,
        pos: { x: innerL * 0.35, y: railY, z: 0 },
        rot: { y: Math.PI / 2 },
        explodeDir: { x: 0, y: -0.8, z: 0 },
        material: woodMat
      });

      // 4. Șipci de fund
      const gap = 12;
      const totalSlatSpan = slats * slatW + (slats - 1) * gap;
      const startZ = -totalSlatSpan / 2 + slatW / 2;
      const slatY = 10 + railH + T / 2;

      for (let i = 0; i < slats; i++) {
        const curZ = startZ + i * (slatW + gap);
        this.addPart({
          name: `Șipcă Fund #${i + 1}`,
          length: innerL, width: slatW, thickness: T,
          pos: { x: 0, y: slatY, z: curZ },
          explodeDir: { x: 0, y: -1.5, z: (curZ / (W / 2)) * 0.5 },
          material: woodMat
        });
      }

    } else if (planId === 'classic-birdhouse') {
      const L = params.length || 180;
      const W = params.width || 180;
      const H = params.height || 260;
      const T = params.thickness || 18;

      // Podea
      this.addPart({
        name: 'Podea Căsuță',
        length: L - 2 * T, width: W - 2 * T, thickness: T,
        pos: { x: 0, y: T / 2, z: 0 },
        explodeDir: { x: 0, y: -1, z: 0 },
        material: woodMat
      });
      // Laterale
      const sideH = H - 65;
      this.addPart({
        name: 'Perete Lateral Stânga',
        length: T, width: W - 2 * T, thickness: sideH,
        pos: { x: -(L - T) / 2, y: T + sideH / 2, z: 0 },
        explodeDir: { x: -1.2, y: 0, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Perete Lateral Dreapta',
        length: T, width: W - 2 * T, thickness: sideH,
        pos: { x: (L - T) / 2, y: T + sideH / 2, z: 0 },
        explodeDir: { x: 1.2, y: 0, z: 0 },
        material: woodMat
      });
      // Fațadă
      this.addPart({
        name: 'Fațadă cu Gaură Zbor',
        length: L, width: T, thickness: H,
        pos: { x: 0, y: H / 2, z: (W - T) / 2 },
        explodeDir: { x: 0, y: 0, z: 1.5 },
        material: woodMat
      });
      // Spate alungit
      this.addPart({
        name: 'Panou Spate de Montaj',
        length: L, width: T, thickness: H + 50,
        pos: { x: 0, y: (H + 50) / 2 - 20, z: -(W - T) / 2 },
        explodeDir: { x: 0, y: 0, z: -1.5 },
        material: woodMat
      });
      // Acoperiș 2 ape la 45 grade
      const roofLen = L + 40;
      const roofW = (W / 2) * 1.45 + 10;
      this.addPart({
        name: 'Acoperiș Pantă Stânga',
        length: roofLen, width: roofW, thickness: T,
        pos: { x: -roofW * 0.35, y: H + 10, z: 0 },
        rot: { z: Math.PI / 4 },
        explodeDir: { x: -0.7, y: 1.2, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Acoperiș Pantă Dreapta',
        length: roofLen, width: roofW, thickness: T,
        pos: { x: roofW * 0.35, y: H + 10, z: 0 },
        rot: { z: -Math.PI / 4 },
        explodeDir: { x: 0.7, y: 1.2, z: 0 },
        material: woodMat
      });

    } else if (planId === 'coffee-table') {
      const L = params.length || 1100;
      const W = params.width || 600;
      const H = params.height || 460;
      const T = params.thickness || 28;
      const legT = params.legThickness || 60;
      const apronH = 80;
      const legH = H - T;

      // Blat
      this.addPart({
        name: 'Blat Masiv Stejar',
        length: L, width: W, thickness: T,
        pos: { x: 0, y: H - T / 2, z: 0 },
        explodeDir: { x: 0, y: 1.6, z: 0 },
        material: woodMat
      });

      // 4 Picioare
      const legX = (L - legT - 40) / 2;
      const legZ = (W - legT - 40) / 2;
      const legPositions = [
        { name: 'Picior Stânga-Față', x: -legX, z: legZ, dir: { x: -1, y: 0, z: 1 } },
        { name: 'Picior Dreapta-Față', x: legX, z: legZ, dir: { x: 1, y: 0, z: 1 } },
        { name: 'Picior Stânga-Spate', x: -legX, z: -legZ, dir: { x: -1, y: 0, z: -1 } },
        { name: 'Picior Dreapta-Spate', x: legX, z: -legZ, dir: { x: 1, y: 0, z: -1 } }
      ];
      legPositions.forEach(p => {
        this.addPart({
          name: p.name,
          length: legT, width: legT, thickness: legH,
          pos: { x: p.x, y: legH / 2, z: p.z },
          explodeDir: p.dir,
          material: woodMat
        });
      });

      // Traverse lungi (Aprons)
      const apronL = L - 2 * legT - 40;
      const apronY = H - T - apronH / 2;
      this.addPart({
        name: 'Traversă Lungă Față',
        length: apronL, width: 22, thickness: apronH,
        pos: { x: 0, y: apronY, z: legZ },
        explodeDir: { x: 0, y: 0, z: 1 },
        material: woodMat
      });
      this.addPart({
        name: 'Traversă Lungă Spate',
        length: apronL, width: 22, thickness: apronH,
        pos: { x: 0, y: apronY, z: -legZ },
        explodeDir: { x: 0, y: 0, z: -1 },
        material: woodMat
      });

      // Traverse scurte
      const apronW = W - 2 * legT - 40;
      this.addPart({
        name: 'Traversă Scurtă Stânga',
        length: 22, width: apronW, thickness: apronH,
        pos: { x: -legX, y: apronY, z: 0 },
        explodeDir: { x: -1, y: 0, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Traversă Scurtă Dreapta',
        length: 22, width: apronW, thickness: apronH,
        pos: { x: legX, y: apronY, z: 0 },
        explodeDir: { x: 1, y: 0, z: 0 },
        material: woodMat
      });

      // Poliță inferioară
      const shelfY = 120;
      this.addPart({
        name: 'Poliță Depozitare Inferioară',
        length: apronL - 40, width: apronW - 40, thickness: 18,
        pos: { x: 0, y: shelfY, z: 0 },
        explodeDir: { x: 0, y: -0.9, z: 0 },
        material: woodMat
      });

    } else if (planId === 'modular-bookshelf') {
      const L = params.length || 900;
      const W = params.width || 300;
      const H = params.height || 1800;
      const T = params.thickness || 20;
      const shelves = params.shelves || 5;
      const innerL = L - 2 * T;

      // Montanți laterali
      this.addPart({
        name: 'Montant Lateral Stânga',
        length: T, width: W, thickness: H,
        pos: { x: -(L - T) / 2, y: H / 2, z: 0 },
        explodeDir: { x: -1.4, y: 0, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Montant Lateral Dreapta',
        length: T, width: W, thickness: H,
        pos: { x: (L - T) / 2, y: H / 2, z: 0 },
        explodeDir: { x: 1.4, y: 0, z: 0 },
        material: woodMat
      });

      // Top și Bază
      this.addPart({
        name: 'Placă Superioară (Top)',
        length: L, width: W, thickness: T,
        pos: { x: 0, y: H - T / 2, z: 0 },
        explodeDir: { x: 0, y: 1.5, z: 0 },
        material: woodMat
      });
      this.addPart({
        name: 'Placă Inferioară (Bază)',
        length: innerL, width: W, thickness: T,
        pos: { x: 0, y: 60 + T / 2, z: 0 },
        explodeDir: { x: 0, y: -0.6, z: 0 },
        material: woodMat
      });

      // Polițe interioare
      const usableH = H - 60 - 2 * T;
      const stepH = usableH / (shelves - 1);
      for (let i = 1; i < shelves - 1; i++) {
        const shelfY = 60 + T + i * stepH;
        this.addPart({
          name: `Poliță #${i + 1} ${i === 2 ? '(Fixă Centrală)' : '(Ajustabilă)'}`,
          length: innerL, width: W - 10, thickness: T,
          pos: { x: 0, y: shelfY, z: 0 },
          explodeDir: { x: 0, y: 0, z: 1.2 },
          material: woodMat
        });
      }

      // Plintă spate
      this.addPart({
        name: 'Plintă Rigidizare Spate',
        length: innerL, width: T, thickness: 60,
        pos: { x: 0, y: 30, z: -(W - T) / 2 },
        explodeDir: { x: 0, y: 0, z: -1 },
        material: woodMat
      });

    } else if (planId === 'picnic-table') {
      const L = params.length || 1800;
      const W = params.width || 1500;
      const H = params.height || 760;
      const T = params.thickness || 40;
      const benchH = 430;
      const benchW = 280;
      const tableW = 750;

      // 1. Cele 5 scânduri ale blatului mesei
      const slatW = 140;
      const slatGap = 8;
      const totalTableSlats = 5;
      const startTableZ = -((totalTableSlats * slatW + (totalTableSlats - 1) * slatGap) / 2) + slatW / 2;

      for (let s = 0; s < totalTableSlats; s++) {
        const curZ = startTableZ + s * (slatW + slatGap);
        this.addPart({
          name: `Scândură Blat Masă #${s + 1}`,
          length: L, width: slatW, thickness: T,
          pos: { x: 0, y: H - T / 2, z: curZ },
          explodeDir: { x: 0, y: 1.6, z: (curZ / (tableW / 2)) * 0.4 },
          material: woodMat
        });
      }

      // 2. Cele 4 scânduri pentru bănci (2 pe stânga, 2 pe dreapta)
      [-1, 1].forEach((side, sIdx) => {
        const centerBenchZ = side * (W / 2 - benchW / 2);
        [-slatW / 2 - slatGap / 2, slatW / 2 + slatGap / 2].forEach((offsetZ, bIdx) => {
          this.addPart({
            name: `Scândură Bancă ${side < 0 ? 'Stânga' : 'Dreapta'} #${bIdx + 1}`,
            length: L, width: slatW, thickness: T,
            pos: { x: 0, y: benchH - T / 2, z: centerBenchZ + offsetZ },
            explodeDir: { x: 0, y: 0.8, z: side * 1.5 },
            material: woodMat
          });
        });
      });

      // 3. Cadre în A la cele 2 capete (Stânga și Dreapta)
      [-L * 0.35, L * 0.35].forEach((frameX, fIdx) => {
        const sideName = fIdx === 0 ? 'Capăt Față' : 'Capăt Spate';

        // Traversă superioară suport blat
        this.addPart({
          name: `Traversă Suport Blat (${sideName})`,
          length: T, width: tableW - 20, thickness: 110,
          pos: { x: frameX, y: H - T - 55, z: 0 },
          explodeDir: { x: Math.sign(frameX) * 0.8, y: 0, z: 0 },
          material: woodMat
        });

        // Traversă lungă suport bănci (orizontală joasă)
        this.addPart({
          name: `Traversă Lungă Suport Bănci (${sideName})`,
          length: T, width: W - 100, thickness: 120,
          pos: { x: frameX, y: benchH - T - 60, z: 0 },
          explodeDir: { x: Math.sign(frameX) * 0.8, y: 0, z: 0 },
          material: woodMat
        });

        // Picioare înclinate în A (Stânga și Dreapta)
        const angle = 0.35; // ~20 grade înclinare
        const legLen = 820;
        this.addPart({
          name: `Picior Cadru A Stânga (${sideName})`,
          length: T, width: 110, thickness: legLen,
          pos: { x: frameX, y: H / 2 - 10, z: -320 },
          rot: { x: angle },
          explodeDir: { x: Math.sign(frameX) * 0.8, y: 0, z: -1.2 },
          material: woodMat
        });
        this.addPart({
          name: `Picior Cadru A Dreapta (${sideName})`,
          length: T, width: 110, thickness: legLen,
          pos: { x: frameX, y: H / 2 - 10, z: 320 },
          rot: { x: -angle },
          explodeDir: { x: Math.sign(frameX) * 0.8, y: 0, z: 1.2 },
          material: woodMat
        });

        // Buloane metalice M10 asamblare cadru
        [-320, 320].forEach((bz, bIdx) => {
          this.addFastener({
            type: 'screw',
            name: `Bulon Caroserie M10x100mm (#${fIdx * 2 + bIdx + 1})`,
            pos: { x: frameX + (frameX < 0 ? -15 : 15), y: benchH - T - 40, z: bz },
            rot: { z: Math.PI / 2 },
            explodeDir: { x: Math.sign(frameX) * 1.5, y: 0, z: 0 }
          });
        });
      });

      // 4. Diagonale rigidizare sub masă (contrafișe)
      [-1, 1].forEach((dir, dIdx) => {
        this.addPart({
          name: `Contrafișă Diagonală #${dIdx + 1}`,
          length: 40, width: 80, thickness: 520,
          pos: { x: dir * L * 0.18, y: H * 0.52, z: 0 },
          rot: { z: dir * 0.65 },
          explodeDir: { x: dir * 0.6, y: -1, z: 0 },
          material: woodMat
        });
      });

    } else {
      // Căutăm definiția planului pentru a prelua arhetipul și dimensiunile
      const planDef = getPlanById(planId);
      const archetype = (planDef && planDef.archetype) ? planDef.archetype : 'table';
      const defs = (planDef && planDef.defaults) ? planDef.defaults : {};
      const L = params.length || defs.length || 1000;
      const W = params.width || defs.width || 600;
      const H = params.height || defs.height || 750;
      const T = params.thickness || defs.thickness || 24;

      if (archetype === 'table') {
        const titleLower = ((planDef && planDef.roTitle) || (planDef && planDef.title) || '').toLowerCase();
        const isRound = planId.includes('round') || titleLower.includes('rotund') || params.shape === 'round';
        const isNightstand = titleLower.includes('noptieră') || titleLower.includes('nightstand');
        const isConsole = titleLower.includes('consolă') || titleLower.includes('console');
        const isCoffeeTable = titleLower.includes('cafea') || titleLower.includes('coffee') || H <= 520;
        const isWorkbenchOrStation = titleLower.includes('banc') || titleLower.includes('cărucior');

        if (isRound) {
          // ==========================================
          // 1. MĂSUȚĂ / MASĂ ROTUNDĂ (Top Cilindric + Trepied / 4 Picioare Conice + Traversă Cruce)
          // ==========================================
          const radius = Math.round(Math.min(L, W) / 2);
          const topRadius = radius;
          const legH = H - T;
          const legRadius = Math.max(14, Math.min(26, Math.floor(T * 0.9)));
          const isLargeRound = radius >= 450;
          const numLegs = isLargeRound ? 4 : 3;

          // Blat rotund finisat masiv
          const topGeo = new THREE.CylinderGeometry(topRadius, topRadius, T, 36);
          this.addPart({
            name: `Blat Rotund Masiv (Ø${radius * 2}mm)`,
            length: radius * 2, width: radius * 2, thickness: T,
            pos: { x: 0, y: H - T / 2, z: 0 },
            explodeDir: { x: 0, y: 1.6, z: 0 },
            geometry: topGeo,
            material: woodMat
          });

          // Picioare conice/cilindrice înclinate cu stil scandinav
          const legInset = Math.max(40, Math.floor(radius * 0.58));
          for (let i = 0; i < numLegs; i++) {
            const angle = (i * 2 * Math.PI) / numLegs;
            const lx = Math.cos(angle) * legInset;
            const lz = Math.sin(angle) * legInset;
            const legGeo = new THREE.CylinderGeometry(legRadius * 0.75, legRadius * 1.1, legH, 16);

            this.addPart({
              name: `Picior Cilindric #${i + 1} (${numLegs === 3 ? 'Trepied' : 'Nordic'})`,
              length: legRadius * 2, width: legRadius * 2, thickness: legH,
              pos: { x: lx, y: legH / 2, z: lz },
              rot: { x: Math.sin(angle) * 0.08, z: -Math.cos(angle) * 0.08 },
              explodeDir: { x: Math.cos(angle) * 1.3, y: 0, z: Math.sin(angle) * 1.3 },
              geometry: legGeo,
              material: woodMat
            });
          }

          // Șasiu în cruce / stea sub blat pentru rigidizare
          const crossBarLen = Math.max(120, legInset * 2 + legRadius * 2);
          const crossH = Math.min(45, Math.floor(T * 1.6));
          this.addPart({
            name: 'Traversă Suport Cruce A',
            length: crossBarLen, width: T, thickness: crossH,
            pos: { x: 0, y: H - T - crossH / 2, z: 0 },
            explodeDir: { x: 0, y: 0, z: 0.8 },
            material: woodMat
          });
          this.addPart({
            name: 'Traversă Suport Cruce B',
            length: T, width: crossBarLen, thickness: crossH,
            pos: { x: 0, y: H - T - crossH / 2, z: 0 },
            explodeDir: { x: 0.8, y: 0, z: 0 },
            material: woodMat
          });

          // Dacă este măsuță de colț sau loft cu poliță inferioară
          if (titleLower.includes('poliță') || titleLower.includes('raft') || titleLower.includes('colț')) {
            const shelfRadius = Math.round(radius * 0.65);
            const shelfY = Math.round(legH * 0.32);
            const shelfGeo = new THREE.CylinderGeometry(shelfRadius, shelfRadius, Math.max(16, T * 0.75), 32);
            this.addPart({
              name: `Poliță Inferioară Rotundă (Ø${shelfRadius * 2}mm)`,
              length: shelfRadius * 2, width: shelfRadius * 2, thickness: Math.max(16, T * 0.75),
              pos: { x: 0, y: shelfY, z: 0 },
              explodeDir: { x: 0, y: -1.2, z: 0 },
              geometry: shelfGeo,
              material: woodMat
            });
          }

        } else if (isNightstand) {
          // ==========================================
          // 2. NOPTIERĂ CU SERTAR & NIȘĂ DESCHISĂ
          // ==========================================
          const legH = Math.round(H * 0.35);
          const boxH = H - legH;
          const innerW = L - 2 * T;
          const boxBaseY = legH;

          // Top
          this.addPart({
            name: 'Top Masiv Noptieră',
            length: L, width: W, thickness: T,
            pos: { x: 0, y: H - T / 2, z: 0 },
            explodeDir: { x: 0, y: 1.4, z: 0 },
            material: woodMat
          });
          // Laterale casetă
          this.addPart({
            name: 'Laterală Stânga Noptieră',
            length: T, width: W, thickness: boxH - T,
            pos: { x: -(L - T) / 2, y: boxBaseY + (boxH - T) / 2, z: 0 },
            explodeDir: { x: -1.2, y: 0, z: 0 },
            material: woodMat
          });
          this.addPart({
            name: 'Laterală Dreapta Noptieră',
            length: T, width: W, thickness: boxH - T,
            pos: { x: (L - T) / 2, y: boxBaseY + (boxH - T) / 2, z: 0 },
            explodeDir: { x: 1.2, y: 0, z: 0 },
            material: woodMat
          });
          // Bază
          this.addPart({
            name: 'Bază Casetă Noptieră',
            length: innerW, width: W, thickness: T,
            pos: { x: 0, y: boxBaseY + T / 2, z: 0 },
            explodeDir: { x: 0, y: -0.8, z: 0 },
            material: woodMat
          });
          // Poliță mediană nișă
          this.addPart({
            name: 'Poliță Mediană Nișă',
            length: innerW, width: W - 15, thickness: T,
            pos: { x: 0, y: boxBaseY + (boxH - T) * 0.5, z: 0 },
            explodeDir: { x: 0, y: 0, z: 1.1 },
            material: woodMat
          });
          // Față sertar inferior
          const drawerH = Math.round((boxH - T) * 0.42);
          this.addPart({
            name: 'Față Sertar Glisant',
            length: innerW - 6, width: T, thickness: drawerH,
            pos: { x: 0, y: boxBaseY + T + drawerH / 2, z: (W - T) / 2 + 2 },
            explodeDir: { x: 0, y: 0, z: 1.5 },
            material: woodMat
          });
          // 4 Picioare oblice noptieră
          const legT = 36;
          const legX = (L - legT * 2 - 20) / 2;
          const legZ = (W - legT * 2 - 20) / 2;
          [
            { name: 'Picior Față-Stânga', x: -legX, z: legZ },
            { name: 'Picior Față-Dreapta', x: legX, z: legZ },
            { name: 'Picior Spate-Stânga', x: -legX, z: -legZ },
            { name: 'Picior Spate-Dreapta', x: legX, z: -legZ }
          ].forEach(l => {
            this.addPart({
              name: l.name,
              length: legT, width: legT, thickness: legH,
              pos: { x: l.x, y: legH / 2, z: l.z },
              explodeDir: { x: Math.sign(l.x), y: -0.5, z: Math.sign(l.z) },
              material: woodMat
            });
          });

        } else if (isConsole) {
          // ==========================================
          // 3. CONSOLĂ ÎNGUSTĂ DE PERETE
          // ==========================================
          const legT = 40;
          const legH = H - T;
          this.addPart({
            name: 'Blat Consolă Îngustă',
            length: L, width: W, thickness: T,
            pos: { x: 0, y: H - T / 2, z: 0 },
            explodeDir: { x: 0, y: 1.5, z: 0 },
            material: woodMat
          });
          const lx = (L - legT - 30) / 2;
          const lz = (W - legT - 20) / 2;
          [
            { name: 'Picior Față-Stânga', x: -lx, z: lz },
            { name: 'Picior Față-Dreapta', x: lx, z: lz },
            { name: 'Picior Spate-Stânga', x: -lx, z: -lz },
            { name: 'Picior Spate-Dreapta', x: lx, z: -lz }
          ].forEach(l => {
            this.addPart({
              name: l.name,
              length: legT, width: legT, thickness: legH,
              pos: { x: l.x, y: legH / 2, z: l.z },
              explodeDir: { x: Math.sign(l.x), y: 0, z: Math.sign(l.z) },
              material: woodMat
            });
          });
          // Traverse superioare zvelte
          const apronH = 65;
          const apronY = H - T - apronH / 2;
          this.addPart({
            name: 'Traversă Față Zveltă',
            length: lx * 2, width: T, thickness: apronH,
            pos: { x: 0, y: apronY, z: lz },
            explodeDir: { x: 0, y: 0, z: 1.2 },
            material: woodMat
          });
          this.addPart({
            name: 'Traversă Spate Zveltă',
            length: lx * 2, width: T, thickness: apronH,
            pos: { x: 0, y: apronY, z: -lz },
            explodeDir: { x: 0, y: 0, z: -1.2 },
            material: woodMat
          });
          // Rigidizare transversală
          [-lx, lx].forEach((sideX, idx) => {
            this.addPart({
              name: `Traversă Laterală #${idx + 1}`,
              length: T, width: lz * 2 - legT, thickness: apronH,
              pos: { x: sideX, y: apronY, z: 0 },
              explodeDir: { x: Math.sign(sideX) * 1.2, y: 0, z: 0 },
              material: woodMat
            });
          });

        } else if (isCoffeeTable && (titleLower.includes('poliță') || titleLower.includes('loft') || titleLower.includes('casetat'))) {
          // ==========================================
          // 4. MĂSUȚĂ DE CAFEA CU POLIȚĂ / CASETATĂ
          // ==========================================
          const legT = Math.min(65, Math.max(45, Math.floor(T * 1.8)));
          const legH = H - T;
          this.addPart({
            name: 'Blat Masiv Măsuță',
            length: L, width: W, thickness: T,
            pos: { x: 0, y: H - T / 2, z: 0 },
            explodeDir: { x: 0, y: 1.5, z: 0 },
            material: woodMat
          });
          const lx = (L - legT * 2 - 30) / 2;
          const lz = (W - legT * 2 - 30) / 2;
          [
            { name: 'Picior Față-Stânga', x: -lx, z: lz },
            { name: 'Picior Față-Dreapta', x: lx, z: lz },
            { name: 'Picior Spate-Stânga', x: -lx, z: -lz },
            { name: 'Picior Spate-Dreapta', x: lx, z: -lz }
          ].forEach(l => {
            this.addPart({
              name: l.name,
              length: legT, width: legT, thickness: legH,
              pos: { x: l.x, y: legH / 2, z: l.z },
              explodeDir: { x: Math.sign(l.x) * 1.2, y: 0, z: Math.sign(l.z) * 1.2 },
              material: woodMat
            });
          });
          const apronH = Math.min(75, Math.floor(legH * 0.22));
          const apronY = H - T - apronH / 2;
          this.addPart({
            name: 'Traversă Longitudinală Față',
            length: lx * 2, width: T, thickness: apronH,
            pos: { x: 0, y: apronY, z: lz },
            explodeDir: { x: 0, y: 0, z: 1.2 },
            material: woodMat
          });
          this.addPart({
            name: 'Traversă Longitudinală Spate',
            length: lx * 2, width: T, thickness: apronH,
            pos: { x: 0, y: apronY, z: -lz },
            explodeDir: { x: 0, y: 0, z: -1.2 },
            material: woodMat
          });
          // Poliță inferioară reviste doar dacă modelul o specifică
          const shelfH = Math.round(legH * 0.28);
          this.addPart({
            name: 'Poliță Inferioară Reviste',
            length: lx * 2 - 20, width: lz * 2 - 20, thickness: Math.max(16, T * 0.75),
            pos: { x: 0, y: shelfH, z: 0 },
            explodeDir: { x: 0, y: -1.1, z: 0 },
            material: woodMat
          });

        } else {
          // ==========================================
          // 5. MASĂ CLASICĂ / MINIMALISTĂ / DINING FĂRĂ POLIȚĂ INUTILE
          // ==========================================
          const legT = Math.min(85, Math.max(45, Math.floor(T * 2.0)));
          const legH = Math.max(100, H - T);
          this.addPart({
            name: 'Blat Masiv Masă',
            length: L, width: W, thickness: T,
            pos: { x: 0, y: H - T / 2, z: 0 },
            explodeDir: { x: 0, y: 1.5, z: 0 },
            material: woodMat
          });
          const lx = Math.max(20, (L - legT * 2 - 40) / 2);
          const lz = Math.max(20, (W - legT * 2 - 40) / 2);
          const legs = [
            { name: 'Picior Față-Stânga', x: -lx, z: lz },
            { name: 'Picior Față-Dreapta', x: lx, z: lz },
            { name: 'Picior Spate-Stânga', x: -lx, z: -lz },
            { name: 'Picior Spate-Dreapta', x: lx, z: -lz }
          ];
          legs.forEach(l => {
            this.addPart({
              name: l.name,
              length: legT, width: legT, thickness: legH,
              pos: { x: l.x, y: legH / 2, z: l.z },
              explodeDir: { x: Math.sign(l.x) * 1.2, y: 0, z: Math.sign(l.z) * 1.2 },
              material: woodMat
            });
          });
          const apronH = Math.min(90, Math.floor(legH * 0.22));
          const apronY = H - T - apronH / 2;
          this.addPart({
            name: 'Traversă Longitudinală Față',
            length: lx * 2, width: T, thickness: apronH,
            pos: { x: 0, y: apronY, z: lz },
            explodeDir: { x: 0, y: 0, z: 1.2 },
            material: woodMat
          });
          this.addPart({
            name: 'Traversă Longitudinală Spate',
            length: lx * 2, width: T, thickness: apronH,
            pos: { x: 0, y: apronY, z: -lz },
            explodeDir: { x: 0, y: 0, z: -1.2 },
            material: woodMat
          });
          this.addPart({
            name: 'Traversă Transversală Stânga',
            length: T, width: lz * 2 - legT, thickness: apronH,
            pos: { x: -lx, y: apronY, z: 0 },
            explodeDir: { x: -1.2, y: 0, z: 0 },
            material: woodMat
          });
          this.addPart({
            name: 'Traversă Transversală Dreapta',
            length: T, width: lz * 2 - legT, thickness: apronH,
            pos: { x: lx, y: apronY, z: 0 },
            explodeDir: { x: 1.2, y: 0, z: 0 },
            material: woodMat
          });
        }

      } else if (archetype === 'bench') {
        const seatH = Math.min(500, H);
        const legT = Math.max(40, T * 1.8);
        const legH = seatH - T;
        this.addPart({
          name: 'Șezut Bancă Masivă',
          length: L, width: W, thickness: T,
          pos: { x: 0, y: seatH - T / 2, z: 0 },
          explodeDir: { x: 0, y: 1.4, z: 0 },
          material: woodMat
        });
        const lx = (L - 120) / 2;
        const lz = (W - 80) / 2;
        [
          { name: 'Picior Stânga Față', x: -lx, z: lz },
          { name: 'Picior Dreapta Față', x: lx, z: lz },
          { name: 'Picior Stânga Spate', x: -lx, z: -lz },
          { name: 'Picior Dreapta Spate', x: lx, z: -lz }
        ].forEach(l => {
          this.addPart({
            name: l.name,
            length: legT, width: legT, thickness: legH,
            pos: { x: l.x, y: legH / 2, z: l.z },
            explodeDir: { x: Math.sign(l.x), y: 0, z: Math.sign(l.z) },
            material: woodMat
          });
        });
        this.addPart({
          name: 'Rigletă Centrală Ranforsare',
          length: L - 160, width: T, thickness: 60,
          pos: { x: 0, y: seatH * 0.4, z: 0 },
          explodeDir: { x: 0, y: -1, z: 0 },
          material: woodMat
        });

      } else if (archetype === 'chair') {
        const seatH = Math.min(480, Math.floor(H * 0.52));
        const backH = H - seatH;
        const legT = 38;
        this.addPart({
          name: 'Șezut Scaun',
          length: L, width: W, thickness: T,
          pos: { x: 0, y: seatH - T / 2, z: 0 },
          explodeDir: { x: 0, y: 0.8, z: 0 },
          material: woodMat
        });
        const lx = (L - 70) / 2;
        const lz = (W - 70) / 2;
        // Picioare față
        this.addPart({
          name: 'Picior Față Stânga',
          length: legT, width: legT, thickness: seatH - T,
          pos: { x: -lx, y: (seatH - T) / 2, z: lz },
          explodeDir: { x: -1, y: 0, z: 1 },
          material: woodMat
        });
        this.addPart({
          name: 'Picior Față Dreapta',
          length: legT, width: legT, thickness: seatH - T,
          pos: { x: lx, y: (seatH - T) / 2, z: lz },
          explodeDir: { x: 1, y: 0, z: 1 },
          material: woodMat
        });
        // Montanți spate continui (picioare spate + spătar)
        this.addPart({
          name: 'Montant Spate Stânga',
          length: legT, width: legT, thickness: H,
          pos: { x: -lx, y: H / 2, z: -lz },
          explodeDir: { x: -1, y: 0, z: -1 },
          material: woodMat
        });
        this.addPart({
          name: 'Montant Spate Dreapta',
          length: legT, width: legT, thickness: H,
          pos: { x: lx, y: H / 2, z: -lz },
          explodeDir: { x: 1, y: 0, z: -1 },
          material: woodMat
        });
        // Lamele spătar
        const slatW = L - legT * 2;
        this.addPart({
          name: 'Lamelă Superioară Spătar',
          length: slatW, width: T, thickness: 70,
          pos: { x: 0, y: H - 45, z: -lz },
          explodeDir: { x: 0, y: 1.2, z: -1 },
          material: woodMat
        });
        this.addPart({
          name: 'Lamelă Lombară Spătar',
          length: slatW, width: T, thickness: 50,
          pos: { x: 0, y: seatH + backH * 0.45, z: -lz },
          explodeDir: { x: 0, y: 0, z: -1.2 },
          material: woodMat
        });

      } else if (archetype === 'cabinet') {
        const innerH = H - 2 * T;
        const innerW = L - 2 * T;
        this.addPart({
          name: 'Laterala Stânga Dulap',
          length: T, width: W, thickness: innerH,
          pos: { x: -(L - T) / 2, y: H / 2, z: 0 },
          explodeDir: { x: -1.3, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Laterala Dreapta Dulap',
          length: T, width: W, thickness: innerH,
          pos: { x: (L - T) / 2, y: H / 2, z: 0 },
          explodeDir: { x: 1.3, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Capac Superior (Top)',
          length: L, width: W, thickness: T,
          pos: { x: 0, y: H - T / 2, z: 0 },
          explodeDir: { x: 0, y: 1.4, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Bază Inferioară (Fund)',
          length: L, width: W, thickness: T,
          pos: { x: 0, y: T / 2, z: 0 },
          explodeDir: { x: 0, y: -1.2, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Poliță Mediană Interioară',
          length: innerW, width: W - 20, thickness: T,
          pos: { x: 0, y: H / 2, z: 0 },
          explodeDir: { x: 0, y: 0, z: 1 },
          material: woodMat
        });
        this.addPart({
          name: 'Spate PFL / HDF 3mm',
          length: L - 4, width: 4, thickness: H - 4,
          pos: { x: 0, y: H / 2, z: -(W - 4) / 2 },
          explodeDir: { x: 0, y: 0, z: -1.5 },
          material: woodMat
        });

      } else if (archetype === 'shelf') {
        const uprightW = Math.max(160, W);
        const innerL = L - 2 * T;
        this.addPart({
          name: 'Montant Vertical Stânga',
          length: T, width: uprightW, thickness: H,
          pos: { x: -(L - T) / 2, y: H / 2, z: 0 },
          explodeDir: { x: -1.3, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Montant Vertical Dreapta',
          length: T, width: uprightW, thickness: H,
          pos: { x: (L - T) / 2, y: H / 2, z: 0 },
          explodeDir: { x: 1.3, y: 0, z: 0 },
          material: woodMat
        });
        const shelves = Math.min(6, Math.max(3, Math.floor(H / 320)));
        const stepY = (H - T) / (shelves - 1);
        for (let s = 0; s < shelves; s++) {
          this.addPart({
            name: `Poliță Nivel #${s + 1}`,
            length: innerL, width: uprightW - 10, thickness: T,
            pos: { x: 0, y: T / 2 + s * stepY, z: 0 },
            explodeDir: { x: 0, y: 0, z: 1.2 },
            material: woodMat
          });
        }
        this.addPart({
          name: 'Rigletă Stabilizare Spate',
          length: innerL, width: T, thickness: 80,
          pos: { x: 0, y: H * 0.7, z: -(uprightW - T) / 2 },
          explodeDir: { x: 0, y: 0, z: -1.2 },
          material: woodMat
        });

      } else if (archetype === 'planter') {
        const slatT = Math.min(22, T);
        const postT = Math.max(45, T * 2);
        const postH = H;
        const px = (L - postT) / 2;
        const pz = (W - postT) / 2;
        [
          { name: 'Stâlp Colț Față-Stânga', x: -px, z: pz },
          { name: 'Stâlp Colț Față-Dreapta', x: px, z: pz },
          { name: 'Stâlp Colț Spate-Stânga', x: -px, z: -pz },
          { name: 'Stâlp Colț Spate-Dreapta', x: px, z: -pz }
        ].forEach(p => {
          this.addPart({
            name: p.name,
            length: postT, width: postT, thickness: postH,
            pos: { x: p.x, y: postH / 2, z: p.z },
            explodeDir: { x: Math.sign(p.x), y: 0, z: Math.sign(p.z) },
            material: woodMat
          });
        });
        const plankH = Math.min(90, Math.floor(H / 4));
        const tiers = Math.max(2, Math.floor((H - 40) / plankH));
        for (let i = 0; i < tiers; i++) {
          const cy = 20 + plankH / 2 + i * plankH;
          this.addPart({
            name: `Scândură Față Nivel ${i + 1}`,
            length: L - postT * 2, width: slatT, thickness: plankH - 4,
            pos: { x: 0, y: cy, z: pz },
            explodeDir: { x: 0, y: 0, z: 1.2 },
            material: woodMat
          });
          this.addPart({
            name: `Scândură Spate Nivel ${i + 1}`,
            length: L - postT * 2, width: slatT, thickness: plankH - 4,
            pos: { x: 0, y: cy, z: -pz },
            explodeDir: { x: 0, y: 0, z: -1.2 },
            material: woodMat
          });
          this.addPart({
            name: `Scândură Laterală Stânga ${i + 1}`,
            length: slatT, width: W - postT * 2, thickness: plankH - 4,
            pos: { x: -px, y: cy, z: 0 },
            explodeDir: { x: -1.2, y: 0, z: 0 },
            material: woodMat
          });
          this.addPart({
            name: `Scândură Laterală Dreapta ${i + 1}`,
            length: slatT, width: W - postT * 2, thickness: plankH - 4,
            pos: { x: px, y: cy, z: 0 },
            explodeDir: { x: 1.2, y: 0, z: 0 },
            material: woodMat
          });
        }
        this.addPart({
          name: 'Fund Drenat Ghiveci',
          length: L - postT * 2, width: W - postT * 2, thickness: slatT,
          pos: { x: 0, y: 35, z: 0 },
          explodeDir: { x: 0, y: -1, z: 0 },
          material: woodMat
        });

      } else if (archetype === 'birdhouse') {
        const wallT = 18;
        this.addPart({
          name: 'Perete Frontal cu Orificiu Intrare',
          length: L, width: wallT, thickness: H,
          pos: { x: 0, y: H / 2, z: (W - wallT) / 2 },
          explodeDir: { x: 0, y: 0, z: 1.5 },
          material: woodMat
        });
        this.addPart({
          name: 'Perete Spate cu Prindere Trunchi',
          length: L, width: wallT, thickness: H + 60,
          pos: { x: 0, y: (H + 60) / 2 - 20, z: -(W - wallT) / 2 },
          explodeDir: { x: 0, y: 0, z: -1.5 },
          material: woodMat
        });
        this.addPart({
          name: 'Perete Lateral Stânga',
          length: wallT, width: W - 2 * wallT, thickness: H - 30,
          pos: { x: -(L - wallT) / 2, y: (H - 30) / 2, z: 0 },
          explodeDir: { x: -1.4, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Perete Lateral Dreapta',
          length: wallT, width: W - 2 * wallT, thickness: H - 30,
          pos: { x: (L - wallT) / 2, y: (H - 30) / 2, z: 0 },
          explodeDir: { x: 1.4, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Acoperiș Înclinat Hidrofug',
          length: L + 40, width: W + 50, thickness: wallT,
          pos: { x: 0, y: H + 10, z: 10 },
          explodeDir: { x: 0, y: 1.6, z: 0.5 },
          material: woodMat
        });
        this.addPart({
          name: 'Podea Aerisită Cuib',
          length: L - 2 * wallT, width: W - 2 * wallT, thickness: wallT,
          pos: { x: 0, y: wallT / 2, z: 0 },
          explodeDir: { x: 0, y: -1.2, z: 0 },
          material: woodMat
        });

      } else if (archetype === 'tote') {
        const wallT = 16;
        const boxH = Math.min(180, Math.floor(H * 0.5));
        this.addPart({
          name: 'Perete Lateral Față',
          length: L, width: wallT, thickness: boxH,
          pos: { x: 0, y: boxH / 2, z: (W - wallT) / 2 },
          explodeDir: { x: 0, y: 0, z: 1.3 },
          material: woodMat
        });
        this.addPart({
          name: 'Perete Lateral Spate',
          length: L, width: wallT, thickness: boxH,
          pos: { x: 0, y: boxH / 2, z: -(W - wallT) / 2 },
          explodeDir: { x: 0, y: 0, z: -1.3 },
          material: woodMat
        });
        this.addPart({
          name: 'Capăt Stânga cu Orificiu Mâner',
          length: wallT, width: W, thickness: H,
          pos: { x: -(L - wallT) / 2, y: H / 2, z: 0 },
          explodeDir: { x: -1.5, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Capăt Dreapta cu Orificiu Mâner',
          length: wallT, width: W, thickness: H,
          pos: { x: (L - wallT) / 2, y: H / 2, z: 0 },
          explodeDir: { x: 1.5, y: 0, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Baston Cilindric Mâner Stejar',
          length: L - 2 * wallT, width: 26, thickness: 26,
          pos: { x: 0, y: H - 35, z: 0 },
          explodeDir: { x: 0, y: 1.5, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Fund Robust Lădiță',
          length: L - 2 * wallT, width: W - 2 * wallT, thickness: wallT,
          pos: { x: 0, y: wallT / 2, z: 0 },
          explodeDir: { x: 0, y: -1.2, z: 0 },
          material: woodMat
        });

      } else if (archetype === 'board') {
        this.addPart({
          name: 'Tocător Masiv End-Grain / Edge-Grain',
          length: L, width: W, thickness: T,
          pos: { x: 0, y: T / 2, z: 0 },
          explodeDir: { x: 0, y: 1.2, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Piciorușe Silicon Antiderapante',
          length: 24, width: 24, thickness: 8,
          pos: { x: (L - 60) / 2, y: -4, z: (W - 60) / 2 },
          explodeDir: { x: 0.5, y: -1, z: 0.5 },
          material: woodMat
        });

      } else if (archetype === 'rack') {
        this.addPart({
          name: 'Bază / Șină Montaj Perete',
          length: L, width: T, thickness: W,
          pos: { x: 0, y: W / 2, z: 0 },
          explodeDir: { x: 0, y: 0, z: -1 },
          material: woodMat
        });
        const pegs = 5;
        const stepX = (L - 100) / (pegs - 1);
        for (let p = 0; p < pegs; p++) {
          this.addPart({
            name: `Cuier / Agățătoare Fag #${p + 1}`,
            length: 22, width: 75, thickness: 22,
            pos: { x: -(L - 100) / 2 + p * stepX, y: W / 2, z: 40 },
            explodeDir: { x: 0, y: 0, z: 1.5 },
            material: woodMat
          });
        }

      } else if (archetype === 'shed') {
        const postT = 75;
        const postH = H - 250;
        const px = (L - postT) / 2;
        const pz = (W - postT) / 2;
        [
          { name: 'Stâlp Structură Față-Stânga', x: -px, z: pz },
          { name: 'Stâlp Structură Față-Dreapta', x: px, z: pz },
          { name: 'Stâlp Structură Spate-Stânga', x: -px, z: -pz },
          { name: 'Stâlp Structură Spate-Dreapta', x: px, z: -pz }
        ].forEach(st => {
          this.addPart({
            name: st.name,
            length: postT, width: postT, thickness: postH,
            pos: { x: st.x, y: postH / 2, z: st.z },
            explodeDir: { x: Math.sign(st.x), y: 0, z: Math.sign(st.z) },
            material: woodMat
          });
        });
        this.addPart({
          name: 'Platformă Podea Grinzi',
          length: L, width: W, thickness: 35,
          pos: { x: 0, y: 18, z: 0 },
          explodeDir: { x: 0, y: -1, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Căpriori & Structură Acoperiș Dublă Pantă',
          length: L + 100, width: W + 120, thickness: 30,
          pos: { x: 0, y: H - 50, z: 0 },
          explodeDir: { x: 0, y: 1.5, z: 0 },
          material: woodMat
        });
        this.addPart({
          name: 'Lambriu Perete Spate',
          length: L - postT * 2, width: 20, thickness: postH - 40,
          pos: { x: 0, y: postH / 2, z: -pz },
          explodeDir: { x: 0, y: 0, z: -1.3 },
          material: woodMat
        });

      } else {
        // Fallback robust
        this.addPart({
          name: 'Piesă Superioară Blat',
          length: L, width: W, thickness: T,
          pos: { x: 0, y: H - T / 2, z: 0 },
          explodeDir: { x: 0, y: 1.5, z: 0 },
          material: woodMat
        });
        const legT = 60;
        const legH = H - T;
        const lx = (L - 160) / 2;
        const lz = (W - 140) / 2;
        [
          { name: 'Picior 1', x: -lx, z: lz },
          { name: 'Picior 2', x: lx, z: lz },
          { name: 'Picior 3', x: -lx, z: -lz },
          { name: 'Picior 4', x: lx, z: -lz }
        ].forEach((l, idx) => {
          this.addPart({
            name: `Picior #${idx + 1}`,
            length: legT, width: legT, thickness: legH,
            pos: { x: l.x, y: legH / 2, z: l.z },
            explodeDir: { x: Math.sign(l.x), y: 0, z: Math.sign(l.z) },
            material: woodMat
          });
        });
      }
    }

    this.focusCamera();
  }

  buildCustomCabinet(config) {
    this.clearModel();
    const woodMat = this.createWoodMaterial(this.woodId);

    const W = config.width || 800;
    const H = config.height || 1200;
    const D = config.depth || 450;
    const T = config.thickness || 18;
    const innerW = W - 2 * T;
    const innerH = H - 2 * T;

    // 1. Laterale Stânga și Dreapta
    this.addPart({
      name: 'Montant Lateral Stânga',
      length: T, width: D, thickness: H,
      pos: { x: -(W - T) / 2, y: H / 2, z: 0 },
      explodeDir: { x: -1.4, y: 0, z: 0 },
      material: woodMat
    });
    this.addPart({
      name: 'Montant Lateral Dreapta',
      length: T, width: D, thickness: H,
      pos: { x: (W - T) / 2, y: H / 2, z: 0 },
      explodeDir: { x: 1.4, y: 0, z: 0 },
      material: woodMat
    });

    // 2. Capac (Top) și Fund (Bază)
    this.addPart({
      name: 'Capac Superior (Top)',
      length: innerW, width: D, thickness: T,
      pos: { x: 0, y: H - T / 2, z: 0 },
      explodeDir: { x: 0, y: 1.4, z: 0 },
      material: woodMat
    });
    this.addPart({
      name: 'Fund Corp (Bază)',
      length: innerW, width: D, thickness: T,
      pos: { x: 0, y: T / 2, z: 0 },
      explodeDir: { x: 0, y: -1.2, z: 0 },
      material: woodMat
    });

    // 3. Montanți verticali despărțitori
    const jType = config.joineryType || 'confirmat';
    const holeZ = [D / 2 - 37, -(D / 2 - 37)];

    (config.dividers || []).forEach((dv, idx) => {
      const divX = typeof dv === 'object' ? dv.x : dv;
      const y1 = (typeof dv === 'object' && dv.y1 != null) ? dv.y1 : T;
      const y2 = (typeof dv === 'object' && dv.y2 != null) ? dv.y2 : (H - T);
      const divH = Math.max(30, y2 - y1);
      const posX = -W / 2 + divX;
      const posY = (y1 + y2) / 2;

      this.addPart({
        name: `Montant Despărțitor #${idx + 1} (${D - 15}x${Math.round(divH)}mm)`,
        length: T, width: D - 15, thickness: divH,
        pos: { x: posX, y: posY, z: -5 },
        explodeDir: { x: 0, y: 0, z: -0.8 },
        material: woodMat
      });

      // Șuruburi prindere capete montant
      [y1, y2].forEach(jointY => {
        holeZ.forEach(zPos => {
          this.addFastener({
            type: jType === 'dowel' ? 'dowel' : (jType === 'minifix' ? 'minifix' : 'screw'),
            name: `${jType === 'dowel' ? 'Diblu fag' : (jType === 'minifix' ? 'Minifix' : 'Confirmat 7x50')} (Montant #${idx + 1})`,
            pos: { x: posX, y: jointY, z: zPos },
            rot: { x: Math.PI / 2 },
            explodeDir: { x: 0, y: jointY < H / 2 ? -1 : 1, z: 0 }
          });
        });
      });
    });

    // 4. Polițe orizontale
    (config.shelves || []).forEach((sh, idx) => {
      const shY = typeof sh === 'object' ? sh.y : sh;
      const x1 = (typeof sh === 'object' && sh.x1 != null) ? sh.x1 : T;
      const x2 = (typeof sh === 'object' && sh.x2 != null) ? sh.x2 : (W - T);
      const shL = Math.max(30, x2 - x1);
      const posX = -W / 2 + (x1 + x2) / 2;

      this.addPart({
        name: `Poliță Orizontală #${idx + 1} (${Math.round(shL)}x${D - 20}mm)`,
        length: shL, width: D - 20, thickness: T,
        pos: { x: posX, y: shY, z: -10 },
        explodeDir: { x: 0, y: 0, z: 1.2 },
        material: woodMat
      });

      // Șuruburi prindere laterale poliță
      [x1, x2].forEach((jointX, sideIdx) => {
        holeZ.forEach(zPos => {
          this.addFastener({
            type: jType === 'dowel' ? 'dowel' : (jType === 'minifix' ? 'minifix' : 'screw'),
            name: `${jType === 'dowel' ? 'Diblu fag' : (jType === 'minifix' ? 'Minifix' : 'Confirmat 7x50')} (Poliță #${idx + 1})`,
            pos: { x: -W / 2 + jointX, y: shY, z: zPos },
            rot: { z: Math.PI / 2 },
            explodeDir: { x: sideIdx === 0 ? -1 : 1, y: 0, z: 0 }
          });
        });
      });
    });

    // 5. Spate PFL / HDF 3mm
    if (config.hasBack !== false) {
      this.addPart({
        name: 'Spate PFL / HDF 3mm',
        length: W - 4, width: 3, thickness: H - 4,
        pos: { x: 0, y: H / 2, z: -(D - 3) / 2 },
        explodeDir: { x: 0, y: 0, z: -1.6 },
        material: this.createWoodMaterial('pin')
      });
    }

    // 6. Bare metalice pentru umerașe haine
    (config.rods || []).forEach((rd, idx) => {
      const x1 = rd.x1 != null ? rd.x1 : T;
      const x2 = rd.x2 != null ? rd.x2 : (W - T);
      const rodL = Math.max(40, (x2 - x1) - 6);
      const posX = -W / 2 + (x1 + x2) / 2;
      const posY = rd.y;

      const rodGeo = new THREE.CylinderGeometry(12, 12, rodL, 16);
      const rodMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc, metalness: 0.95, roughness: 0.15,
        clippingPlanes: this.isSectionActive ? [this.clipPlane] : []
      });
      const rodMesh = new THREE.Mesh(rodGeo, rodMat);
      rodMesh.rotation.z = Math.PI / 2;
      rodMesh.position.set(posX, posY, 0);
      this.scene.add(rodMesh);

      const rodData = {
        name: `Bară Umerașe Cromată Ø25mm (L=${Math.round(rodL)}mm)`,
        length: rodL, width: 25, thickness: 25,
        pos: { x: posX, y: posY, z: 0 },
        basePos: new THREE.Vector3(posX, posY, 0),
        mesh: rodMesh,
        explodeDir: new THREE.Vector3(0, 0, 1.4)
      };
      rodMesh.userData = rodData;
      this.parts.push(rodData);
    });

    // 7. Uși interactive montate pe pivoti de balamale
    const addDoorHelper = (doorName, dW, dH, hingeX, centerY, openDir, isHandleRight) => {
      const doorT = 18;
      const doorZ = (D + doorT) / 2 + 2;
      const pivotGroup = new THREE.Group();
      pivotGroup.position.set(hingeX, centerY, doorZ);
      this.scene.add(pivotGroup);

      const localDoorX = openDir < 0 ? (dW / 2 - 2) : (-dW / 2 + 2);
      const doorPart = this.addPart({
        name: doorName,
        length: dW - 4, width: doorT, thickness: dH,
        pos: { x: localDoorX, y: 0, z: 0 },
        explodeDir: { x: (openDir < 0 ? -0.4 : 0.4), y: 0, z: 1.8 },
        material: woodMat,
        parent: pivotGroup,
        isDoor: true,
        hingeSide: openDir < 0 ? 'left' : 'right'
      });

      // Balamale Soft-Close
      const hingeOffY = Math.min(100, dH * 0.35);
      [-hingeOffY, hingeOffY].forEach((hRelY, hIdx) => {
        this.addFastener({
          type: 'hinge',
          name: `Balama Soft-Close Ø35mm #${hIdx + 1} (${doorName})`,
          pos: { x: hingeX, y: centerY + hRelY, z: D / 2 - 12 },
          rot: { y: openDir < 0 ? 0 : Math.PI },
          explodeDir: { x: openDir < 0 ? -1.2 : 1.2, y: 0, z: 1.2 }
        });
      });

      // Mâner
      const localHandleX = isHandleRight ? (dW - 28) : (-dW + 28);
      this.addFastener({
        type: 'handle',
        name: `Mâner Bară Inox 128mm (${doorName})`,
        pos: { x: localHandleX, y: 0, z: doorT / 2 + 10 },
        rot: { x: 0, y: 0, z: 0 },
        explodeDir: { x: (openDir < 0 ? 0.3 : -0.3), y: 0, z: 2.2 },
        parent: pivotGroup
      });

      this.doorPivots.push({
        pivotGroup,
        openDir,
        doorPart,
        currentAngle: 0,
        targetAngle: 0
      });
    };

    if (config.doors && config.doors.length > 0) {
      config.doors.forEach((dr, idx) => {
        const x1 = dr.x1 != null ? dr.x1 : T;
        const x2 = dr.x2 != null ? dr.x2 : (W - T);
        const y1 = dr.y1 != null ? dr.y1 : T;
        const y2 = dr.y2 != null ? dr.y2 : (H - T);
        const dW = Math.max(40, (x2 - x1) - 4);
        const dH = Math.max(40, (y2 - y1) - 4);
        const centerY = (y1 + y2) / 2;

        if (dr.type === 'double') {
          const halfW = (dW - 2) / 2;
          addDoorHelper(`Ușă Dublă Stânga #${idx + 1}`, halfW, dH, -W / 2 + x1 + 2, centerY, -1, true);
          addDoorHelper(`Ușă Dublă Dreapta #${idx + 1}`, halfW, dH, -W / 2 + x2 - 2, centerY, 1, false);
        } else {
          const isRight = dr.type === 'single-right';
          const hX = isRight ? (-W / 2 + x2 - 2) : (-W / 2 + x1 + 2);
          addDoorHelper(`Ușă Batantă #${idx + 1}`, dW, dH, hX, centerY, isRight ? 1 : -1, !isRight);
        }
      });
    } else if (config.hasDoors) {
      const doorCount = config.doorCount || 2;
      const doorW = (W - 4) / doorCount;
      const doorH = H - 4;
      for (let i = 0; i < doorCount; i++) {
        const hingeEdgeX = i === 0 ? (-W / 2 + 2) : (W / 2 - 2);
        const openDir = i === 0 ? -1 : 1;
        addDoorHelper(`Ușă Batantă #${i + 1}`, doorW, doorH, hingeEdgeX, H / 2, openDir, i === 0);
      }
    }

    // 8. Sertare
    if (config.drawers && config.drawers.length > 0) {
      config.drawers.forEach((dw, idx) => {
        const x1 = dw.x1 != null ? dw.x1 : T;
        const x2 = dw.x2 != null ? dw.x2 : (W - T);
        const y1 = dw.y1 != null ? dw.y1 : T;
        const dwW = Math.max(40, (x2 - x1) - 6);
        const dwH = Math.max(30, dw.height || 200);
        const posX = -W / 2 + (x1 + x2) / 2;
        const posY = y1 + dwH / 2;

        // Front sertar
        this.addPart({
          name: `Front Sertar #${idx + 1} (${Math.round(dwW)}x${Math.round(dwH)}mm)`,
          length: dwW, width: 18, thickness: dwH,
          pos: { x: posX, y: posY, z: (D + 18) / 2 + 2 },
          explodeDir: { x: 0, y: 0, z: 2.2 },
          material: woodMat
        });

        // Cutie interioară sertar
        const boxMat = this.createWoodMaterial('pin');
        this.addPart({
          name: `Fund Sertar #${idx + 1}`,
          length: dwW - 20, width: D - 40, thickness: 8,
          pos: { x: posX, y: y1 + 8, z: 0 },
          explodeDir: { x: 0, y: 0, z: 1.8 },
          material: boxMat
        });
        this.addPart({
          name: `Laterală Stânga Sertar #${idx + 1}`,
          length: 12, width: D - 40, thickness: dwH - 24,
          pos: { x: posX - (dwW - 24) / 2, y: posY, z: 0 },
          explodeDir: { x: -0.6, y: 0, z: 1.8 },
          material: boxMat
        });
        this.addPart({
          name: `Laterală Dreapta Sertar #${idx + 1}`,
          length: 12, width: D - 40, thickness: dwH - 24,
          pos: { x: posX + (dwW - 24) / 2, y: posY, z: 0 },
          explodeDir: { x: 0.6, y: 0, z: 1.8 },
          material: boxMat
        });

        // Mâner sertar
        this.addFastener({
          type: 'handle',
          name: `Mâner Sertar #${idx + 1}`,
          pos: { x: posX, y: posY, z: (D + 18) / 2 + 18 },
          rot: { z: Math.PI / 2 },
          explodeDir: { x: 0, y: 0, z: 2.5 }
        });
      });
    } else if (config.hasDrawers) {
      const drawerCount = config.drawerCount || 1;
      const drawerH = Math.min(220, Math.floor(innerH / (drawerCount + 1)));
      for (let d = 0; d < drawerCount; d++) {
        const dY = T + 10 + d * (drawerH + 10);
        this.addPart({
          name: `Front Sertar #${d + 1}`,
          length: innerW - 4, width: 18, thickness: drawerH,
          pos: { x: 0, y: dY + drawerH / 2, z: (D + 18) / 2 + 2 },
          explodeDir: { x: 0, y: 0, z: 2.2 },
          material: woodMat
        });
      }
    }

    // 9. ELEMENTE DE ASAMBLARE CADRU EXTERIOR
    const yJoints = [T / 2, H - T / 2];
    [-W / 2, W / 2].forEach(xPos => {
      const expX = xPos < 0 ? -1.8 : 1.8;
      yJoints.forEach(yPos => {
        holeZ.forEach(zPos => {
          this.addFastener({
            type: jType === 'dowel' ? 'dowel' : (jType === 'minifix' ? 'minifix' : 'screw'),
            name: `${jType === 'dowel' ? 'Diblu fag 8x35' : (jType === 'minifix' ? 'Cama Minifix 15mm' : 'Confirmat 7x50mm')} (Colț)`,
            pos: { x: xPos + (xPos < 0 ? 8 : -8), y: yPos, z: zPos },
            rot: { z: Math.PI / 2 },
            explodeDir: { x: expX, y: 0, z: 0 }
          });
        });
      });
    });

    // Colțare metalice dacă sunt cerute
    if (config.hasAngleBrackets) {
      [
        { x: -innerW / 2 + 25, y: T + 20, z: 0 },
        { x: innerW / 2 - 25, y: T + 20, z: 0 },
        { x: -innerW / 2 + 25, y: H - T - 20, z: 0 },
        { x: innerW / 2 - 25, y: H - T - 20, z: 0 }
      ].forEach((cb, cIdx) => {
        this.addFastener({
          type: 'bracket',
          name: `Colțar Metalic Ranforsare 40x40 #${cIdx + 1}`,
          pos: { x: cb.x, y: cb.y, z: cb.z },
          explodeDir: { x: Math.sign(cb.x) * 0.5, y: cb.y < H / 2 ? -0.5 : 0.5, z: 0 }
        });
      });
    }

    // 10. Picioare reglabile H=100mm la bază
    if (config.hasLegs) {
      const legPositions = [
        { x: -W / 2 + 50, z: D / 2 - 50 },
        { x: W / 2 - 50, z: D / 2 - 50 },
        { x: -W / 2 + 50, z: -D / 2 + 50 },
        { x: W / 2 - 50, z: -D / 2 + 50 }
      ];
      if (W > 900) {
        legPositions.push({ x: 0, z: 0 });
      }
      legPositions.forEach((lp, lIdx) => {
        const legGeo = new THREE.CylinderGeometry(22, 26, 100, 16);
        const legMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.4 });
        const legMesh = new THREE.Mesh(legGeo, legMat);
        legMesh.position.set(lp.x, -50, lp.z);
        this.scene.add(legMesh);
        const legPart = {
          name: `Picior Reglabil H=100mm #${lIdx + 1}`,
          length: 50, width: 50, thickness: 100,
          pos: { x: lp.x, y: -50, z: lp.z },
          basePos: new THREE.Vector3(lp.x, -50, lp.z),
          mesh: legMesh,
          explodeDir: new THREE.Vector3(0, -1.2, 0)
        };
        legMesh.userData = legPart;
        this.parts.push(legPart);
      });
    }

    // 11. Benzi LED dacă există
    (config.leds || []).forEach((ld, idx) => {
      const x1 = ld.x1 != null ? ld.x1 : T;
      const x2 = ld.x2 != null ? ld.x2 : (W - T);
      const ledL = Math.max(30, x2 - x1);
      const posX = -W / 2 + (x1 + x2) / 2;
      const posY = ld.y;

      const ledGeo = new THREE.BoxGeometry(ledL, 6, 12);
      const ledMat = new THREE.MeshStandardMaterial({
        color: 0xfffaed,
        emissive: new THREE.Color(0xffe082),
        emissiveIntensity: 0.8
      });
      const ledMesh = new THREE.Mesh(ledGeo, ledMat);
      ledMesh.position.set(posX, posY, 0);
      this.scene.add(ledMesh);

      const ledPart = {
        name: `Bandă LED Frezată 12V #${idx + 1} (L=${Math.round(ledL)}mm)`,
        length: ledL, width: 12, thickness: 6,
        pos: { x: posX, y: posY, z: 0 },
        basePos: new THREE.Vector3(posX, posY, 0),
        mesh: ledMesh,
        explodeDir: new THREE.Vector3(0, 0, 1.2)
      };
      ledMesh.userData = ledPart;
      this.parts.push(ledPart);
    });

    this.focusCamera();
  }

  setExplode(factor) {
    this.explodeFactor = Math.max(0, Math.min(1, factor));
    const dist = 140 * this.explodeFactor;
    this.parts.forEach(p => {
      if (p.mesh && p.basePos && p.explodeDir) {
        p.mesh.position.copy(p.basePos).addScaledVector(p.explodeDir, dist);
      }
    });
    this.hardwareMeshes.forEach(h => {
      if (h.mesh && h.basePos && h.explodeDir) {
        h.mesh.position.copy(h.basePos).addScaledVector(h.explodeDir, dist * 1.3);
      }
    });
  }

  zoomIn(step = 0.8) {
    const offset = new THREE.Vector3().subVectors(this.camera.position, this.controls.target);
    offset.multiplyScalar(step);
    if (offset.length() > this.controls.minDistance) {
      this.camera.position.addVectors(this.controls.target, offset);
      this.controls.update();
    }
  }

  zoomOut(step = 1.25) {
    const offset = new THREE.Vector3().subVectors(this.camera.position, this.controls.target);
    offset.multiplyScalar(step);
    if (offset.length() < this.controls.maxDistance) {
      this.camera.position.addVectors(this.controls.target, offset);
      this.controls.update();
    }
  }

  focusCamera() {
    if (this.parts.length === 0) return;
    const box = new THREE.Box3();
    this.parts.forEach(p => box.expandByObject(p.mesh));
    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    this.controls.target.copy(center);
    this.camera.position.set(center.x + maxDim * 1.2, center.y + maxDim * 0.9, center.z + maxDim * 1.4);
    this.controls.update();
  }

  setupInteractions() {
    const dom = this.renderer.domElement;
    let downX = 0, downY = 0;

    dom.addEventListener('pointerdown', (e) => {
      downX = e.clientX;
      downY = e.clientY;
    });

    dom.addEventListener('pointerup', (e) => {
      // Dacă este tap/click (fără drag masiv de orbitare)
      const diffX = Math.abs(e.clientX - downX);
      const diffY = Math.abs(e.clientY - downY);
      if (diffX < 6 && diffY < 6) {
        this.onClick(e);
      }
    });
  }

  onClick(e) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const meshes = [
      ...this.parts.map(p => p.mesh),
      ...(this.showHardware ? this.hardwareMeshes.map(h => h.mesh) : [])
    ];
    const intersects = this.raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
      const hitMesh = intersects[0].object;
      this.selectPart(hitMesh.userData);
    } else {
      this.selectPart(null);
    }
  }

  selectPart(partData) {
    // Reset anterior
    if (this.selectedPart && this.selectedPart.mesh) {
      if (this.selectedPart.type) {
        // Fastener reset
        this.selectedPart.mesh.material = new THREE.MeshStandardMaterial({
          color: this.selectedPart.type === 'dowel' ? 0xc89d66 : (this.selectedPart.type === 'lock' ? 0xcca010 : 0xd4af37),
          metalness: 0.8,
          roughness: 0.3
        });
      } else {
        this.selectedPart.mesh.material = this.createWoodMaterial(this.woodId);
      }
    }

    this.selectedPart = partData;
    if (partData && partData.mesh) {
      // Highlight auriu-portocaliu luminos
      partData.mesh.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xff4500),
        roughness: 0.2,
        metalness: 0.2,
        emissive: new THREE.Color(0x551100)
      });
      if (this.options.onPartSelect) {
        this.options.onPartSelect(partData);
      }
    } else {
      if (this.options.onPartSelect) {
        this.options.onPartSelect(null);
      }
    }
  }

  toggleDoors() {
    this.doorsOpen = !this.doorsOpen;
    const targetAngle = this.doorsOpen ? Math.PI * 0.58 : 0; // ~105 grade deschidere
    this.doorPivots.forEach(dp => {
      dp.targetAngle = dp.openDir * targetAngle;
    });
    return this.doorsOpen;
  }

  toggleSection() {
    this.isSectionActive = !this.isSectionActive;
    if (this.parts.length > 0) {
      const box = new THREE.Box3();
      this.parts.forEach(p => box.expandByObject(p.mesh));
      const center = new THREE.Vector3();
      box.getCenter(center);
      // Plane taie la centrul Z sau puțin în față
      this.clipPlane.constant = this.isSectionActive ? center.z : 50000;
    }
    const planes = this.isSectionActive ? [this.clipPlane] : [];
    this.parts.forEach(p => {
      if (p.mesh && p.mesh.material) {
        p.mesh.material.clippingPlanes = planes;
      }
    });
    this.hardwareMeshes.forEach(h => {
      if (h.mesh && h.mesh.material) {
        h.mesh.material.clippingPlanes = planes;
      }
    });
    return this.isSectionActive;
  }

  setSectionDepth(factor) {
    if (!this.isSectionActive || this.parts.length === 0) return;
    const box = new THREE.Box3();
    this.parts.forEach(p => box.expandByObject(p.mesh));
    const minZ = box.min.z;
    const maxZ = box.max.z;
    this.clipPlane.constant = minZ + (maxZ - minZ) * factor;
  }

  toggleTransparency() {
    this.isTransparent = !this.isTransparent;
    const op = this.isTransparent ? 0.35 : 1.0;
    this.parts.forEach(p => {
      if (p.mesh && p.mesh.material) {
        p.mesh.material.transparent = this.isTransparent;
        p.mesh.material.opacity = op;
        p.mesh.material.needsUpdate = true;
      }
    });
    return this.isTransparent;
  }

  hideSelectedPart() {
    if (!this.selectedPart || !this.selectedPart.mesh) return null;
    const name = this.selectedPart.name;
    this.selectedPart.mesh.visible = false;
    this.hiddenParts.add(this.selectedPart);
    this.selectPart(null);
    return name;
  }

  unhideAllParts() {
    this.hiddenParts.forEach(p => {
      if (p.mesh) p.mesh.visible = true;
    });
    this.hiddenParts.clear();
  }

  pullSelectedPart(offsetDistance = 120) {
    if (!this.selectedPart || !this.selectedPart.mesh) return false;
    const p = this.selectedPart;
    if (!p.pullOffset) p.pullOffset = new THREE.Vector3();
    if (p.pullOffset.length() > 0) {
      // Returnează înapoi
      p.mesh.position.sub(p.pullOffset);
      p.pullOffset.set(0, 0, 0);
      return false;
    } else {
      // Trage înainte pe direcția camerei sau a normalei Z
      const pullVec = (p.explodeDir && p.explodeDir.length() > 0)
        ? p.explodeDir.clone().multiplyScalar(offsetDistance)
        : new THREE.Vector3(0, 0, offsetDistance);
      p.mesh.position.add(pullVec);
      p.pullOffset.copy(pullVec);
      return true;
    }
  }

  exportSTL(binary = false) {
    const exporter = new STLExporter();
    const group = new THREE.Group();
    // Clona pieselor în poziție ne-explodată pentru export curat
    this.parts.forEach(p => {
      const clone = p.mesh.clone();
      clone.position.copy(p.basePos);
      group.add(clone);
    });
    const result = exporter.parse(group, { binary });
    return result;
  }

  getSnapshotURL() {
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL('image/png');
  }

  onResize() {
    if (!this.container) return;
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    if (this.width && this.height) {
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    }
  }

  animate() {
    this.animId = requestAnimationFrame(this.animate);
    // Smooth door opening interpolation
    this.doorPivots.forEach(dp => {
      if (Math.abs(dp.pivotGroup.rotation.y - dp.targetAngle) > 0.005) {
        dp.pivotGroup.rotation.y += (dp.targetAngle - dp.pivotGroup.rotation.y) * 0.12;
      }
    });
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.renderer.dispose();
    if (this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
