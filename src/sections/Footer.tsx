import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";


export const Footer = () => {
    return(
        <div className="bg-black text-white  pb-10 pt-20">
            <div className="flex justify-between px-50 mb-10">
                <div className="w-1/5">
                    <div>
                        <div className="font-heading tracking-wider text-xl">GYMTEAM</div>
                        <div>Lorem ipsum dolor sit amet consectetur</div>
                    </div>
                <div className="mt-5 flex gap-4">
                    <FaFacebookF className="text-blue-600" />
                    <FaInstagram className="text-pink-500" />
                    <FaTelegramPlane className="text-sky-500" />
                </div>
                </div>
                <div className=" flex flex-col justify-between items-start text-sm">
                    <div className="text-greenish text-base">About</div>
                    <div>About us</div>
                    <div>Blog</div>
                    <div>Contact</div>
                    <div>Vacancy</div>
                </div>
                <div className=" flex flex-col justify-between items-start text-sm space-y-3">
                    <div className="text-greenish text-base">Services</div>
                    <div>How to work</div>
                    <div>Works</div>
                    <div>Price</div>
                </div>
                <div className=" flex flex-col justify-between items-start text-sm space-y-3">
                    <div className="text-greenish text-base">Support</div>
                    <div>Contact us</div>
                    <div>Our channel</div>
                    <div>Instagram</div>
                    <div>Telegram</div>
                </div>
                <div className=" flex flex-col justify-between items-start text-sm space-y-3">
                    <div className="text-greenish text-base">FAQ</div>
                    <div>Payment</div>
                    <div>Montly Pay</div>
                    <div>Work time</div>
                    <div>More</div>
                </div>

            </div>
            <div>
                <div className="border-t-1 border-gray-600 pt-5"></div>
                <div className="mx-50 text-sm text-gray-600">Copyright 2025 All right reserved</div>
            </div>
        </div>
    )
}