'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper as SwiperType } from 'swiper/types';

import { releaseData } from '@/data/releaseData';

import { ChevronLeftIcon, ChevronRightIcon, Link1Icon } from '@radix-ui/react-icons';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const SliderWrapper = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    handleChangeSlide(0);
  }, []);

  const handleChangeSlide = (slideIndex: number) => {
    const newIndex = (slideIndex + releaseData.length) % releaseData.length;

    swiper?.slideTo(newIndex);
    setActiveSlide(newIndex);
  };

  const displayedData = releaseData[activeSlide];

  return (
    <div className='grid  grid-col-1 md:grid-cols-2 w-full h-auto lg:h-[420px] bg-neutral-100 z-20 shadow-lg rounded-sm '>
      <SliderDisplay
        activeSlide={activeSlide}
        swiper={swiper}
        setSwiper={setSwiper}
        setActiveSlide={setActiveSlide}
      />

      <div className='col-span-1 p-4 px-6 lg:px-12 md:pt-14 flex flex-col text-black justify-start align-middle h-full w-full  relative'>
        <span className='mb-2'>{displayedData?.date}</span>
        <button>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={displayedData?.linkHref || '/'}
            className='flex gap-2 mt-2 align-middle items-center hover:text-violet focus:underline'>
            <h3 className='uppercase font-bold text-start text-xl lg:text-3xl mb-2'>
              {displayedData?.title}
            </h3>
          </Link>
        </button>
        <p className='lg:text-md'>{displayedData?.description}</p>
        <button>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={displayedData?.linkHref || '/'}
            className='flex gap-2 mt-2 align-middle items-center hover:text-violet focus:underline'>
            <Link1Icon className='md:w-12 md:h-12 w-8 h-8' />
          </Link>
        </button>

        <div className='absolute bottom-4 right-4 md:top-8 md:right-8 gap-2 h-10 flex items-center align-middle justify-evenly'>
          <button onClick={() => handleChangeSlide(activeSlide - 1)}>
            <ChevronLeftIcon className='w-6 h-5' />
          </button>
          {releaseData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleChangeSlide(index)}
              className={`h-2 w-2  border border-black ${
                activeSlide == index ? 'bg-black' : 'rounded-full'
              }`}
            />
          ))}
          <button onClick={() => handleChangeSlide(activeSlide + 1)}>
            <ChevronRightIcon className='w-6 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
};

const SliderDisplay = ({
  activeSlide,
  setActiveSlide,
  setSwiper,
  swiper,
}: {
  activeSlide: number;
  setActiveSlide: (slideIndex: number) => void;
  swiper: SwiperType | null;
  setSwiper: ((swiper: SwiperType) => void) | undefined;
}) => {
  return (
    <Swiper
      initialSlide={activeSlide}
      onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
      onSwiper={setSwiper}
      grabCursor={true}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className='col-span-1 flex w-full'>
      {releaseData.map((rs, i) => (
        <SwiperSlide key={i}>
          <Image
            src={rs.thumbnail}
            alt={rs.altText}
            className='w-full h-full object-cover'
            width={624}
            height={412}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderWrapper;
