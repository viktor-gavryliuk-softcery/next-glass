'use client'
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

import { fontGrotesk, bebas_neue, montserrat } from '@/app/fonts';
import { AppearWrapper } from './AppearWrapper';

import casesData from './casesData';

type caseType = {
    name: string,
    img: string,
    description: string,
    slug: string;

}

const cases: caseType[] = [
    {
        slug: '1inch',
        name: '1inch',
        img: '/cases/1inch.png',
        description: '1INCH is an exchange aggregator that scans decentralized exchanges to find the lowest cryptocurrency prices for traders, and is powered by its 1INCH utility and governance token.'
    },
    {
        slug: 'heroes-battle-arena',
        name: 'Heroes Battle Arena',
        img: '/cases/heroes-battle-arena.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'metabody',
        name: 'Metabody',
        img: '/cases/metabody.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'aptos',
        name: 'aptos',
        img: '/cases/aptos.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'metacossacs',
        name: 'metacossacs',
        img: '/cases/metacossacs.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'cryptoinfluencers',
        name: 'cryptoinfluencers',
        img: '/cases/cryptoinfluencers.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'whoman-civilization',
        name: 'whoman civilization',
        img: '/cases/whoman-civilization.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'bohemian-bulldogs',
        name: 'bohemian bulldogs',
        img: '/cases/bohemianBulldogs.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },
    {
        slug: 'nft-course',
        name: 'nft course',
        img: '/cases/nftCourse.png',
        description: 'The First Special Super-qualilty Avatars for the Metaverse'
    },

]

const offsets = ['top-[1rem]', 'top-[6rem]', 'top-[11rem]', 'top-[16rem]', 'top-[21rem]', 'top-[26rem]', 'top-[31rem]'];

const MobileCaseCard = ({ offset, slug, name, img, isDark, descr }: { offset: string, img: string, slug: string, name: string, isDark: boolean, descr: string }) => {
    return (
        <div className={`case-mobile ${isDark ? 'bg-black' : 'bg-white'} sticky ${offset}`}>
            <div className="flex items gap-2">
                <img src={img} alt={slug} className='w-14 object-cover rounded-xl' />
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
        <AppearWrapper isLeft={isLeft} className='relative'>
            <Link href={`/cases/${casesData[index].slug}`} className='min-h-[400px] h-fit w-full p-8 grid gap-4 cursor-pointer'>
                <h3 className={`${bebas_neue.className} uppercase text-7xl hover:border-b-4 border-white  cursor-pointer transition-all duration-300 w-max`}>{casesData[index].name}</h3>
                <img src={casesData[index].img} alt={casesData[index].name} className={`w-auto rounded-3xl hover:scale-95 ${isLeft ? 'hover:-rotate-3 ' : 'hover:rotate-3'} duration-500  transition-all`} />
                <p className={`${montserrat.className} uppercase text-md`}>{casesData[index].description}</p>
            </Link>
        </AppearWrapper>
    )

}


export default function Cases() {
    const { scrollYProgress } = useScroll({});

    const y = useTransform(scrollYProgress, [0, 1], [0, -800]);

    return (
        <main className='w-screen min-h-screen h-max bg-my-bg'>
            <div className="flex items-center justify-center w-full h-screen absolute max-w-screen overflow-hidden inner-element">
                <img src='/cases.gif' draggable="false" alt='cases octopus' className='h-screen object-cover' />
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
                    <AppearWrapper isLeft={false}>
                        <h3 className='text-6xl mb-24 txt-right'>Your marketing is under our control</h3>
                    </AppearWrapper>

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

            {/* <div className="absolute z-10 bottom-0 mx-auto w-full bg-my-bg"> */}
            <Footer />
            {/* </div> */}
        </main>
    )
}
