import "./contact.css"




const Contact = () => {
  return (
    <div>
        {/* outer div with bg */}
        <div className='bg-gray-600 mt-9 w-full h-72 flex justify-center items-center'>
            <div className='bg-gradient-to-l from-tertiary-100 to-tertiary-200 w-5/6 md:w-[50%] p-6'>
                {/* title */}
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-white font-bold text-l sm:text-3xl mb-4 contact-first'>SUBSCRIBE SPECIAL OFFER AND NEWS</h1>
                    <p className='text-white font-thin text-xs email mb-3 contact-second'>Enter Your Email Address</p>
                </div>
                {/* input */}
                <div className=' flex flex-col md:relative w-[99%] md:w-[85%] mx-auto'>
                    <input type='email' placeholder='Email Address' className='p-3 placeholder:text-sm'/>
                    <button className='mt-3 md:absolute md:right-3 md:top-2 md:mt-0 bg-gradient-to-r from-secondary-100 to-secondary-200 p-3 md:p-2 text-white text-xs contact-first'>SUBSCRIBE NOW</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact