import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import useMediaQuery from '@/Hooks/useMediaQuery'

type Props = {}

const Mobile = (props: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div>
        <div className='bg-black text-gray-500 w-full '>
            {/* company dropdown */}
            <div className='w-5/6 mx-auto'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-sm font-bold text-white'>COMPANY</h1>
                    <ChevronDownIcon className='w-3 font-thin cursor-pointer'/>
                </div>
                 <div className='flex flex-col'>
                    <a href='#' className='font-thin text-xs text-'>About Us</a>
                    <a href='#' className='font-thin text-xs'>Store</a>
                    <a href='#' className='font-thin text-xs'>Shop</a>
                    <a href='#' className='font-thin text-xs'>Contact</a>
                    <a href='#' className='font-thin text-xs'>FAQ</a>
                </div> 
            </div>
        </div>

       
    </div>
  )
}

export default Mobile