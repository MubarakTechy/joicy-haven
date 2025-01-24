import React from 'react';
import Image from 'next/image';

const Clients = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center md:px-[50px] px-[15px] my-[30px]'>
        <h1 className='text-[35px] font-bold my-[20px]'>Our clients</h1>
        <div className=' flex flex-col md:flex-row items-center justify-center gap-[30px]'>
            <div className='flex flex-col md:gap-[20px] gap-[10px]'>
                <Image src="/stars.png" alt="" width={100} height={100} />
                <p className='text-xl'>“Joicy’s Haven is my go-to sanctuary for relaxation. The massage was divine, and the calming atmosphere made it an unforgettable escape from my busy life. Highly recommend!”</p>
                <h2 className='font-bold text-[20px]'>— Emmanuel M.</h2>
            </div>
            <div className='flex flex-col md:gap-[20px] gap-[10px]'>
                <Image src="/stars.png" alt="" width={100} height={100} />
                <p className='text-xl'>“I tried the signature facial, and the results were amazing. My skin feels so smooth and rejuvenated! The staff is incredibly friendly and knowledgeable.”</p>
                <h2 className='font-bold text-[20px]'>— Ruth S..</h2>
            </div>
            <div className='flex flex-col md:gap-[20px] gap-[10px]'>
                <Image src="/stars.png" alt="" width={100} height={100} />
                <p className='text-xl'>“From the moment I walked in, I felt at peace. The hot stone massage was the best I’ve ever had. Joicy’s Haven truly knows how to pamper their clients.”</p>
                <h2 className='font-bold text-[20px]' >— David L.</h2>
            </div>
        </div>
    </div>
  )
}

export default Clients
