'use client';
import { useState } from 'react';

import { bebas_neue } from '@/app/fonts';
import VectorArrow from '@/components/VectorArrow';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { hoveredArrowVariant, linkBgVariant } from '../app/services/page';

import ServiceIcon from '../../public/services/ServiceIcon';

type ServiceLinkProps = {
  className: string;
  serviceName: string;
  slug: string;
  key?: string;
  bgColor: linkBgVariant;
  hoveredText: string;
  hoveredArrow: hoveredArrowVariant;
};

const ServiceLink = ({
  className,
  serviceName,
  slug,
  bgColor: variant,
  hoveredText,
  hoveredArrow,
}: ServiceLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={`services/${slug}`}
      className={`${className} overflow-hidden col-span-12 relative h-72 rounded-2xl flex items-end transition-all duration-500 ${
        isHovered ? `bg-${variant}` : 'bg-[#D6D7DD]'
      } ${
        isHovered ? `shadow-lg  shadow-${variant} ` : 'shadow-2xl shadow-transparent opacity-95'
      }`}>
      <Tilt
        tiltEnable={isHovered}
        perspective={164000}
        tiltMaxAngleY={10}
        tiltMaxAngleX={10}
        tiltReverse
        // className={`transition-all duration-500 w-full h-full ${className} overflow-hidden col-span-12 relative h-72 rounded-2xl flex items-end transition-all duration-500 ${isHovered ? `bg-${variant}` : 'bg-[#D6D7DD]'} ${isHovered ? `shadow-xl  shadow-${variant} ` : 'shadow-none shadow-transparent opacity-95'}`}

        className=' transition-all duration-500 w-full h-full'>
        <Image
          src={`/services/${slug}.png`}
          width={400}
          height={290}
          alt='Service Background'
          className={`absolute top-0 right-0 h-full object-cover transition-all duration-500 rounded-2xl ${
            isHovered ? '' : 'saturate-0'
          }`}
        />
        <Tilt
          scale={1.15}
          tiltReverse
          tiltMaxAngleX={0}
          perspective={3200}
          tiltEnable={isHovered}
          className={`w-full h-full flex items-end gap-3 p-8 border-red-500`}>
          <ServiceIcon
            slug={slug}
            isHovered={isHovered}
          />
          <h3
            className={`${bebas_neue.className} relative z-10 text-2xl xl:text-4xl ${
              isHovered ? `text-${hoveredText}` : 'text-black'
            } leading-none transition-all`}>
            {serviceName}
          </h3>
        </Tilt>
      </Tilt>
      <VectorArrow
        color={hoveredArrow}
        isHovered={isHovered}
      />
    </Link>
  );
};

export default ServiceLink;
