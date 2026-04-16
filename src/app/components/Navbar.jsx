import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/logo.png";
import NavLink from "./NavLink";
import { RiHome2Line } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";

const Navbar = () => {
    return (
        <nav>
            <div className="bg-base-100 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex-1">
                        <Link href='/'>
                            <Image src={logo} alt="Keen Keeper"/>
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink href="/"><RiHome2Line className="font-bold text-2xl"/>Home</NavLink></li>
                            <li><NavLink href="/timeline"><LuClock3 className="font-bold text-2xl"/>Timeline</NavLink></li>
                            <li><NavLink href="/stats"><GoGraph className="font-bold text-2xl"/>Stats</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;