import { ReactElement, useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import Link from 'next/link';


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
    <div className="flex flex-col gap-2 justify-start pt-8 face">
        <div className='flex gap-2'>
            <Link href='/cases'>
                <img src="/cases.jpg" alt="cases" draggable="false" className='tile' /* width={250} height={250} */ />
            </Link>
            <Link href='/'>
                <img src="/team.jpg" alt="team" draggable="false" className='tile' /* width={250} height={250} */ />
            </Link>
        </div>

        <Link href='/services'>
            <img src="/service.png" alt="services" draggable="false" className='tile' /* width={250} height={250} */ />
        </Link>
    </div>
</Face>


const Right = () => <Face position={[-cubeSize, 0, 0]} rotation={degreesToRadians(270)}>
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
        <div className="col-span-6">
            <img src="/contacts.png" alt="contacts" draggable="false" className='tile' />
        </div>
        <div className="col-span-6">
            <img src="/vacancies.png" alt="vacancies" draggable="false" className='tile' />

        </div>
        <div className="col-span-7 ">
            <img src="/nft.jpg" alt="nft" draggable="false" className='tile' /* width={250} height={250} */ />
        </div>
        <div className="col-span-5 ">
            <img src="/feedback.jpg" alt="nft" draggable="false" className='tile'/*  width={250} height={250} */ />
        </div>
    </div>
</Face>

const Back = () => <Face position={[0, 0, cubeSize]} rotation={degreesToRadians(0)}>
    <div className='py-10 justify-start pt-8 face'>
        <img src="/1inch.png" alt="1inch" draggable="false" className='tile' /* width={250} height={250} */ />
    </div>
</Face>

const Left = () => <Face position={[cubeSize, 0, 0]} rotation={degreesToRadians(90)}>
    <div className='grid grid-cols-11 grid-rows-2 gap-2 py-10 justify-start pt-8 face'>
        <div className="col-span-11 bg-[#6107c7] tile">
            <img src="/partners.png" alt="partners" className='tile' draggable={false} />
        </div>
        <div className="col-span-5">
            <img src="/faq.png" alt="faq" className='tile' draggable={false} />
        </div>
        <div className="col-span-6"
            onClick={() => {
                //@ts-ignore
                Calendly.initPopupWidget({ url: 'https://calendly.com/adscontrolinfo/30min' });
                return false;
            }}>
            <img src="/bookACall.png" alt="bookACall" className='tile' draggable={false} />
        </div>
    </div>
</Face>







export { Front, Right, Back, Left };