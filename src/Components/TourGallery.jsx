import { SectionHeader } from "./index.js"
import { norwayImg, tableMountainImg, malaysiaImg, heroImg2 } from "../assets/index.js"

const TourGallery = () => {
    return (
        <section className="grid grid-cols-[1.5fr_1fr_1fr] grid-rows-[300px_350px] w-full max-w-[1200px] p-10 gap-6 text-black mx-auto mb-10 mt-20">

            <div className="w-full h-full">
                <SectionHeader heading={"Our Tour Gallery"} subHeading={"Best Traveler's Shared Photos"} />
                <p className="mt-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet rerum voluptatum odio doloribus dicta velit nisi, laborum labore suscipit, sint error asperiores non. Nam earum harum quasi minus obcaecati. Tenetur!
                </p>
            </div>

            <img src={norwayImg} loading="lazy" alt="" className="w-full h-full object-cover" />
            <img src={malaysiaImg} loading="lazy" alt="" className="w-full h-full object-cover" />
            <img src={tableMountainImg} loading="lazy" alt="" className="w-full h-full object-cover" />

            <div className="col-span-2">
                <img src={heroImg2} loading="lazy" alt="" className="w-full h-full object-cover" />
            </div>

        </section>
    )
}

export default TourGallery
