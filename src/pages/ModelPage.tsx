import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';

const OrangeRectangle = ({ rotation }: { rotation: [number, number, number] }) => {
  return (
    <mesh rotation={rotation}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const ModelPage = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [isInteractive, setIsInteractive] = useState(true); // Состояние для управления интерактивностью
  const [isHovered, setIsHovered] = useState(false); // Состояние для управления наведением

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isInteractive) return; // Если интерактивность включена, отключаем управление вращением через мышь

    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Вычисляем координаты курсора относительно центра области
    const x = ((clientX - left) / width - 0.5) * Math.PI;
    const y = ((clientY - top) / height - 0.5) * Math.PI;

    // Устанавливаем вращение модели
    setRotation([-y, x, 0]);
  };

  const handleAreaClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Центрируем объект с курсором при каждом нажатии
    const x = ((clientX - left) / width - 0.5) * Math.PI;
    const y = ((clientY - top) / height - 0.5) * Math.PI;
    setRotation([-y, x, 0]);

    // Переключаем состояние интерактивности
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
      {/* Левая часть с текстом */}
      <div style={{ flex: 1, marginRight: '5%' }}>
        <h2 className="text-start mb-3">3D Прямоугольник</h2>
        <h4 className="text-start mb-4 text-muted">Интерактивная демонстрация</h4>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>
          Добро пожаловать в демонстрацию 3D-прямоугольника. Вы можете взаимодействовать с моделью, перемещая мышь
          внутри рамки справа. Нажмите на область модели, чтобы включить или отключить интерактивный просмотр.
        </p>
      </div>

      {/* Правая часть с рамкой */}
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
        {/* Текст "Нажми для взаимодействия" */}
        {isInteractive && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: isHovered ? '#000' : '#888',
              fontSize: '3rem', // Увеличен размер текста
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Добавлена обводка
              transition: 'color 0.3s ease',
              pointerEvents: 'none', // Чтобы текст не мешал клику
              zIndex: 10, // Текст поверх Canvas
              textAlign: 'center',
            }}
          >
            Нажмите для взаимодействия
          </div>
        )}
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} />
          <Suspense fallback={null}>
            <OrangeRectangle rotation={rotation} />
          </Suspense>
          {isInteractive && <OrbitControls enableZoom={true} enablePan={false} />}
        </Canvas>
      </div>
    </div>
  );
};

export default ModelPage;