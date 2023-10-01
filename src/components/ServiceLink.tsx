'use client';
import { useState } from 'react';

import Image from 'next/image';
import { bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import { linkBgVariant } from '../app/service/page';

type ServiceLinkProps = { className: string; serviceName: string; slug: string; key: string; bgColor: linkBgVariant; hoveredText: string }

const ServiceLink = ({ className, serviceName, slug, bgColor: variant, hoveredText }: ServiceLinkProps) => {

    const [isHovered, setIsHovered] = useState(false);

    return <Link
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={`service/${slug}`}
        className={`${className} col-span-12 relative h-72 rounded-2xl flex items-end p-6 overflow-hidden transition-all duration-500 ${isHovered ? `bg-${variant}` : 'bg-[#D6D7DD]'}`}>
        <div className='flex items-center gap-3'>
            <Image src={`/services/${slug}.svg`} width={60} height={60} alt='Service Icon' className="relative z-10 bg-black rounded-lg p-2 h-14 w-14" />
            <Image src={`/services/${slug}.png`} width={400} height={290} alt='Service Background' className={`absolute top-0 right-0 h-full object-cover transition-all duration-500 ${isHovered ? '' : 'saturate-0'}`} />
            <Image src={`/services/${slug}Blur.png`} width={400} height={290} alt='Service Blur' className={`absolute top-0 right-0 h-full object-cover transition-all duration-500 ${isHovered ? '' : 'opacity-0'}`} />
            <Image src={`/services/${slug}BlurLight.png`} width={400} height={290} alt='Service Blur' className={`absolute top-0 right-0 h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-0' : ''}`} />
            <Image src={`/services/link.svg`} width={40} height={40} alt='Service Arrow' className={`absolute top-4 right-4 h-8 w-8 transition-all duration-500 ${isHovered ? '' : 'opacity-0'}`} color='black' />
            <h3 className={`${bebas_neue.className} relative z-10 text-2xl xl:text-4xl ${isHovered ? `text-${hoveredText}` : 'text-black'} leading-none`}>{serviceName}</h3>
        </div>
    </Link >;
};

export default ServiceLink;