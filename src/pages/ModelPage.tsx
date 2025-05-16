import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useState } from 'react';
import React from 'react';
import { useEffect, useRef } from 'react';

const CustomModel = ({ rotation }: { rotation: [number, number, number] }) => {
  // Загружаем модель
  const { scene } = useGLTF('/stone/tabletnine.glb'); // Укажите путь к вашей модели

  return <primitive object={scene} rotation={rotation} scale={[1,1,1]} position={[0, -0.4, 0]}/>;
};

const useScrollFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const visible = rect.top < windowHeight && rect.bottom > 0;
      node.style.transition = 'opacity 0.8s, transform 0.8s';
      if (visible) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
      } else {
        node.style.opacity = '0';
        node.style.transform = 'translateY(40px)';
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
};

const ModelPage = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [isInteractive, setIsInteractive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const fadeRef = useScrollFadeIn();

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
        minHeight: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={fadeRef}
        style={{
          flex: 1,
          marginLeft: '100px',
          opacity: 0,
          transform: 'translateY(40px)',
        }}
      >
        <h2 className="text-start mb-3" style={{ color: 'purple', fontSize: '65px' }}>3D Модель</h2>
        <h4 className="text-start mb-4" text-muted style={{fontSize: '30px', color:"#808080"}}>Интерактивная демонстрация</h4>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>
          Добро пожаловать в демонстрацию 3D-модели. Вы можете взаимодействовать с моделью, перемещая мышь
          внутри рамки справа. Нажмите на область модели, чтобы включить или отключить интерактивный просмотр.
        </p>
      </div>

      <div
        style={{
          flex: 1.5,
          height: '60vh',
          background: '#fff',
          border: '4px solid #3d1991',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
          marginRight: '100px',
          boxShadow: '0 2px 16px rgba(44,92,143,0.08)',
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
            Нажмите для взаимодействия
          </div>
        )}
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#2c5c8f' }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} />
          <Suspense fallback={null}>
            <CustomModel rotation={rotation} />
          </Suspense>
          {<OrbitControls enableZoom={!isInteractive} enablePan={false} />}
        </Canvas>
      </div>
    </div>
  );
};

export default ModelPage;