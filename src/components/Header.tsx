'use client';
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CustomBurgerIcon from './CustomBurgerIcon';
import VectorLogo from './VectorLogo';
import Menu from './Menu';
import { usePathname } from 'next/navigation';
import { useTransform, useScroll, motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll({});
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const visibility = useTransform(scrollY, [0, 300, 300], ['visible', 'visible', "hidden"]);

    const location = usePathname();
    const isClient = typeof window !== 'undefined';

    // Check if we're on the home page ("/") and if the client is being used
    const isHomeAndClient = location === '/' && isClient; // Replace isClient with your actual client check


    return (
        <header className="fixed top-0 left-0 w-full bg-transparent z-30 pointer-events-none flex justify-center align-middle py-4 " >
            <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <motion.div className="pointer-events-auto" style={isHomeAndClient ? { opacity: 1, visibility: 'visible' } : { opacity, visibility }}>
                    <VectorLogo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                    <CustomBurgerIcon isMenuOpen={isMenuOpen} />
                </motion.div>

                <Dialog.Portal>
                    <Dialog.Content asChild onInteractOutside={(e) => { e.preventDefault() }}>
                        <Menu isMenuOpen={isMenuOpen} />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </header >
    )
}

export default Header;