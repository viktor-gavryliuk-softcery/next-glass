import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import { ReleaseType } from '@/data/releaseData';
import { shortify } from '../utils/shortify';

export const ReleaseCard = ({ imageSrc, altText, date, title, description, linkHref }: ReleaseType) => {

    return (
        <div className="border-2 border-black rounded min-h-[370px] max-h-[370px] md:min-h-[430px] md:max-h-[430px] flex flex-col">
            <Image src={imageSrc} alt={altText} className='w-full max-h-44 object-cover' width={285} height={208} />
            <div className="p-4 flex grow flex-col text-black h-full">
                <div className="flex-1 flex flex-col overflow-none text-ellipsis">
                    <span className='text-xs mb-2'>{date}</span>
                    <h3 className='uppercase font-bold text-sm lg:text-lg'>{title}</h3>
                    <p className='text-xs md:text-sm text'>{shortify(description, 120)}</p>
                </div>
                <Link href={linkHref} className='h-6 grow-0 flex gap-2 mt-2 align-middle items-center hover:text-violet focus:underline'>
                    Learn More
                    <ExternalLinkIcon className='text-violet font-bold' />
                </Link>
            </div>
        </div>
    );
};
