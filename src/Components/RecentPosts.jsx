import { SectionHeader, RecentPostCard } from "./index.js"
import { malaysiaImg, tableMountainImg, norwayImg } from "../assets"

const RecentPosts = () => {
    return (
        <section className="flex flex-col w-full max-w-[1200px] p-10 max-sm:px-4 gap-10 text-black mx-auto">

            <SectionHeader heading={"From Our Blog"} subHeading={"Our Recent Posts"} justify="center" />

            <p className="text-center max-w-[800px] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero aliquam aperiam recusandae dolorum quas alias, repudiandae velit eum quod veritatis sunt ipsam non cupiditate tempora odio reiciendis quasi? Atque.
            </p>

            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-lg:gap-y-16">
                <RecentPostCard image={norwayImg} heading={"Breathtaking View of Sena Island"} date={"09/09/2025"} photographer={"Mark Smith"} commentAmount={"21"} />
                <RecentPostCard image={malaysiaImg} heading={"Experience the Beauty of Malaysian Lakes"} date={"17/12/2025"} photographer={"John Doe"} commentAmount={"0"} />
                <RecentPostCard image={tableMountainImg} heading={"View of Cape Town from Table Mountain"} date={"15/11/2025"} photographer={"Jane Doe"} commentAmount={"14"} />
            </div>

        </section>
    )
}

export default RecentPosts
