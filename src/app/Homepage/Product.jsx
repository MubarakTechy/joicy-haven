import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div className='bgpix flex flex-col w-[100%] md:h-[100vh] gap-[30px] py-[20px]'>
       <div className='flex flex-col items-center justify-center'>
            <p className='text-[#d0aa67] md:text-[20px] text-[30px] md:font-semibold font-bold'>Why choose us?</p>
            <div className='flex items-center'>
                <h2 className='text-[30px] font-bold text-[#d0aa67]'>Relax.</h2>
                <h2 className='text-[30px] font-bold text-[#2f3093]'>Refresh.</h2>
                <h2 className='text-[30px] font-bold'>Renew.</h2>
            </div>
       </div>

        <div className='flex flex-col gap-[50px]'>
            <div className='flex flex-col md:flex-row items-center justify-around md:gap-[100px] gap-[20px]'>
                <div className='flex flex-col items-center justify-center'>
                    <Image src="/Therapy.png" alt="" width={50} height={50} />
                    <h3 className='md:text-[30px] text-[40px] text-[#2f3093] font-semibold'>Expert therapists</h3>
                    <p className=' md:w-[250px] w-[90vw] text-center text-xl md:text-[17px]'>Skilled professionals for personalized treatments.</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src="/perfume.png" alt="" width={50} height={50} />
                    <h3 className='text-[30px] text-[#2f3093] font-semibold'>Serene atmosphere</h3>
                    <p className='md:w-[250px] w-[90vw] text-center text-xl md:text-[17px]'>Skilled professionals for personalized treatments.</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src="/candle.png" alt="" width={50} height={50} />
                    <h3 className='text-[30px] text-[#2f3093] font-semibold'>Personalized care</h3>
                    <p className='md:w-[250px] w-[90vw] text-center text-xl md:text-[17px]'>Skilled professionals for personalized treatments.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center md:gap-[100px] gap-[20px]'>
                <div className='flex flex-col items-center justify-center'>
                    <Image src="/Timetable.png" alt="" width={50} height={50} />
                    <h3 className='text-[30px] text-[#2f3093] font-semibold'>Flexible Scheduling</h3>
                    <p className='md:w-[250px] w-[90vw] text-center text-xl md:text-[17px]'>Skilled professionals for personalized treatments.</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src="/used.png" alt="" width={50} height={50} />
                    <h3 className='text-[30px] text-[#2f3093] font-semibold'>Premium Products</h3>
                    <p className='md:w-[250px] w-[90vw] text-center text-xl md:text-[17px]'>Skilled professionals for personalized treatments.</p>
                </div>
                <div className='hidden'>
                    <Image src="/candle.png" alt="" width={50} height={50} />
                    <h3 className='text-[30px] text-[#2f3093] font-semibold'>Expert therapists</h3>
                    <p>Skilled professionals for personalized treatments.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Product
