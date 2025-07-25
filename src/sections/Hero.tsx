import { ArrowUpRight } from "@/styles/icons/ArrowUpRight"
import { Button } from "../components/Button"
import { Navbar } from "../components/Navbar"
import { ArrowRightCircle } from "@/styles/icons/ArrowRightCircle"
import { ArrowLeftCircle } from "@/styles/icons/ArrowLeftCircle"
import { MorqueeScroll } from "../components/MorqueeScroll"

export const Hero = () => {
    return (
        <div className=" bg-[url(../styles/assets/hero.jpeg)] bg-cover text-white" >
            <div className=" px-50 pt-8 space-y-20 pb-12 bg-black/30 backdrop-blur-sm">
                <Navbar/>
                <div className="text-center pt-5 space-y-3">
                    <div className="font-heading text-7xl tracking-wider">WORK WITH PROFESSIONALS</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique beatae</div>
                    <div>
                        <div className="space-x-3 flex justify-center items-center">
                            <Button title="START NOW"/>
                            <div className="font-heading tracking-wider flex items-center">LEARN MORE <div className="pl-2"><ArrowUpRight/></div></div>
                        </div>
                    </div>
                    <div className="flex space-x-3 p-10 justify-center">
                        <ArrowLeftCircle/>
                        <ArrowRightCircle/>
                    </div>
                </div>
            </div>
            
        </div>

    )
}