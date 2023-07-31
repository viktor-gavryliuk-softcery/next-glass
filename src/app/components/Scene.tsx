'use client'

import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei/core';

import { Stats } from '@react-three/drei';

import { TextureLoader } from 'three';

import Cube from './Cube';

const Scene = () => {

    const texture = new TextureLoader().load('/texture.jpg');

    return (
        <div className="w-screen h-screen flex items-center justify-center fixed">
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }} frameloop="always" color='0x171717'>

                <mesh position={[0, 0, -15]}>
                    <planeGeometry args={[12, 10]} />
                    {/* <meshPhongMaterial color={0x333333} /> */}
                    <meshBasicMaterial map={texture} />
                </mesh>

                <Cube />

                <ambientLight intensity={1} />

                {/* <directionalLight position={[0, 0, 0]} color={0xffffff} intensity={1} /> */}
                {/* <directionalLight position={[20, 20, 20]} intensity={1.5} color={0xffffff} /> */}
                <directionalLight
                    intensity={1}
                    color={0xfff0dd}
                    position={[0, -2, 2]}
                />

                {/* <ContactShadows position={[0, -1.2, 0]} blur={50} far={15} /> */}
                <OrbitControls />
                <Stats />
            </Canvas>
        </div >
    )
}

export default Scene;