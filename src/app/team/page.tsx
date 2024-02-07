'use client';
import Footer from '@/components/Footer';
import FooterLinks from '@/components/FooterLinks';
import { useEffect, useState } from 'react';

import { Swiper as SwiperType } from 'swiper/types';

import { TeamMemberCard, TeamMemberDetails } from '@/app/team/MemberCard';
import { TeamSwiper } from '@/app/team/teamSwiper';

import { mockTeamData } from '@/data/teamData';
import useSmoothScrollTo from '@/hooks/useSmoothScrollTo';

function Team() {
  const [swiper, setSwiper] = useState<SwiperType>();

  const [activePerson, setActivePerson] = useState<number>(1);

  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const scrollToBlock = useSmoothScrollTo();

  const handlePersonClick = (personId: number) => {
    setActivePerson(personId);
    swiper?.slideTo(personId);
  };

  const activePersonData = mockTeamData.find((p) => p.id === activePerson) || mockTeamData[0];

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
        scrollToBlock('#secondScreen');
      }
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTriggerTimer);
    };
  }, [hasScrolled]);

  return (
    <main className='w-full bg-my-bg overflow-hidden'>
      <div className='w-full bg-my-bg  relative z-10 flex items-center justify-center h-screen max-w-screen overflow-hidden '>
        <img
          src='/team.gif'
          draggable='false'
          alt='team octopus'
          className='h-screen w-screen object-cover'
        />
      </div>

      <div
        className='h-fit w-full relative pb-32'
        id='secondScreen'>
        <img
          src={'/teamBG.gif'}
          alt={'team bg'}
          className={'hidden 2xl:block absolute w-screen h-full object-cover'}
        />
        <div className='w-full mx-auto max-w-6xl min-h-screen bg-my-bg relative grid lg:grid-cols-2 top-16 rounded-2xl overflow-hidden'>
          <div className='col-span-1 w-screen sm:hidden block'>
            <TeamSwiper
              activePersonId={activePerson}
              setActiveSlide={setActivePerson}
              swiper={swiper}
              setSwiper={setSwiper}
            />
          </div>

          <TeamMemberDetails
            id={activePersonData?.id}
            describe={activePersonData?.describe}
            image={activePersonData?.image}
            name={activePersonData?.name}
            position={activePersonData?.position}
            rewards={activePersonData?.rewards}
            contacts={activePersonData?.contacts}
          />

          <div className='w-full h-full col-span-1 p-8 pt-24 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 gap-y-8'>
            {mockTeamData.map((p, i) => (
              <TeamMemberCard
                key={i}
                name={p.name}
                src={p.image}
                position={p.position}
                isActive={activePerson === p.id}
                onClick={handlePersonClick}
                id={p.id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='bg-my-bg py-6 relative  z-10'>
        <FooterLinks />

        <Footer />
      </div>
    </main>
  );
}

export default Team;
