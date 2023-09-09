'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CustomBurgerIcon from './CustomBurgerIcon';

import VectorLogo from './VectorLogo';
import Menu from './Menu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent z-30 flex justify-center align-middle py-4 ">
            <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <VectorLogo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                <CustomBurgerIcon isMenuOpen={isMenuOpen} />

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