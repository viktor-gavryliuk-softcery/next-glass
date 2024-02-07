'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper as SwiperType } from 'swiper/types';

import { releaseData } from '@/data/releaseData';

import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import 'swiper/css';

const SliderWrapper = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    useEffect(() => {
        handleChangeSlide(0);
    }, [])

    const handleChangeSlide = (slideIndex: number) => {
        const newIndex = (slideIndex + releaseData.length) % releaseData.length;

        swiper?.slideTo(newIndex);
        setActiveSlide(newIndex);
    }


    const displayedData = releaseData[activeSlide];

    return (
        <div className="grid grid-rows-2 md:grid-rows-1 grid-col-1 md:grid-cols-2 w-full  bg-neutral-100 z-20 shadow-lg rounded-sm">
            <SliderDisplay activeSlide={activeSlide} swiper={swiper} setSwiper={setSwiper} setActiveSlide={setActiveSlide} />

            <div className="col-span-1 p-10 pt-14 md:px-20 md:py-20 flex flex-col text-black justify-center align-middle h-full w-full row-span-1 relative">

                <span className='mb-2'>{displayedData?.date}</span>
                <h3 className='uppercase font-bold text-3xl'>{displayedData?.title}</h3>
                <p className='text-md'>{displayedData?.description}</p>
                <Link href={displayedData?.linkHref || '/'} className='flex gap-2 mt-2 align-middle items-center hover:text-violet focus:underline'>
                    <ArrowRightIcon className='w-12 h-12' />
                </Link>

                <div className="absolute bottom-4 right-4 md:top-8 md:right-8 gap-2 h-10 flex items-center align-middle justify-evenly">
                    <button
                        onClick={() => handleChangeSlide(activeSlide - 1)}>
                        <ChevronLeftIcon
                            className='w-6 h-5'
                        />
                    </button>
                    {
                        releaseData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleChangeSlide(index)}
                                className={`h-2 w-2  border border-black ${activeSlide == index ? 'bg-black' : 'rounded-full'}`}
                            />
                        ))
                    }
                    <button
                        onClick={() => handleChangeSlide(activeSlide + 1)}>
                        <ChevronRightIcon
                            className='w-6 h-5'
                        />
                    </button>
                </div>

            </div>
        </div>
    );
}

const SliderDisplay = ({
    activeSlide,
    setActiveSlide,
    setSwiper,
    swiper
}: {
    activeSlide: number,
    setActiveSlide: (slideIndex: number) => void,
    swiper: SwiperType | null,
    setSwiper: ((swiper: SwiperType) => void) | undefined
}) => {
    return (
        <Swiper
            initialSlide={activeSlide}
            onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
            onSwiper={setSwiper}
            grabCursor={true}
            spaceBetween={20}
            loop={true}
            className="col-span-1 flex w-full row-span-1"
        >
            {
                releaseData.map((rs, i) => (
                    <SwiperSlide key={i}>
                        <Image src={rs.thumbnail} alt={rs.altText} className='w-full h-full object-cover' width={624} height={412} />
                    </SwiperSlide>
                )
                )
            }

        </Swiper>
    );
};


export default SliderWrapper;