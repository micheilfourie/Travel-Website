import { logoNegative, travvyAwardImg, natureBrand } from "../assets/index.js"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"
import { Button } from "./index.js"

const Footer = () => {
    return (
        <footer className="w-full bg-[#393938] text-white">

            <div className="w-full h-full max-w-[1200px] py-20 p-10 grid grid-cols-4 justify-between items-center gap-10 mx-auto">

                <div className="w-full h-full flex flex-col justify-start items-start gap-4">

                    <h3 className="text-md font-bold uppercase pl-4 border-l-4 border-blue">About Travel</h3>

                    <p className="text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi iste aperiam reiciendis incidunt pariatur qui, enim quod, veritatis saepe repellat?
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <img src={travvyAwardImg} alt="" className="w-[50%]" />
                        <img src={natureBrand} alt="" className="w-[50%]" />
                    </div>

                </div>

                <div className="w-full h-full flex flex-col justify-start items-start gap-4">

                    <h3 className="text-md font-bold uppercase pl-4 border-l-4 border-blue">Contact Info</h3>

                    <p className="text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <div className="flex justify-start items-center gap-4">
                        <PhoneIcon className="size-6 text-coral" />
                        <p className="text-[15px] inline-block">+01 (977) 2599 12</p>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <EnvelopeIcon className="size-6 text-coral" />
                        <p className="text-[15px] inline-block">company@domain.com</p>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <MapPinIcon className="size-6 text-coral" />
                        <p className="text-[15px] inline-block">3146 Koontz, California</p>
                    </div>

                </div>

                <div className="w-full h-full flex flex-col justify-start items-start gap-4">

                    <h3 className="text-md font-bold uppercase pl-4 border-l-4 border-blue">Latest Posts</h3>

                    <div className="flex flex-col justify-center items-start gap-4">
                        <h5 className="text-md font-bold">Life is a Beautiful Journey not a Destination</h5>
                        <p className="text-[13px] text-gray-400">
                            August 17, 2025 | No Comments
                        </p>
                    </div>

                    <hr className="bg-white h-[1px] w-full" />

                    <div className="flex flex-col justify-center items-start gap-4">
                        <h5 className="text-md font-bold">Take only Memories, leave only footprints</h5>
                        <p className="text-[13px] text-gray-400">
                            August 15, 2025 | No Comments
                        </p>
                    </div>

                </div>

                <div className="w-full h-full flex flex-col justify-start items-start gap-4">

                    <h3 className="text-md font-bold uppercase pl-4 border-l-4 border-blue">Subscribe</h3>

                    <p className="text-[15px] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <input type="email" placeholder="Email Address" className="bg-white p-4 w-full outline-0 text-black" />

                    <Button text={"Subscribe"} maxWidth={true} />

                </div>

            </div>

            <div className="w-full bg-[#414140]">

                <div className="w-full h-full max-w-[1200px] p-10 flex justify-between items-center mx-auto">

                    <div className="whitespace-pre">
                        <a href="" className="hover:text-coral">
                            Privacy Policy
                        </a>
                        {`  |  `}
                        <a href="" className="hover:text-coral">
                            Terms & Conditions
                        </a>
                        {`  |  `}
                        <a href="" className="hover:text-coral">
                            FAQ
                        </a>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={logoNegative} alt="" className="max-h-[70px]" />
                    </div>

                    <p className="whitespace-pre">Copyright © 2025 Travel.  All rights reserved.</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer
