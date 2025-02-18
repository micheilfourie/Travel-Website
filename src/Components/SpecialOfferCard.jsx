

const SpecialOfferCard = ({ image, discount, country, heading, originalPrice }) => {

    const calcDiscountedPrice = (price, discount) => {
        const numPrice = parseFloat(price);
        const numDiscount = parseFloat(discount.replace("%", ""));
        return ((numPrice * (100 - numDiscount)) / 100).toString();
    }

    return (
        <div className="relative h-full">

            <img src={image} loading="lazy" alt="" className="absolute w-full h-full object-cover" />

            <div className="flex flex-col justify-center items-center bg-coral w-20 h-20 rounded-full absolute top-0 right-0 translate-x-[20%] -translate-y-[20%]">
                <h1 className="text-white text-2xl font-bold">{discount.replace("%", "")}%</h1>
                <h3 className="text-white text-md font-bold tracking-wide">off</h3>
            </div>

            <div className="absolute flex flex-col justify-between gap-4 bottom-0 left-1/2 -translate-x-1/2 p-10 bg-white text-dark w-[90%] translate-y-[30%] h-[270px]">
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-md text-blue uppercase">{country}</h3>
                    <h2 className="font-[800] text-2xl">{heading}</h2>
                </div>
                <h2 className="font-bold text-xl text-coral">Price: <span className="line-through">${originalPrice}</span> ${calcDiscountedPrice(originalPrice, discount)}</h2>
            </div>

        </div>
    )
}

export default SpecialOfferCard
