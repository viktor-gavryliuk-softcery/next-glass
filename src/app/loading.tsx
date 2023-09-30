// import Image from "next/image"

export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="flex flex-col items-center justify-center w-screen h-screen bg-my-bg">
        {/* <Image src={'/logo.svg'} width={144} height={144} alt="logo" className="h-36" /> */}
        <h1 className=" font-black text-my-lime text-7xl drop-shadow-lg tracking-tighter te">Loading...</h1>
    </div>
}