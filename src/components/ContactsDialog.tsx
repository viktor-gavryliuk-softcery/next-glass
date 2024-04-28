'use client';
import { MailIcon } from 'lucide-react';
import { DialogContent } from './ui/dialog';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const ContactsDialog = () => {
  return (
    <DialogContent className='flex flex-col gap-2 justify-start py-8 w-full max-w-4xl h-full max-h-[70vh] backdrop-blur-md'>
      <div className='w-full h-full grid grid-cols-12 gap-2'>
        <div className='col-span-9 flex flex-col p-4 gap-4'>
          <div className='w-full h-full border border-red-600 flex items-center justify-center'>
            <h2 className='text-4xl font-bold text-accent'>Calendly</h2>
          </div>
          <div className='w-full h-full border border-red-600 flex gap-2 p-2'>
            <div className='w-full h-full border border-red-600 flex items-center justify-center'>
              <FaInstagram className='h-20 w-20' />
            </div>
            <div className='w-full h-full border border-red-600 flex items-center justify-center'>
              <FaLinkedin className='h-20 w-20' />
            </div>
          </div>
          <div className='w-full h-full border border-red-600 grid grid-cols-12 p-2 gap-2'>
            <div className='col-span-9 border border-red-600 flex items-center gap-2'>
              <Input placeholder='Email' />
              <Input placeholder='Name' />
            </div>
            <div className='col-span-3 border border-red-600 flex items-center justify-center '>
              <Button>Contact us</Button>
            </div>
          </div>
        </div>
        <div className='col-span-3 flex flex-col p-4 gap-4'>
          <div className='w-full h-full border border-red-600 flex flex-col justify-center items-center'>
            <MailIcon className='h-20 w-20' />
            Send us an email
          </div>
          <div className='w-full h-full border border-red-600 flex flex-col justify-center items-center'>
            <LiaTelegramPlane className='h-20 w-20' />
            @telegram
          </div>
          <div className='w-full h-full border border-red-600 flex flex-col justify-center items-center'>
            <LiaTelegramPlane className='h-20 w-20' />
            @telegram-bot
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
