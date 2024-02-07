'use client';

export interface ReleaseCardProps {
    data: {
        thumbnail: string;
        imageSrc: string;
        altText: string;
        date: string;
        title: string;
        description: string;
        linkHref: string;
    };

}
;

export const componentData = {
    thumbnail: '/nft.jpg',
    imageSrc: '/appearance_thumbnail.png',
    altText: 'thumbnail',
    date: 'Global / 23 April',
    title: 'Nft soon',
    description: 'Lorem ipsum dolor sit ametconsectetur. Rutrum ju...',
    linkHref: '/',
};

export const releaseData = [componentData, componentData, componentData, componentData, componentData, componentData, componentData];
