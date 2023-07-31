
'use client';
import { RoundedBox, useFBO } from "@react-three/drei";
import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { v4 as uuidv4 } from "uuid";

import { Front, Right, Back, Left } from './Faces';

import vertexShader from '@/app/shaders/vertexShader'
import fragmentShader from '@/app/shaders/fragmentShader'

export const Cube = () => {
    // This reference gives us direct access to our mesh
    const mesh = useRef<any>(null);
    const group = useRef<any>(null);
    const scrollPosition = useRef<number>(0);
    const backgroundGroup = useRef<any>(null);

    // This is our main render target where we'll render and store the scene as a texture
    const mainRenderTarget = useFBO();
    const backRenderTarget = useFBO();

    const handleScroll = () => {
        scrollPosition.current = window.scrollY / (6 * window.innerHeight);
    };

    useEffect(() => {
        globalThis.addEventListener('scroll', handleScroll);

        return () => {
            globalThis.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const {
        shininess, diffuseness, fresnelPower, iorR, iorY, iorG, iorC, iorB, iorP, saturation, chromaticAberration, refraction
    } = {
        shininess: 15,
        diffuseness: 0.2,
        fresnelPower: 8,
        iorR: 1,
        iorY: 2.14,
        iorG: 2.27,
        iorC: 1.22,
        iorB: 1.22,
        iorP: 1,
        saturation: 1.14,
        chromaticAberration: 0.5,
        refraction: 0.25
    };
    /*  = useControls({
        diffuseness: {
            value: 0.2
        },
        shininess: {
            value: 15.0
        },
        fresnelPower: {
            value: 8.0
        },
        ior: folder({
            iorR: { min: 1.0, max: 2.333, step: 0.001, value: 1.15 },
            iorY: { min: 1.0, max: 2.333, step: 0.001, value: 1.16 },
            iorG: { min: 1.0, max: 2.333, step: 0.001, value: 1.18 },
            iorC: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
            iorB: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
            iorP: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 }
        }),
        saturation: { value: 1.14, min: 1, max: 1.25, step: 0.01 },
        chromaticAberration: {
            value: 0.5,
            min: 0,
            max: 1.5,
            step: 0.01
        },
        refraction: {
            value: 0.25,
            min: 0,
            max: 1,
            step: 0.01
        }
    }); */
    const uniforms = useMemo(
        () => ({
            uTexture: {
                value: null
            },
            uIorR: { value: 1 },
            uIorY: { value: 1 },
            uIorG: { value: 1 },
            uIorC: { value: 1 },
            uIorB: { value: 1 },
            uIorP: { value: 1 },
            uRefractPower: {
                value: 0.2
            },
            uChromaticAberration: {
                value: 1
            },
            uSaturation: { value: 0 },
            uShininess: { value: 40 },
            uDiffuseness: { value: 0.2 },
            uFresnelPower: { value: 8 },
            uLight: {
                value: new THREE.Vector3(-1, 1, 1)
            },
            winResolution: {
                value: new THREE.Vector2(
                    window.innerWidth,
                    window.innerHeight
                ).multiplyScalar(Math.min(window.devicePixelRatio, 2)) // if DPR is 3 the shader glitches 🤷‍♂️
            }
        }),
        []
    );

    useFrame((state) => {

        const { gl, scene, camera, clock } = state;

        group.current.rotation.y = -((scrollPosition.current * Math.PI) * 2) + 10;

        const t = clock.getElapsedTime()

        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.01)

        mesh.current.visible = false;

        mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
        mesh.current.material.uniforms.uShininess.value = shininess;

        mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;

        mesh.current.material.uniforms.uIorR.value = iorR;
        mesh.current.material.uniforms.uIorY.value = iorY;
        mesh.current.material.uniforms.uIorG.value = iorG;
        mesh.current.material.uniforms.uIorC.value = iorC;
        mesh.current.material.uniforms.uIorB.value = iorB;
        mesh.current.material.uniforms.uIorP.value = iorP;

        mesh.current.material.uniforms.uSaturation.value = saturation;
        mesh.current.material.uniforms.uChromaticAberration.value = chromaticAberration;
        mesh.current.material.uniforms.uRefractPower.value = refraction;

        gl.setRenderTarget(backRenderTarget);
        gl.render(scene, camera);

        mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
        mesh.current.material.side = THREE.BackSide;

        mesh.current.visible = true;

        gl.setRenderTarget(mainRenderTarget);
        gl.render(scene, camera);

        mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
        mesh.current.material.side = THREE.FrontSide;

        gl.setRenderTarget(null);
    });

    return (
        <group ref={group} >
            <color attach="background" args={["black"]} />
            <group ref={backgroundGroup} visible={false}>
                <mesh position={[-4, -3, -4]}>
                    <icosahedronGeometry args={[2, 16]} />
                    <meshBasicMaterial color="white" />
                </mesh>
                <mesh position={[4, -3, -4]}>
                    <icosahedronGeometry args={[2, 16]} />
                    <meshBasicMaterial color="white" />
                </mesh>
                <mesh position={[-5, 3, -4]}>
                    <icosahedronGeometry args={[2, 16]} />
                    <meshBasicMaterial color="white" />
                </mesh>
                <mesh position={[5, 3, -4]}>
                    <icosahedronGeometry args={[2, 16]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            </group>
            <RoundedBox ref={mesh} args={[10, 10, 10]} radius={0.1}>
                <shaderMaterial
                    key={uuidv4()}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms} />
            </RoundedBox>
            <Front />
            <Right />
            <Back />
            <Left />
        </group>
    );
};

export default Cube;
