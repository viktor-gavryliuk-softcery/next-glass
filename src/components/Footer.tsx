import Link from "next/link";
import { montserrat } from '../app/fonts'

export default function Footer() {
    return <footer className={`fixed bottom-0 left-0 w-full ${montserrat.className}`}>
        <div className="text-sm sm:text-base border-t-2 border-slate-200 max-w-7xl h-[10vh] mx-auto flex flex-col-reverse md:flex-row justify-center align-middle sm:justify-between p y-3 md:p y-6 px-5 md:px-24 gap-1">
            <div className="flex align-middle justify-center">
                <p className="text-center flex items-center ">2023 ads control. All rights reserved</p>
            </div>
            <div className='uppercase flex gap-4 text-center justify-center align-middle'>
                <Link href='/' className="flex items-center">terms of use</Link>
                <Link href='/' className="flex items-center">privacy policy</Link>
            </div>
        </div>
    </footer>;
}
