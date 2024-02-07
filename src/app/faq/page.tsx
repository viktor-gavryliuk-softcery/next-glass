'use client';
import Footer from '@/components/Footer';
import FooterLinks from '@/components/FooterLinks';
import Link from 'next/link';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import store from '@/store/store';
import { Provider } from 'react-redux';

import { TabPanel } from './TabPanel';
import './faq.scss';
import FaqPickedDetails from './faqDetails';

function Faq() {
  return (
    <Provider store={store}>
      <main className='w-full bg-my-bg overflow-hidden'>
        <div className='w-full bg-my-bg  relative z-10 flex items-center justify-center lg:h-screen max-w-screen overflow-hidden mt-14 '>
          <img
            src='/faq.gif'
            draggable='false'
            alt='team octopus'
            className='h-full w-full lg:object-contain'
          />
        </div>

        <div className='w-full'>
          <div className='w-full h-14 bg-lime'>
            <span className='uppercase text-my-bg flex items-center gap-1 py-2 px-6 h-full'>
              <Link href='/'>main</Link>
              <ArrowRightIcon />
              faq
            </span>
          </div>

          <TabPanel />

          <FaqPickedDetails />
        </div>

        <div className='w-full bg-neutral-100'></div>

        <div className='bg-my-bg py-6 relative  z-10'>
          <FooterLinks />

          <Footer />
        </div>
      </main>
    </Provider>
  );
}

export default Faq;
