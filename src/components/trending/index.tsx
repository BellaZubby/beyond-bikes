import bicycleIcon from "@/assets/bicycle-icon.svg"
import bgImg1 from "@/assets/mountain-bike.png"
import bgImg2 from "@/assets/bike-helmet.png"
import bgImg3 from "@/assets/city-bike.png"
import Trends from "./trends"
import { TrendType } from "@/shared/types"
import Carousel from "./carousel";




const items: Array<TrendType> = [
    {
        bgImg: bgImg1,
        title: 'MOUNTAIN BIKES'
    },
    {
        bgImg: bgImg2,
        title: 'BIKE HELMET'
    },
    {
        bgImg: bgImg3,
        title: 'CITY BICYCLES'
    }
];
const Trending = () => {
    //  const isAboveMediumScreens = useMediaQuery('(min-width:1000px)')
 return (
    <div>
        <div className="flex flex-col items-center justify-between">
            <div>
                <img src={bicycleIcon} alt='bicycleIcon' className="w-6 mb-3"/>
            </div>
            <div>
                <h1 className="font-bold text-xl">TRENDING CATEGORIES</h1>
            </div>
            <div className="w-8 h-[0.5px] bg-gradient-to-r from-secondary-100 to-secondary-200"></div>
        </div>

    <div className=" w-5/6 mx-auto flex items-center justify-center gap-3 my-6 hidden md:flex">
       {items.map((item: TrendType) => (
        <Trends
            key={item.title}
            bgImg={item.bgImg}
            title={item.title}
        />
       ))}
       </div> 
       {/* mobile carousel */}
       <div className="w-5/6 mx-auto">
       <Carousel/>
       </div>
    </div>
  )
}

export default Trending