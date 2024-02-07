'use client';
import { Swiper } from 'swiper/react';
import { FreeMode, Autoplay, Keyboard, Scrollbar } from 'swiper/modules';
import { ReactElement } from 'react';

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
                // centeredSlides={true}
                freeMode={true}
                loop={true}
                // autoplay={true}
                keyboard={true}
                grabCursor={true}
                speed={300}
                modules={[FreeMode, Autoplay, Keyboard, Scrollbar]}
                className='w-full flex p-8  pb-2 customSlider'
            >
                {children}

            </Swiper>
            <div className="swiper-scrollbar"></div>
        </>
    );
};

export default FreemodeSlider;