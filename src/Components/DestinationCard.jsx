import { StarIcon } from "@heroicons/react/16/solid"


const DestinationCard = ({ image, country, city }) => {
    return (
        <div className="relative h-full min-h-[500px]">

            <img src={image} loading="lazy" alt="" className="absolute w-full h-full object-cover brightness-75" />

            <div className="absolute top-4 left-4 py-2 px-4 bg-blue text-white uppercase ">
                <h2 className="font-bold tracking-wider text-md">{country}</h2>
            </div>

            <div className="absolute flex flex-col gap-2 bottom-0 left-0 w-full py-3 px-4 text-white">
                <h2 className="font-bold tracking-wider text-xl">{city}</h2>

                <div className="flex">
                    <StarIcon className="size-5" />
                    <StarIcon className="size-5" />
                    <StarIcon className="size-5" />
                    <StarIcon className="size-5" />
                    <StarIcon className="size-5" />
                </div>
            </div>

        </div>
    )
}

export default DestinationCard
