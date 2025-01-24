import React from 'react';
import Image from 'next/image';



const items = [
    {id: 1, Image: '/Rectangle8.png',
          description: 'Massages, a good start on the way to active longevity!'},

    {id: 2, Image: '/Rectangle9.png',
         description: 'Body Treatments, will give you the feeling of zero gravity'},

    {id: 3, Image: '/Rectangle5.png',
         description: 'Facial Treatments, will fill you with vitality and pleasure of being yourself.'},
    
]


const Service = () => {
  return (
    <div id='Service' className='w-[100%] md:h-[100vh] flex flex-col items-center  bg-[#2f3093]'>
        <h1 className='text-[30px] font-bold mt-[20px] text-white'>Our Treatment Packages</h1>
        <div className='flex flex-col md:flex-row items-center justify-center w-full md:px-[50px] px-[15px] md:gap-[50px] gap-[15px] mt-[20px]'>
        {items.map(item => (
                <div key={item.id} className='flex flex-col  items-center md:gap-[10px] gap-[5px]'>
                    <Image className='h-[30vh]' src={item.Image} alt={item.description} width={350} height={300} />
                    <p className='md:w-[26vw] border-[1px] border-black rounded-md text-lg p-[5px] text-white text-start'>{item.description}</p>
                </div>
            ))
        }
        </div>
        <div className='flex flex-col md:flex-row items-center md:gap-[100px] gap-[20px] mt-[20px]'>
            <Image className='h-[35vh]' src="/rectangle4.png" alt="" width={530} height={100} />
            <Image className='h-[35vh]' src="/rectangle2.png" alt="" width={530} height={150} />
        </div>
      
    </div>
  )
}

export default Service
