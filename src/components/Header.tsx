import Image from "next/image"
import Link from "next/link"
import CustomBurgerIcon from "./CustomBurgerIcon"

export default () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent border-red-500 z-10 flex justify-center align-middle py-4 ">
            <Link href={'/'} >
                <Image src={'/logo.svg'} width={100} height={100} alt="logo" className="h-12" />
            </Link>
            <CustomBurgerIcon />
        </header>
    )
}