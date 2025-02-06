
const SectionHeader = ({ heading, subHeading, justify = 'start' }) => {
    return (
        <div className={`flex flex-col items-${justify} gap-6`}>
            <div className="flex items-center gap-4">
                <div className="h-[3px] bg-coral w-[80px]"></div>
                <h3 className="text-md font-raleway font-[800] text-coral uppercase">{heading}</h3>
            </div>

            <h1 className="text-5xl font-raleway font-[900] text-dark">{subHeading}</h1>

        </div>

    )
}

export default SectionHeader
