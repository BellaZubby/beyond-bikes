type Props = {
  image: string;
  name: string;
  price: number;

}

const Bicycle= ({image, name, price} : Props) => {
  return (
    <div>
      <div className='mt-12 flex flex-col items-center justify-center border ml-3 h-[380px]'>
          <img src={image} alt='bicycle' className='bg-slate-100 w-full p-6 h-full'/>
          <div className='my-3 flex flex-col items-center justify-center pb-3'>
            <h4 className='text-slate-400 text-sm two font-semibold'>SPECIALIZED</h4>
            <p className='font-bold mt-2 main'>{name}</p>
            <h4 className='text-[10px] text-primary-300 mt-2 main'>IN STOCK</h4>
            <p className='text-sm text-secondary-200 mt-2 two font-semibold'>£{price}</p> 
          </div>
        </div>
      </div>
  )
}

export default Bicycle;