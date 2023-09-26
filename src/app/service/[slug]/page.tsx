'use client'
import serviceData from '../serviceData'; // Replace with the correct path to your serviceData file
import { notFound, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { bebas_neue, montserrat } from '@/app/fonts';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';
import FooterLinks from '@/components/FooterLinks';

import type { iServiceItem, iServiceData } from '../serviceData';

const ServiceCard = ({ name, details, number }: iServiceItem) => {
    return <div className="flex-1 flex flex-col justify-between bg-neutral-800 p-12 min-h-fit w-full lg:min-w-[49%] box-border ">
        <div className='flex gap-2 items-end'>
            <span className={`text-6xl ${bebas_neue.className}`}>{number}</span>
            <span className={`text-lg md:text-2xl lg:text-3xl pb-1 uppercase ${montserrat.className}`}>{name}</span>
        </div>
        <p className='text-xs md:text-base'>{details}</p>

    </div>
}


export default function Page({ params }: { params: { slug: string } }) {

    //put to outer hook
    const pathname = usePathname()

    const [SPData, SetSPData] = useState<iServiceData | undefined>({} as iServiceData);

    function extractKey(path: string) {
        const parts = path.split('/');

        return parts[2];
    }

    function isSlugValid() {
        return serviceData.some((data) => data.key === extractKey(pathname));
    }

    useEffect(() => {
        if (!isSlugValid()) {
            notFound();
        }
        else {
            SetSPData(serviceData.find(sd => sd.key === extractKey(pathname)));
        }

    }, [SPData])




    return (
        <>
            <div className="absolute top-8 left-8 text-sm flex gap-2 z-10">
                <Link href='/service' className='text-neutral-600'>
                    Service
                </Link>
                <img src="/navArrow.svg" alt="arrow" />
                {SPData?.name}
            </div>
            <div className="flex items-center justify-center w-full h-screen absolute -z-10">
                <h1 className={`text-[29vw] text-[#191919] uppercase ${bebas_neue.className}`}>
                    Service
                </h1>
            </div>

            <div className="flex flex-col justify-end w-full h-[65vh] lg:h-[65vh] p-6 box-border">
                <h2 className={`text-[6.5vw] top-[5.4vw] text-white tracking-wide uppercase leading-none text-center ${bebas_neue.className}`}>
                    {SPData?.name}
                </h2>
                <p className={`text-sm top-[3vw] text-white max-w-3xl md:max-w-5xl w-full mx-auto text-left`}>
                    {SPData?.description}
                </p>
            </div>

            <div className="max-w-6xl flex mx-auto gap-4 flex-wrap p-4">
                {
                    SPData?.serviceItems &&
                    SPData?.serviceItems.map((sdi, idx) => (
                        <ServiceCard number={`0${idx + 1}`} name={sdi.name} details={sdi.details} />
                    ))
                }
            </div>

            <div className="max-w-6xl mx-auto p-4">
                <Contact variant='dark' />
            </div>

            <div className="bg-my-bg py-6">
                <FooterLinks />

                <Footer />
            </div>
        </>
    )
}