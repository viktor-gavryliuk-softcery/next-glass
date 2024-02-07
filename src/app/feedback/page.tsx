'use client'
import Footer from '@/components/Footer';
import Image from "next/image";

import Marquee from "react-fast-marquee";

import { SwiperSlide } from 'swiper/react';

import FooterLinks from '@/components/FooterLinks';
import { bebas_neue, montserrat } from '../fonts';

import FreemodeSlider from '@/components/FreemodeSlider';

export default function Services() {

    return (
        <main className='w-screen bg-white'>
            <div className="w-full h-screen bg-[#0E0E0E] rounded-b-[36px]">
                <Image src='/feedback.gif' draggable="false" alt='cases octopus' className='h-screen object-contain' />
            </div>

            <div className="w-full max-w-7xl mx-auto p-4">
                <h3 className={`${montserrat.className} font-bold text-neutral-950 text-3xl tracking-widest`}>TESTIOMONIAL</h3>
                <h2 className={`${bebas_neue.className} font-bold text-neutral-950 text-6xl leading-loose`}>Our happy client</h2>
                <p className={`${montserrat.className} max-w-xl mb-8 text-neutral-950 text-xl`}>Lorem ipsum dolor sit amet consectetur. Id vitae pellentesque semper dignissim ut lectus.</p>

                <FreemodeSlider>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bg-my-bg rounded-lg w-full h-64"></div>
                    </SwiperSlide>
                </FreemodeSlider>

            </div>

            <Marquee autoFill={true} speed={100} >
                <h1 className='bg-my-bg text-6xl py-2 my-20'>
                    {`FEEDBACK \b`}
                </h1>
            </Marquee>


            <div className="bg-my-bg py-6 relative  z-10">
                <FooterLinks />

                <Footer />
            </div>

        </main >
    )
}
