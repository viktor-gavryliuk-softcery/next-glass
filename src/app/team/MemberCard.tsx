'use client';
import { bebas_neue, fontGrotesk, montserrat } from "@/app/fonts";
import { AppearWrapper } from "@/app/team/AppearWrapper";
import { throttle } from "@/app/utils/throttle";
import { ITeamMember } from "@/data/teamData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsEnvelope, BsLinkedin, BsTelegram } from "react-icons/bs";

export const TeamMemberDetails = ({ name, position, rewards, contacts, describe }: ITeamMember) => {

    const [isMobile, setIsMobile] = useState(true)

    let updateIsMobile = () => {
        setIsMobile(window?.innerWidth < 786);
    }

    updateIsMobile = throttle(updateIsMobile, 30);

    useEffect(() => {
        if (window) {
            window.addEventListener('resize', updateIsMobile);

            updateIsMobile();

        }

        return () => {
            if (window) {
                window.removeEventListener('resize', updateIsMobile);
            }
        }
    }, []);


    return (<div className='w-full  h-full col-span-1 p-8 pt-24 flex flex-col gap-8'>
        <AppearWrapper xMin={-100} opacityMin={0} opacityMax={isMobile ? 1 : 0} yMax={isMobile ? 0 : -200} className={'relative'}>
            <h2 className={`${bebas_neue.className} text-7xl `}> {position}</h2>
            <h2 className={`${fontGrotesk.className} text-3xl text-lime `}> {name}</h2>
        </AppearWrapper>

        <AppearWrapper xMin={-150} opacityMin={0} opacityMax={isMobile ? 1 : 0} yMax={isMobile ? 0 : -175} className={'relative'}>
            <p className={`${montserrat.className} text-sm `}>
                {describe}
            </p>
        </AppearWrapper>

        {/* <AppearWrapper xMin={-200} opacityMin={0} opacityMax={isMobile ? 1 : 0} yMax={isMobile ? 0 : -150} className={'relative'}>
            <h3 className={`${bebas_neue.className} text-6xl `}> Rewards</h3>
        </AppearWrapper>

        <AppearWrapper yMin={250} opacityMin={0} opacityMax={isMobile ? 1 : 0} yMax={isMobile ? 0 : -165} className={'flex gap-4'}>
            {rewards.map((r, i) => (
                <div
                    key={i}
                    className={`${bebas_neue.className} h-20 w-20 bg-neutral-800 rounded-md text-violet flex items-center justify-center text-3xl font-semibold`}>
                    {r}
                </div>
            ))}
        </AppearWrapper> */}
        <AppearWrapper xMin={-200} opacityMin={0} opacityMax={isMobile ? 1 : 0} yMax={isMobile ? 0 : -150} className={'relative'}>
            <h3 className={`${bebas_neue.className} text-6xl `}> Contacts</h3>
        </AppearWrapper>

        <AppearWrapper yMin={250} opacityMin={0} opacityMax={isMobile ? 1 : 0} yMax={isMobile ? 0 : -165} className={'flex gap-4'}>
            <Link
                href={contacts.telegram}
                className="h-20 w-20 bg-neutral-800 rounded-md text-violet flex items-center justify-center text-3xl font-semibold">
                <BsTelegram />
            </Link>
            <Link
                href={contacts.email}
                className="h-20 w-20 bg-neutral-800 rounded-md text-violet flex items-center justify-center text-3xl font-semibold">
                <BsEnvelope />
            </Link>
            <Link
                href={contacts.linkedin}
                className="h-20 w-20 bg-neutral-800 rounded-md text-violet flex items-center justify-center text-3xl font-semibold">
                <BsLinkedin />
            </Link>
        </AppearWrapper>

    </div>);
}
export const TeamMemberCard = (
    { name, position, isActive, onClick, id, src }
        :
        {
            name: string,
            src: string,
            id: number,
            position: string,
            isActive: boolean,
            onClick: (id: number) => void
        }) => {


    return (
        <AppearWrapper yMax={-150} opacityMin={0} opacityMax={0.7} xMin={175} >
            <button
                onClick={() => onClick(id)}
                className={`${isActive ? 'border-2 bg-neutral-800 border-lime shadow-md shadow-lime' : 'bg-neutral-900'} w-full col-span-1 rounded-xl h-96 relative  transition-all cursor-pointer focus:outline-violet focus:ring-0`}>
                <img src={src} alt="" className="h-full w-full rounded-xl object-cover object-right" />
                <div
                    className="rounded-md bg-neutral-800 h-12 absolute -bottom-2 left-[4.33%] w-11/12 z-10 grid grid-cols-2">
                    <p className={`${montserrat.className} h-full flex items-center text-center justify-center col-span-1 font-semibold bg-lime text-neutral-900 rounded-l-md`}>{name}</p>
                    <p className={`${montserrat.className} h-full flex items-center text-center justify-center col-span-1 font-semibold bg-neutral-200 text-neutral-900 rounded-r-md`}>{position}</p>
                </div>
            </button>
        </AppearWrapper>
    )
}