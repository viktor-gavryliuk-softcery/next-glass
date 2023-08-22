

// import Scene from '@/app/components/Scene';


import { fontGrotesk } from '@/app/fonts';


export default function Home() {
    return (
        <main className='w-screen h-screen'>
            <h1 className={`text-4xl lg:text-7xl  text-slate-200 uppercase fixed bottom-28 md:bottom-[15vh] left-10 sm:left-20 ${fontGrotesk.className}`}>
                <span className='text-my-lime'>Team</span>
            </h1>
        </main>
    )
}
