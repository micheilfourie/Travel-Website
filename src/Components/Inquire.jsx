

const Inquire = () => {
    return (
        <div className="flex flex-col items-center w-[80%] max-w-[1000px] bg-white p-10 gap-10 text-black mx-auto -translate-y-[50px]">

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">

                <div className="flex flex-col gap-4 h-full w-[180px]">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Search Destination</h1>
                    <input type="text" placeholder="Enter Destination" className="bg-gray-300 p-2 w-full" />
                </div>

                <div className="flex flex-col gap-4 h-full w-[180px]">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Pax Number</h1>
                    <input type="text" placeholder="No. of People" className="bg-gray-300 p-2 w-full" />
                </div>

                <div className="flex flex-col gap-4 h-full w-[180px]">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Check-In Date</h1>
                    <input type="date" className="bg-gray-300 p-2 w-full" />
                </div>

                <div className="flex flex-col gap-4 h-full w-[180px]">
                    <h1 className="text-lg font-raleway font-bold text-nowrap">Check-Out Date</h1>
                    <input type="date" className="bg-gray-300 p-2 w-full" />
                </div>

            </div>

            <button className="px-8 py-4 bg-coral hover:bg-blue transition-all ease-in-out duration-500 uppercase font-semibold text-md font-raleway tracking-wide text-white">
                Inquire Now
            </button>

        </div>

    )
}

export default Inquire
