import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Keyboard, Mousewheel } from 'swiper/modules';

import { Swiper as SwiperType } from 'swiper/types';

import VacanciesData from './vacancies';

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
                VacanciesData.map(vaccancy => (
                    <SwiperSlide className='vacancy_card'>
                        <img src='/nft.jpg' />
                        <h3>{vaccancy.name}</h3>
                        <p>
                            {vaccancy.greeting}
                        </p>
                    </SwiperSlide>)
                )
            }
        </Swiper>
    )
}



export default VacanciesSwiper;