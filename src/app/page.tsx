import { Hero } from "@/sections/Hero";
import { MorqueeScroll } from "@/components/MorqueeScroll";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { About } from "@/sections/About";
import { Coaches } from "@/sections/Coaches";
import { Schedule } from "@/sections/Schedule";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
   <div>
    <Hero/>
    <div className="mx-0">
      <MorqueeScroll text="🔥 BOXING 🥊 PILATES 🧘‍♀️ STRENGTH 💪 DANCE 💃 MEDITATION 🧘‍♂️" speed={15}/>
    </div>
    <About/>
    <Coaches/>
    <Schedule/>
    <Contact/>
   </div> 
  );
}
