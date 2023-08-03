'use client'
import React, { useState } from 'react';


export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<button className="w-10 h-10 p-2 rounded flex flex-col justify-between items-end cursor-pointer fixed top-6 right-5 focus:ring-none" onClick={handleBurgerClick}>
        <div className={`w-8 h-[3px] rounded bg-neutral-50 transform transition-all duration-200 ${isMenuOpen ? '-rotate-45 translate-x-1 translate-y-[10px]' : ''}`} />
        <div className={`w-6 h-[3px] rounded bg-neutral-50 transform transition-all duration-200 ${isMenuOpen ? 'opacity-0 -translate-x-4' : 'opacity-100'}`} />
        <div className={`w-8 h-[3px] rounded bg-neutral-50 transform transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-x-1 -translate-y-[11px]' : ''}`} />
    </button>)
}