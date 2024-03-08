'use client';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

import { bebas_neue, fontGrotesk } from '@/app/fonts';
import FooterLinks from '@/components/FooterLinks';

import { Swiper as SwiperType } from 'swiper/types';

import VacanciesSwiper from './VacanciesSwiper';
import VaccancyDetails from './VaccancyDetails';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.scss';

import VacanciesData from '../../data/vacancies';

// const buttonLabels = Array.from(VacanciesData.map(v => v.label));

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  key: number;
}

const ButtonWithKey = ({ className, onClick, children }: ButtonProps) => (
  <button
    className={className}
    onClick={onClick}>
    {children}
  </button>
);

export default function Vacancies() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    setActiveSlide(0);
  }, []);

  return (
    <main className='w-full bg-my-bg overflow-hidden'>
      <div className='w-full overflow-hidden'>
        <div className='flex items-center justify-center w-full h-[80vh] md:h-screen max-w-screen overflow-hidden inner-element'>
          <img
            src='/vacancies.gif'
            draggable='false'
            alt='cases octopus'
            className='w-full object-cover'
          />
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-4 mt-12'>
        <h3 className={`${bebas_neue.className} text-white text-5xl`}>Join our team</h3>
      </div>

      <div className='max-w-7xl mx-auto p-4'>
        <VacanciesSwiper
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          swiper={swiper}
          setSwiper={setSwiper}
        />
      </div>

      <div className='max-w-6xl mx-auto p-4 relative z-10 grid  grid-cols-3 gap-4 items-center'>
        <h3 className={`${fontGrotesk.className} col-span-3 md:col-span-1 text-4xl text-lime`}>
          {VacanciesData[activeSlide]?.name}
        </h3>

        <div className='col-span-3 md:col-span-2 flex gap-4 md:justify-end self-start'>
          {VacanciesData.map((v, index) => (
            <ButtonWithKey
              key={index}
              className={`${bebas_neue.className} vacancy_bullet ${
                activeSlide === index ? 'vacancy_bullet__active' : ''
              }`}
              onClick={() => {
                swiper?.slideToLoop(index);
              }}
              disabled={index === activeSlide}>
              {v.label}
            </ButtonWithKey>
          ))}
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-4'>
        <VaccancyDetails activeSlide={activeSlide} />
      </div>

      <div className='bg-my-bg py-6 relative  z-10'>
        <FooterLinks />

        <Footer />
      </div>
    </main>
  );
}
