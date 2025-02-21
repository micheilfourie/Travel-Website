
const SectionHeader = ({ heading, subHeading, justify = 'start', negative = false }) => {
    return (
        <div className={`flex flex-col items-${justify} text-${justify} gap-6`}>

            <div className="flex items-center gap-4">
                <div className={`h-[3px] ${negative ? 'bg-white' : 'bg-coral'} w-[80px] max-md:w-[50px]`}></div>
                <h3 className={`text-md font-raleway font-[800] ${negative ? 'text-white' : 'text-coral'} uppercase max-md:text-sm`}>{heading}</h3>
            </div>

            <h1 className={`text-5xl font-raleway font-[900] ${negative ? 'text-white' : 'text-dark'} uppercase max-md:text-3xl`}>{subHeading}</h1>

        </div>

    )
}

export default SectionHeader
