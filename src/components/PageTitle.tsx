'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

type PageTitle = {
    children: React.ReactElement
}

const PageTitle = ({ children }: PageTitle) => {


    const { scrollYProgress } = useScroll({
    });

    const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    return (<motion.div
        style={{
            opacity: opacityProgress
        }}
        className='fixed bottom-28 md:bottom-[15vh] left-10 sm:left-20'
    >
        {children}
    </motion.div >)
}

export default PageTitle;