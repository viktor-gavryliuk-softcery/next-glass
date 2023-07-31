
'use client'
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Front, Right, Back, Left } from './Faces';
import { Box } from '@react-three/drei';

// import * as THREE from 'three';

const Cube = () => {
    const group = useRef<any>(null);
    const scrollPosition = useRef<number>(0);

    const handleScroll = () => {
        scrollPosition.current = window.scrollY / (4 * window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useFrame((state) => {
        group.current.rotation.y = -((scrollPosition.current * Math.PI) * 2) + 10;

        // const t = state.clock.getElapsedTime()
        // group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)
        // group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.01)
    });


    return (
        <group ref={group}>

            <Box args={[10, 10, 10]}>
                {/* <boxGeometry /> */}
                <meshPhysicalMaterial transmission={1} thickness={2} roughness={0.2} transparent={true} alphaTest={0.5} depthWrite={false} />
                {/* <meshPhongMaterial color={0x333333} /> */}
            </Box>

            <Front />
            <Right />D
            <Back />
            <Left />
        </group>
    )
}

export default Cube;