'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

const nav = [
    {
        name: 'cases',
        href: '/cases'
    },
    {
        name: 'team',
        href: '/team'
    },
    {
        name: 'service',
        href: '/service'
    },
    {
        name: 'nft (soon)',
        href: '/nft'
    },
]

const socials = [
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/company/adscontrol/'
    },
    {
        name: 'inst',
        href: 'https://instagram.com/ads.control?igshid=YmMyMTA2M2Y='
    },
    {
        name: 'twitter',
        href: 'https://twitter.com/adscontrol?s=21&t=P7HYfqBbYDIO-55Aso148Q'
    },
    {
        name: 'telegram',
        href: 'https://t.me/adscontrolweb3'
    },
]

type MenuProps = {
    isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: MenuProps) => {
    useEffect(() => {
        // Toggle body overflow when the drawer opens or closes
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup the effect
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <AnimatePresence>
            {<motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}

            >
                <div className='fixed top-0 left-0 w-full h-screen  bg-white flex items-stretch'>
                    {/* <img src="/octodaddy.jpg" alt="octodaddy"  /> */}
                    <video autoPlay loop height="100%" width="100%" className='min-h-full min-w-full fixed top-0 right-0 object-cover object-right'>
                        <source src="/octopus.mp4" type="video/mp4" />
                    </video>
                    <div className='z-20  my-20 w-full flex items-center text-black px-[7vw]'>
                        <ul className=' max-w-5xl flex flex-col items-start justify-start '>
                            {nav.map((link, index, arr) => (
                                <li className='relative'
                                >
                                    <Dialog.Close asChild>
                                        <Link
                                            href={link.href}
                                            className='flex items-center gap-3 uppercase text-5xl md:text-7xl  transition-all overflow-hidden'>
                                            <div className='bg-my-bg w-2 md:w-3 h-2 md:h-3 rounded-full' />

                                            <motion.span
                                                initial={{ y: -70 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.2, duration: 0.3 }}>
                                                {link.name}
                                            </motion.span>
                                        </Link>
                                    </Dialog.Close>
                                    {index != arr.length - 1 ?
                                        <div className={` bg-my-bg w-[2px] z-20 h-10 rounded relative top-[0.1rem] left-1`} />
                                        :
                                        ''}
                                </li>
                            ))}

                        </ul>
                        <div className="socials absolute bottom-10 md:left-20 left-7 flex items-center">
                            <div className='bg-my-bg w-2 md:w-3 h-2 md:h-3 mr-3 md:mr-10' />

                            {socials.map(link => (
                                <a href={link.href} className='uppercase  mr-2 md:mr-5 text-md md:text-2xl'>{link.name}</a>
                            ))}
                        </div>

                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>

    )
}

export default Menu; 