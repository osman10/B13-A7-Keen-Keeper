import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#244d3f]">
            <div className="container mx-auto mt-[80px]">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="text-center text-white text-5xl font-semibold"><span className="font-extrabold">Keen</span>Keeper</h1>
                    <p className="text-base text-white my-4 text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className="flex flex-col justify-center items-center p-3">
                        <h2 className="font-bold text-xl text-white">Social Links</h2>
                        <div className="flex justify-center items-center py-4 gap-3  mb-5">
                            <a href="#" className="text-black rounded-full bg-white p-2 hover:bg-black hover:text-white transition"><AiFillInstagram /></a>
                            <a href="#" className="text-black rounded-full bg-white p-2 hover:bg-black hover:text-white transition"><FaFacebook /></a>
                            <a href="#" className="text-black rounded-full bg-white p-2 hover:bg-black hover:text-white transition"><BsTwitterX /></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 p-8 border-t-[0.5px] border-[#1a8862] text-white text-center md:text-left">
                    <div><p>&copy; 2026 KeenKeeper. All rights reserved.</p></div>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;