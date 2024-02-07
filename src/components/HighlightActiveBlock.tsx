import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export const HighlightActiveBlock = ({children, className}: {
    children: React.ReactElement[] | React.ReactElement;
    className?: string;
}) => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });


    const opacityProgress = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

    const activeBg = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [
        '#141414',
        '#242424',
        '#424242',
        '#242424',
        '#141414',
    ]);

    const headingColor = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.5,0.6, 0.7, 1], [
        '#7800FF',
        '#7800FF',
        '#bdff00',
        '#bdff00',
        '#bdff00',
        '#7800FF',
        '#7800FF',
    ]);


    return (
        <motion.div
            className={`shadow-neutral-800 shadow-2xl rounded-xl pt-0 md:pt-0 p-4 md:p-8`}
            ref={ref}
            style={{
                opacity: opacityProgress,
                backgroundColor: activeBg,
                color: headingColor
            }}
        >
            {children}
        </motion.div>
    );
};