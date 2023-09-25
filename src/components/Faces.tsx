import { ReactElement, useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import Image from 'next/image';
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
            <div className="w-96 h-96 px-3 ">
                {children}
            </div>
        </Html>
    )
}

const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

const Front = () => <Face position={[0, 0, -cubeSize]} rotation={degreesToRadians(180)} >
    <div className="flex flex-col gap-2 justify-center face">
        <div className='flex gap-2'>
            <div className="">
                <Image src="/cases.jpg" alt="cases" className='tile' width={250} height={250} />
            </div>
            <Link href='/team'>
                <Image src="/team.jpg" alt="team" className='tile' width={250} height={250} />
            </Link>
        </div>

        <Link href='/service'>
            <Image src="/service.png" alt="services" className='tile' width={250} height={250} />
        </Link>
    </div>
</Face>


const Right = () => <Face position={[-cubeSize, 0, 0]} rotation={degreesToRadians(270)}>
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 face'>
        <div className="col-span-5 bg-black tile ">
        </div>
        <div className="col-span-7 bg-violet-600 tile ">
        </div>
        <div className="col-span-7 ">
            <Image src="/nft.jpg" alt="nft" className='tile' width={250} height={250} />
        </div>
        <div className="col-span-5 ">
            <Image src="/feedback.jpg" alt="nft" className='tile' width={250} height={250} />
        </div>
    </div>
</Face>

const Back = () => <Face position={[0, 0, cubeSize]} rotation={degreesToRadians(0)}>
    <div className='py-10 face'>
        <Image src="/metabody.jpg" alt="meta" className='tile' width={250} height={250} />
    </div>
</Face>

const Left = () => <Face position={[cubeSize, 0, 0]} rotation={degreesToRadians(90)}>
    <div className='grid grid-cols-11 grid-rows-2 gap-2 py-10 face'>
        <div className="col-span-4 bg-black tile "></div>
        <div className="col-span-7 bg-[#d2d1d1] tile "></div>
        <div className="col-span-11 bg-[#6107c7] tile"></div>
    </div>
</Face>







export { Front, Right, Back, Left };