'use client'
import Footer from '@/components/Footer';
import { useEffect, useState } from "react";

import { bebas_neue, fontGrotesk } from "@/app/fonts";
import FooterLinks from '@/components/FooterLinks';

import { Swiper as SwiperType } from 'swiper/types';

import VacanciesSwiper from "./VacanciesSwiper";
import VaccancyDetails from "./VaccancyDetails";

import 'swiper/css';
import 'swiper/css/pagination';

import './style.scss';

import VacanciesData from "../../data/vacancies";

const buttonLabels = Array.from(VacanciesData.map(v => v.label));

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    key: number;
}

const ButtonWithKey = ({ className, onClick, children }: ButtonProps) => (
    <button
        className={className}
        onClick={onClick}
    >
        {children}
    </button>
)

export default function Vacancies() {
    const [activeSlide, setActiveSlide] = useState<number>(1);
    const [swiper, setSwiper] = useState<SwiperType>();


    const handleChangeSlide = (slideIndex: number) => {
        swiper?.slideTo(slideIndex);
        setActiveSlide(slideIndex)
    }

    useEffect(() => {
        handleChangeSlide(1);
    }, [])

    return (
        <main className='w-full bg-my-bg overflow-hidden'>
            <div className="w-full relative z-10 overflow-hidden">

                <div className="flex items-center justify-center w-full h-[80vh] md:h-screen max-w-screen overflow-hidden inner-element">
                    <img src='/vacancies.gif' draggable="false" alt='cases octopus' className='w-full object-cover' />
                </div>


            </div>

            <div className="max-w-6xl mx-auto p-4 mt-12">
                <h3 className={`${bebas_neue.className} text-white text-5xl`}>Join our team</h3>
            </div>

            <div className="max-w-7xl mx-auto p-4">
                <VacanciesSwiper activeSlide={activeSlide} setActiveSlide={setActiveSlide} swiper={swiper} setSwiper={setSwiper} />
            </div >

            <div className="max-w-6xl mx-auto p-4 relative z-10 grid  grid-cols-2 gap-4 items-center">
                <h3 className={`${fontGrotesk.className} col-span-2 md:col-span-1 text-4xl text-lime`}>{VacanciesData[activeSlide]?.name}</h3>

                <div className='col-span-2 md:col-span-1 flex gap-4 md:justify-end self-start'>
                    {buttonLabels.map((label, index) => (
                        <ButtonWithKey
                            key={index}
                            className={`${bebas_neue.className} vacancy_bullet ${activeSlide === index ? 'vacancy_bullet__active' : ''}`}
                            onClick={() => {
                                handleChangeSlide(index)

                            }}
                            disabled={index === activeSlide}
                        >
                            {label}
                        </ButtonWithKey>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-4">
                <VaccancyDetails activeSlide={activeSlide} />
            </div>

            <div className="bg-my-bg py-6 relative  z-10">
                <FooterLinks />

                <Footer />
            </div>
        </main >
    )
}
