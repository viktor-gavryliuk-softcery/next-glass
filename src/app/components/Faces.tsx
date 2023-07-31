import { Html } from '@react-three/drei';
import Image from 'next/image';
// backdrop-blur-lg bg-white/30

const Front = () => <Html position={[0, 0, 5.01]} transform occlude >

    <div className="flex flex-col gap-2 justify-center px-3 h-96 w-96 ">
        <div className='flex gap-2'>
            <div className="">
                <Image src="/cases.jpg" alt="cases" className='tile' width={250} height={250} />
            </div>
            <div className="">
                <Image src="/team.jpg" alt="team" className='tile' width={250} height={250} />
            </div>
        </div>

        <div>
            <Image src="/service.png" alt="services" className='tile' width={250} height={250} />
        </div>
    </div>
</Html>

const Right = () => <Html position={[5.01, 0, 0]} transform occlude rotation-y={1.55} >
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 px-3 h-96 w-96 '>
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
</Html>

const Back = () => <Html position={[-5.01, 0, 0]} transform occlude rotation-y={4.7} >
    <div className='py-10 px-3 h-96 w-96 '>
        <Image src="/metabody.jpg" alt="meta" className='tile' width={250} height={250} />
    </div>
</Html>

const Left = () => <Html position={[0, 0, -5.01]} transform occlude rotation-y={3.13}>
    <div className='grid grid-cols-12 grid-rows-2 gap-2 py-10 px-3 h-96 w-96'>
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

</Html>


export { Front, Right, Back, Left };