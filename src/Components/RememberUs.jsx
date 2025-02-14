import { UsersIcon, CheckBadgeIcon, UserPlusIcon, HeartIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { PlayIcon } from "@heroicons/react/24/solid"
import { rememberThumbnail } from "../assets"
import { SectionHeader } from "./index.js"

const RememberUs = () => {
    return (

        <section className="w-full overflow-hidden">

            <div className="relative flex justify-center items-center gap-16 pr-10 py-20 my-20 mx-auto max-w-[1200px]">

                <div className="absolute left-0 top-0 h-full w-screen bg-blue -z-10 ml-[15%]"></div>

                <div className="relative">

                    <img src={rememberThumbnail} loading="lazy" alt="" className="h-auto object-cover aspect-[4/5] max-w-[450px]" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ping_1.5s_ease-out_infinite] bg-white rounded-full flex justify-center items-center p-10"></div>

                    <a href="https://www.youtube.com/watch?v=cNXRmdZzvGE" target="_blank" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex justify-center items-center p-8">

                        <PlayIcon className="size-10 text-blue translate-x-[2px]" />

                    </a>

                </div>

                <div className="w-[600px] text-white ">

                    <SectionHeader heading={"Remember Us"} subHeading={"GO TRAVEL. DISCOVER. REMEMBER US!!"} negative={true} />

                    <p className="mt-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates eligendi possimus mollitia voluptatum numquam minima aperiam recusandae.
                    </p>

                    <div className="grid grid-cols-2 grid-rows-2 gap-[1px] bg-white my-20">

                        {[UsersIcon, CheckBadgeIcon, UserPlusIcon, HeartIcon].map((Icon, index) => (
                            <div key={index} className="bg-blue p-6 flex justify-center items-center">

                                <Icon className="size-16" />

                                <div className="ml-2">
                                    <h1 className="text-3xl font-[800]">250K+</h1>
                                    <p>Happy Clients</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 py-10 px-20 bg-white absolute bottom-0 left-1/2 translate-y-[50%] text-nowrap">

                    <p className="text-dark text-2xl font-[500]">Our 24/7 Support Line:</p>

                    <div className="flex gap-6">
                        <PhoneIcon className="size-12 text-coral" />
                        <h3 className="text-coral text-4xl font-[800]">123-456-7890</h3>
                    </div>

                </div>

            </div>
        </section>



    )
}

export default RememberUs
