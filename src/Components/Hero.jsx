import { heroImg1, heroImg2 } from "../assets/index.js";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const images = [heroImg1, heroImg2];

const Hero = () => {

    const [slide, setSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSlideIncrement();
        }, 5000);

        return () => clearTimeout(timer);
    }, [slide]);

    const handleSlideIncrement = () => {
        if (slide !== images.length - 1) {
            setSlide(slide + 1);
        } else {
            setSlide(0);
        }
    }

    const handleSlideDecrement = () => {
        if (slide !== 0) {
            setSlide(slide - 1);
        } else {
            setSlide(images.length - 1);
        }
    }

    return (
        <header
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full h-[800px] relative overflow-hidden transition-all ease-in duration-1000 mx-auto">

            <div className="w-full h-full flex flex-col justify-center gap-10 items-center text-white">
                <h1 className="text-8xl font-[900] text-center uppercase">
                    Travelling
                    <br />
                    Around The World
                </h1>
                <p className="text-xl text-center max-w-[800px] w-[90%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos natus assumenda temporibus in laudantium porro doloremque id?
                </p>
                <button className="px-8 py-4 bg-coral hover:bg-blue transition-all ease-in-out duration-500 uppercase font-semibold text-md font-raleway tracking-wide">
                    Continue Reading
                </button>
            </div>

            <button
                onClick={handleSlideDecrement}
                className={`flex justify-center items-center absolute left-6 bottom-1/2 bg-gray-500/70 rounded-full size-10 hover:bg-blue/60 transition-all ease-in-out duration-700 ${!isHovered ? "translate-x-[-200%]" : "translate-x-[20%]"}`}>
                <ChevronLeftIcon className="text-white size-6 -translate-x-[1px]" />
            </button>

            <button
                onClick={handleSlideIncrement}
                className={`flex justify-center items-center absolute right-6 bottom-1/2 bg-gray-500/70 rounded-full size-10 hover:bg-blue/60 transition-all ease-in-out duration-700 ${!isHovered ? "translate-x-[200%]" : "translate-x-[-20%]"}`}>
                <ChevronRightIcon className="text-white size-6 translate-x-[1px]" />
            </button>

            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`hero${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-[1500ms] brightness-50  ${slide === index ? "opacity-100" : "opacity-0"} -z-10`} />
            ))}

        </header>
    )
}

export default Hero
