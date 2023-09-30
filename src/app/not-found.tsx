import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    // Or a custom loading skeleton component
    return <div className=" flex flex-col items-center justify-center gap-4 w-screen h-screen bg-my-bg">
        <Image src={'/logo.svg'} width={144} height={144} alt="logo" className="h-36" />
        <h1 className="font-black text-my-lime text-4xl sm:text-7xl drop-shadow-lg tracking-tighter te">Page not found</h1>
        <p className="font-black text-slate-200 text-5xl drop-shadow-lg tracking-tighter te">404 error</p>
        <Link href={'/'} className="rounded px-3 py-2 border-2 border-solid border-my-lime text-4xl hover:shadow-my-lime shadow-md">Go to main</Link>
    </div>
}