import Link from 'next/link';

import {
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaRegEnvelope,
  FaXTwitter,
} from 'react-icons/fa6';

const FooterLinks = () => (
  <div className='flex justify-between max-w-7xl mx-auto md:px-24 px-12 py-10 gap-y-8'>
    <div className='col-span-1 flex flex-col justify-between'>
      <span className='uppercase'>Contact us</span>
      <div className='icons flex gap-3 items-end'>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://t.me/adscontrol_manager'>
          <FaTelegram
            className='text-white'
            size={32}
          />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:serhii_ceo@adscontrol.io'>
          <FaRegEnvelope
            className='text-white'
            size={32}
          />
        </Link>
      </div>
    </div>
    <div className='col-span-1 flex flex-col items-center md:items-start gap-6'>
      <span className='uppercase'>Follow us</span>
      <div className='icons flex items-end gap-3'>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/ads.control'>
          <FaInstagram
            className='text-white'
            size={32}
          />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.tiktok.com/@ads.control?_t=8b4cfebxk05&_r=1'>
          <FaTiktok
            className='text-white'
            size={32}
          />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/adscontrol?s=21&t=P7HYfqBbYDIO-55Aso148Q'>
          <FaXTwitter
            className='text-white'
            size={32}
          />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/company/adscontrol/'>
          <FaLinkedin
            className='text-white'
            size={32}
          />
        </Link>
      </div>
    </div>
  </div>
);

export default FooterLinks;
