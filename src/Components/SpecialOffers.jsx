import { SectionHeader, SpecialOfferCard, Button } from "./index.js"
import { franceImg, tailandImg, southAfricaImg } from "../assets/index.js"

const SpecialOffers = () => {

    return (
        <section id="specialOffers" className="flex flex-col w-full max-w-[1200px] p-10 max-sm:px-5 gap-10 text-black mx-auto">

            <SectionHeader heading={"Travel Offers & Discounts"} subHeading={"Special Travel Offers"} justify="center" />

            <p className="text-center max-w-[800px] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid aut fuga deleniti, ducimus exercitationem earum eum quis architecto possimus amet quaerat laboriosam quam provident saepe debitis ad animi! Ad.
            </p>

            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max max-lg:gap-y-30 gap-6'>
                <SpecialOfferCard image={southAfricaImg} discount={"50%"} country={"South Africa"} heading={"Experience the Beauty of Table Mountain"} originalPrice={"1500"} />
                <SpecialOfferCard image={franceImg} discount={"25%"} country={"France"} heading={"See The Marvelous Effel Tower up close"} originalPrice={"2400"} />
                <SpecialOfferCard image={tailandImg} discount={"20%"} country={"Tailand"} heading={"Experience the Beauty of Bangkok"} originalPrice={"2100"} />
            </div>

            <div className="mt-20 w-full flex justify-center">
                <Button text={"View All Specials"} />
            </div>

        </section>
    )
}

export default SpecialOffers
