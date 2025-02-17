import { canoeImg, travelBrand, outdoorBrand, outdoorAdventureBrand, natureBrand, mountainBrand } from "../assets/index.js"
import { SectionHeader } from "./index.js"

const HolidaySpecial = () => {
    return (
        <section className="w-full relative mb-20 mt-60 bg-fixed bg-center bg-cover " style={{ backgroundImage: `url(${canoeImg})` }}>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue w-full max-w-[1200px] py-10 z-10 flex flex-wrap justify-evenly items-center gap-6">


                {[mountainBrand, natureBrand, outdoorAdventureBrand, travelBrand, outdoorBrand].map((image, index) => (

                    <img key={index} src={image} loading="lazy" alt="" />

                ))}

            </div>

            <div className="w-full h-full backdrop-brightness-50 flex justify-center items-center">

                <div className="w-[90%] max-w-[1200px] text-white pt-50 pb-26">

                    <SectionHeader heading={"Holiday Package Offer"} subHeading={"Holiday Special 25% Off!"} negative={true} />

                    <p className="mt-8 max-w-[650px] font-[600] text-xl">
                        Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!
                    </p>

                    <div className="my-10 flex items-center max-w-[650px] h-[75px] border-[1px] border-white p-2">

                        <input type="email" placeholder="Enter your email" className="w-full h-full max-w-[650px] mx-4 focus:outline-none" />

                        <button className=" bg-coral uppercase text-nowrap py-4 px-6 hover:bg-blue transition-all ease-in-out duration-100">
                            sign up now!
                        </button>

                    </div>

                    <p className="mt-8 max-w-[650px] text-md">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aut, laboriosam ea deleniti animi ad eaque fugiat quia ipsum, voluptates dicta nihil optio voluptas sint magni similique inventore vitae! Numquam.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default HolidaySpecial
