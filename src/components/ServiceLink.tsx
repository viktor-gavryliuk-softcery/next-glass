'use client';
import { useState } from 'react';

import VectorArrow from '@/components/VectorArrow';
import Image from 'next/image';
import { bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import { linkBgVariant, hoveredArrowVariant } from '../app/services/page';

import ServiceIcon from '../../public/services/ServiceIcon';

type ServiceLinkProps = {
    className: string;
    serviceName: string;
    slug: string;
    key?: string;
    bgColor: linkBgVariant;
    hoveredText: string;
    hoveredArrow: hoveredArrowVariant;
}

const ServiceLink = ({ className, serviceName, slug, bgColor: variant, hoveredText, hoveredArrow }: ServiceLinkProps) => {

    const [isHovered, setIsHovered] = useState(false);

    return <Link
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={`services/${slug}`}
        className={`${className} col-span-12 relative h-72 rounded-2xl flex items-end p-6 overflow-hidden transition-all duration-500 ${isHovered ? `bg-${variant}` : 'bg-[#D6D7DD]'}`}>

        <div className='flex items-center gap-3 transition-all duration-500'>
            <ServiceIcon slug={slug} isHovered={isHovered} />
            <Image src={`/services/${slug}.png`} width={400} height={290} alt='Service Background' className={`absolute top-0 right-0 h-full object-cover transition-all duration-500 ${isHovered ? '' : 'saturate-0'}`} />
            <VectorArrow color={hoveredArrow} isHovered={isHovered} />
            <h3 className={`${bebas_neue.className} relative z-10 text-2xl xl:text-4xl ${isHovered ? `text-${hoveredText}` : 'text-black'} leading-none transition-all`}>{serviceName}</h3>
        </div>

    </Link >;
};

export default ServiceLink;