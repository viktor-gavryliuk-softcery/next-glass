import Loading from '@/app/loading';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  loading: () => <Loading />,
});

import { fontGrotesk } from './fonts';

export default function Home() {
  return (
    <main className='min-h-[600vh] bg-my-bg'>
      <p className='sr-only'>
        ads control, ads, web3, web3 marketing, web3 agency, web3 marketing agency, full cycle
        marketing, marketing agency for web3, web3 projects marketing, strategies for web3 projects,
        marketing strategy fro web3 project, marketing fro crypto projects, web3 crypto projects
        marketing
      </p>
      <p className='sr-only'>
        If you want to create your WEB3 project or crypto NFT project ADS control can definitely
        help you with marketing strategy, traffic, and advertisement. ADS CONTROL is a full-cycle
        marketing agency, that can help your WEB3 or crypto projects grow, it also helps you build
        efficient marketing strategies for your web3 projects. If you are looking for a Marketing
        agency or WEB3 MArketing agency for web3 marketing or building a marketing strategy for your
        web3 or crypto project we are a perfect fit for you.{' '}
      </p>
      <Scene />
      <PageTitle>
        <h1 className={`text-4xl lg:text-7xl  text-slate-200 uppercase  ${fontGrotesk.className}`}>
          marketing
          <br />
          for <span className='text-lime'>web3</span>
        </h1>
      </PageTitle>
      <div className='fixed w-screen bottom-0'>
        <Footer />
      </div>
    </main>
  );
}
