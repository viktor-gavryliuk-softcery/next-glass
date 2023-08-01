import localFont from '@next/font/local';
import { Montserrat } from '@next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-montserrat'
})

export const fontGrotesk = localFont({
    display: 'swap',
    preload: true,
    variable: "--font-grotesk",
    src: [
        {
            path: './cy-grotesk.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './cy-grotesk-grand-dark.otf',
            weight: '900',
            style: 'black'
        }
    ]
})