import Image from "next/image"

export default () => {
    return (
        <header className="fixed top-0 left-0 w-full h-6 bg-transparent border-red-500 z-10 flex justify-center align-middle py-2">
            <Image src={'/logo.svg'} width={100} height={100} alt="logo" className="h-20 " />
        </header>
    )
}