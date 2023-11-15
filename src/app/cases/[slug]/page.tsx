'use client'

import Link from 'next/link';
import { bebas_neue, montserrat } from '@/app/fonts';
import Footer from '@/components/Footer';
import FooterLinks from '@/components/FooterLinks';


import { useCaseSlug } from './useCaseSlug';

export default function Page() {

    const CaseData = useCaseSlug()

    return (
        <>
            <div className="absolute top-8 left-8 text-sm gap-2 z-10 hidden md:flex">
                <Link href='/cases' className='text-neutral-600'>
                    Cases
                </Link>
                <img src="/navArrow.svg" alt="arrow" />
                {CaseData?.name}

            </div>
            <div className="flex flex-col items-start justify-between min-h-screen  bg-white mt-20 rounded-3xl">
                <div className="w-full mx-auto max-w-7xl px-8 py-16">

                    <div className="flex gap-8">
                        <div className="md:flex flex-col gap-2 hidden">
                            <h3 className={`${bebas_neue.className} bg-my-bg min-w-[20rem] w-max h-20 px-8 rounded text-white justify-start text-6xl flex items-center`}>{CaseData?.name}</h3>
                            <h3 className={`${bebas_neue.className} bg-my-bg min-w-[20rem] w-max h-20 px-8 rounded text-white justify-center text-6xl flex items-center`}>{CaseData?.name}</h3>
                            <h3 className={`${bebas_neue.className} bg-my-bg min-w-[20rem] w-max h-20 px-8 rounded text-white justify-end text-6xl flex items-center`}>{CaseData?.name}</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className={`${bebas_neue.className} text-6xl md:text-[8vw] text-black leading-none md:hidden`}>{CaseData?.name}</h4>
                            <h4 className={`${bebas_neue.className} text-4xl md:text-[8vw] text-neutral-950 leading-none`}>About project</h4>
                            <div className="flex flex-col md:flex-row w-full gap-5 text-black text-sm">
                                <p className='flex-1'>
                                    {CaseData?.left}
                                </p>
                                <p className="flex-1">
                                    {CaseData?.right}
                                </p>
                            </div>
                        </div>




                    </div>
                    <div className="w-full grid grid-cols-4 gap-5 mt-16 md:mt-32">

                        <div className="col-span-4 md:col-span-3 grid grid-cols-3 gap-5 rounded-l-[100px] rounded-r-3xl  md:border-2 border-black md:border-r-0">

                            <div className="col-span-3 md:col-span-2 md:p-8 w-full">
                                <img src={CaseData?.img} alt={CaseData?.name} className='w-full rounded-3xl md:rounded-[70px]' />
                            </div>

                            <div className="col-span-3 md:col-span-1 grid grid-cols-1 gap-5">
                                <div className="col-span-1 bg-black hover:bg-white border-2 border-black hover:text-black transition-all duration-500 rounded-3xl rounded-tl-[70px] items-center justify-center flex flex-col p-4">
                                    <h4 className={`${bebas_neue.className} text-5xl md:text-[5vw] lg:text-7xl text-center`}>THEME</h4>
                                    <p className='text-xl text-center '>{CaseData?.theme}</p>
                                </div>
                                <Link href={'/services'} className="col-span-1 bg-black hover:bg-white border-2 border-black hover:text-black transition-all duration-500 rounded-3xl rounded-bl-[70px] flex flex-col items-center justify-center p-4 md:py-0 ">
                                    <h4 className={`${bebas_neue.className} text-5xl md:text-[5vw] lg:text-7xl text-center `}>Services</h4>
                                    <p className='md:text-md'>
                                        {CaseData?.services?.map(service => (
                                            <>
                                                {service}
                                                <br />
                                            </>
                                        ))}

                                    </p>
                                </Link>

                            </div>

                        </div>

                        <div className="col-span-4 md:col-span-1 grid grid-cols-1 gap-5">
                            <div className="col-span-1 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 rounded-full flex flex-col items-center justify-center p-4 text-black">
                                <h4 className={`${bebas_neue.className} text-5xl md:text-[5vw] lg:text-7xl`}>Duration</h4>
                                <p className='text-xl'>{CaseData?.duration}</p>
                            </div>
                            <div className="col-span-1 bg-black hover:bg-white border-2 border-black hover:text-black transition-all duration-500 rounded-3xl rounded-br-[70px] flex flex-col justify-center items-center p-4">
                                <h4 className={`${bebas_neue.className} text-5xl md:text-[5vw] lg:text-7xl text-center `}>Budget</h4>
                                <p className='text-xl text-center'>{CaseData?.budget}</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex flex-col text-black gap-2 mt-16">
                        <hr />
                        {CaseData?.special ?
                            <>
                                <h3 className={`${bebas_neue.className} text-6xl mt-4 leading-none`}>{CaseData?.special.title}</h3>
                                <p>{CaseData?.special.data}</p>
                            </>
                            : null}

                        <h3 className={`${bebas_neue.className} text-6xl mt-4 leading-none`}>Approach</h3>
                        <p>{CaseData?.approach}</p>

                        <h3 className={`${bebas_neue.className} text-6xl mt-4 leading-none`}>Impact</h3>
                        <p>{CaseData?.impact}</p>

                        <h3 className={`${bebas_neue.className} text-6xl mt-4 leading-none`}>Results</h3>
                        <p>{CaseData?.results}</p>
                    </div>

                </div>

            </div>

            <div className="bg-my-bg py-6 relative">
                <FooterLinks />

                <Footer />
            </div>
        </>
    )
}
