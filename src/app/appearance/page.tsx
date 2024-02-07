'use client'
import Footer from '@/components/Footer';

import Marquee from "react-fast-marquee";

import { ContactForm } from '@/components/ContactForm';

import FooterLinks from '@/components/FooterLinks';
import FreemodeSlider from '@/components/FreemodeSlider';
import { releaseData } from '@/data/releaseData';
import { SwiperSlide } from 'swiper/react';
import { ReleaseCard } from './ReleaseCard';
import SliderDisplay from './SliderDisplay';



export default function Appearance() {
    return (
        <main className='w-screen bg-white'>

            <img src='/appearance.gif' draggable="false" alt='cases octopus' className='lg:h-screen w-full  object-cover mt-20' />

            <div className="w-full max-w-7xl mx-auto p-4 relative bottom-10">

                <SliderDisplay />

                <h2 className='text-neutral-950 uppercase text-4xl font-semibold leading-loose tracking-wide mt-10'>press releases</h2>

                <FreemodeSlider desktopSlides={3} mobileSlides={1.7}>

                    {releaseData.map((rd, i) => (
                        <SwiperSlide key={i}>
                            <ReleaseCard imageSrc={rd.imageSrc} altText={rd.altText} date={rd.date} title={rd.title} description={rd.description} linkHref={rd.linkHref} thumbnail={rd.thumbnail} />
                        </SwiperSlide>
                    ))}

                </FreemodeSlider>
            </div>

            <Marquee autoFill={true} speed={100} >
                <h1 className='bg-my-bg text-6xl py-2 my-10'>
                    {`\b MEDIA APPEARANCE \b`}
                </h1>
            </Marquee>
            <div className="bg-my-bg w-full">
                <div className="max-w-6xl mx-auto p-4">
                    <ContactForm variant='dark' />
                </div>
            </div>


            <div className="bg-my-bg py-6 relative  z-10">
                <FooterLinks />

                <Footer />
            </div>

        </main >
    )
}
