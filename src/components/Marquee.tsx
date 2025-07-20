"use client"

import {motion} from 'framer-motion'

const headlines = [
    "BOXING",
    "PILATES",
    "STRENGTH & CONDITIONING",
    "DANCE",
    "MEDITATION",
  ];

export default function Marquee(){
    return (
        <div>
            <motion.div>
                {[...headlines, ...headlines, ...headlines].map((item, index) => (
                    <div>
                        <p>{item}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}