'use client'
import Footer from '@/components/Footer';
import FooterLinks from '@/components/FooterLinks';
import { useEffect, useState } from "react";

import { Swiper as SwiperType } from 'swiper/types';

import { TeamMemberCard, TeamMemberDetails } from "@/app/team/MemberCard";
import { TeamSwiper } from "@/app/team/teamSwiper";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";

const mockTeamData = [
    { id: 1, name: 'John Doe', position: 'Founder & CEO', rewards: ['#1', '#2', '#3'] },
    { id: 2, name: 'Jane Doe', position: 'CTO', rewards: ['#4', '#5', '#6'] },
    { id: 3, name: 'Bob Smith', position: 'Lead Developer', rewards: ['#7', '#8', '#9'] },
    { id: 4, name: 'Alice Johnson', position: 'Designer', rewards: ['#10', '#11', '#12'] },
];


function Team() {
    const [swiper, setSwiper] = useState<SwiperType>();

    const [activePerson, setActivePerson] = useState<number>(1);

    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    const scrollToBlock = useSmoothScrollTo();

    const handlePersonClick = (personId: number) => {
        setActivePerson(personId);
    };

    const activePersonData = mockTeamData.find(p => p.id === activePerson) || mockTeamData[0];

    useEffect(() => {
        setActivePerson(1);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        const scrollTriggerTimer = setTimeout(() => {
            if (!hasScrolled) {
                scrollToBlock("#secondScreen");
            }
        }, 8000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTriggerTimer);
        };
    }, [hasScrolled]);

    return (
        <main className='w-full bg-my-bg overflow-hidden'>

            <div className="w-full bg-my-bg  relative z-10 flex items-center justify-center h-screen max-w-screen overflow-hidden ">
                <img src='/team.gif' draggable="false" alt='team octopus' className='h-screen w-screen object-cover' />
            </div>

            <div className='h-fit w-full relative pb-32' id="secondScreen">

                <img src={'/teamBG.gif'} alt={'team bg'} className={'hidden 2xl:block absolute w-screen h-full object-cover'} />
                <div className='w-full mx-auto max-w-6xl min-h-screen bg-my-bg relative grid lg:grid-cols-2 top-16 rounded-2xl overflow-hidden'>

                    <div className="col-span-1 w-screen sm:hidden block">
                        <TeamSwiper activePersonId={activePerson} setActiveSlide={setActivePerson} swiper={swiper} setSwiper={setSwiper} />
                    </div>

                    <TeamMemberDetails name={activePersonData?.name} position={activePersonData?.position} rewards={activePersonData?.rewards} />

                    <div className='w-full h-full col-span-1 p-8 pt-24 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 gap-y-8'>
                        {mockTeamData.map((p, i) => (
                            <TeamMemberCard key={i} name={p.name} position={p.position} isActive={activePerson === p.id} onClick={handlePersonClick} id={p.id} />
                        ))}
                    </div>

                </div>

            </div>

            <div className="bg-my-bg py-6 relative  z-10">
                <FooterLinks />

                <Footer />
            </div>

        </main >
    )
}

export { mockTeamData };
export default Team;