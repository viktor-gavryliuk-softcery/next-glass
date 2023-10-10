'use client'
import { bebas_neue } from "@/app/fonts";

import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import Link from "next/link";

type Inputs = {
    name: string
    email: string
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
});


export const Contact = (
    { variant }: { variant: 'dark' | "light" }
) => {
    const color = variant === 'dark' ? 'white' : 'black';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        const templateParams = {
            from_name: data.name,
            from_email: data.email
        };

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
            templateParams,
            process.env.NEXT_PUBLIC_PUBLIC_KEY as string)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            }).finally(() => reset())
    }


    return <div className="grid grid-cols-2 gap-4 my-20">
        <div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-4">
            <Link target="_blank" rel="noopener noreferrer" href="https://t.me/adscontrol_bot" className='col-span-1 bg-black rounded-3xl'>
                <img src="/telegram.png" alt="telegram link image" className="h-full w-full object-cover object-left rounded-3xl" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://calendly.com/adscontrol/sayhello" className='col-span-1 bg-violet rounded-3xl'>
                <img src="/calendly.png" alt="calendly link image" className="h-full w-full object-cover object-left rounded-3xl" />
            </Link>

        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
            <h2 className={`${bebas_neue.className} text-${color} text-6xl max-w-xs`}>Get in touch with us</h2>
            <p className={`text-sm text-${color}`}>and become confident in your... </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-6 items-stretch py-2">

                <div className="flex flex-col flex-1 md:w-1/3 ">
                    <input {...register("email")} type="email"
                        placeholder="Email" className={`h-12 p-4 rounded-md bg-transparent border-${color} border-2 ring-0 focus:outline-${color} outline-offset-1 outline-${color} text-${color}`} />
                    <p className="text-red-500  p-1">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col flex-1 md:w-1/3 ">
                    <input {...register("name")}
                        placeholder="Name" className={`h-12 p-4 rounded-md bg-transparent border-${color} border-2 ring-0 focus:outline-${color} outline-offset-1 outline-${color} text-${color}`} />
                    <p className="text-red-500 p-1">{errors.name?.message}</p>
                </div>

                <button className="flex-1 md:w-1/3 p-4 h-12 flex items-center justify-center rounded-md bg-lime text-black text-sm">Get a proposal</button>

            </form>
            <p className={`text-xs text-${color}`}>Pelig lesk nylåhen netir vön fonotyp pock. Presam nirtad det dida nisat, i astrok. Neren ere syssna, trelig soda muren att faheten dukongar pongen. Kepp rerabunade fägt.</p>
        </div>
    </div>;
};
