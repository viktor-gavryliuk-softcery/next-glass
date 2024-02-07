import Link from "next/link"

const FooterLinks = () => <div className="flex justify-between max-w-7xl mx-auto md:px-24 px-12 py-10 gap-y-8">
    <div className="col-span-1 flex flex-col justify-between">
        <span className='uppercase'>Contact us</span>
        <div className="icons flex gap-3 items-end">
            <Link target="_blank" rel="noopener noreferrer" href='https://t.me/adscontrol_manager'>
                <img src="/social/Telegram_white.svg" alt="telegram" className='h-8 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='mailto:serhii_ceo@adscontrol.io'>
                <img src="/social/Email_white.svg" alt="mail" className='h-8 w-auto' />
            </Link>
        </div>
    </div>
    <div className="col-span-1 flex flex-col items-center md:items-start gap-6">
        <span className='uppercase'>Follow us</span>
        <div className="icons flex items-end gap-3">
            <Link target="_blank" rel="noopener noreferrer" href='https://instagram.com/ads.control?igshid=YmMyMTA2M2Y='>
                <img src="/social/Instagram_white.svg" alt="instagram" className='h-8 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/@ads.control?_t=8b4cfebxk05&_r=1'>
                <img src="/social/TikTok_white.svg" alt="tiktok" className='h-8 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://twitter.com/adscontrol?s=21&t=P7HYfqBbYDIO-55Aso148Q'>
                <img src="/social/X-Twitter_white.svg" alt="x" className='h-8 w-auto' />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/adscontrol/'>
                <img src="/social/LinkedIn_white.svg" alt="linkedin" className='h-8 w-auto' />
            </Link>
        </div>
    </div>
</div>

export default FooterLinks;