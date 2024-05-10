'use client';
import casesData, { CaseProps } from '@/data/casesData';
import { Html } from '@react-three/drei';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import { Dialog, DialogTrigger } from './ui/dialog';
import { ContactsDialog } from './ContactsDialog';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

// Define an interface for the props of Face component
interface FaceProps {
  position: [number, number, number];
  rotation?: number;
  children: ReactElement;
}

const cubeSize = 5.05;

const Face = ({ children, position, rotation }: FaceProps) => {
  const [hidden, setHidden] = useState<boolean>(false); // Change the type to boolean and set an initial value

  // useEffect(() => setHidden(false), [])

  // Define the onOcclude function to handle occlusion events
  const handleOcclude = () => {
    setHidden(!hidden); // Update the state based on occlusion status
    return null;
  };

  return (
    <Html
      position={position}
      rotation-y={rotation}
      transform
      castShadow
      receiveShadow
      occlude
      onOcclude={handleOcclude}
      style={{
        filter: hidden ? 'blur(4px)' : 'none',
        pointerEvents: hidden ? 'none' : 'auto',
      }}>
      <div className='w-96 h-96 px-3'>{children}</div>
    </Html>
  );
};

const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

const Front = () => (
  <Face
    position={[0, 0, -cubeSize]}
    rotation={degreesToRadians(180)}>
    <div className='flex flex-col gap-2 justify-start py-8 face'>
      <div className='flex gap-2 h-full'>
        <Link href='/cases'>
          <img
            src='/boxGifs/cases.gif'
            alt='cases'
            draggable='false'
            className='tile'
          />
        </Link>
        <Link href='/team'>
          <img
            src='/boxGifs/team.gif'
            alt='team'
            draggable='false'
            className='tile'
          />
        </Link>
      </div>

      <Link
        href='/services'
        className='h-full'>
        <img
          src='/boxGifs/services.gif'
          alt='services'
          draggable='false'
          className='tile'
        />
      </Link>
    </div>
  </Face>
);

const Right = () => (
  <Face
    position={[-cubeSize, 0, 0]}
    rotation={degreesToRadians(270)}>
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
      <div className='col-span-6'>
        <Dialog>
          <DialogTrigger className='h-full'>
            <img
              src='/boxGifs/contacts.gif'
              alt='contacts'
              draggable='false'
              className='tile'
            />
          </DialogTrigger>
          <ContactsDialog />
        </Dialog>
      </div>
      <Link
        href={'/vacancies'}
        className='col-span-6'>
        <img
          src='/boxGifs/vacancies.gif'
          alt='vacancies'
          draggable='false'
          className='tile bg-my-bg'
        />
      </Link>
      <Link
        href={'/appearance'}
        className='col-span-7 '>
        <img
          src='/boxGifs/appearance.gif'
          alt='nft'
          draggable='false'
          className='tile'
        />
      </Link>
      <Link
        href={'/'}
        className='col-span-5 '>
        <img
          src='/boxGifs/feedback.gif'
          alt='nft'
          draggable='false'
          className='tile'
        />
      </Link>
    </div>
  </Face>
);

const Back = () => {
  const [randomTile, setRandomTile] = useState<CaseProps>(casesData[0]);

  return (
    <Face
      position={[0, 0, cubeSize]}
      rotation={degreesToRadians(0)}>
      <div className='w-full h-full py-8'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className='bg-lime w-full h-full rounded'
          modules={[EffectFade, Autoplay]}>
          {casesData.map((tile, index) => (
            <SwiperSlide key={index}>
              <Link href={`/cases/${tile.name}`}>
                <img
                  src={tile.img}
                  alt={tile.name}
                  draggable='false'
                  className='w-full h-full object-cover'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Face>
  );
};

const Left = () => (
  <Face
    position={[cubeSize, 0, 0]}
    rotation={degreesToRadians(90)}>
    <div className='grid grid-cols-11 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
      <Link
        href={'/partners'}
        className='col-span-11 bg-[#6107c7] tile'>
        <img
          src='/boxGifs/partners.gif'
          alt='partners'
          className='tile'
          draggable={false}
        />
      </Link>
      <Link
        href={'/'}
        className='col-span-5'>
        <img
          src='/boxGifs/faq.gif'
          alt='faq'
          className='tile'
          draggable={false}
        />
      </Link>
      <div
        className='col-span-6'
        onClick={() => {
          //@ts-ignore
          Calendly.initPopupWidget({ url: 'https://calendly.com/adscontrol_ceo/30min' });
          return false;
        }}>
        <img
          src='/boxGifs/bookacall.gif'
          alt='bookACall'
          className='tile'
          draggable={false}
        />
      </div>
    </div>
  </Face>
);

export { Back, Front, Left, Right };
