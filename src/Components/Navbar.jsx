import { logo, logoNegative } from "../assets/index.js"
import { Button } from "./index.js"
import { useState, useEffect } from "react";

const Navbar = () => {

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full h-[80px] z-30 ${isAtTop ? "bg-transparent text-white" : "bg-white text-dark shadow-xl"} transition-colors duration-300 ease-in-out`}>

            <div className="w-full max-w-[1200px] flex justify-between items-center h-full mx-auto px-8">

                <div className="w-[150px] h-[80%] relative">
                    <img src={logo} loading="lazy" alt="" className={`absolute bottom-0 left-0 transition-opacity duration-300 ease-in-out ${!isAtTop ? 'opacity:100' : 'opacity-0'}`} />
                    <img src={logoNegative} loading="lazy" alt="" className={`absolute bottom-0 left-0 transition-opacity duration-300 ease-in-out ${isAtTop ? 'opacity:100' : 'opacity-0'}`} />
                </div>


                <div className="flex font-raleway font-[600] h-full justify-center items-center">
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral">
                        Home
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral">
                        About
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral">
                        Tour
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral">
                        Shop
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral">
                        Gallery
                    </a>
                </div>

                <Button text={"Book Now"} isFullWidth={false} />

            </div>
        </nav>
    )
}

export default Navbar
