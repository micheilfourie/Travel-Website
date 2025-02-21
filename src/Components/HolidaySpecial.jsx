import { canoeImg, travelBrand, outdoorBrand, outdoorAdventureBrand, natureBrand, mountainBrand } from "../assets/index.js"
import { SectionHeader, Button } from "./index.js"

const HolidaySpecial = () => {
    return (
        <section className="my-20">

            <div className="bg-blue w-full z-10 p-10 max-sm:px-4">

                <div className="flex flex-wrap justify-evenly items-center max-w-[1200px] mx-auto gap-2 ">
                    {[mountainBrand, natureBrand, outdoorAdventureBrand, travelBrand, outdoorBrand].map((image, index) => (
                        <img key={index} src={image} loading="lazy" alt="" className="max-lg:h-20 max-md:h-16" />
                    ))}
                </div>

            </div>

            <div className="w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${canoeImg})` }}>

                <div className="w-full h-full backdrop-brightness-50 flex justify-center items-center">

                    <div className="w-full max-w-[1200px] text-white py-20 px-10 max-sm:px-4">

                        <SectionHeader heading={"Holiday Package Offer"} subHeading={"Holiday Special 25% Off!"} negative={true} />

                        <p className="mt-8 max-w-[650px] font-[600] text-xl">
                            Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!
                        </p>

                        <div className="my-10 flex max-sm:flex-col items-center max-w-[650px] h-[75px] max-sm:h-auto border-[1px] border-white p-2 max-sm:p-0 max-sm:border-0">

                            <input type="email" placeholder="Enter your email" className="w-full h-full max-w-[650px] mx-4 focus:outline-none max-sm:border-[1px] max-sm:border-white max-sm:p-5" />

                            <div className="w-[300px] max-sm:w-full max-sm:mt-4">
                                <Button text={"Sign Up"} maxWidth={true} />
                            </div>

                        </div>

                        <p className="mt-8 max-w-[650px] text-md">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aut, laboriosam ea deleniti animi ad eaque fugiat quia ipsum, voluptates dicta nihil optio voluptas sint magni similique inventore vitae! Numquam.
                        </p>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default HolidaySpecial
