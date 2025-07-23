"use client"

import { Button } from "@/components/Button"
import deadLift from "@/styles/assets/DeadLift.jpg"
import Image from "next/image"
import squat from "@/styles/assets/images.png"
import timetable from "@/styles/assets/schedule.png"
import { useState } from "react"
import {motion, spring} from "framer-motion"



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
            <div className="tracking-wider text-5xl font-heading text-white">OUR GYM PASSES</div>
            <div className="flex items-center flex-col justify-center space-y-2">
                <div className="flex gap-2"><p className={toggle ? "text-white/50" : "text-white"}>Monthly</p> / <p className={toggle ? "text-white" : "text-gray-600"}>Yearly</p></div>
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
            <div>

            </div>
        </div>
        <div className="mx-50 border-grayer border-1"></div>
        <div className="mx-50 space-y-10">
        <div className="relative tracking-wider text-5xl font-heading text-white">REVIEW FROM CLIENTS</div>
            <Image src={squat} alt="" width="0" height="0" className=" w-full h-130 object-cover"/>  
            <div className=" h-50 w-50 absolute bg-greenish"></div>          
        </div>
    </div>
}

// const Plan = () => {

// }