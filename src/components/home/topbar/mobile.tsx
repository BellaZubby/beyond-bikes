import bars from "@/assets/bars.svg"
import Logo from "@/assets/mobile-logo.png"
import heartIcon from "@/assets/heart-icon.svg";
import searchIcon from "@/assets/searchIcon.svg";
import shoppingIcon from "@/assets/shopping-bag.svg";
import { useState } from "react";

type Props = {}

const Mobile = (props: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
        <div className=' bg-black flex items-center justify-between fixed top-0 w-full py-6'>
            <div className='w-5/6 mx-auto flex items-center justify-between'>
                {/* bar and logo */}
                <div className="flex items-center gap-4">
                <button className="">
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
        {/* for bars */}
        
    </nav>
  )
}

export default Mobile