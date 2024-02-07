'use client';
import { InfoCircledIcon, ListBulletIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { BsTelephone } from 'react-icons/bs';

import { setActivePage } from '@/store/faqSlice';
import type { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface TabProps {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  iconClassName?: string;
}

interface TabData extends TabProps {
  iconClassName: string;
}

const tabsData: TabData[] = [
  {
    icon: <QuestionMarkCircledIcon />,
    label: 'Faq',
    iconClassName: 'w-full h-full flex items-center justify-center p-2',
  },
  {
    icon: <BsTelephone />,
    label: 'Contacts',
    iconClassName: 'w-full h-full flex items-center justify-center p-3',
  },
  {
    icon: <ListBulletIcon />,
    label: 'Offers',
    iconClassName: 'w-full h-full flex items-center justify-center p-3',
  },
  {
    icon: <InfoCircledIcon />,
    label: 'Support',
    iconClassName: 'w-full h-full flex items-center justify-center p-3',
  },
];

const Tab = ({ icon, label, onClick, isActive, iconClassName }: TabProps) => (
  <button
    onClick={onClick}
    className='flex flex-col justify-center items-center  gap-2'>
    <div className={`tab_bullet ${isActive ? 'bg-lime text-black' : 'text-lime'}`}>
      {React.cloneElement(icon, { className: `icon ${iconClassName || ''}` })}
    </div>
    <span className='text-lime text-center w-full'>{label}</span>
  </button>
);

export const TabPanel = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state: RootState) => state.faq.activePage);

  const handleTabClick = (index: number) => {
    dispatch(setActivePage(index));
  };

  return (
    <div className='max-w-3xl w-full mx-auto flex justify-center gap-4 p-8'>
      {tabsData.map((tab, index) => (
        <Tab
          key={index}
          icon={tab.icon}
          label={tab.label}
          iconClassName={tab.iconClassName}
          onClick={() => handleTabClick(index)}
          isActive={activePage === index}
        />
      ))}
    </div>
  );
};
