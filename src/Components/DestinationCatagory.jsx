import { SectionHeader } from "./index.js"
import { campSvg, backpackSvg, offroadSvg, mountainSvg, mapSvg, campfireSvg } from "../assets/index.js"


const DestinationCatagory = () => {
    return (
        <section className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto my-20">

            <SectionHeader heading={"Travel By Activity"} subHeading={"Adventure & Activity"} justify={"center"} />
            <p className="max-w-[800px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, inventore tempore ad ipsa at saepe modi provident aut corrupti officia eligendi deserunt suscipit quos cum rerum, cumque unde reprehenderit ducimus.
            </p>

            <div className="grid grid-cols-6 justify-center items-center gap-4 p-10">

                <a href="" className="flex flex-col justify-between items-center gap-1 p-4 border-1 border-gray-300 w-42 h-42">
                    <img src={mountainSvg} loading="lazy" alt="" className="h-[55%]" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-[600] text-nowrap text-center">Adventure</h3>
                        <p className="text-sm text-nowrap">8 Destinations</p>
                    </div>
                </a>

                <a href="" className="flex flex-col justify-between items-center gap-1 p-4 border-1 border-gray-300 w-42 h-42">
                    <img src={backpackSvg} loading="lazy" alt="" className="h-[48%] translate-y-[2px]" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-[600] text-nowrap text-center">Trekking</h3>
                        <p className="text-sm text-nowrap">16 Destinations</p>
                    </div>
                </a>

                <a href="" className="flex flex-col justify-between items-center gap-1 p-4 border-1 border-gray-300 w-42 h-42">
                    <img src={campfireSvg} loading="lazy" alt="" className="h-[50%]" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-[600] text-nowrap text-center">Camp Fire</h3>
                        <p className="text-sm text-nowrap">7 Destinations</p>
                    </div>
                </a>

                <a href="" className="flex flex-col justify-between items-center gap-1 p-4 border-1 border-gray-300 w-42 h-42">
                    <img src={offroadSvg} loading="lazy" alt="" className="h-[60%] -translate-y-[4px]" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-[600] text-nowrap text-center">Off Road</h3>
                        <p className="text-sm text-nowrap">26 Destinations</p>
                    </div>
                </a>

                <a href="" className="flex flex-col justify-between items-center gap-1 p-4 border-1 border-gray-300 w-42 h-42">
                    <img src={campSvg} loading="lazy" alt="" className="h-[52%]" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-[600] text-nowrap text-center">Camping</h3>
                        <p className="text-sm text-nowrap">13 Destinations</p>
                    </div>
                </a>

                <a href="" className="flex flex-col justify-between items-center gap-1 p-4 border-1 border-gray-300 w-42 h-42">
                    <img src={mapSvg} loading="lazy" alt="" className="h-[47%] translate-y-[5px]" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-[600] text-nowrap text-center">Exploring</h3>
                        <p className="text-sm text-nowrap">19 Destinations</p>
                    </div>
                </a>

            </div>
        </section>
    )
}

export default DestinationCatagory
