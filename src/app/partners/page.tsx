'use client'
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';
import { bebas_neue } from '@/app/fonts';
import FooterLinks from '@/components/FooterLinks';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import PartnersHero from "@/app/partners/PartnersHero";
const Engine = dynamic(() => import('react-matter-js').then((mod) => mod.Engine), { ssr: false });
const RenderClones = dynamic(() => import('react-matter-js').then((mod) => mod.RenderClones), { ssr: false });
const Walls = dynamic(() => import('react-matter-js').then((mod) => mod.Walls), { ssr: false });
const Circle = dynamic(() => import('react-matter-js').then((mod) => mod.Circle), { ssr: false });

import partnersData from './partners';
import {Canvas} from "@react-three/fiber";
import {CameraControls, Preload} from "@react-three/drei";

const tiltProps = [
    {
        perspective: 1000,
        gyroscope: true,
        tiltMaxAngleX: 15,
        tiltMaxAngleY: 15,
        trackOnWindow: true,
        imageSrc: '/particle1.png',
    },
    {
        perspective: 1500,
        gyroscope: true,
        tiltMaxAngleX: 25,
        tiltMaxAngleY: 25,
        trackOnWindow: true,
        imageSrc: '/particle2.png',
    },
    {
        perspective: 3000,
        gyroscope: true,
        tiltMaxAngleX: 35,
        tiltMaxAngleY: 35,
        trackOnWindow: true,
        imageSrc: '/particle3.png',
    },
    {
        perspective: 1000,
        gyroscope: true,
        tiltMaxAngleX: 30,
        tiltMaxAngleY: 15,
        trackOnWindow: true,
        imageSrc: '/particle4.png',
    },
    {
        perspective: 4500,
        gyroscope: true,
        tiltMaxAngleX: 35,
        tiltMaxAngleY: 35,
        trackOnWindow: true,
        imageSrc: '/particle5.png',
    },
];

export default function Services() {
    const { scrollYProgress } = useScroll({});

    const boxRef = useRef<HTMLDivElement>(null); // Specify the type of boxRef


    const [dimensions, setDimensions] = useState({
        width: boxRef.current?.offsetWidth || 1280,
        height: boxRef.current?.offsetHeight || 675,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: boxRef.current?.offsetWidth || 1280,
                height: boxRef.current?.offsetHeight || 675,
            });
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const y = useTransform(scrollYProgress, [0, 1], [0, -800]);


    return (
        <main className='w-full overflow-hidden bg-my-bg'>
            <div className="hidden w-full rounded-b-3xl relative z-10 overflow-hidden">

                <motion.div className="flex w-full h-screen justify-center items-center inner-element" style={{ y }}>
                    <h2 className={`text-[30vw] text-white uppercase ${bebas_neue.className}`}>
                        PARTNERS
                    </h2>
                </motion.div>
            </div>

            <div className="relative h-screen w-full">
                {/*<Canvas camera={{ position: [0, 0, 10] }}>*/}
                {/*    <ambientLight intensity={1} position={[0, -10, 90]} />*/}
                {/*    <directionalLight intensity={0.7} position={[0, -10, 90]} />*/}
                {/*    <PartnersHero/>*/}
                {/*    <Preload all />*/}
                {/*    <CameraControls />*/}
                {/*</Canvas>*/}
                <img src='/boxGifs/partners.gif' alt='partners' className='h-full w-full object-contain'/>
            </div>

            <div className="mx-auto max-w-7xl relatize z-10 h-[42rem]" ref={boxRef} >
                <Engine options={{}}>
                    <RenderClones
                        enableMouse
                        mouseConstraintOptions={{
                            constraint: {
                                // @ts-ignore
                                render: {
                                    visible: false,
                                }
                            }
                        }}

                        options={{
                            width: dimensions.width,
                            height: dimensions.height,
                            background: "#121212",
                            wireframes: false,
                            hasBounds: true
                        }}

                    >
                        <Walls x={0} y={0} width={dimensions.width} height={dimensions.height} wallWidth={0.0001} />
                        <>
                            {partnersData.map(p => <Circle x={p.x} y={p.y} options={{
                                friction: 1,
                                render: {
                                    sprite: {
                                        texture: p.options.texture,
                                        xScale: p.options.xScale,
                                        yScale: p.options.yScale
                                    }
                                }
                            }} radius={p.radius} />
                            )}
                        </>
                    </RenderClones>
                </Engine>
            </div>

            <div className=" py-6 relative  z-10">
                <FooterLinks />

                <Footer />
            </div>

        </main >
    )
}
