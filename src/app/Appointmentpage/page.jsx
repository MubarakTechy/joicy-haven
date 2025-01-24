import React from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';

const page = () => {
  return (
    <div className='w-[100%]  flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center m-[35px] gap-[15px]'>
            <Image src="/logo.png" alt="" width={100} height={100} />
            <h2 className=' md:text-[30px] text-[20px] font-bold text-[#2f3093]'>Book Appointment With Us</h2>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>FULL NAME</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your Name' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>EMAIL</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your Email' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>WhatsApp Number</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your WhatsApp No' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>Service Type</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Select Service' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>Location</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your Location' />
                </div>
                <div className='flex flex-col md:flex-row md:gap-[50px] items-center'>
                    <div className='flex flex-col gap-[5px]'>
                        <h2 className='font-bold'>Appointment Date</h2>
                        <input className='border-2 border-black md:w-[20vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="date" name='' placeholder='Your City' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2 className='font-bold'>Time</h2>
                        <input className='border-2 border-black md:w-[16vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="datetime-local" name="" id="" />
                    </div>
                </div>
                </div>
            <div className='flex flex-col gap-[5px]'>
                <h2 className='font-bold'>Message</h2>
                <textarea className='md:w-[84vw] w-[95vw] h-[20vh] rounded-lg border-2 border-black ' name="" id="" placeholder='Message'></textarea>
            </div>
        </div>
        <div className='m-[30px]'>
            <button className='md:w-[15vw] w-[80vw] py-[10px] bg-black text-white rounded-md'>Enrol Now</button>
        </div>
      <Footer/>
    </div>
  )
}

export default page

