import { useState } from "react"
import { CommentSlide } from "./index.js"
import { portraitImg } from "../assets/index.js"

const comments = [
    {
        profileImg: portraitImg,
        name: "Mark Smith",
        occupation: "Travel Agent",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero aliquam aperiam recusandae dolorum quas alias."
    },
    {
        profileImg: portraitImg,
        name: "Jane Doe",
        occupation: "Proffessional Climber",
        comment: "Doloremque deleniti veniam aliquid impedit dolore tempora voluptatibus. Exercitationem laborum harum repellat doloribus."
    },
    {
        profileImg: portraitImg,
        name: "John Doe",
        occupation: "Photographer",
        comment: "Quis pariatur neque ex dolorem, consequatur id nihil ipsa vel, optio cumque nobis? Vitae quasi ipsa autem!"
    }
]

const FeaturedComments = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    return (
        <section className="relative flex flex-col justify-center items-center w-full max-w-[1200px] py-10 my-10 gap-10 text-dark mx-auto overflow-hidden">

            <div className={`w-full flex transition-transform duration-1000 ease-in-out`}
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
                {comments.map((comment, index) => (
                    <div key={index} className="min-w-full flex justify-center items-center">
                        <CommentSlide {...comment} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-10">
                {comments.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setSlideIndex(index)}
                        className={`w-3 h-3 ${slideIndex === index ? "bg-blue scale-[140%]" : "bg-gray-500"} rounded-full cursor-pointer `}
                    />
                ))}
            </div>
        </section>
    )
}

export default FeaturedComments