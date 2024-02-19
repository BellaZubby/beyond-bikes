import secondImage from '@/assets/secondImage.png'
import thirdImage from '@/assets/angle.svg'
import ActionBtn from '@/shared/ActionBtn'

const OverlayRiding = () => {
  return (
    <section>
      <div className='relative w-full sm:w-[90%] sm:mx-auto mt-14 bg-black bg-[url("@/assets/firstImage.png")] bg-cover'>
        <img src={secondImage} alt='image' />
        <img src={thirdImage} alt='image' className='absolute top-0' />
        <div className='absolute 3xs:top-6 2xs:top-10 xs:top-20 sm:top-28 md:top-36 left-5 sm:left-10'>
          <h1 className='font-robotoCondensed text-[#FFFFFF] font-[700] 3xs:text-[20px] 2xs:text-[30px] sm:text-[46px]'>ELECTRIC BIKE GUIDE</h1>
          <p className='font-Roboto font-thin text-[#F5F5F5] 3xs:text-[10px] 2xs:text-[15px] sm:text-[20px] mb-3'>How to book your FREE test ride</p>
          <ActionBtn>VIEW MORE</ActionBtn>
        </div>
      </div>
    </section>
  )
}

export default OverlayRiding