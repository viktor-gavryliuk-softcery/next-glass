'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaTelegram, FaLinkedin, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

const nav = [
  {
    name: 'cases',
    href: '/cases',
  },
  {
    name: 'team',
    href: '/team',
  },
  {
    name: 'services',
    href: '/services',
  },
  {
    name: 'partners',
    href: '/partners',
  },
  {
    name: 'vacancies',
    href: '/vacancies',
  },
];

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/adscontrol/',
    Icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ads.control?igshid=YmMyMTA2M2Y=',
    Icon: FaInstagram,
  },
  {
    name: 'X-Twitter',
    href: 'https://twitter.com/adscontrol?s=21&t=P7HYfqBbYDIO-55Aso148Q',
    Icon: FaXTwitter,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/adscontrol_manager',
    Icon: FaTelegram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@ads.control?_t=8b4cfebxk05&_r=1',
    Icon: FaTiktok,
  },
];

type MenuProps = {
  isMenuOpen: boolean;
};

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
      {
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <div className='fixed z-20 top-0 left-0 w-full h-screen  bg-neutral-300 flex items-stretch'>
            <img
              src='/octopus.gif'
              alt='octodaddy'
              className='min-h-full min-w-full fixed top-0 right-0 object-cover object-right hidden xl:block'
            />

            <div className='z-50  my-20 w-full flex items-center text-my-bg px-[7vw]'>
              <ul className=' max-w-5xl flex flex-col items-start justify-start '>
                {nav.map((link, index, arr) => (
                  <li
                    className='relative'
                    key={index}>
                    <Dialog.Close asChild>
                      <Link
                        href={link.href}
                        className='flex items-center gap-3 uppercase text-4xl sm:text-5xl lg:text-6xl overflow-hidden hover:scale-105 hover:text-violet transition-all duration-300'>
                        <div className='bg-my-bg w-2 md:w-3 h-2 md:h-3 rounded-full' />

                        <motion.span
                          initial={{ y: -70 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.2, duration: 0.3 }}>
                          {link.name}
                        </motion.span>
                      </Link>
                    </Dialog.Close>
                    {index != arr.length - 1 ? (
                      <div
                        className={` bg-my-bg w-[2px] z-20 md:h-10 h-6 max-h-[3vh] rounded relative top-[0.1rem] left-1`}
                      />
                    ) : (
                      ''
                    )}
                  </li>
                ))}
              </ul>
              <div className='socials absolute bottom-[12vh] md:left-20 left-7 flex items-center'>
                <div className='bg-my-bg w-2 md:w-3 h-2 md:h-3 mr-3 md:mr-10' />

                {socials.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='uppercase mr-2 md:mr-4 text-md md:text-2xl text-black'>
                    {/* {link.name} */}

                    <link.Icon
                      className='p-2 rounded text-black hover:scale-105 hover:text-lime hover:bg-my-bg transition-all duration-700'
                      size={48}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default Menu;
