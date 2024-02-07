'use client';
import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Cube = dynamic(() => import('./Cube'));

const Scene = () => {
  const [fov, setFov] = useState<number>(10);

  const [dpr, setDpr] = useState(1.5);

  // Update the FOV when the window is resized
  useEffect(() => {
    const AR = globalThis.innerWidth / globalThis.innerHeight;

    if (AR < 0.7) {
      setFov(18);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='w-screen h-screen flex items-center justify-center fixed'>
      <Canvas
        camera={{ position: [0, 6, 90], fov }}
        dpr={dpr}>
        {/*<PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} >*/}
        <ambientLight
          intensity={3}
          position={[0, -10, 90]}
        />
        <directionalLight
          intensity={0.7}
          position={[0, -10, 90]}
        />
        <Cube />
        <Preload all />
        {/*</PerformanceMonitor>*/}
      </Canvas>
      {/* {fov} */}
    </div>
  );
};

export default Scene;
