import img1 from '@/assets/riding.png'
import './riding.css'
import ActionBtn from '@/shared/ActionBtn'



const Riding = () => {
  return (
    <section>
        <div className='relative text-white bg-cover w-full sm:w-5/6 mx-auto mt-16'
        style={{backgroundImage: `url(${img1})`}}>
            <div className='angle bg-gradient-to-l from-secondary-300 to-gray-200 md:w-[700px]'>
                <div className='py-28 pl-16 w-[80%] md:w-[50%]'>
                    <h1 className='mb-6 text-2xl font-bold'>ELECTRIC BIKE GUIDE</h1>
                    <p className='mb-6 font-thin text-sm'>How to book your FREE test ride</p>
                    <ActionBtn>VIEW MORE</ActionBtn>
                </div>
            </div>
        </div>
        {/* <div className='relative w-5/6 mx-auto mt-16 bg-gradient-to-r from-secondary-100 to-secondary-200'>
                <img src={img1} alt='photo' className='absolute mix-blend-overlay'/>
        </div> */}
    </section>

  )
}

export default Riding