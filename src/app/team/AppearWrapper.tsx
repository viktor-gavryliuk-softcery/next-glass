import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export const AppearWrapper = ({
                                  children,
                                  className,
                                  yMin = 0,
                                  yMax = 0,
                                  xMin = 0,
                                  xMax = 0,
                                  opacityMin = 1,
                                  opacityMax = 1
                              }: {
    children: React.ReactElement | React.ReactElement[],
    className?: string,
    yMin?: number,
    yMax?: number,
    xMin?: number,
    xMax?: number,
    opacityMin?: number,
    opacityMax?: number
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({});

    const y = useTransform(scrollYProgress, [0, 0.4,  0.7, 1], [yMin, 0, 0,  yMax]);
    const x = useTransform(scrollYProgress, [0, 0.4,  0.7, 1], [xMin, 0, 0, xMax]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [opacityMin, 1,1, opacityMax]);

    return (
        <motion.div className={className} ref={ref} style={{x, y, opacity}}>
            {children}
        </motion.div>
    )
}