import { UsersIcon, CheckBadgeIcon, UserPlusIcon, HeartIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { PlayIcon } from "@heroicons/react/24/solid"
import { rememberThumbnail } from "../assets"
import { SectionHeader } from "./index.js"

const RememberUs = () => {
    return (

        <section id="rememberUs" className="w-full overflow-hidden mb-30 mt-10">

            <div className="relative grid grid-cols-2 max-xl:grid-cols-1 justify-center items-center max-xl:py-0 py-16 my-14 mx-auto max-w-[1260px]">

                <div className="absolute left-0 top-0 h-full w-screen bg-blue -z-10 ml-[15%] max-xl:ml-0"></div>

                <div className="relative flex justify-center items-center">

                    <img src={rememberThumbnail} loading="lazy" alt="" className="object-cover w-full max-xl:aspect-[4/1] xl:max-w-[450px] max-xl:min-h-[300px]" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ping_1.5s_ease-out_infinite] bg-white rounded-full flex justify-center items-center p-10"></div>

                    <a href="https://www.youtube.com/watch?v=cNXRmdZzvGE" target="_blank" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex justify-center items-center p-8">

                        <PlayIcon className="size-10 text-coral translate-x-[2px]" />

                    </a>

                </div>

                <div className="xl:max-w-[600px] max-xl:max-w-[800px] text-white mx-auto max-xl:py-20 max-xl:px-10 max-sm:px-4">

                    <SectionHeader heading={"Remember Us"} subHeading={"GO TRAVEL. DISCOVER. REMEMBER US!!"} negative={true} />

                    <p className="mt-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates eligendi possimus mollitia voluptatum numquam minima aperiam recusandae.
                    </p>

                    <div className="grid grid-cols-2 grid-rows-2 gap-[1px] bg-white my-20 max-xl:max-w-[800px] mx-auto">

                        <div className="bg-blue p-6 flex justify-center items-center">
                            <UsersIcon className="size-16 max-xl:size-10" />
                            <div className="ml-2">
                                <h1 className="text-3xl font-[800] max-md:text-xl">150K+</h1>
                                <p className="max-xl:text-sm">Happy Clients</p>
                            </div>
                        </div>

                        <div className="bg-blue p-6 flex justify-center items-center">
                            <CheckBadgeIcon className="size-16 max-xl:size-10" />
                            <div className="ml-2">
                                <h1 className="text-3xl font-[800] max-md:text-xl">250K+</h1>
                                <p className="max-xl:text-sm">Happy Clients</p>
                            </div>
                        </div>

                        <div className="bg-blue p-6 flex justify-center items-center">
                            <UserPlusIcon className="size-16 max-xl:size-10" />
                            <div className="ml-2">
                                <h1 className="text-3xl font-[800] max-md:text-xl">100K+</h1>
                                <p className="max-xl:text-sm">Happy Clients</p>
                            </div>
                        </div>

                        <div className="bg-blue p-6 flex justify-center items-center">
                            <HeartIcon className="size-16 max-xl:size-10" />
                            <div className="ml-2">
                                <h1 className="text-3xl font-[800] max-md:text-xl">200K+</h1>
                                <p className="max-xl:text-sm">Happy Clients</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 py-8 px-16 bg-white absolute bottom-0 left-1/2 translate-y-[50%] max-xl:translate-x-[-50%] text-nowrap max-xl:w-[80%]">

                    <p className="text-dark text-2xl font-[500] max-xl:text-xl">Our 24/7 Support Line:</p>

                    <div className="flex gap-6">
                        <PhoneIcon className="size-12 text-coral max-md:size-8" />
                        <h3 className="text-coral text-4xl font-[800] max-md:text-2xl">123-456-7890</h3>
                    </div>

                </div>

            </div>
        </section>



    )
}

export default RememberUs
