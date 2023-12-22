import bicycleIcon from "@/assets/bicycle-icon.svg"
// import bgImg1 from "@/assets/mountain-bike.png"
// import bgImg2 from "@/assets/bike-helmet.png"
// import bgImg3 from "@/assets/city-bike.png"
import ActionBtn from "@/shared/ActionBtn"
ActionBtn
// import Trends from "./trends"
// import { TrendType } from "@/shared/types"

type Props = {}

const Trending = (props: Props) => {
 return (
    <section>
        <div className="h-full mt-6 bg-white">
            {/* logo and heading */}
            <div className="flex flex-col items-center justify-center">
                <img src={bicycleIcon} alt='bicycle-icon' className="w-6 h-6"/>
                <h1 className=" text-2xl font-bold mt-2">TRENDING CATEGORIES</h1>
                <div className="w-8 h-[1px] bg-gradient-to-r from-secondary-100 to-secondary-200"></div>
            </div>
                {/* TRENDING ITEMS */}
            <div className="flex items-center justify-between w-5/6 gap-10 mx-auto mt-12">
            {/* MOUNTAIN BIKES */}
                <div className='bg-[url("@/assets/mountain-bike.png")] bg-center bg-cover h-[300px] basis-1/2 relative text-white mt-16 md:mt-0'>
                <div className='basis-1/2 h-[300px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                    <h1 className='text-xl mb-6 font-bold'>MOUNTAIN BIKES</h1>
                    <ActionBtn>SHOP NOW</ActionBtn>
                </div>
                </div>
                </div>
        {/* bike helmets */}
            <div className='bg-[url("@/assets/bike-helmet.png")] bg-center bg-cover h-[300px] basis-1/2 relative text-white mt-16 md:mt-0'>
                <div className='basis-1/2 h-[300px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                    <h1 className='text-xl mb-6 font-bold'>BIKE HELMET</h1>
                    <ActionBtn>SHOP NOW</ActionBtn>
                </div>

                </div>
            </div>
        {/* CITY BICYCLE */}
            <div className='bg-[url("@/assets/city-bike.png")] bg-center bg-cover h-[300px] basis-1/2 relative text-white mt-16 md:mt-0'>
                <div className='basis-1/2 h-[300px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                    <h1 className='text-xl mb-6 font-bold'>CITY BICYCLES</h1>
                    <ActionBtn>SHOP NOW</ActionBtn>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Trending