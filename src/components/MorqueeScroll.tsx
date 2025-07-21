"use client"

import { useAnimationFrame, useMotionValue, useTransform, wrap, motion } from "framer-motion"
import { div } from "framer-motion/client"
import { useRef } from "react"

interface MorqueeProps {
    text: String,
    speed?: number
}

export const MorqueeScroll = ({ text, speed=50}: MorqueeProps) => {
    const baseX = useMotionValue(0)
    const x = useTransform(baseX, (val) => `${wrap(-100,0, val)}%`)

    const directRef = useRef(1);

    useAnimationFrame((t, delta) => {
        const moveBy = directRef.current * speed * (delta/1000)
        baseX.set(baseX.get() - moveBy);
    })

    return(
        <div className="overflow-hidden whitespace-nowrap w-full bg-greenish py-2">
            <motion.div
                className="flex text-black font-heading gap-8 tracking-wider"
                style={{ x }}
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i}>{text}</span>
                ))}
            </motion.div>
        </div>
    )
}