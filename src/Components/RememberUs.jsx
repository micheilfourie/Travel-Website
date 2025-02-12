import { UsersIcon, CheckBadgeIcon, UserPlusIcon, HeartIcon } from "@heroicons/react/24/outline"
import { peopleOnTourImg } from "../assets"
import { SectionHeader } from "./index.js"

const RememberUs = () => {
    return (
        <div className="relative flex justify-end w-full max-w-[1200px] p-10 pr-0 gap-20 text-black mx-auto my-20">

            <div className="absolute top-1/2 translate-y-[-50%] left-10">
                <img src={peopleOnTourImg} alt="" className="h-full max-h-[400px] object-cover aspect-[1/1]" />
            </div>

            <div className="bg-blue w-[80%] pl-64 pr-10 py-20 text-white">
                <SectionHeader heading={"Remember Us"} subHeading={"GO TRAVEL. DISCOVER. REMEMBER US!!"} negative={true} />
                <p className="mt-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptates eligendi possimus mollitia voluptatum numquam minima aperiam recusandae.
                </p>

                <div className="grid grid-cols-2 grid-rows-2 gap-[1px] bg-white mt-20">
                    <div className="bg-blue p-6 flex justify-center items-center">
                        <UsersIcon className="size-16" />
                        <div className="pl-2">
                            <h1 className="text-3xl font-[800]">250K+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="bg-blue p-6 flex justify-center items-center">
                        <CheckBadgeIcon className="size-16" />
                        <div className="pl-2">
                            <h1 className="text-3xl font-[800]">250K+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="bg-blue p-6 flex justify-center items-center">
                        <UserPlusIcon className="size-16" />
                        <div className="pl-2">
                            <h1 className="text-3xl font-[800]">250K+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="bg-blue p-6 flex justify-center items-center">
                        <HeartIcon className="size-16" />
                        <div className="pl-2">
                            <h1 className="text-3xl font-[800]">250K+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RememberUs
