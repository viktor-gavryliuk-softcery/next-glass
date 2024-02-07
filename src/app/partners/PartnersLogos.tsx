'use client'
import partnersData from "@/data/partners";
import { useEffect, useRef, useState, useCallback } from "react";

import useDynamicDimensions from "@/hooks/useDynamicDimensions";

import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Runner } from 'matter-js';

const PartnersLogos = () => {
    const { dimensions, boxRef } = useDynamicDimensions();

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engine = useRef(Engine.create({}, {}));


    useEffect(() => {

        if (!dimensions.width || !dimensions.height) return;

        const render = Render.create({
            element: boxRef.current!,
            engine: engine.current,
            canvas: canvasRef.current!,
            options: {
                width: dimensions.width,
                height: dimensions.height,
                background: "#121212",
                wireframes: false,
                hasBounds: true,
            },
        });
        const initMatterJS = () => {
            // Update the existing scene with new dimensions
            Render.setPixelRatio(render, window.devicePixelRatio);

            // Add mouse interaction
            const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine.current, {
                mouse,
                constraint: {
                    //@ts-ignore
                    render: {
                        visible: false,
                    },
                },
            });

            mouseConstraint.mouse.element.removeEventListener('mousewheel',
                // @ts-ignore
                mouseConstraint.mouse.mousewheel
            );
            mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll',
                // @ts-ignore
                mouseConstraint.mouse.mousewheel
            );

            // Add the mouse constraint to the world
            World.add(engine.current.world, mouseConstraint);

            // boundaries
            World.add(engine.current.world, [
                Bodies.rectangle(dimensions.width / 2, -10, dimensions.width, 20, { isStatic: true, render: { visible: false } }),
                Bodies.rectangle(-10, dimensions.height / 2, 20, dimensions.height, { isStatic: true, render: { visible: false } }),
                Bodies.rectangle(dimensions.width / 2, dimensions.height + 10, dimensions.width, 20, { isStatic: true, render: { visible: false } }),
                Bodies.rectangle(dimensions.width + 10, dimensions.height / 2, 20, dimensions.height, { isStatic: true, render: { visible: false } })
            ])

            const multiplier: number = Math.min(0.75, window.innerWidth / 1280);

            partnersData.map((p, index, array) => {
                const rows = 3;
                const cols = Math.ceil(array.length / rows);

                // @ts-ignore
                const cellWidth = canvasRef.current.clientWidth / cols;
                // @ts-ignore
                const cellHeight = p.radius * multiplier * 2;

                const rowIndex = Math.floor(index / cols);
                const colIndex = index % cols;

                const x = rowIndex % 2 ? colIndex * cellWidth + cellWidth / 2 : colIndex * cellWidth + cellWidth / 2;
                const y = rowIndex * cellHeight + cellHeight / 2;

                const circle = Bodies.circle(
                    x,
                    y,
                    p.radius * multiplier,
                    {
                        frictionAir: 0.001,
                        render: {
                            sprite: {
                                texture: p.options.texture,
                                xScale: p.options.xScale * multiplier,
                                yScale: p.options.yScale * multiplier
                            }
                        }
                    }
                )


                World.add(engine.current.world, circle)
            })
        }

        Engine.run(engine.current)
        Render.run(render)

        initMatterJS();

        return () => {
            Render.stop(render);
            World.clear(engine.current.world, false);
            Engine.clear(engine.current);
            render.canvas.remove();
            render.textures = {};
        }
    }, [dimensions, boxRef]);


    return (
        <div className="mx-auto max-w-7xl w-full h-[100vh] absolute top-0  md:relative md:-mb-[30vh] md:-top-[35vh] md:h-[62rem]" ref={boxRef} >
            <canvas ref={canvasRef} />
        </div>
    )
}

export default PartnersLogos;