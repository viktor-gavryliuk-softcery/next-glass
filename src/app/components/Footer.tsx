import Link from "next/link";
import { montserrat } from '../fonts'

export function Footer() {
    return <footer className={`fixed bottom-0 left-0 w-full ${montserrat.className}`}>
        <div className="text-sm sm:text-base border-t-2 border-slate-200 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center sm:justify-between p-4 md:p-8 gap-1">
            <div>
                <p className="text-center">2023 ads control. All rights reserved</p>
            </div>
            <div className='uppercase flex gap-4 text-center justify-center'>
                <Link href='/'>terms of use</Link>
                <Link href='/'>privacy policy</Link>
            </div>
        </div>
    </footer>;
}
