

// import Scene from '@/app/components/Scene';
import Footer from '@/components/Footer';


import { fontGrotesk } from '@/app/fonts';


export default function Home() {
    return (
        <main className='w-screen h-screen bg-my-bg'>
            <h1 className={`text-4xl lg:text-7xl  text-slate-200 uppercase fixed bottom-28 md:bottom-[15vh] left-10 sm:left-20 ${fontGrotesk.className}`}>
                <span className='text-lime'>Cases</span>
            </h1>

            <div className='grid grid-cols-12'>
                <span className='text-lime grid-cols-3'>Cases</span>
            </div>

            <div className="absolute bottom-0 mx-auto w-full bg-black">
                <Footer />
            </div>
        </main>
    )
}
