"use client"
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='About' className='w-[100%] md:h-[100vh] flex md:px-[50px] flex-col-reverse md:flex-row items-center md:justify-between gap-[20px] my-[10px]'>
        <div className='flex flex-col md:gap-[25px] gap-[10px] items-center md:items-start'>
            <h2 className='md:text-[35px] text-[30px] font-bold'>About Joicy’s Haven</h2>
            <p className='md:w-[65%] w-full text-xl text-[#827070] text-center md:text-start'>Joicy’s Haven offers personalized beauty and wellness treatments in a relaxing environment, enhancing balance and confidence. Also offers personalized training for those who are interested to learn a skill.</p>
            <button className='text-purple-700 border-[2px] border-purple-500 md:w-[150px] w-[80vw] rounded-lg font-semibold py-[12px] md:py-[3px]'><a href="https://wa.me/+2347063900993">Learn More</a></button>
        </div>
        <div className=''>
            <Image className='w-[80vw] ' src="/rec.png" alt="" width={500} height={500}  />
        </div>
    </div>
  )
}

export default About
