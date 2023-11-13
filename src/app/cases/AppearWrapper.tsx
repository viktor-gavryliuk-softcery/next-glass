'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AppearWrapper = ({ isLeft, children, className }: { isLeft: boolean; children: React.ReactElement; className?: string; }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const { scrollYProgress: parallaxYProgress } = useScroll();

    const opacityProgress = useTransform(scrollYProgress, [0, 0.2, 0.2, 0.9, 1], [0, 1, 1, 1, 0]);
    const leftProgress = useTransform(scrollYProgress, [0, 0.3, 1], isLeft ? [-200, 0, 0] : [200, 0, 0]);
    const y = useTransform(parallaxYProgress, [0, 1], [0, 0]);



    return (
        <motion.div
            className={className}
            ref={ref}
            style={{
                opacity: opacityProgress,
                left: leftProgress,
                y: y
            }}
        >
            {children}
        </motion.div>
    );
};
