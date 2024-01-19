import {Canvas, useFrame} from "@react-three/fiber";
import {Preload, CameraControls, useFBO} from "@react-three/drei";
import { MTLLoader, OBJLoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import {useMemo, useRef} from "react";
import * as THREE from "three";

const PartnersHero = () => {
    const mesh = useRef<any>(null);


    // Load the MTL file to get materials
    // const materials = useLoader(MTLLoader, "/materials.mtl");

    // Load the associated OBJ file to get geometry
    const object = useLoader(OBJLoader, "/model.obj");

    // This is our main render target where we'll render and store the scene as a texture
    const mainRenderTarget = useFBO();
    const backRenderTarget = useFBO();

    const {
        shininess, diffuseness, fresnelPower, iorR, iorY, iorG, iorC, iorB, iorP, saturation, chromaticAberration, refraction
    } = {
        shininess: 20,
        diffuseness: 0.2,
        fresnelPower: 20,
        iorR: 1,
        iorY: 1,
        iorG: 1.27,
        iorC: 1,
        iorB: 1,
        iorP: 1.8,
        saturation: 1.04,
        chromaticAberration: 0.95,
        refraction: 0.75
    };

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

        const t = clock.getElapsedTime()

        // group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)

        // mesh.current.visible = false;

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
                <primitive ref={mesh} object={object} />
    );
};

export default PartnersHero;
