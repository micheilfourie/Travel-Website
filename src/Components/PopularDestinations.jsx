import { SectionHeader, Button, DestinationCard } from './index.js'
import { franceImg, tailandImg, southAfricaImg } from '../assets/index.js'

const PopularDestinations = () => {
    return (
        <section className='flex flex-col w-full max-w-[1200px] p-10 gap-20 text-black mx-auto my-20'>
            <SectionHeader heading={"Popular Destinations"} subHeading={"Top Rated Destinations"} />

            <div className='grid grid-cols-3 gap-6 h-[500px]'>
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
