"use client"

import { Button } from "@/components/Button"
import BackGym from "@/styles/assets/backGym.jpg"
import Gym from "@/styles/assets/gym.jpg"
import Yoga from "@/styles/assets/yoga.png"
import { ArrowLeftCircle } from "@/styles/icons/ArrowLeftCircle"
import { ArrowRightCircle } from "@/styles/icons/ArrowRightCircle"
import { ArrowUpRight } from "@/styles/icons/ArrowUpRight"

import {motion} from 'framer-motion'
import {  AnimatePresence } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export const Blog = () => {
    const [page, setPage] = useState(0)
    
    const pagePerView = 3;
    
    const start = page * pagePerView;
    const end = start + pagePerView;
    const viewPage = data.slice(start, end)
    
    const totalPage = Math.ceil(data.length/pagePerView)
    return<div className="bg-grayer  pt-20 space-y-10 pb-20 text-white text-center">
    <div className="space-y-4">
        <div className="tracking-wider text-5xl font-heading text-white px-50">BLOG AND NEWS</div>
            <div className="px-50">
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsa possimus!</div>
                <div>ipsum quae molestias cupiditate impedit laboriosam earum modi </div>
            </div>
            <div className="flex justify-center items-center gap-5 px-30">
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
                    initial={{opacity: 0, x:150}}
                    animate={{opacity: 1, x:0}}
                    exit={{opacity: 0, x:-150}}
                    transition={{duration:0.3}}
                    className="h-auto flex justify-center w-auto items-center gap-4"
                    >
                        {viewPage.map((d,i) => (
                            <div className=" h-auto">
                                <BlogCard key={i} {...d}/>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                <div onClick={()  =>  setPage(r => (r+1)%totalPage)}>
                                           <ArrowRightCircle/> 
                                        </div>
            </div>
            <div className="flex gap-3 justify-center">
                {Array.from({ length: totalPage}).map((_,i) => (
                    <div>
                        <button
                        onClick={() => setPage(i)}
                        className={`h-3 w-3 rounded-full ${i==page ? "bg-white" : "bg-black/50"}`}
                        ></button>
                    </div>
                ))}
            </div>

        </div>
</div>
}

interface BlogProp {
    img: StaticImageData,
    title: string,
    about: string
}

const BlogCard = ({img, title, about}: BlogProp) =>{
    return <div className="text-left">
            <div>
                <Image src={img} alt={title} className="h-50 w-90 object-cover overflow-hidden rounded-2xl"/>
            </div>
            <div className="mt-2">
                <Button title={title}/>
                <div className="mt-3 mb-2 text-sm">{about}</div>
                <div className="font-heading pt-3 text-sm tracking-wider flex items-center">LEARN MORE <div className="pl-2"><ArrowUpRight/></div></div>
            </div>
        </div>
}

const data = [
    {
        img: Gym,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "NEW ZONE"
    },
    {
        img: BackGym,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "PERSONAL"
    },
    {
        img: Yoga,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "PERSONAL"
    },
    {
        img: Gym,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "NEW ZONE"
    },
    {
        img: BackGym,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "PERSONAL"
    },
    {
        img: Yoga,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "PERSONAL"
    },
    {
        img: Gym,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "NEW ZONE"
    },
    {
        img: BackGym,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "PERSONAL"
    },
    {
        img: Yoga,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores eligendi molestias",
        title: "PERSONAL"
    },
]