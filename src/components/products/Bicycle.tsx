type Props = {
  image: string;
  name: string;
  price: number;
  carousel?: JSX.Element;
  tag?: JSX.Element;
  saleTag?: JSX.Element
}

const Bicycle = ({ image, name, price, carousel, tag, saleTag }: Props) => {
  return (
    <div>
      <div className='bg-slate-100 mt-12 flex flex-col items-center justify-center border ml-3 h-[420px] relative'>
        <img src={image} alt='bicycle' className='p-6 w-[300px] h-[200px] absolute top-5' />
        <div>{tag}</div>
        <div>{saleTag}</div>
        <div className='bg-[#ffffff] w-full h-[220px] flex flex-col items-center justify-center mt-60'>
          <h4 className='text-slate-400 text-sm font-Roboto font-semibold'>SPECIALIZED</h4>
          <p className='font-bold mt-2'>{name}</p>
          <h4 className='text-[10px] text-primary-300 mt-2'>IN STOCK</h4>
          <p className='text-sm text-secondary-200 mt-2 font-Roboto font-semibold'>£{price}</p>
          <div className="mt-3">{carousel}</div>
        </div>
      </div>
    </div>
  )
}

export default Bicycle;