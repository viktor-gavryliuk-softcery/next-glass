'use client'

import Image from "next/image"

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-my-bg">
            <Image src={'/logo.svg'} width={144} height={144} alt="logo" className="h-36" />
            <h1 className=" font-black text-my-lime text-7xl drop-shadow-lg tracking-tighter te">Error :(</h1>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}