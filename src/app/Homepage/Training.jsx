import React from 'react';
import Image from 'next/image';
import Link from 'next/link';





const training = [
    {title: 'Nails Training',
         list: ['*Acrylic Nails','*Nail Preparation','*Tip Application','*Gel Polish', '*Products, etc'],
          price: '150k'},

    {title: 'Cosmetic Treatment',
         list: ['*Manicure','*Pedicure'],
          price: '80k'},

    {title: 'Semi Permanent Brows',
         list: ['*Product intro, Prep 101','*Ombre','*Practical','*Mapping e.t.c,'],
          price: '120k'},

    {title: 'Facials Training',
         list: ['*Introduction, Types of facial, Types of skin,','*Products, equipment,','*Extraction, e.t.c'],
          price: '200k'},

    {title: 'Lash Extension',
         list: ['*Introduction, Types of lash, Lash mapping,','*After care technicians','*Lash removal', 'Refill e.t.c'],
          price: '150k'},

    // {title: 'Facials Training',
    //     list: ['*Introduction, Types of facial, Types of skin,','*Products, equipment,','*Extraction, e.t.c'],
    //       price: '150k'},
    

    
    
]
const Training = () => {
  return (
    <div className='w-[100%] md:h-[100vh] flex flex-col items-center justify-center gap-[20px] bg-[#2f3093] text-white'>
        <h1 className='text-[30px] font-bold mt-[20px]'>Training Packages</h1>
        <div className='grid md:grid-cols-3 md:gap-[40px] gap-[15px]'>
            {training.map((item, index) => (
                <div key={index} className=' flex items-center  border-[1px] border-[#d0aa67] md:w-[25vw] w-[90vw] min-h-[30vh] rounded-xl px-[20px] gap-[10px]'>
                    <div>
                        <h3 className='md:text-xl text-[30px] md:font-semibold font-bold'>{item.title}</h3>
                        <ul className='text-[20px]'>
                            {item.list.map((subItem, subIndex) => (
                                <li key={subIndex}>{subItem}</li>
                            ))}
                        </ul>
                    </div>
                    <p className='w-[50px] h-[50px] rounded-[25px] border-2 border-[#d0aa67] flex items-center justify-center'>{item.price}</p>
                </div>
            ))}
        </div>
        <div className='m-[30px] flex items-center justify-center bg-black text-white rounded-md py-[10px] md:w-[15vw] w-[80vw] gap-[20px] '>
            <h1 className='font-bold'><Link href={'/Trainingpage'}>Enrol Now</Link></h1>
            <Image src="/arrow.png" alt="" width={30} height={30} />
        </div>
      
    </div>
  )
}

export default Training
