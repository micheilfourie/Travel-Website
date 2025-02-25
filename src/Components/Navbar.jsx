import { logo, logoNegative } from "../assets/index.js"
import { Button } from "./index.js"
import { useState, useEffect } from "react";
import { Bars3Icon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#rememberUs" },
    { name: "Specials", link: "#specialOffers" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
]

const Navbar = () => {

    const [isAtTop, setIsAtTop] = useState(true);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleScrollAndResize = () => {
            setIsAtTop(window.scrollY === 0 && window.innerWidth > 1024);
        };

        window.addEventListener("scroll", handleScrollAndResize);
        window.addEventListener("resize", handleScrollAndResize);

        handleScrollAndResize();

        return () => {
            window.removeEventListener("scroll", handleScrollAndResize);
            window.removeEventListener("resize", handleScrollAndResize);
        };
    }, []);

    return (
        <nav className="w-full">

            <div className={`fixed w-full h-[90px] z-30 ${isAtTop ? "bg-transparent text-white" : "bg-white text-dark shadow-xl"} transition-colors duration-300 ease-in-out`}>

                <div className="w-full max-w-[1200px] flex justify-between items-center h-full mx-auto px-8 max-sm:px-4">

                    <div className="w-[150px] relative">
                        <img src={logo} loading="lazy" alt="" className={`absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 transition-opacity duration-300 ease-in-out ${!isAtTop ? 'opacity:100' : 'opacity-0'}`} />
                        <img src={logoNegative} loading="lazy" alt="" className={`absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 transition-opacity duration-300 ease-in-out ${isAtTop ? 'opacity:100' : 'opacity-0'}`} />
                    </div>

                    <div className="flex font-raleway font-[600] h-full justify-center items-center max-lg:hidden">

                        {navLinks.map(({ name, link }, index) => (
                            <a key={index}
                                href={link}
                                className="w-26 h-full flex justify-center items-center text-lg hover:text-coral">
                                {name}
                            </a>
                        ))}

                    </div>

                    <div className="max-lg:hidden">
                        <Button text={"Book Now"} isFullWidth={false} />
                    </div>

                    <div className="lg:hidden">
                        <Button action={() => setNavOpen(!navOpen)} text={!navOpen ? <Bars3Icon className="size-12" /> : <Bars3BottomRightIcon className="size-12" />} isFullWidth={false} bgNegative={true} hoverNegative={true} />
                    </div>

                </div>
            </div>

            <div className={`flex flex-col font-raleway font-[600] justify-center items-center lg:hidden fixed top-[-360px] left-0 w-full bg-white z-20 ${navOpen ? 'translate-y-[450px] shadow-xl' : ''} transition-all duration-500 ease-in-out`}>

                {navLinks.map(({ name, link }, index) => (
                    <a onClick={() => setNavOpen(false)} key={index}
                        href={link}
                        className={`w-full ${index === navLinks.length - 1 ? 'border-b-0' : 'border-b-[1px]'} border-gray-300 h-16 flex justify-center items-center text-lg hover:text-coral`}>
                        {name}
                    </a>
                ))}

            </div>

        </nav>

    )
}

export default Navbar
