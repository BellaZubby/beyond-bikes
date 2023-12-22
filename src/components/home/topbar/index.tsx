import {useState} from "react";
import heartIcon from "@/assets/heart-icon.svg";
import searchIcon from "@/assets/searchIcon.svg";
import shoppingIcon from "@/assets/shopping-bag.svg";
import useMediaQuery from "@/Hooks/useMediaQuery";
import bars from "@/assets/bars.svg";
import Logo from "@/assets/mobile-logo.png";
import xmark from "@/assets/xmark.svg";



type Props = {}

const TopBar = (props: Props) => {
    const flexBetween ="flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
        {isAboveMediumScreens ? (
        <div className= {`${flexBetween} bg-primary-100 h-3 w-full py-6`}>
            <div className={`${flexBetween} w-5/6 mx-auto py-6`}>
            {/* left */}
            <div className={`${flexBetween} gap-1 text-[10px] text-white font-light`}>
                <a href="">WELCOME</a>
                <div className="bg-white w-[1px] h-[10px]"></div>
                <a href="">REGISTER</a>
                <div className="bg-white w-[0.5px] h-[10px]"></div>
                <a href="">LOGIN</a>
            </div>
            {/* right */}
            <div className={`${flexBetween} gap-5`}>
                <img src={searchIcon} alt="search-icon" className="w-3"/>
                <img src={heartIcon} alt="heart-icon" className="w-3"/>
                <div className={`${flexBetween} gap-1 text-[10px] font-light text-white`}> 
                    <img src={shoppingIcon} alt="shopping-cart" className="w-3"/>
                    <p className="mt-1">SHOPPING CART</p>
                </div>
            </div>
            </div>
        </div>) : (
            // MOBILE
            <div className=' bg-black flex items-center justify-between fixed top-0 w-full py-6'>
            <div className='w-5/6 mx-auto flex items-center justify-between'>
                {/* bar and logo */}
                <div className="flex items-center gap-4">
                <button 
                className=""
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src={bars} alt="bars-icon" className="text-white h-8 w-8"/>
                </button>
                <img src ={Logo} alt="logo" className="h-6 w-10"/>
                </div>
                {/* icons */}
                <div className="flex items-center justify-center gap-6">
                    <img src={searchIcon} alt="search-icon" className="w-3"/>
                    <img src={heartIcon} alt="heart-icon" className="w-3"/>
                    <img src={shoppingIcon} alt="shopping-cart" className="w-3"/>  
                </div>
            </div>
        </div>
        )
        }

        {/* for dropdown menu on mobile */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed left-0 bottom-0 z-40 h-full w-[200px] bg-primary-100 drop-shadow-xl'>
                {/* close icon */}
                <div className='flex justify-start p-12'>
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img src={xmark} alt="close-menu" className='h-6 w-6 text-gray-400'/>
                    </button>
                </div>
                {/* menu items on mobile */}
                <div className= 'ml-[25%] flex flex-col gap-6 text-sm'>
                             {/* menu list */}
                    <a href="">BIKES</a>
                    <a href="">CLOTHING</a>
                    <a href="">HELMETS</a>
                    <a href="">ACCESSORIES</a>
                    <a href="">COMPONENTS</a>
                    <a href="">SALE</a>
                    <a href="">BRANDS</a>
                    <a href="">SCOOTERS</a>
                    <a href="">CYCLE SCHEMES</a>
                    <a href="">SERVICES</a> 
                </div>
            </div>
        )}
    
    </nav>
  )
}

export default TopBar;