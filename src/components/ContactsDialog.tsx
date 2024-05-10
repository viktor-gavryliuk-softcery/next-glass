'use client';
import { MailIcon, type LucideIcon } from 'lucide-react';
import { DialogContent } from './ui/dialog';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { DialogContactForm } from './ContactForm';

type IconType = typeof LiaTelegramPlane;

const DialogTile = ({
  Icon,
  href,
  label,
}: {
  Icon: LucideIcon | IconType;
  href: string;
  label?: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        'w-full h-full border-4 border-neutral-50 rounded-xl flex flex-col items-center justify-center transition-all text-center text-xs md:text-base p-1',
        active ? 'border-opacity-80 scale-105' : 'border-opacity-50',
      )}>
      <Icon
        className={cn(
          'md:h-20 md:w-20 h-12 w-12 transition-all',
          active ? 'opacity-100' : 'opacity-70',
        )}
      />
      <span className='hidden md:block'>{label}</span>
    </Link>
  );
};

export const ContactsDialog = () => {
  return (
    <DialogContent className='flex flex-col gap-2 justify-start py-8 w-full max-w-4xl h-[70vh]  backdrop-blur-md'>
      <div className='w-full h-full grid grid-cols-12 gap-4 grid-rows-5'>
        <div className='md:col-span-9 col-span-12 flex flex-col gap-4 row-span-4 md:row-span-5'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://calendly.com/adscontrol_ceo/30min'
            className='w-full h-full relative col-span-1 bg-violet overflow-hidden rounded-lg md:rounded-xl hover:shadow-lg hover:shadow-[#7900ff] transition-all flex flex-col items-center justify-center cursor-pointer'>
            <img
              src='/calendly.gif'
              alt='calendly link image'
              className='h-full w-full object-contain object-center absolute'
            />
            <img
              src='/calendly.png'
              alt='telegram link image'
              className='w-full h-full object-contain object-center absolute hover:opacity-0 bg-violet'
            />
          </Link>

          <div className='w-full h-full flex gap-4'>
            <DialogTile
              href='https://www.instagram.com/ads.control'
              Icon={FaInstagram}
              label='Instagram'
            />
            <DialogTile
              href='https://www.linkedin.com/company/adscontrol/'
              Icon={FaLinkedin}
              label='LinkedIn'
            />
          </div>

          <DialogContactForm />
        </div>
        <div className='md:col-span-3 col-span-12 flex md:flex-col gap-4 row-span-1 md:row-span-5'>
          <DialogTile
            href='mailto:serhii_ceo@adscontrol.io'
            Icon={MailIcon}
            label='Send us an email'
          />

          <DialogTile
            href='https://t.me/adscontrol_manager'
            Icon={LiaTelegramPlane}
            label='Manager'
          />
          <DialogTile
            href='https://t.me/adscontrol_bot'
            Icon={LiaTelegramPlane}
            label='@adscontrol_bot'
          />
        </div>
      </div>
    </DialogContent>
  );
};
