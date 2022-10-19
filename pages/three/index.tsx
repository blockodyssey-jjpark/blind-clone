import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Threejs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ------------
  const width = 1000;
  const height = 600;

  // ------------
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });

      // ------------
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
      camera.position.set(50, 50, 100);

      const controls = new OrbitControls(camera, renderer.domElement);
      // https://dev-t-blog.tistory.com/m/22
      // https://threejs.org/docs/index.html?q=OrbitControls#examples/en/controls/OrbitControls
      controls.rotateSpeed = 1.0; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
      controls.zoomSpeed = 1.2; // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.
      controls.panSpeed = 0.8; // 패닝 속도 입니다. 기본값(Float)은 1입니다.
      controls.minDistance = 5; // 마우스 휠로 카메라 거리 조작시 최소 값. 기본값(Float)은 0 입니다.
      controls.maxDistance = 100; // 마우스 휠로 카메라 거리 조작시 최대 값. 기본값(Float)은 무제한 입니다.
      controls.update();

      // ------------
      const geometry = new THREE.BoxGeometry(10, 10, 10);
      const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      // ------------
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      // ------------
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 30, 30);
      light.castShadow = true; // default false
      scene.add(light);

      //   const helper = new THREE.CameraHelper(light.shadow.camera);
      //   scene.add(helper);

      const light2 = new THREE.DirectionalLight(0xffffff, 1);
      light2.position.set(10, -20, -20);
      light2.castShadow = true; // default false
      scene.add(light2);

      //   const helper2 = new THREE.CameraHelper(light2.shadow.camera);
      //   scene.add(helper2);

      // ------------

      scene.add(cube);
      renderer.render(scene, camera);
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas" width={width} height={height} />;
};

export default Threejs;
