import ActionBtn from "@/shared/ActionBtn"


 type Props = {
     bgImg: string;
     title: string;
 }

 const Trends = ({bgImg, title}: Props) => {
   return (
     <section>
        
        <div className='bg-cover relative text-white h-[300px]'
        style={{backgroundImage: `url(${bgImg})`}}>
            <div className='w-[350px] h-[300px] bg-gradient-to-l from-secondary-300 to-gray-200'>
                <div className='py-28 pl-10 w-[80%] md:w-[50%]'>
                    <h1 className='mb-6 text-3xl font-bold'>{title}</h1>
                    <ActionBtn>SHOP NOW</ActionBtn>
                </div>
            </div>
        </div> 
      

     </section>
   )
 }

 export default Trends