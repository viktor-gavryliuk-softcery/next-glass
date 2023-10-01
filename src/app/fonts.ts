import localFont from '@next/font/local';
import { Montserrat, Bebas_Neue } from '@next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-montserrat'
})
export const bebas_neue = Bebas_Neue({
    subsets: ['latin'],
    weight: ["400"],
    display: "swap",
})

export const fontGrotesk = localFont({
    display: 'swap',
    preload: true,
    variable: "--font-grotesk",
    src: [
        {
            path: '../fonts/cy-grotesk.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/cy-grotesk-grand-dark.otf',
            weight: '900',
            style: 'black'
        }
    ]
})