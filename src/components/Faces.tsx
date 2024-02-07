'use client'
import casesData, { caseProps } from "@/data/casesData";
import useRandomFace from "@/hooks/useRandomFace";
import { Html } from '@react-three/drei';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';


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
                <Image width={200} height={240} src="/boxGifs/cases.gif" alt="cases" draggable="false" className='tile' />
            </Link>
            <Link href='/team'>
                <Image width={340} height={240} src="/boxGifs/team.gif" alt="team" draggable="false" className='tile' />
            </Link>
        </div>

        <Link href='/services' className='h-full'>
            <Image width={540} height={240} src="/boxGifs/services.gif" alt="services" draggable="false" className='tile' />
        </Link>
    </div>
</Face>


const Right = () => <Face position={[-cubeSize, 0, 0]} rotation={degreesToRadians(270)}>
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
        <div className="col-span-6">
            <Image src="/boxGifs/contacts.gif" alt="contacts" draggable="false" className='tile' width={270} height={230} />
        </div>
        <Link href={'/vacancies'} className="col-span-6">
            <Image src="/vacancies.gif" alt="vacancies" draggable="false" className='tile bg-my-bg' width={260} height={230} />
        </Link>
        <Link href={'/appearance'} className="col-span-7 ">
            <Image src="/boxGifs/appearance.gif" alt="nft" draggable="false" className='tile' width={308} height={226} />
        </Link>
        <Link href={'/'} className="col-span-5 ">
            <Image src="/boxGifs/feedback.gif" alt="nft" draggable="false" className='tile' width={217} height={226} />
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
                <Image src={randomTile?.img} alt='1inch' draggable="false" className='tile object-contain w-full' width={555} height={480} />
            </div>
        </Link>

    </Face>
}

const Left = () => <Face position={[cubeSize, 0, 0]} rotation={degreesToRadians(90)}>
    <div className='grid grid-cols-11 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
        <Link href={'/partners'} className="col-span-11 bg-[#6107c7] tile">
            <Image src="/boxGifs/partners.gif" alt="partners" className='tile' draggable={false} width={280} height={255} />
        </Link>
        <Link href={'/'} className="col-span-5">
            <Image src="/boxGifs/faq.gif" alt="faq" className='tile' draggable={false} width={240} height={230} />
        </Link>
        <div className="col-span-6"
            onClick={() => {
                //@ts-ignore
                Calendly.initPopupWidget({ url: 'https://calendly.com/adscontrol_ceo/30min' });
                return false;
            }}>
            <Image src="/boxGifs/bookacall.gif" alt="bookACall" className='tile' draggable={false} width={290} height={230} />
        </div>
    </div>
</Face>

export { Back, Front, Left, Right };
