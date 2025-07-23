"use client"

import { Button } from "@/components/Button"
import deadLift from "@/styles/assets/DeadLift.jpg"
import Image from "next/image"
import squat from "@/styles/assets/squat.jpg"
import timetable from "@/styles/assets/schedule.png"
import { useState } from "react"
import {motion, spring} from "framer-motion"
import { Tick } from "@/styles/icons/Tick"



export const Schedule = () =>{
    const [toggle, setToggle] = useState(false)

    return <div className="bg-black text-white pb-20 pt-20 space-y-20">
        <div className="mx-50 text-center space-y-3">
            <div>
                <Image width="0" height="0" alt="" src={timetable}></Image>
            </div>
            <div><Button title="VIEW MORE"/></div>
        </div>
        <div>
            <Image src={deadLift} alt="" width="0" height="0"className="w-full object-cover h-150"/>
        </div>
        <div className="text-center">
            <div className="tracking-wider text-5xl font-heading text-white mb-8">OUR GYM PASSES</div>
            <div className="flex items-center flex-col justify-center space-y-2 mb-5">
                <div className="flex gap-2"><p className={`${toggle ? "text-white/50" : "text-white"} mb-2`}>Monthly</p> / <p className={toggle ? "text-white" : "text-gray-600"}>Yearly</p></div>
                <motion.div
                className="bg-yellow h-4 rounded-full w-9 flex items-center px-0.5"
                onClick={() => setToggle(!toggle)}
                >
                    <motion.div
                    initial={toggle? {translateX:0} : {translateX:18}}
                    animate={toggle? {translateX:18}: {translateX: 0}}
                    transition={{stiffness: 540,damping: 30, type: spring}}
                    
                    className="bg-black h-3.5 w-3.5 rounded-full"
                    >

                    </motion.div>
                </motion.div>
            </div>
            <div className="flex justify-center gap-10">
                <Plan title="CROSSFIT" mPrice={120} yPrice={1299} toggle={toggle}/>
                <div className="mx-8 border-grayer border-1"></div>
                <Plan title="OPEN GYM" mPrice={109} yPrice={999} toggle={toggle}/>
            </div>
        </div>
        <div className="mx-50 border-grayer border-1"></div>
        <div className="mx-50 space-y-10">
        <div className=" tracking-wider text-5xl font-heading text-white">REVIEW FROM CLIENTS</div>
        <div className="relative">
            <Image src={squat} alt="" width="0" height="0" className="w-full h-110 object-cover"/>  
            <div className="absolute right-0 mb-10 mr-10 center-0 h-3/5 rounded-2xl w-3/6 bottom-0  bg-greenish">

            </div> 
        </div>
                     
        </div>
    </div>
}

interface PlanProp {
    title: string
    mPrice: number
    yPrice: number
    toggle: boolean
}

const Plan = ({title, mPrice, yPrice, toggle}: PlanProp) => {
    return(
        <div className="flex flex-col items-center space-y-5">
            <div className="tracking-wider text-2xl font-heading text-white">{title}</div>

            <div className="space-y-10">                
                <div className="flex justify-center items-end">
                    <div className="text-5xl font-bold">
                        {toggle ? yPrice+"$" : mPrice+"$"}
                    </div>
                    <div>
                        {toggle ? "/YR" : "/MO"}
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-1 text-white/50 text-left">
                    <div className="flex gap-2"><Tick/> Lorem ipsum dolor, sit amet </div>
                    <div className="flex gap-2"><Tick/> consectetur adipisicing elit. Minima</div>
                    <div className="flex gap-2"><Tick/> consectetur adipisicing elit. Minima</div>
                    <div className="flex gap-2"><Tick/> Lorem ipsum dolor, sit amet </div>
                </div>
                <Button title="PURCHASE NOW"/>
            </div>

        </div>
    )
}


