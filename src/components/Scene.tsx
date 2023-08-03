'use client'
import React, { useState, useEffect } from "react";
import { Preload } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const Cube = dynamic(() => import("./Cube"));

const Scene = () => {
    const [fov, setFov] = useState<number>(10);

    // Update the FOV when the window is resized
    useEffect(() => {
        const AR = globalThis.innerWidth / globalThis.innerHeight;

        if (AR < 0.7) {
            setFov(18);
            console.log(true);
        }
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div className="w-screen h-screen flex items-center justify-center fixed">
            <Canvas camera={{ position: [0, 8, 90], fov }}>
                <ambientLight intensity={1.0} />
                <Cube />
                <Preload all />
            </Canvas>
            {/* {fov} */}
        </div>
    );
};

export default Scene;
