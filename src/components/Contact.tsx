'use client'
import { bebas_neue } from "@/app/fonts";

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from 'yup';

type Inputs = {
    example: string
    exampleRequired: string
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
});


export const Contact = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it


    return <div className="grid grid-cols-2 gap-4 mt-20">
        <div className="col-span-2 lg:col-span-1 h-96 bg-neutral-400 rounded-xl"></div>
        <div className="col-span-2 lg:col-span-1 h-96  rounded-xl flex flex-col justify-between">
            <h2 className={`${bebas_neue.className} text-6xl max-w-xs`}>Get in touch with us</h2>
            <p className="text-sm">and become confident in your... </p>


            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6 items-stretch">

                <input placeholder="Email" className="flex-1 w-1/3 h-12 p-4 rounded-md bg-transparent ring-white ring-1" />
                <input placeholder="Name" className="flex-1 w-1/3 h-12 p-4 rounded-md bg-transparent ring-white ring-1" />
                <button className="flex-1 w-1/3 h-12 flex items-center justify-center rounded-md bg-[#bdff00] text-black text-sm">Get a proposal</button>

            </form>
            <p className="text-xs">Pelig lesk nylåhen netir vön fonotyp pock. Presam nirtad det dida nisat, i astrok. Neren ere syssna, trelig soda muren att faheten dukongar pongen. Kepp rerabunade fägt.</p>
        </div>
    </div>;
};
