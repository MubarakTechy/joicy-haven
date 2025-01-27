import Nav from '@/Components/Nav';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id='Hero'>
        <Nav/>
        <div className='bground w-[100%] h-[100vh] flex items-center justify-center '>
            <div className='flex flex-col md:items-start items-center justify-center gap-[20px] text-white mt-[80px] '>
                    <h1 className='md:text-[45px] text-[28px] font-bold'>Welcome to Joicy’s Haven</h1>
                    <h3 className='md:text-[23px] text-[20px] font-bold'>Relax, Rejuvenate, and Learn with Us</h3>
                    <p className='md:w-[40vw] text-center md:text-start text-[20px] px-[10px]'>At Joicy’s Haven, we have packages for everyone. Whether you're here to indulge in our luxurious spa services or explore our professional training programs, we have something to nurture both body and mind.</p>
                <div className='flex flex-col md:flex-row items-center md:gap-[140px] gap-[20px]'>
                    <button className='bg-[#2f3093] md:w-[200px] w-[95vw] md:py-[8px] py-[12px] rounded-xl text-white font-bold text-xl md:text-[15px]'><Link href={'/Appointmentpage'}>Book An Appointment</Link></button>
                    <button className='bg-[#d0aa67]  md:w-[200px] w-[95vw] md:py-[8px] py-[12px] rounded-xl text-white font-bold text-xl md:text-[15px]'><Link href={'/Trainingpage'}>Apply For Training</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
