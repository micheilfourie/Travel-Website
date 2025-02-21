import { SectionHeader } from "./index.js"
import { campSvg, backpackSvg, offroadSvg, mountainSvg, mapSvg, campfireSvg } from "../assets/index.js"

const catagoryList = [
    {
        image: mountainSvg,
        category: "Adventure",
        count: 8
    },
    {
        image: backpackSvg,
        category: "Trekking",
        count: 16
    },
    {
        image: campfireSvg,
        category: "Camp Fire",
        count: 7
    },
    {
        image: offroadSvg,
        category: "Offroad",
        count: 26
    },
    {
        image: campSvg,
        category: "Camping",
        count: 9
    },
    {
        image: mapSvg,
        category: "Exploring",
        count: 8
    }
]

const DestinationCatagory = () => {
    return (
        <section className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto my-20 p-10 max-sm:px-4">

            <SectionHeader heading={"Travel By Activity"} subHeading={"Adventure & Activity"} justify={"center"} />
            <p className="max-w-[800px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, inventore tempore ad ipsa at saepe modi provident aut corrupti officia eligendi deserunt suscipit quos cum rerum, cumque unde reprehenderit ducimus.
            </p>

            <div className="grid grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center items-center gap-4">

                {catagoryList.map(({ image, category, count }, index) => (
                    <a
                        key={index}
                        href=""
                        className="flex flex-col justify-between items-center gap-1 p-4 border-[1px] border-[rgba(0,0,0,0.2)] w-38 h-38 max-sm:w-[90vw] max-sm:h-36"
                    >
                        <img src={image} loading="lazy" alt="" className="w-14 h-14 object-cover aspect-square" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-[600] text-nowrap text-center sm-md:text-[18px]">
                                {category}
                            </h3>
                            <p className="text-sm text-nowrap max-sm:text-xs text-center">
                                {`${count} Destinations`}
                            </p>
                        </div>
                    </a>
                ))}

            </div>
        </section>
    )
}

export default DestinationCatagory
