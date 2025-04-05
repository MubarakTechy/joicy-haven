'use client'
import React from 'react';
import Nav from '@/Components/Nav';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const backgroundImages = [

  './',
  '/public/image/Hero.png',
];

const Hero = () => {
  return (
    <div id='Hero' className='relative h-[100vh] w-full overflow-hidden'>
      <Nav />

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect='fade'
        className='absolute top-0 left-0 w-full h-full -z-10'
      >
        {backgroundImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className='w-full h-full bg-cover bg-center'
              style={{
                backgroundImage: `url(${src})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='w-full h-full flex items-center justify-center text-center px-4'>
        <div className='flex flex-col items-center md:items-start gap-5 text-white max-w-[900px]'>
          <h1 className='text-[28px] md:text-[45px] font-bold'>Welcome to Joicy’s Haven</h1>
          <h3 className='text-[20px] md:text-[23px] font-bold'>Relax, Rejuvenate, and Learn with Us</h3>
          <p className='text-[18px] md:text-[20px] md:text-left text-center'>
            At Joicy&apos; s Haven, we have packages for everyone. Whether you're here to indulge in our luxurious spa services or explore our professional training programs, we have something to nurture both body and mind.
          </p>

          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full'>
            <Link href='/Appointmentpage' className='bg-[#2f3093] text-white font-bold text-lg md:text-[15px] rounded-xl w-full md:w-[200px] py-3 text-center'>
              Book An Appointment
            </Link>
            <Link href='/Trainingpage' className='bg-[#d0aa67] text-white font-bold text-lg md:text-[15px] rounded-xl w-full md:w-[200px] py-3 text-center'>
              Apply For Training
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
