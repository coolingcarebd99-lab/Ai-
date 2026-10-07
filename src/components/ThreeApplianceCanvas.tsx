import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Eye, Rotate3d, Layers } from 'lucide-react';

export const ThreeApplianceCanvas: React.FC = () => {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [coolantFlowActive, setCoolantFlowActive] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  // References to communicate state into the animation loop
  const wireframeRef = useRef(wireframeMode);
  wireframeRef.current = wireframeMode;

  const coolantRef = useRef(coolantFlowActive);
  coolantRef.current = coolantFlowActive;

  const speedRef = useRef(rotationSpeed);
  speedRef.current = rotationSpeed;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.05);

    // CAMERA
    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.5);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0e7490, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 3.5);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const pointLightBlue = new THREE.PointLight(0x00f2fe, 5, 12);
    pointLightBlue.position.set(-2, 1, 2);
    scene.add(pointLightBlue);

    const pointLightNeon = new THREE.PointLight(0x3b82f6, 4, 10);
    pointLightNeon.position.set(2, -1, 1);
    scene.add(pointLightNeon);

    // ROOT 3D GROUP
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. CHASSIS / ENCLOSURE (Split AC / Cooling Unit Body)
    const chassisGeo = new THREE.BoxGeometry(3.6, 1.2, 1.1);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.25,
      metalness: 0.85,
    });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    mainGroup.add(chassis);

    // 2. INNER COOLING COIL CHAMBER (Front cutout grid)
    const ventGeo = new THREE.BoxGeometry(3.2, 0.25, 0.1);
    const ventMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const vent = new THREE.Mesh(ventGeo, ventMat);
    vent.position.set(0, -0.35, 0.56);
    mainGroup.add(vent);

    // 3. EVAPORATOR COPPER TUBES & FINS
    const copperTubes: THREE.Mesh[] = [];
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
    });
    for (let i = 0; i < 4; i++) {
      const tubeGeo = new THREE.CylinderGeometry(0.045, 0.045, 3.0, 16);
      const tube = new THREE.Mesh(tubeGeo, copperMat);
      tube.rotation.z = Math.PI / 2;
      tube.position.set(0, 0.15 - i * 0.12, 0.35);
      mainGroup.add(tube);
      copperTubes.push(tube);
    }

    // 4. CROSS-FLOW BLOWER FAN CYLINDER
    const fanGroup = new THREE.Group();
    fanGroup.position.set(0, -0.05, 0);
    mainGroup.add(fanGroup);

    const blowerShaftGeo = new THREE.CylinderGeometry(0.2, 0.2, 2.8, 16);
    const blowerShaftMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      metalness: 0.7,
      roughness: 0.3,
    });
    const blowerShaft = new THREE.Mesh(blowerShaftGeo, blowerShaftMat);
    blowerShaft.rotation.z = Math.PI / 2;
    fanGroup.add(blowerShaft);

    // 12 Blower Blades
    const bladeGeo = new THREE.BoxGeometry(0.02, 0.18, 2.7);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      metalness: 0.5,
    });
    for (let b = 0; b < 12; b++) {
      const angle = (b / 12) * Math.PI * 2;
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.rotation.x = angle;
      blade.position.set(0, Math.sin(angle) * 0.26, Math.cos(angle) * 0.26);
      fanGroup.add(blade);
    }

    // 5. INVERTER CIRCUIT LOGIC BOARD (Glowing Green/Blue Matrix)
    const pcbGeo = new THREE.BoxGeometry(0.8, 0.9, 0.04);
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      emissive: 0x10b981,
      emissiveIntensity: 0.5,
      roughness: 0.4,
      metalness: 0.8,
    });
    const pcb = new THREE.Mesh(pcbGeo, pcbMat);
    pcb.position.set(1.3, 0.05, 0.3);
    mainGroup.add(pcb);

    // 6. ROTARY COMPRESSOR CYLINDER (Integrated Subsystem on left)
    const compGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.9, 32);
    const compMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
      metalness: 0.95,
    });
    const comp = new THREE.Mesh(compGeo, compMat);
    comp.position.set(-1.3, -0.05, 0.2);
    mainGroup.add(comp);

    // 7. GLOWING PARTICLE COOLANT VAPOR SYSTEM
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      particlePos[p * 3] = (Math.random() - 0.5) * 4;
      particlePos[p * 3 + 1] = (Math.random() - 0.5) * 2;
      particlePos[p * 3 + 2] = (Math.random() - 0.5) * 3 + 0.8;
      particleSpeeds[p] = 0.01 + Math.random() * 0.025;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // MOUSE PARALLAX TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.45;
      mouseY = y * 0.35;
    };

    mount.addEventListener('mousemove', onMouseMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      // Base floating animation
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      mainGroup.rotation.y = targetX + Math.sin(elapsedTime * 0.4) * 0.15;
      mainGroup.rotation.x = -targetY + 0.08;

      // Spin cross-flow blower fan
      fanGroup.rotation.x += 0.08 * speedRef.current;

      // Update wireframe state on all meshes
      chassisMat.wireframe = wireframeRef.current;
      compMat.wireframe = wireframeRef.current;
      pcbMat.wireframe = wireframeRef.current;

      // Update coolant vapor particles
      if (coolantRef.current) {
        particles.visible = true;
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] -= particleSpeeds[i];
          positions[i * 3 + 2] += particleSpeeds[i] * 0.8;
          // reset if escaped viewport
          if (positions[i * 3 + 1] < -1.8 || positions[i * 3 + 2] > 3.5) {
            positions[i * 3 + 1] = 0.5 + Math.random() * 0.4;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8 + 0.5;
            positions[i * 3] = (Math.random() - 0.5) * 3.2;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      } else {
        particles.visible = false;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('mousemove', onMouseMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 border border-cyan-900/40 shadow-2xl shadow-cyan-950/40 overflow-hidden group">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top overlay badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-800/60 text-xs text-cyan-300">
        <Rotate3d className="w-4 h-4 text-cyan-400 animate-spin-slow" />
        <span className="font-bold tracking-wide">
          {t('Interactive 3D Equipment Simulator', 'ইন্টারেক্টিভ থ্রিডি ইকুইপমেন্ট সিমুলেটর')}
        </span>
      </div>

      {/* Mouse interaction hint */}
      <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>{t('Move mouse to rotate 3D view', 'মাউস নাড়িয়ে থ্রিডি ভিউ দেখুন')}</span>
      </div>

      {/* 3D Controls HUD Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          {/* Wireframe / X-Ray Toggle */}
          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
              wireframeMode
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('X-Ray Wireframe', 'এক্স-রে ওয়্যারফ্রেম')}</span>
          </button>

          {/* Coolant Vapor Particle Flow Toggle */}
          <button
            onClick={() => setCoolantFlowActive(!coolantFlowActive)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
              coolantFlowActive
                ? 'bg-cyan-950/80 text-cyan-300 border-cyan-600 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Coolant Vapor Flow', 'কুল্যান্ট বাষ্প প্রবাহ')}</span>
          </button>
        </div>

        {/* Speed Controller */}
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span>{t('Fan RPM:', 'ফ্যান গতি:')}</span>
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setRotationSpeed(s)}
              className={`px-2 py-0.5 rounded-md border text-[10px] font-bold ${
                rotationSpeed === s
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
