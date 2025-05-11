import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useState } from 'react';
import React from 'react';

const CustomModel = ({ rotation }: { rotation: [number, number, number] }) => {
  // Загружаем модель
  const { scene } = useGLTF('/stone/tabletee.glb'); // Укажите путь к вашей модели

  return <primitive object={scene} rotation={rotation} scale={[1,1,1]} position={[0, 0, 0]}/>;
};

const ModelPage = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [isInteractive, setIsInteractive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isInteractive) return;

    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * Math.PI;
    const y = ((clientY - top) / height - 0.5) * Math.PI;

    setRotation([-y, x, 0]);
  };

  const handleAreaClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * Math.PI;
    const y = ((clientY - top) / height - 0.5) * Math.PI;
    setRotation([-y, x, 0]);

    setIsInteractive((prev) => !prev);
  };

  return (
    <div
      style={{
        height: '80vh',
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
      }}
    >
      <div style={{ flex: 1, marginRight: '5%' }}>
        <h2 className="text-start mb-3">3D Модель</h2>
        <h4 className="text-start mb-4 text-muted">Интерактивная демонстрация</h4>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>
          Добро пожаловать в демонстрацию 3D-модели. Вы можете взаимодействовать с моделью, перемещая мышь
          внутри рамки справа. Нажмите на область модели, чтобы включить или отключить интерактивный просмотр.
        </p>
      </div>

      <div
        style={{
          flex: 1.5,
          height: '70%',
          border: '2px solid #ccc',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
        }}
        onMouseMove={handleMouseMove}
        onClick={handleAreaClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isInteractive && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: isHovered ? '#000' : '#888',
              fontSize: '2rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              transition: 'color 0.3s ease',
              pointerEvents: 'none',
              zIndex: 10,
              textAlign: 'center',
            }}
          >
            Нажми для взаимодействия
          </div>
        )}
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#808080' }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} />
          <Suspense fallback={null}>
            <CustomModel rotation={rotation} />
          </Suspense>
          {isInteractive && <OrbitControls enableZoom={true} enablePan={false} />}
        </Canvas>
      </div>
    </div>
  );
};

export default ModelPage;