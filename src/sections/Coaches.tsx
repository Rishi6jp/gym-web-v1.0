"use client"

import Coach1 from "@/styles/assets/coach1.png"
import Coach2 from "@/styles/assets/coach2.jpg"
import Coach3 from "@/styles/assets/coach3.png"
import Coach4 from "@/styles/assets/coach4.png"
import {motion} from 'framer-motion'
import {  AnimatePresence } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export const Coaches = () => {
const [page, setPage] = useState(0)

const pagePerView = 4;

const start = page * pagePerView;
const end = start + pagePerView;
const viewPage = data.slice(start, end)

const totalPage = Math.ceil(data.length/pagePerView)

return ( 
<div className="bg-grayer px-50 pt-20 space-y-10 pb-20 text-white">
    <div className="space-y-4">
        <div className="tracking-wider text-5xl font-heading text-white">OUR BEST COACHES</div>
            <div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsa possimus!</div>
                <div>ipsum quae molestias cupiditate impedit laboriosam earum modi </div>
            </div>
            <div>
                <AnimatePresence mode="wait">
                    <motion.div
                    key={page}
                    initial={{opacity: 0, x:50}}
                    animate={{opacity: 1, x:0}}
                    exit={{opacity: 0, x:-50}}
                    className="h-auto flex justify-center w-auto items-center gap-4"
                    >
                        {viewPage.map((d,i) => (
                            <div className=" h-auto">
                                <CoachCard key={i} {...d}/>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex gap-3 justify-center">
                {Array.from({ length: totalPage}).map((_,i) => (
                    <div>
                        <button
                        onClick={() => setPage(i)}
                        className={`h-3 w-3 rounded-full ${i==page ? "bg-black/50" : "bg-white"}`}
                        ></button>
                    </div>
                ))}
            </div>

        </div>
</div>
)
}

interface CardProp {
    img: StaticImageData
    name: string
    role: string
}

const CoachCard = ({ img, name, role}: CardProp) => {
    return <div>
        <div>
            <Image src={img} alt={name} width="" height="" className="h-64 w-60 object-cover overflow-hidden rounded-2xl"/>
        </div>
        <div>
            <div className="font-bold text-2xl">{name}</div>
            <div className="text-white/50">{role}</div>
        </div>
    </div>
}

const data = [
    {
        img: Coach1,
        name: "Jane Cooper",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach2,
        name: "Broklyn Simmons",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach3,
        name: "Savannah Nguyen",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach4,
        name: "Kathryn Murphy",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach1,
        name: "Jane Cooper",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach2,
        name: "Broklyn Simmons",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach3,
        name: "Savannah Nguyen",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach4,
        name: "Kathryn Murphy",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach1,
        name: "Jane Cooper",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach2,
        name: "Broklyn Simmons",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach3,
        name: "Savannah Nguyen",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach4,
        name: "Kathryn Murphy",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach1,
        name: "Jane Cooper",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach2,
        name: "Broklyn Simmons",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach3,
        name: "Savannah Nguyen",
        role: "CROSSFIT COACH"
    },
    {
        img: Coach4,
        name: "Kathryn Murphy",
        role: "CROSSFIT COACH"
    },
    
]