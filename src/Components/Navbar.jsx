import { logo, logoNegative } from "../assets/index.js"

const Navbar = () => {
    return (
        <nav className="fixed w-full h-[80px] z-30 text-white">
            <div className="w-full max-w-[1200px] flex justify-between items-center h-full mx-auto px-8">

                <img src={logoNegative} alt="" className="h-[80%]" />

                <div className="flex font-raleway font-[600] h-full justify-center items-center">
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral transition-all duration-300 ease-in-out">
                        Home
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral transition-all duration-300 ease-in-out">
                        About
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral transition-all duration-300 ease-in-out">
                        Tour
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral transition-all duration-300 ease-in-out">
                        Shop
                    </a>
                    <a
                        href=""
                        className="w-26 h-full flex justify-center items-center text-lg hover:text-coral transition-all duration-300 ease-in-out">
                        Gallery
                    </a>
                </div>

                <button className="px-6 py-3 bg-coral hover:bg-blue transition-all ease-in-out duration-500 uppercase font-semibold text-md font-raleway tracking-wide">
                    Book Now
                </button>

            </div>
        </nav>
    )
}

export default Navbar
