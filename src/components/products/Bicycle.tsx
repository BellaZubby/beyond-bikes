

type Props = {
  image: string;
  name: string;
  price: number;
  carousel?: JSX.Element;
  tag?: string;
}

const Bicycle= ({image, name, price,carousel,tag} : Props) => {
  return (
    <div className="">
      <div className='mt-12 flex flex-col items-center justify-center border ml-3 h-[420px] relative'>
          <img src={image} alt='bicycle' className='bg-slate-100 p-6 w-full h-[250px] absolute top-0 '/>
          <img src={tag} className ='w-14 absolute top-0 left-0'/>
          <div className='my-3 flex flex-col items-center justify-center mt-60'>
            <h4 className='text-slate-400 text-sm two font-semibold'>SPECIALIZED</h4>
            <p className='font-bold mt-2 main'>{name}</p>
            <h4 className='text-[10px] text-primary-300 mt-2 main'>IN STOCK</h4>
            <p className='text-sm text-secondary-200 mt-2 two font-semibold'>£{price}</p>
            <p className="">{carousel}</p>
          </div>
        </div>
      </div>
  )
}

export default Bicycle;