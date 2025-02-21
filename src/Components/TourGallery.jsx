import { SectionHeader } from "./index.js"
import { norwayImg, tableMountainImg, malaysiaImg, heroImg2 } from "../assets/index.js"

const TourGallery = () => {
    return (
        <section id="gallery" className="max-w-[1200px] mx-auto">

            <div className="w-full h-full px-10 max-sm:px-4 mt-20 max-w-[1000px]">
                <SectionHeader heading={"Our Tour Gallery"} subHeading={"Best Traveler's Shared Photos"} />
                <p className="mt-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet rerum voluptatum odio doloribus dicta velit nisi, laborum labore suscipit, sint error asperiores non. Nam earum harum quasi minus obcaecati. Tenetur!
                </p>
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 w-full p-10 max-sm:px-4 gap-6 text-black mx-auto mt-4">

                <img src={norwayImg} loading="lazy" alt="" className="w-full h-full object-cover" />
                <img src={malaysiaImg} loading="lazy" alt="" className="w-full h-full object-cover" />
                <img src={tableMountainImg} loading="lazy" alt="" className="w-full h-full object-cover" />

                <div className="">
                    <img src={heroImg2} loading="lazy" alt="" className="w-full h-full object-cover" />
                </div>

            </div>
        </section>

    )
}

export default TourGallery
