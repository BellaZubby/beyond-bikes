import img1 from '@/assets/brushes.png'
import ActionBtn from '@/shared/ActionBtn'




const Discount = () => {
  return (
    <section>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-9 sm:gap-16 mt-9 md:mt-16 w-5/6 mx-auto'>
            {/* left */}
            <div className='px-12 h-52 md:px-3 md:py-1 flex items-center justify-center bg-gradient-to-l from-secondary-100 to-secondary-200 md:w-[33%] w-full'>
                <div className='w-[50%] md:pl-6 2xs:pl-2'>
                    <h1 className=' text-white mb-2 2xs:w-28 font-robotoCondensed'>MAKE HER SHINE</h1>
                    <p className='text-xs text-white mb-6 font-Roboto'>Complete Clean Kit</p>
                    <button  className='bg-black md:px-2 md:py-2 p-2 text-white text-[10px] w-28 discount_first'>SHOP NOW</button>
                </div>
                <img src={img1} alt='photo'/>
            </div>
            {/* right */}
            <div className=' flex flex-col items-center justify-center bg-gradient-to-l from-secondary-300 to-gray-200 md:w-[33%] w-full h-52'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-xs font-Roboto'>Get up to</p>
                    <h1 className='text-white mb-6 font-robotoCondensed'>30% DISCOUNT</h1>
                    <ActionBtn>VIEW DETAILS</ActionBtn>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount