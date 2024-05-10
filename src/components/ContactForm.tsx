'use client';
import { bebas_neue } from '@/app/fonts';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type Inputs = {
  name: string;
  email: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const onSubmit: SubmitHandler<Inputs> = async (data) => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
  };
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
    );
    console.log(response.text);
  } catch (error) {
    console.error(error);
  }
};

export const ContactForm = ({ variant }: { variant: 'dark' | 'light' }) => {
  const color = variant === 'dark' ? 'white' : 'black';

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className='grid grid-cols-2 gap-4 my-20'>
      <div className='col-span-2 md:col-span-1 grid grid-rows-2 gap-4 relative'>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://t.me/adscontrol_manager'
          className='h-fit min-h-[100px] md:min-h-[150px] relative col-span-1 bg-black overflow-hidden rounded-lg md:rounded-xl hover:shadow-lg hover:shadow-black transition-all flex items-center justify-center cursor-pointer'>
          <img
            src='/telegram.gif'
            alt='telegram link image'
            className='h-full w-full object-cover object-center absolute'
          />
          <img
            src='/telegram.png'
            alt='telegram link image'
            className='h-full w-full object-cover object-center absolute hover:opacity-0 bg-black'
          />
        </Link>

        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://calendly.com/adscontrol_ceo/30min'
          className='h-fit min-h-[100px] md:min-h-[150px] relative col-span-1 bg-violet overflow-hidden rounded-lg md:rounded-xl hover:shadow-lg hover:shadow-[#7900ff] transition-all flex items-center justify-center cursor-pointer'>
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
      </div>

      <div className='col-span-2 md:col-span-1 flex flex-col justify-start'>
        <h3 className={`${bebas_neue.className} text-${color} text-6xl max-w-xs leading-[0.9em]`}>
          Get in touch with us
        </h3>
        <p className={`text-sm text-${color} mb-4`}>
          Talk to a web3 experts today and get featured as our next big SUCCESS!
        </p>
        {isFormSubmitted ? (
          <>
            <h4 className={`${bebas_neue.className} text-violet text-4xl`}>
              We will contact You within 24 hours
            </h4>
          </>
        ) : (
          <>
            <form
              onSubmit={() => {
                handleSubmit(onSubmit);
                reset();
              }}
              className='flex flex-col md:flex-row gap-6 items-stretch py-2'>
              <div className='flex flex-col flex-1 md:w-1/3 '>
                <input
                  {...register('email')}
                  type='email'
                  placeholder='Email'
                  className={`h-12 p-4 rounded-md bg-transparent border-${color} border-2 ring-0 focus:outline-${color} outline-offset-1 outline-${color} text-${color}`}
                />
                <p className='text-red-500  p-1'>{errors.email?.message}</p>
              </div>

              <div className='flex flex-col flex-1 md:w-1/3 '>
                <input
                  {...register('name')}
                  placeholder='Name'
                  className={`h-12 p-4 rounded-md bg-transparent border-${color} border-2 ring-0 focus:outline-${color} outline-offset-1 outline-${color} text-${color}`}
                />
                <p className='text-red-500 p-1'>{errors.name?.message}</p>
              </div>

              <button className='flex-1 md:w-1/3 p-4 h-12 flex items-center justify-center rounded-md bg-lime text-black text-sm'>
                Get a proposal
              </button>
            </form>
          </>
        )}
        <p className={`text-xs text-${color}`}>
          Launch Your success journey now
          <br />
          Join our growing list of happy clients
        </p>
      </div>
    </div>
  );
};

export const DialogContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className='w-full h-fullgrid grid-cols-12 gap-2'>
      {isFormSubmitted ? (
        <>
          <h4 className={`${bebas_neue.className} text-violet text-4xl`}>
            We will contact You within 24 hours
          </h4>
        </>
      ) : (
        <div className='flex flex-col justify-between'>
          <form
            onSubmit={() => {
              handleSubmit(onSubmit);
              reset();
            }}
            className='flex items-center gap-2'>
            <div className='flex flex-col flex-1'>
              <Input
                {...register('email')}
                type='email'
                placeholder='Email'
                className='h-16 p-4 rounded-md text-neutral-700'
              />
              <p className='text-red-500  p-1'>{errors.email?.message}</p>
            </div>

            <div className='flex flex-col flex-1'>
              <Input
                {...register('name')}
                placeholder='Name'
                className='h-16 p-4 rounded-md text-neutral-700'
              />
              <p className='text-red-500 p-1'>{errors.name?.message}</p>
            </div>

            <Button className='flex-1 h-16 mb-2 bg-violet hover:bg-lime hover:text-black hover:scale-105 transition-all '>
              Contact us
            </Button>
          </form>
          <p className={`text-neutral-200 opacity-70 hidden md:block`}>
            Launch Your success journey now
            <br />
            Join our growing list of happy clients
          </p>
        </div>
      )}
    </div>

    /*   <div className='w-full h-full border border-neutral-50 rounded grid grid-cols-12 p-2 gap-2'>
      <div className='col-span-9 border border-neutral-50 rounded flex items-center gap-2'>
        <Input placeholder='Email' />
        <Input placeholder='Name' />
      </div>
      <div className='col-span-3 border border-neutral-50 rounded flex items-center justify-center '>
        <Button className='bg-violet hover:bg-lime hover:text-black hover:scale-105 transition-all '>
          Contact us
        </Button>
      </div>
    </div> */
  );
};
