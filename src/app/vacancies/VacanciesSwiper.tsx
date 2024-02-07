import { Autoplay, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper as SwiperType } from 'swiper/types';

import Image from "next/image";

import VacanciesData from '../../data/vacancies';

const VacanciesSwiper = ({
    activeSlide,
    setActiveSlide,
    setSwiper,
    swiper
}: {
    activeSlide: number,
    setActiveSlide: (slideIndex: number) => void,
    swiper?: SwiperType,
    setSwiper: ((swiper: SwiperType) => void) | undefined
}) => {
    return (
        <Swiper
            slidesPerView={1}
            resizeObserver={true}
            centerInsufficientSlides={true}
            initialSlide={activeSlide}
            onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
            onSwiper={setSwiper}
            mousewheel={true}
            keyboard={{
                enabled: true,
            }}
            grabCursor={true}
            speed={500}
            loop={true}
            centeredSlides={true}
            // watchSlidesProgress={true}
            modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
            effect={'coverflow'}
            coverflowEffect={{
                rotate: -50,
                stretch: 0,
                depth: 300,
                modifier: 0.5,
                slideShadows: true,
            }}
            spaceBetween={10}
            // pagination={{
            //     clickable: true,
            // }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            }}
        >
            {/* <SwiperInnerSlides /> */}
            {
                VacanciesData.map((vaccancy, i) => (
                    <SwiperSlide
                        onClick={() => {
                            swiper?.slideTo(i);
                            setActiveSlide(i)
                        }}
                        key={i}
                        className='vacancy_card'>
                        <Image src={vaccancy.imageUrl} alt='' />
                        <h3>{vaccancy.name}</h3>
                    </SwiperSlide>)
                )
            }
        </Swiper>
    )
}



export default VacanciesSwiper;