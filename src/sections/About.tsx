"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Card } from "@/components/Card"
import Barbell from "@/styles/assets/barbell.png"
import Gripper from "@/styles/assets/griper-last.png"
import Sipper from "@/styles/assets/siper.png"
import about from "@/styles/assets/about.jpg"
import Image from "next/image"
import Fem from "@/styles/assets/fem.jpg"
import DeadLift from "@/styles/assets/DeadLift.jpg"
import { useState } from "react"
import { ArrowLeftCircle } from "@/styles/icons/ArrowLeftCircle"
import { ArrowRightCircle } from "@/styles/icons/ArrowRightCircle"



export const About = () => {
    const [page, setPage] = useState(0);

    const pagePerView = 3;

    const start = page * pagePerView
    const end = start + pagePerView
    const viewedPage = data.slice(start, end)

    const totalPage = Math.ceil(data.length/pagePerView)
    return(
        <div className="bg-black pt-10 space-y-20 pb-20 text-white">
            <div className="">
                <div className=" px-50 tracking-wider text-5xl font-heading text-white">WHY CHOOSE US</div>
                    <div className="px-30 flex justify-center items-center gap-4">
                        <div onClick={()  => {
                            if(page==0){
                                setPage(totalPage-1)
                            }else {
                                setPage(r => (r-1)%totalPage) 
                            }
                        }}>
                            <ArrowLeftCircle/>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                            key={page}
                            initial = {{ opacity: 0, x: 50}}
                            animate= {{ opacity: 1, x: 0}}
                            exit={{ opacity: 0, x:-50}}
                            transition={{ duration:0.2}}
                            className="pt-6 flex gap-4 text-black">
                                {viewedPage.map((d,i) => (
                                    <Card key={i} {...d}/>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                        <div onClick={()  =>  setPage(r => (r+1)%totalPage)}>
                           <ArrowRightCircle/> 
                        </div>
                        
                    </div>

                    <div className="flex justify-center gap-3 pt-4">
                        {Array.from({ length: totalPage}).map((_, i) => (
                            <button
                            onClick={() => setPage(i)}
                             className = {`rounded-full w-3 h-3 ${i == page ? "bg-white": "bg-gray-400"}`}/>
                        )
                        )}
                    </div>
            </div>
            <div className="space-y-3 mx-50">
                <div className="tracking-wider text-5xl font-heading text-white">ABOUT OUR GYM</div>
                <Image src={about} alt="" width="0" height="0" className="w-full object-cover h-110 object-top rounded-2xl"/>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia amet numquam vel adipisci laboriosam, tenetur nisi, aspernatur enim, nulla non fugit similique pariatur corporis cumque! Provident alias veritatis temporibus.</div>
                    <div className="col-span-1 flex justify-center items-center">
                        <div className="py-3 px-5 bg-greenish font-heading tracking-wider text-black w-fit rounded-xl">10 YEARS</div> 
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 place-content-center items-center">                
                    <div className="col-span-1">
                        <div className="relative h-60 w-60">
                            <div className="absolute inset-0  rounded-full bg-greenish z-0"/>
                            <div className="absolute inset-2 rounded-full bg-black"/>
                            <div className="absolute inset-4 bg-black rounded-full z-10 overflow-hidden">
                                <Image src={Fem} fill alt='fem' className="rounded-full object-cover"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="relative h-60 w-60">
                            <div className="absolute inset-0  rounded-full bg-greenish z-0"/>
                            <div className="absolute inset-2 rounded-full bg-black"/>
                            <div className="absolute inset-4 bg-black rounded-full z-10 overflow-hidden">
                                <Image src={DeadLift} fill alt='fem' className="rounded-full object-cover"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="font-heading tracking-wider text-lg"><div className="text-reder">Lorem ipsum</div>
                         dolor si</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum</div>
                    </div>
                    <div className="col-span-1">
                        <div className="font-heading tracking-wider text-lg"><div className="text-reder">Lorem ipsum</div>
                         dolor si</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum</div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

const data = [
    {
        img: Barbell,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Gripper,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Sipper,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Barbell,
        heading: "MUSCLE BUILDING1",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Gripper,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Sipper,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Barbell,
        heading: "MUSCLE BUILDING2",
        about: "Lorem ipsum dolor, sit amet consectetur adipisidurationcing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Gripper,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    },
    {
        img: Sipper,
        heading: "MUSCLE BUILDING",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quisquam voluptates eum sunt quas, quam dignissimos aliquam vitae"
    }
]