import { Hamburger } from "@/styles/icons/Hamburger"
import { Message } from "@/styles/icons/Message"
import { Search } from "@/styles/icons/Search"

export const Navbar = () => {
    return(
        <nav className="flex justify-between text-white items-center">
            <div className="font-heading tracking-wider text-xl">GYMTEAM</div>
            <div className="flex space-x-3">
                <div>Home</div>
                <div>Shop</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
            <div className="flex space-x-3">
                <div>
                    <Search/>
                </div>
                <div>
                    <Message/>
                </div>
                <div>
                    <Hamburger/>
                </div>
            </div>
        </nav>
    )
}