import dynamic from 'next/dynamic'
import Loading from "@/app/loading";
import PageTitle from '@/components/PageTitle'

const Scene = dynamic(() => import('@/components/Scene'), {
  loading: () => <Loading />
});


import { fontGrotesk } from './fonts';


export default function Home() {
  return (
    <main className='min-h-[600vh]'>
      <Scene />
      <PageTitle>
        <h1 className={`text-4xl lg:text-7xl  text-slate-200 uppercase  ${fontGrotesk.className}`}>
          marketing
          <br />
          for <span className='text-my-lime'>web3</span>
        </h1>
      </PageTitle>

    </main>
  )
}
