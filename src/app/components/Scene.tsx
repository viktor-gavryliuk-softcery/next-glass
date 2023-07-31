'use client'

import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, BrightnessContrast, HueSaturation } from '@react-three/postprocessing'

import { Stats, ContactShadows, OrbitControls, AccumulativeShadows, RandomizedLight, Environment, Lightformer } from '@react-three/drei';

import { TextureLoader } from 'three';

import Cube from './Cube';

const Scene = () => {
    const texture = new TextureLoader().load('/texture.jpg');


    return (
        <div className="w-screen h-screen flex items-center justify-center fixed">
            <Canvas gl={{ antialias: false }} camera={{ position: [0, 5, 15], fov: 75 }} dpr={window.devicePixelRatio} shadows>
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
                {/* <OrbitControls /> */}



                {/* <directionalLight position={[0, 0, 0]} color={0xffffff} intensity={1} /> */}
                {/* <directionalLight position={[20, 20, 20]} intensity={1.5} color={0xffffff} /> */}

                {/* <directionalLight
                    intensity={1}
                    color={0xfff0dd}
                    position={[0, -2, 2]}
    /> */}

                {/* <ambientLight intensity={0.5} /> */}
                {/* <pointLight position={[10, 10, 5]} /> */}
                {/* <pointLight position={[-10, -10, -10]} /> */}

                {/* <OrbitControls makeDefault /> */}


                {/* <Stats /> */}
                {/* <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} /> */}

            </Canvas>
        </div >
    )
}

export default Scene;