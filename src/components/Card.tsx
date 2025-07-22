import { ArrowUpRight } from "@/styles/icons/ArrowUpRight"
import Image, { StaticImageData } from "next/image"


interface CardProp {
    img:  StaticImageData
    heading: string
    about: string
}

export const Card = ({img, heading, about}: CardProp) => {
    const shouldTruncate = about.length > 100 ? about.slice(0,100) + "..." : about
    
    return (
        <div className="bg-greenish h-70 p-4 rounded-2xl">
            <div><Image src={img} alt="" width={80} height={80}/></div>
            <div className="font-heading tracking-wider text-lg">{heading}</div>
            <div>{shouldTruncate}</div>
            <div> 
                <div className="font-heading pt-3 text-sm tracking-wider flex items-center">LEARN MORE <div className="pl-2"><ArrowUpRight/></div></div>
                <div></div>
            </div>
        </div>
    )
}