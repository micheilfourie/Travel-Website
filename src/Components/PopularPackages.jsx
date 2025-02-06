import { SectionHeader, PackageCard } from "./index.js"

const PopularPackages = () => {
    return (
        <div className="flex flex-col w-full max-w-[1200px] p-10 gap-8 text-black mx-auto -translate-y-[50px]">
            <SectionHeader heading={"Explore Great Places"} subHeading={"Popular Packages"} justify="center" />

            <p className="text-center max-w-[800px] mx-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem culpa illo minus sint veritatis excepturi et libero voluptas! Nobis facilis similique molestias libero reprehenderit iusto itaque incidunt eius dolorum.
            </p>

            <div className='grid grid-cols-3 gap-6'>
                <PackageCard />
            </div>

        </div>
    )
}

export default PopularPackages
