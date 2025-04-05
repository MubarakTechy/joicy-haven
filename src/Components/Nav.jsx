"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Nav = () => {

    const [menu, setMenu] =useState(false);

        function handleMenu(){
          setMenu(!menu)
        }

    const smoothScroll = (targetY, duration) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime = null;
  
      const scrollStep = (currentTime) => { 
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * progress);
  
        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          smoothScroll(element.offsetTop, 1000);
     }
    }
  return (
    <div>
        <nav className='w-[100%] flex fixed items-center justify-between px-[50px] bg-[#D9D9D9] text-black z-10 h-[10vh]'>
            <Image src="/logo.png" alt="" width={80} height={80} className=" cursor-pointer"  />
            <ul className='md:flex items-center gap-[40px] text-xl font-semibold hidden'>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Hero")}>HOME</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("About")}>ABOUT</li>
                <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Service")} >SERVICE</li>
                <li><Link href={'/Trainingpage'}>TRAINING</Link></li>
            <button className='border-2 border-purple-500 p-2 bg-white rounded-lg text-black  w-[13vw] font-semibold'><Link href={'/Appointmentpage'}>Book Now</Link></button>
            </ul>
            <button onClick={handleMenu} className='flex md:hidden text-5xl font-bold'>{menu ? <IoClose size={40} /> : <RiMenuFill size={40} />}</button>
        </nav>
        { menu &&
            <ul className={`flex fixed flex-col transition-all duration-1000 ease-linear items-center justify-center py-[5px] bg-[#d9d9d9] w-[100vw] px-[20px] z-10 text-xl font-bold overflow-hidden  gap-[20px]  ${menu?'top-16':'-top-full'}`}>
            <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Hero")}>HOME</li>
            <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("About")}>ABOUT</li>
            <li className='hover:text-[#f0394b] cursor-pointer' onClick={() => scrollToSection("Service")} >SERVICE</li>
            <li><Link href={'/Trainingpage'}>TRAINING</Link></li>
            </ul>
            
        }
    </div>
  )
}

export default Nav
