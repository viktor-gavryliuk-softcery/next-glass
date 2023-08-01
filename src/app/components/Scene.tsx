'use client'

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Cube from "./Cube";

const Scene = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center fixed">
            <Canvas camera={{ position: [0, 0, 16] }} dpr={[1, 2]}>
                <ambientLight intensity={1.0} />
                <Cube />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Scene;
