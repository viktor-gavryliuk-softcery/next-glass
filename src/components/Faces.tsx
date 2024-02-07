'use client'
import casesData, { caseProps } from "@/data/casesData";
import useRandomFace from "@/hooks/useRandomFace";
import { Html } from '@react-three/drei';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';

// backdrop-blur-lg bg-white/30

// Define an interface for the props of Face component
interface FaceProps {
    position: [number, number, number];
    rotation?: number;
    children: ReactElement;
}

const cubeSize = 5.05;

const Face = ({ children, position, rotation }: FaceProps) => {
    const [hidden, setHidden] = useState<boolean>(false); // Change the type to boolean and set an initial value

    // useEffect(() => setHidden(false), [])

    // Define the onOcclude function to handle occlusion events
    const handleOcclude = () => {
        setHidden(!hidden); // Update the state based on occlusion status
        return null;
    };

    return (
        <Html position={position}
            rotation-y={rotation}
            transform
            castShadow
            receiveShadow
            occlude
            onOcclude={handleOcclude}
            style={{
                filter: hidden ? 'blur(4px)' : 'none',
                pointerEvents: hidden ? 'none' : 'auto',
            }}>
            <div className="w-96 h-96 px-3">
                {children}
            </div>
        </Html>
    )
}

const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

const Front = () => <Face position={[0, 0, -cubeSize]} rotation={degreesToRadians(180)} >
    <div className="flex flex-col gap-2 justify-start py-8 face">
        <div className='flex gap-2 h-full'>
            <Link href='/cases'>
                <img src="/boxGifs/cases.gif" alt="cases" draggable="false" className='tile' />
            </Link>
            <Link href='/team'>
                <img src="/boxGifs/team.gif" alt="team" draggable="false" className='tile' />
            </Link>
        </div>

        <Link href='/services' className='h-full'>
            <img src="/boxGifs/services.gif" alt="services" draggable="false" className='tile' />
        </Link>
    </div>
</Face>


const Right = () => <Face position={[-cubeSize, 0, 0]} rotation={degreesToRadians(270)}>
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
        <div className="col-span-6">
            <img src="/boxGifs/contacts.gif" alt="contacts" draggable="false" className='tile' />
        </div>
        <Link href={'/vacancies'} className="col-span-6">
            <img src="/vacancies.gif" alt="vacancies" draggable="false" className='tile bg-my-bg' />
        </Link>
        <Link href={'/appearance'} className="col-span-7 ">
            <img src="/boxGifs/appearance.gif" alt="nft" draggable="false" className='tile' />
        </Link>
        <Link href={'/'} className="col-span-5 ">
            <img src="/boxGifs/feedback.gif" alt="nft" draggable="false" className='tile' />
        </Link>
    </div>
</Face>

const Back = () => {
    const [randomTile, setRandomTile] = useState<caseProps>(casesData[0]);

    const { getRandomCase } = useRandomFace();

    useEffect(() => {
        let randomFaceId = setInterval(() => setRandomTile(getRandomCase), 3000)

        return () => {
            clearInterval(randomFaceId)
        }
    }, [])


    return <Face position={[0, 0, cubeSize]} rotation={degreesToRadians(0)}>
        <Link href={`/cases/${randomTile?.slug}`}>
            <div className='py-10 justify-start pt-8 face'>
                <img src={randomTile?.img} alt='1inch' draggable="false" className='tile object-contain w-full' />
            </div>
        </Link>

    </Face>
}

const Left = () => <Face position={[cubeSize, 0, 0]} rotation={degreesToRadians(90)}>
    <div className='grid grid-cols-11 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
        <Link href={'/partners'} className="col-span-11 bg-[#6107c7] tile">
            <img src="/boxGifs/partners.gif" alt="partners" className='tile' draggable={false} />
        </Link>
        <Link href={'/'} className="col-span-5">
            <img src="/boxGifs/faq.gif" alt="faq" className='tile' draggable={false} />
        </Link>
        <div className="col-span-6"
            onClick={() => {
                //@ts-ignore
                Calendly.initPopupWidget({ url: 'https://calendly.com/adscontrol_ceo/30min' });
                return false;
            }}>
            <img src="/boxGifs/bookacall.gif" alt="bookACall" className='tile' draggable={false} />
        </div>
    </div>
</Face>

export { Back, Front, Left, Right };
