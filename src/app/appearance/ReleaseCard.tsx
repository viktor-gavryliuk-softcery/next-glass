'use client';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import { ReleaseCardProps } from '@/data/releaseData';


export const ReleaseCard = ({ data }: ReleaseCardProps) => {
    const { imageSrc, altText, date, title, description, linkHref } = data;

    return (
        <div className="border-2 border-black grid grid-rows-7 rounded">
            <Image src={imageSrc} alt={altText} className='w-full h-full row-span-3 object-cover' width={285} height={208} />
            <div className="p-4 flex flex-col text-black row-span-4">
                <span className='text-xs mb-2'>{date}</span>
                <h3 className='uppercase font-bold text-xl'>{title}</h3>
                <p className='text-sm'>{description}</p>
                <Link href={linkHref} className='flex gap-2 mt-2 align-middle items-center hover:text-violet focus:underline'>
                    Learn More
                    <ExternalLinkIcon className='text-violet font-bold' />
                </Link>
            </div>
        </div>
    );
};
