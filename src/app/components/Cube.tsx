
'use client'
import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Front, Right, Back, Left } from './Faces';
import { Box, Environment } from '@react-three/drei';
import { RGBELoader } from 'three-stdlib'
import { MeshTransmissionMaterial } from '@react-three/drei';

import * as THREE from 'three';

const Cube = () => {
    const group = useRef<any>(null);
    const scrollPosition = useRef<number>(0);

    const hdri = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr')


    const handleScroll = () => {
        scrollPosition.current = window.scrollY / (6 * window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useFrame((state) => {
        group.current.rotation.y = -((scrollPosition.current * Math.PI) * 2) + 10;

        const t = state.clock.getElapsedTime()
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.01)
    });


    return (
        <group ref={group}>
            {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" /> */}
            {/* 
            <Box args={[10, 10, 10]}>
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={1}
                    samples={116}
                    thickness={5}
                    anisotropicBlur={0.1}
                    iridescence={0}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 1400]}
                    clearcoat={1}
                    envMapIntensity={1} distortionScale={0} temporalDistortion={0.2} />
            </Box> */}
            {/*   <Box castShadow args={[10, 10, 10]}>
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={10}
                    samples={1}
                    thickness={10}
                    chromaticAberration={0.0025}
                    anisotropy={0.01}
                    distortion={0.2}
                    distortionScale={0.2}
                    temporalDistortion={0.1}
                    iridescence={0}
                    envMapIntensity={0.5}
                    // clearcoat={1}
                    iridescenceIOR={100}
                    iridescenceThicknessRange={[10, 1800]}
                />
            </Box>
 */}

            <Box castShadow args={[10, 10, 10]}>
                <MeshTransmissionMaterial
                    transmission={0.6}
                    color={0x0e0E1f}
                    resolution={1024}
                    roughness={4}
                    ior={2}
                    chromaticAberration={0.6}
                    distortion={0.2}
                    reflectivity={0}
                    backside
                    backsideThickness={40}
                    samples={16}
                    thickness={60}
                    anisotropicBlur={0.1}
                    iridescence={1}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 1400]}
                    clearcoat={1}
                    envMapIntensity={0.4}
                    distortionScale={0.3}
                    temporalDistortion={0.2} />
            </Box>
            <Front />
            <Right />D
            < Back />
            <Left />
        </group >
    )
}

export default Cube;