'use client';
import { ReactElement } from 'react';
import { Autoplay, FreeMode, Keyboard, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import './FreemodeSlider.scss';

const FreemodeSlider = ({
    children,
    mobileSlides = 1.4,
    desktopSlides = 3

}: {
    children: ReactElement[];
    mobileSlides?: number;
    desktopSlides?: number;
}) => {
    return (
        <>
            <Swiper
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                    snapOnRelease: true,
                    dragSize: 'auto',
                }}
                breakpoints={{
                    768: {
                        slidesPerView: desktopSlides
                    }
                }}
                spaceBetween={8}
                slidesPerView={mobileSlides}
                autoHeight={true}
                freeMode={true}
                loop={true}
                autoplay={true}
                keyboard={true}
                grabCursor={true}
                modules={[FreeMode, Autoplay, Keyboard, Scrollbar]}
                className='w-full flex p-8 pb-2 h-full'
            >
                {children}

            </Swiper>
            <div className="swiper-scrollbar"></div>
        </>
    );
};

export default FreemodeSlider;