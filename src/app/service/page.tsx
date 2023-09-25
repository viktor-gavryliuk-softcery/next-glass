import Image from 'next/image';
import Footer from '@/components/Footer';

import { bebas_neue, montserrat } from '@/app/fonts';
import Link from 'next/link';
import { Contact } from '@/components/Contact';

const serviceBlockData = [
    { serviceName: "SMM", href: 'service/smm', className: 'sm:col-span-5 lg:col-span-3' },
    { serviceName: "Display/Target Advertisement", href: 'service/target', className: 'sm:col-span-7 lg:col-span-5' },
    { serviceName: "Consultation & Advisory", href: 'service/consultation', className: 'sm:col-span-7 lg:col-span-4' },
    { serviceName: "Content Strategy Creation & Execution", href: 'service/strategy', className: 'sm:col-span-5 lg:col-span-5' },
    { serviceName: "Community Management", href: 'service/community', className: 'sm:col-span-5 lg:col-span-3' },
    { serviceName: "Influence Marketing & PR", href: 'service/pr', className: 'sm:col-span-7 lg:col-span-4' },
]

const ServiceLink = ({ className, serviceName, href }: { className: string, serviceName: string, href: string }) => {
    return <Link href={href} className={`${className} col-span-12 h-96 bg-neutral-300 hover:bg-lime-400 rounded-xl flex items-end p-6 transition-all`}>
        <div className='flex items-center gap-3'>
            <Image src='/services/smm.svg' width={60} height={60} alt='Srvice Icon' className="bg-black rounded-lg p-2" />
            <h3 className={`${bebas_neue.className} text-2xl lg:text-4xl text-black leading-none`}>{serviceName}</h3>
        </div>
    </Link>
}


export default function Services() {
    return (
        <main className='w-full bg-[#f5f5f4]'>
            <div className="w-full h-screen bg-my-bg rounded-b-[50px]">
                <div className="flex items-center justify-center h-screen w-full absolute max-w-screen overflow-hidden ">
                    <Image src='/servicesGlass.png' width={1920} height={1080} alt='service glass' className=' object-cover' />
                </div>

                <div className="flex w-full h-screen justify-center items-center">
                    <h1 className={`text-[30vw] text-white uppercase ${bebas_neue.className}`}>
                        Service
                    </h1>
                </div>
            </div>
            <div className="min-h-screen p-10 ">
                <div className="flex md:flex-row flex-col items-center flex-nowrap justify-stretch w-full mb-10">
                    <h2 className={`${bebas_neue.className} text-black text-[7vw] md:text-[5vw] mr-5  flex-1`}>Full Service Marketing</h2>
                    <h2 className={`${montserrat.className} rounded-xl text-center bg-black uppercase text-[4vw] md:text-[2.3vw] md:p-5 p-3 flex-1`}>from $4000 + 10% of ad spend</h2>
                </div>
                <div className="grid grid-cols-12 gap-4">

                    {serviceBlockData.map(link => (
                        <ServiceLink href={link.href} className={link.className} serviceName={link.serviceName} />
                    ))}

                </div>

                <Contact />

            </div>
            <div className="bg-my-bg py-6">
                <Footer />
            </div>
        </main>
    )
}
