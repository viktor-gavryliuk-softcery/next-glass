import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/swiper-bundle.css';

import { montserrat } from '@/app/fonts';

import { mockTeamData } from '@/data/teamData';

const TeamMemberSlide = ({
  name,
  position,
  isActive,
  src,
}: {
  name: string;
  position: string;
  isActive: boolean;
  src: string;
}) => {
  return (
    <div
      className={`${
        isActive
          ? 'mx-auto border-2 bg-neutral-800 border-lime shadow-md shadow-lime'
          : 'bg-neutral-900'
      } mb-4 rounded-xl h-96 relative transition-all focus:outline-violet focus:ring-0`}>
      <img
        src={src}
        alt=''
        className='h-full w-full rounded-xl object-cover object-right'
      />

      <div className='rounded-md bg-neutral-800 h-12 absolute -bottom-2 left-[4.33%] w-11/12 z-10 grid grid-cols-2'>
        <p
          className={`${montserrat.className} h-full flex items-center text-center justify-center col-span-1 font-semibold bg-lime text-neutral-900 rounded-l-md`}>
          {name}
        </p>
        <p
          className={`${montserrat.className} h-full flex items-center text-center justify-center col-span-1 font-semibold bg-neutral-200 text-neutral-900 rounded-r-md`}>
          {position}
        </p>
      </div>
    </div>
  );
};
export const TeamSwiper = ({
  activePersonId,
  setActiveSlide,
  setSwiper,
  swiper,
}: {
  activePersonId: number;
  setActiveSlide: (slideIndex: number) => void;
  swiper?: SwiperType;
  setSwiper: ((swiper: SwiperType) => void) | undefined;
}) => {
  return (
    <Swiper
      spaceBetween={20}
      initialSlide={activePersonId}
      slidesPerView={2}
      freeMode={true}
      // loop={true}
      centeredSlides={true}
      onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
      onSwiper={setSwiper}
      keyboard={{
        enabled: true,
      }}
      grabCursor={true}
      speed={500}
      modules={[Autoplay, Keyboard]}
      className='flex w-full m-4'
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}>
      {mockTeamData.map((p) => (
        <SwiperSlide
          onClick={() => {
            swiper?.slideTo(p.id);
            setActiveSlide(p.id);
          }}
          key={p.id}>
          <TeamMemberSlide
            src={p.image}
            name={p.name}
            position={p.position}
            isActive={activePersonId === p.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
