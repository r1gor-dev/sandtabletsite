import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const Model = () => {
  const { scene } = useGLTF('/stone/stone.gltf');
  return <primitive object={scene} scale={10} />;
};

const ModelPage = () => (
  <div style={{ height: '100vh', background: '#f5f5f5' }}>
    <h2 className="text-center pt-4">3D Модель</h2>
    <div style={{
      width: '80%',
      height: '80%',
      margin: '0 auto',
      border: '2px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  </div>
);

export default ModelPage;
