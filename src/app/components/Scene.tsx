'use client'

import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';

import Cube from './Cube';

const Scene = () => {

    return (
        <div className="w-screen h-screen flex items-center justify-center fixed">
            <Canvas gl={{ antialias: false }} camera={{ position: [0, 5, 15], fov: 75 }} shadows>
                <color attach="background" args={['#0E0E15']} />
                <Cube />

                <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr" resolution={512}>
                    <group rotation={[0, 0, 1]}>
                        <Lightformer form="circle" intensity={10} position={[0, 10, -10]} scale={1} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                        <Lightformer intensity={0.1} position={[-5, 3, -1]} rotation-y={Math.PI / 2} scale={[50, 10, 1]} />
                        <Lightformer intensity={0.1} position={[10, 3, 0]} rotation-y={-Math.PI / 2} scale={[50, 10, 1]} />
                        <Lightformer intensity={0.1} position={[-10, 3, 0]} scale={[20, 10, 1]} />
                        <Lightformer color="white" intensity={0.2} position={[0, 3, 0]} scale={[10, 100, 1]} />
                    </group>
                </Environment>
            </Canvas>
        </div >
    )
}

export default Scene;