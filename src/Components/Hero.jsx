import { heroImg1, heroImg2 } from "../assets/index.js";
import { useState, useEffect } from "react";
import { Button } from "./index.js";

const images = [heroImg1, heroImg2];

const Hero = () => {

    const [slide, setSlide] = useState(0);

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

    return (
        <header className="w-full h-[800px] relative overflow-hidden transition-all ease-in duration-1000 mx-auto">

            <div className="w-full h-full flex flex-col justify-center gap-10 items-center text-white">
                <h1 className="text-8xl font-[900] text-center uppercase">
                    Travelling
                    <br />
                    Around The World
                </h1>
                <p className="text-xl text-center max-w-[800px] w-[90%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos natus assumenda temporibus in laudantium porro doloremque id?
                </p>

                <Button text={"Continue Reading"} />

            </div>

            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    loading="lazy"
                    alt={`hero${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all ease-in-out duration-[1500ms] brightness-50  ${slide === index ? "opacity-100" : "opacity-0"} -z-10`} />
            ))}

        </header>
    )
}

export default Hero
