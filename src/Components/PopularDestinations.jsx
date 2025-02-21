import { SectionHeader, Button, DestinationCard } from './index.js'
import { franceImg, tailandImg, southAfricaImg } from '../assets/index.js'

const PopularDestinations = () => {
    return (
        <section className='flex flex-col w-full max-w-[1200px] p-10 max-sm:p-4 gap-20 max-md:gap-10 text-black mx-auto mb-10 '>
            <SectionHeader heading={"Popular Destinations"} subHeading={"Top Rated Destinations"} />

            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 min-h-[500px]'>
                <DestinationCard image={franceImg} country={"France"} city={"Paris"} />
                <DestinationCard image={tailandImg} country={"Tailand"} city={"Bangkok"} />
                <DestinationCard image={southAfricaImg} country={"South Africa"} city={"Cape Town"} />
            </div>

            <div className='flex justify-center'>
                <Button text={"View More"} />
            </div>

        </section>
    )
}

export default PopularDestinations
