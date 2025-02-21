import { SectionHeader, PackageCard, Button } from "./index.js"
import { malaysiaImg, tableMountainImg, norwayImg } from "../assets"

const PopularPackages = () => {
    return (
        <section className="flex flex-col w-full max-w-[1200px] p-10 max-sm:p-4 gap-10 text-black mx-auto">

            <SectionHeader heading={"Explore Great Places"} subHeading={"Popular Packages"} justify="center" />

            <p className="text-center max-w-[800px] mx-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem culpa illo minus sint veritatis excepturi et libero voluptas! Nobis facilis similique molestias libero reprehenderit iusto itaque incidunt eius dolorum.
            </p>

            <div className='grid grid-cols-3 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2'>
                <PackageCard
                    image={malaysiaImg}
                    price={"1900"}
                    duration={"7D / 6N"}
                    people={"4"}
                    location={"Malaysia"}
                    heading={"Beautyful views of Malaysian lakes"}
                    body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."}
                />
                <PackageCard
                    image={tableMountainImg}
                    price={"1350"}
                    duration={"3D / 2N"}
                    people={"6"}
                    location={"South Africa"}
                    heading={"Experience the Beauty of Table Mountain"}
                    body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."}
                />
                <PackageCard
                    image={norwayImg}
                    price={"1600"}
                    duration={"4D / 3N"}
                    people={"2"}
                    location={"Norway"}
                    heading={"Discover the hidden Beauty of Sena Island"}
                    body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."}
                />
            </div>

            <div className='flex justify-center mt-4 max-lg:mt-0'>
                <Button text={"View All Packages"} />
            </div>

        </section>
    )
}

export default PopularPackages
