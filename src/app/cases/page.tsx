'use client'
import Footer from '@/components/Footer';
import Image from "next/image";
import Link from 'next/link';

import { motion, useScroll, useTransform } from 'framer-motion';

import { bebas_neue, fontGrotesk, montserrat } from '@/app/fonts';
import { AppearOldWrapper } from '@/components/AppearOldWrapper';

import casesData from '../../data/casesData';

const offsets = ['top-[1rem]', 'top-[6rem]', 'top-[11rem]', 'top-[16rem]', 'top-[21rem]', 'top-[26rem]', 'top-[31rem]'];

const MobileCaseCard = ({ offset, slug, name, img, isDark, descr }: { offset: string, img: string, slug: string, name: string, isDark: boolean, descr: string }) => {
    return (
        <div className={`case-mobile ${isDark ? 'bg-black' : 'bg-white'} sticky ${offset}`}>
            <div className="flex items gap-2">
                <Image src={img} alt={slug} className='w-14 object-cover rounded-xl' />
                <h4 className={`${bebas_neue.className} ${isDark ? 'text-white' : 'text-black'}  text-3xl leading-relaxed`}>{name}</h4>
            </div>

            <p className={`${montserrat.className} ${isDark ? 'text-white' : 'text-black'} text-sm leading-relaxed`}>{descr}</p>
            <Link href={`/cases/${slug}`} className={`${montserrat.className} w-full rounded-3xl ${isDark ? 'bg-white text-black' : 'bg-black text-white'} text-center font-bold hover:scale-105 transition-all p-3`}>
                Learn more
            </Link>
        </div>
    )
}

const DesktopCaseCard = ({ isLeft, index }: { isLeft: boolean, index: number }) => {
    return (
        <AppearOldWrapper isLeft={isLeft} className='relative'>
            <Link href={`/cases/${casesData[index].slug}`} className='min-h-[400px] h-fit w-full p-8 grid gap-4 cursor-pointer'>
                <h3 className={`${bebas_neue.className} uppercase text-7xl hover:border-b-4 border-white  cursor-pointer transition-all duration-300 w-max`}>{casesData[index].name}</h3>
                <Image src={casesData[index].img} alt={casesData[index].name} className={`w-full rounded-3xl hover:scale-95 ${isLeft ? 'hover:-rotate-3 ' : 'hover:rotate-3'} duration-500  transition-all`} />
                <p className={`${montserrat.className} uppercase text-md`}>{casesData[index].description}</p>
            </Link>
        </AppearOldWrapper>
    )

}


export default function Cases() {
    const { scrollYProgress } = useScroll({});

    const y = useTransform(scrollYProgress, [0, 1], [0, -800]);

    return (
        <main className='w-screen min-h-screen h-max bg-my-bg'>
            <div className="flex items-center justify-center w-full h-screen absolute max-w-screen overflow-hidden inner-element">
                <Image src='/cases.gif' draggable="false" alt='cases octopus' className='h-screen object-cover' />
            </div>

            <motion.div className="flex w-full h-screen justify-center relative items-center inner-element" style={{ y }}>
                <h1 className={`text-[10vw] text-white uppercase ${fontGrotesk.className}`} >
                    Cases
                </h1>
            </motion.div>


            <div className="mx-auto max-w-7xl w-full hidden lg:grid grid-cols-12 h-full gap-20 px-5 mb-5 mt-20">
                <div className="col-span-6 w-full gap-20 flex flex-col">

                    <DesktopCaseCard isLeft={true} index={0} />
                    <DesktopCaseCard isLeft={true} index={1} />
                    <DesktopCaseCard isLeft={true} index={2} />
                    <DesktopCaseCard isLeft={true} index={3} />

                </div>

                <div className="col-span-6 h-full w-full gap-20 flex flex-col overflow-x-hidden">
                    <AppearOldWrapper isLeft={false}>
                        <h3 className='text-6xl mb-24 txt-right'>Your marketing is under our control</h3>
                    </AppearOldWrapper>

                    <DesktopCaseCard isLeft={false} index={4} />
                    <DesktopCaseCard isLeft={false} index={5} />
                    <DesktopCaseCard isLeft={false} index={6} />
                </div>

            </div>

            <div className="mx-auto w-full max-w-2xl p-5 grid lg:hidden grid-cols-4 gap-4">
                <h1 className={`${bebas_neue.className} text-7xl col-span-4 sticky top-4`}>cases</h1>
                <p className={`${montserrat.className} col-span-4 text-sm sticky top-20`}>The projects we worked on | Your marketing is under our control</p>

                {
                    offsets.map((offset, index) => (
                        <MobileCaseCard
                            key={index}
                            img={casesData[index].avatar}
                            slug={casesData[index].slug}
                            descr={casesData[index].description}
                            isDark={index % 2 == 1}
                            name={casesData[index].name}
                            offset={offset}
                        />
                    ))
                }

            </div>

            <Footer />
        </main>
    )
}
