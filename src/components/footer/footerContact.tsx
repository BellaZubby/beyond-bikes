import { useState } from 'react'
import { ChevronDownIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import useMediaQuery from '@/Hooks/useMediaQuery'



const FooterContact = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div>
         <div className='bg-black text-gray-500 w-full'>
            {/* company dropdown */}
            <div className='w-5/6 mx-auto pt-6'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-sm text-white'>CONTACT</h1>
                    <ChevronDownIcon 
                    className='w-4 font-thin cursor-pointer'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    />
                </div>
            </div>
        </div>
                {/* For dropdown */}

                {!isAboveMediumScreens && isMenuToggled && (
            <div className='bg-black'>
                {/* menu items on mobile */}
                <div className= 'flex flex-col gap-2 text-sm text-gray-500 w-[180px] ml-5'>
                             {/* menu list */}
                             <span className='flex items-center gap-1 mt-4'><MapPinIcon className='w-6 font-Roboto font-semibold'/> Chromium Co, 25 Silicon Road, London D04 89GR</span>
                    <div className='flex items-center gap-1'>
                       <div><PhoneIcon className='w-4'/></div>
                       <div><p className="text-white font-Roboto font-semibold">+27 34 66 2455-198</p>
                        <p className='font-Roboto font-semibold'>Mon - Fri 8:00 to 19:00</p>
                        </div>
                    </div>
                    <span className='flex items-center gap-1 font-Roboto font-semibold'><EnvelopeIcon className='w-4'/>example@example.com</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default FooterContact