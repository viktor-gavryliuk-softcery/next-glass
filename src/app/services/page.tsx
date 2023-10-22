'use client'
import Image from 'next/image';
import Footer from '@/components/Footer';

import { bebas_neue, montserrat } from '@/app/fonts';
import { Contact } from '@/components/Contact';
import FooterLinks from '@/components/FooterLinks';
import ServiceLink from '@/components/ServiceLink';

import Marquee from "react-fast-marquee";
import Tilt from 'react-parallax-tilt';

export type linkBgVariant = 'black' | 'violet' | 'lime';
export type hoveredTextVariant = 'black' | 'white' | 'lime';
export type hoveredArrowVariant = "#ffffff" | "#000000" | "#bdff00";

type ServiceBlockDataType = {
    key: string;
    variant: linkBgVariant;
    hoveredText: hoveredTextVariant;
    hoveredArrow: hoveredArrowVariant;
    serviceName: string;
    className: string;
}


const serviceBlockData: ServiceBlockDataType[] = [
    { key: 'smm', variant: 'black', serviceName: "SMM", className: 'sm:col-span-5 lg:col-span-3', hoveredText: 'white', hoveredArrow: '#ffffff', },
    { key: 'ppc', variant: 'lime', serviceName: "Display/Target Advertisement", className: 'sm:col-span-7 lg:col-span-5', hoveredText: 'black', hoveredArrow: '#000000' },
    { key: 'consultation', variant: 'violet', serviceName: "Consultation & Advisory", className: 'sm:col-span-7 lg:col-span-4', hoveredText: 'lime', hoveredArrow: "#bdff00" },
    { key: 'strategy', variant: 'violet', serviceName: "Content Strategy Creation & Execution", className: 'sm:col-span-5 lg:col-span-5', hoveredText: 'lime', hoveredArrow: "#bdff00" },
    { key: 'community', variant: 'black', serviceName: "Community Management", className: 'sm:col-span-5 lg:col-span-3', hoveredText: 'white', hoveredArrow: '#ffffff' },
    { key: 'pr', variant: 'lime', serviceName: "Influence Marketing & PR", className: 'sm:col-span-7 lg:col-span-4', hoveredText: 'black', hoveredArrow: "#bdff00" },
]

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
    return (
        <main className='w-full bg-[#f5f5f4] overflow-hidden'>
            <div className="w-full bg-my-bg rounded-b-3xl relative z-10 overflow-hidden">


                {tiltProps.map((props) => (
                    <Tilt
                        tiltReverse={true}
                        className="parallax-effect"
                        {...props}>
                        <div className="flex items-center justify-center w-full h-screen absolute max-w-screen overflow-hidden inner-element">
                            <Image src={props.imageSrc} width={1920} height={1080} draggable="false" alt='service glass' className=' object-cover' />
                        </div>
                    </Tilt>
                ))}
                <Tilt className="parallax-effect"
                    perspective={2500}
                    gyroscope={true}
                    tiltMaxAngleX={0}
                    tiltMaxAngleY={10}
                    trackOnWindow={true}
                    tiltReverse={true}

                >
                    <div className="flex items-center justify-center w-full h-screen absolute max-w-screen overflow-hidden inner-element">
                        <Image src='/servicesGlass.png' width={1920} height={1080} draggable="false" alt='service glass' className=' object-cover' />
                    </div>
                </Tilt>

                <div className="flex w-full h-screen justify-center items-center inner-element">
                    <h2 className={`text-[30vw] text-white uppercase ${bebas_neue.className}`}>
                        Services
                    </h2>
                </div>
            </div>

            <div className="relative shadow-2xl shadow-neutral-700 bg-lime text-black text-xl md:text-3xl lg:text-4xl uppercase py-2 rotate-[30deg] top-[65vh] w-[150vw] -left-[25vw] z-0">
                <Marquee autoFill={true} speed={200} >
                    <h1>
                        {"web3 crypto cex design metaverse pr nft defi fintech influence marketing dex \b"}
                    </h1>
                </Marquee>
            </div>
            <div className="relative shadow-2xl shadow-neutral-700  bg-violet text-white text-xl md:text-3xl lg:text-4xl uppercase py-2 -rotate-[25deg] top-[75vh] w-[150vw] -left-[25vw] z-0">
                <Marquee autoFill={true} speed={230} >
                    {"web3 crypto cex design metaverse pr nft defi fintech influence marketing dex \b"}
                </Marquee>
            </div>

            <div className="p-10 mx-auto max-w-7xl relatize z-10">
                <div className=" z-10 relative flex xl:flex-row flex-col items-center flex-nowrap justify-stretch w-full mb-10 gap-y-5">
                    <h2 className={`${bebas_neue.className} text-black text-5xl md:text-7xl xl:mr-5 flex-1`}>FULL MARKETING SERVICE</h2>
                    <button onClick={() => {
                        //@ts-ignore
                        Calendly.initPopupWidget({ url: 'https://calendly.com/adscontrol/sayhello' });
                        return false;
                    }}
                        className={`${montserrat.className} rounded-md text-center bg-black hover:bg-lime hover:text-black hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#8abd00] hover:font-semibold uppercase text-xl md:text-3xl md:p-4 p-3 flex-1`}>GET A PRICE</button>
                </div>
                <div className="grid grid-cols-12 gap-4 mb-8 ">

                    {serviceBlockData.map(link => (
                        <ServiceLink className={link.className} serviceName={link.serviceName} slug={link.key} key={link.key} bgColor={link.variant} hoveredText={link.hoveredText} hoveredArrow={link.hoveredArrow} />
                    ))}

                </div>
                <div className="max-w-6xl mx-auto p-4 relative z-10">
                    <Contact variant='light' />
                </div>

            </div>
            <div className="bg-my-bg py-6 relative  z-10">
                <FooterLinks />

                <Footer />
            </div>

        </main >
    )
}
