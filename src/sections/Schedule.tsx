import { Button } from "@/components/Button"
import deadLift from "@/styles/assets/DeadLift.jpg"
import Image from "next/image"
import squat from "@/styles/assets/images.png"
import timetable from "@/styles/assets/schedule.png"



export const Schedule = () =>{
    return <div className="bg-black text-white pb-20 pt-20 space-y-20">
        <div className="mx-50 text-center space-y-3">
            <div>
                <Image src={timetable}></Image>
            </div>
            <div><Button title="VIEW MORE"/></div>
        </div>
        <div>
            <Image src={deadLift} alt="" width="0" height="0"className="w-full object-cover h-150"/>
        </div>
        <div className="text-center">
            <div className="tracking-wider text-5xl font-heading text-white">OUR GYM PASSES</div>
            <div>
                <div>Monthly / Yearly</div>
                <button type="toggle">he</button>
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