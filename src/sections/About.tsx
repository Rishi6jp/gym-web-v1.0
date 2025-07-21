import { Card } from "@/components/Card"
import Barbell from "@/styles/assets/barbell.png"
import about from "@/styles/assets/about.jpg"
import Image from "next/image"
import fem from "@/styles/assets/fem.jpg"
import deadLift from "@/styles/assets/deadLift.jpg"

export const About = () => {
    return(
        <div className="bg-black px-50 pt-10 space-y-10 pb-20 text-white">
            <div>
                <div className="tracking-wider text-5xl font-heading text-white">WHY CHOOSE US</div>
                <div className="pt-6">
                    <Card photo={Barbell} heading="MUSCLE BUILDING" about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus obcaecati sed voluptas quidem doloremque, repudiandae dolorem, tenetur dolore veniam alias pariatur qui in non beatae ut est eveniet earum."/>
                </div>
            </div>
            <div className="space-y-3">
                <div className="tracking-wider text-5xl font-heading text-white">ABOUT OUR GYM</div>
                <Image src={about} alt="" width="" height="" className="w-full object-cover h-110 object-top rounded-2xl"/>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia amet numquam vel adipisci laboriosam, tenetur nisi, aspernatur enim, nulla non fugit similique pariatur corporis cumque! Provident alias veritatis temporibus.</div>
                    <div className="col-span-1 flex justify-center items-center">
                        <div className="py-3 px-5 bg-greenish font-heading tracking-wider text-black w-fit rounded-xl">10 YEARS</div> 
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-3 items-center">
                    <div className="col-span-1">
                        <div className="">
                            <Image src={fem} alt="" width="200" height="5" className="h-50 w-50 object-cover rounded-full "/>
                        </div>
                    </div>
                    <Image src={deadLift} alt="" width="200" height="200" className="h-50 w-50 object-cover rounded-full col-span-1"/>
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
