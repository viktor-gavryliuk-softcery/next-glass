import Link from "next/link"

const FooterLinks = () => <div className="flex justify-between max-w-7xl mx-auto md:px-24 px-12 py-10 gap-y-8">
    <div className="col-span-1 flex flex-col items-center md:items-start gap-6">
        <span className='uppercase'>Contact us</span>
        <div className="icons flex gap-3">
            <Link target="_blank" rel="noopener noreferrer" href='https://t.me/adscontrolweb3'>
                <img src="/socials/telegram.png" alt="telegram" className='h-6 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='mailto:serhii_ceo@adscontrol.io'>
                <img src="/socials/mail.png" alt="mail" className='h-6 w-auto' />
            </Link>
        </div>
    </div>
    <div className="col-span-1 flex flex-col items-center md:items-start gap-6">
        <span className='uppercase'>Follow us</span>
        <div className="icons flex gap-3">
            <Link target="_blank" rel="noopener noreferrer" href='https://instagram.com/ads.control?igshid=YmMyMTA2M2Y='>
                <img src="/socials/instagram.png" alt="instagram" className='h-6 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/@ads.control?_t=8b4cfebxk05&_r=1'>
                <img src="/socials/tiktok.png" alt="tiktok" className='h-6 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://twitter.com/adscontrol?s=21&t=P7HYfqBbYDIO-55Aso148Q'>
                <img src="/socials/x.png" alt="x" className='h-6 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/adscontrol/'>
                <img src="/socials/linkedin.png" alt="linkedin" className='h-6 w-auto' />
            </Link>
        </div>
    </div>
</div>

export default FooterLinks;