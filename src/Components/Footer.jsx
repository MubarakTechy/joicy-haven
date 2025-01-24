import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-[100%]'>
        <div className='flex flex-col-reverse md:flex-row gap-[15px]'>
            <div className='flex flex-col md:w-[50%] w-full md:h-[50vh] px-[50px] gap-[20px]'>
                <div>
                    <Image src="/logo.png" alt="" width={100} height={100} />
                </div>
                <div>
                    <h2 className='text-[25px] font-semibold text-[#2f3093]'>Get in touch</h2>
                    <p className='text-xl md:w-[25vw]'>Beside valuation mark opposite Kwara Hotel, GRA Ilorin</p>
                </div>
                <div>
                    <h2 className='text-[25px] font-semibold text-[#2f3093]'>Phone</h2>
                    <p className='text-xl'>08100880442 or 07063900993</p>
                </div>
                <div>
                    <h2 className='text-[25px] font-semibold text-[#2f3093]'>Email</h2>
                    <p className='text-xl'>info@joicyshaven.com</p>
                </div>
                <div className='flex items-center'>
                    <Image src="/facebook.png" alt="" width={50} height={50} />
                    <Image src="/instagram.png" alt="" width={50} height={50} />
                    <Image src="/TikTok.png" alt="" width={50} height={50} />
                </div>
            </div>
            <div className='md:w-[50%]'>
                <Image className='w-[100%] h-[70vh]' src="/Rectangle1.png" alt="" width={200} height={200} />
            </div>
        </div>
        <div className='w-[100%] h-[130px] bg-black flex items-center justify-center'>
            <h2 className='md:text-[20px] font-semibold mt-[20px] text-white'>© 2025 Joicy's Haven. All rights reserved.</h2>
        </div>
    </div>
  )
}

export default Footer
