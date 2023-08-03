import dynamic from 'next/dynamic'
import Loading from "@/app/loading";

const Scene = dynamic(() => import('@/components/Scene'), {
  loading: () => <Loading />
});

// import Scene from '@/app/components/Scene';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { fontGrotesk } from './fonts';


export default function Home() {
  return (
    <main className='min-h-[600vh]'>
      <Scene />
      <Header />
      <h1 className={`text-4xl lg:text-7xl  text-slate-200 uppercase fixed bottom-28 md:bottom-[15vh] left-10 sm:left-20 ${fontGrotesk.className}`}>
        marketing
        <br />
        for <span className='text-my-lime'>web3</span>
      </h1>
      <Footer />
    </main>
  )
}
