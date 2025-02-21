import { Button } from "./index.js"

const Inquire = () => {
    return (
        <section className="flex flex-col items-center md:w-[80%] max-w-[1000px] bg-white p-10 gap-10 mx-auto -translate-y-[50px] max-sm:px-4">

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 text-dark">

                <div className="flex flex-col gap-4 h-full w-[180px] max-md:w-full">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Search Destination</h1>
                    <input type="text" placeholder="Enter Destination" className="bg-gray-300 p-2 w-full" />
                </div>

                <div className="flex flex-col gap-4 h-full w-[180px] max-md:w-full">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Pax Number</h1>
                    <input type="number" placeholder="No. of People" className="bg-gray-300 p-2 w-full" />
                </div>

                <div className="flex flex-col gap-4 h-full w-[180px] max-md:w-full">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Check-In Date</h1>
                    <input type="date" className="bg-gray-300 p-2 w-full" />
                </div>

                <div className="flex flex-col gap-4 h-full w-[180px] max-md:w-full">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Check-Out Date</h1>
                    <input type="date" className="bg-gray-300 p-2 w-full" />
                </div>

            </div>

            <Button text={"Inquire Now"} />

        </section>

    )
}

export default Inquire
