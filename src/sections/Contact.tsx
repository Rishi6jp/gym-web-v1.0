import { Button } from "@/components/Button"

export const Contact = () => {
    return <div className="bg-[url(../styles/assets/ropes.jpeg)] bg-center h-120 ">
        <div className="bg-black/30 text-center flex flex-col items-center justify-center gap-2 text-white h-full">
            <div className="font-heading tracking-wider text-3xl">GET YOUR FIRST TRIAL VISIT</div>
            <div className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. i</div>
            <div className="bg-grayer w-1/3 rounded-full flex justify-between drop-shadow-xl">
                <input type="text" placeholder="johongirov@gmail.com" className="outline-none pl-10"/>
                <Button title="Submit"/>
            </div>
        </div>
    </div>
}