import { ClockIcon, MapPinIcon, UserGroupIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const PackageCard = ({ image, price, duration, people, location, heading, body }) => {
    return (
        <div>
            <div className="relative ">
                <img src={image} alt="" className="w-full h-full object-cover aspect-[10/9]" />

                <div className="bg-coral py-2 px-4 absolute top-4 right-0 text-white">
                    <p className="lowercase text-sm"><span className="font-bold text-2xl">{`$${price}`}</span> / per person</p>
                </div>

                <div className="flex justify-evenly items-center bg-blue text-white py-4 px-1 translate-y-[-50%] max-w-[90%] mx-auto flex-wrap">
                    <div className="text-xs flex justify-between items-center flex-nowrap">
                        <ClockIcon className="size-5 inline-block" />
                        <span className="px-1 text-nowrap">{duration}</span>
                    </div>
                    <div className="text-xs flex justify-center items-center flex-nowrap">
                        <UserGroupIcon className="size-5 inline-block" />
                        <span className="px-1 text-nowrap">People: {people}</span>
                    </div>
                    <div className="text-xs flex justify-center items-center flex-nowrap">
                        <MapPinIcon className="size-5 inline-block" />
                        <span className="px-1 text-nowrap">{location}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-[90%] mx-auto">
                    <h3 className="text-2xl font-raleway font-[700] text-dark">{heading}</h3>
                    <p>{body}</p>
                </div>

                <button className="flex justify-start items-center gap-2 w-full max-w-[90%] mx-auto mt-4 py-4 hover:text-coral cursor-pointer">
                    <span className="text-nowrap font-semibold">Book Now</span>
                    <ArrowRightIcon className="size-5 inline-block text-coral" />
                </button>

            </div>
        </div>
    )
}

export default PackageCard
