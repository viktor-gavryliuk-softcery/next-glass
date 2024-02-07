'use client'
import { bebas_neue } from '@/app/fonts';
import Footer from '@/components/Footer';
import FooterLinks from '@/components/FooterLinks';
import { motion, useScroll, useTransform } from 'framer-motion';

import PartnersLogos from "@/app/partners/PartnersLogos";
import Image from "next/image";

export default function Partners() {
    const { scrollYProgress } = useScroll({});

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <main className='w-full overflow-hidden bg-my-bg '>
            <div className="w-full rounded-b-3xl relative z-10 overflow-hidden pointer-events-none">
                <motion.div className=" flex w-full h-screen justify-center items-center inner-element" style={{ y }}>
                    <h2 className={`text-[25vw] text-white uppercase ${bebas_neue.className}`}>
                        PARTNERS
                    </h2>
                </motion.div>
            </div>

            <motion.div className="absolute top-0 h-screen w-full z-20 pointer-events-none" style={{ y }}>
                <Image src='/partners.gif' alt='partners' className='h-full w-full object-contain' />
            </motion.div>

            <PartnersLogos />

            <div className=" py-6 relative z-10">
                <FooterLinks />

                <Footer />
            </div>

        </main >
    )
}
