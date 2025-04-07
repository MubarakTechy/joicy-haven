'use client';
import React, { useEffect, useRef, useState } from 'react';
import Nav from '@/Components/Nav';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Custom hook for animations
const useAnimations = () => {
  // Mouse position state for parallax effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for parallax
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5
    });
  };
  
  // Setup mouse events
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return { mousePosition };
};

// Detect user preference for reduced motion
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);
  
  return prefersReducedMotion;
};

const backgroundImages = [
  '/image/Hero.png',
  
];

// Decorative elements for the hero section
const DecoElements = ({ prefersReducedMotion, mousePosition }) => {
  const decorRef = useRef(null);
  
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    gsap.to(decorRef.current, {
      x: mousePosition.x * 15,
      y: mousePosition.y * 15,
      duration: 1,
      ease: "power2.out"
    });
  }, [mousePosition, prefersReducedMotion]);
  
  if (prefersReducedMotion) return null;
  
  return (
    <div ref={decorRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Floating circles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-white opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full border border-[#d0aa67] opacity-20 animate-float-medium"></div>
      <div className="absolute top-2/3 right-1/6 w-16 h-16 rounded-full border-2 border-[#2f3093] opacity-10 animate-float-fast"></div>
      
      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-1 h-1/3 bg-gradient-to-b from-white to-transparent opacity-5 rotate-12 blur-md"></div>
      <div className="absolute top-1/6 right-1/3 w-1 h-1/4 bg-gradient-to-b from-[#d0aa67] to-transparent opacity-5 -rotate-15 blur-md"></div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const bookBtnRef = useRef(null);
  const swiperRef = useRef(null);
  const overlayRef = useRef(null);
  const { mousePosition } = useAnimations();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
      
      // Simulate loading time and set loaded state
      const loadTimer = setTimeout(() => setIsLoaded(true), 500);
      return () => clearTimeout(loadTimer);
    }
  }, []);
  
  useEffect(() => {
    if (!isLoaded) return;
    
    // GSAP Animation Timeline for content entrance
    const tl = gsap.timeline({ 
      defaults: { ease: 'power3.out' },
      delay: 0.5
    });

    // Text animation with smoother staggering and slight 3D effect
    tl.fromTo(
      textRef.current.children,
      { 
        y: prefersReducedMotion ? 10 : 50, 
        opacity: 0,
        rotationX: prefersReducedMotion ? 0 : 15,
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: prefersReducedMotion ? 0.5 : 1.2, 
        stagger: prefersReducedMotion ? 0.1 : 0.25,
        ease: "back.out(1.2)"
      }
    )
    .fromTo(
      buttonsRef.current.children,
      { 
        scale: 0.9, 
        opacity: 0,
        y: prefersReducedMotion ? 5 : 20 
      },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        duration: prefersReducedMotion ? 0.4 : 0.8, 
        stagger: prefersReducedMotion ? 0.1 : 0.2,
        ease: "back.out(1.7)" 
      },
      prefersReducedMotion ? "-=0.2" : "-=0.5"
    );
    
    // Subtle pulse animation for the CTA button
    if (!prefersReducedMotion) {
      gsap.to(bookBtnRef.current, {
        boxShadow: '0 0 20px 2px rgba(47, 48, 147, 0.5)',
        scale: 1.03,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 3
      });
    }

    // Cleanup
    return () => {
      tl.kill();
      gsap.killTweensOf(bookBtnRef.current);
    };
  }, [isLoaded, prefersReducedMotion]);
  
  // Parallax effect for background images
  useEffect(() => {
    if (prefersReducedMotion || !isLoaded) return;
    
    const slides = document.querySelectorAll('.swiper-slide-bg');
    slides.forEach(slide => {
      gsap.to(slide, {
        backgroundPosition: `${50 + (mousePosition.x * 10)}% ${50 + (mousePosition.y * 10)}%`,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, [mousePosition, prefersReducedMotion, isLoaded]);

  return (
    <div 
      id='Hero' 
      ref={heroRef}
      className='relative min-h-screen w-full overflow-hidden bg-gray-900 '
      aria-label="Joicy's Haven hero section"
    >
      <Nav />
   {/* Loading overlay */}
      {/* Loading overlay */}
         {/* Loading overlay */}
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 relative">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-[#d0aa67] border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute top-2 left-2 w-12 h-12 border-4 border-[#2f3093] border-t-transparent rounded-full animate-spin-slow"></div>
            </div>
            <p className="text-white mt-4 text-sm font-light tracking-wider">WELCOME TO JOICY&apos;S HAVEN</p>
          </div>
        </div>
      )}

      {/* Enhanced Background Swiper with parallax effect */}
      <Swiper
        modules={[Autoplay, Pagination, EffectCreative]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        effect='creative'
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className='absolute top-0 left-0 w-full h-full -z-10'
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        onActiveIndexChange={(swiper) => setActiveSlide(swiper.realIndex)}
        ref={swiperRef}
      >
        {backgroundImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className='swiper-slide-bg w-full h-full bg-cover bg-center transition-all duration-700'
              style={{
                backgroundImage: `url(${src})`,
              }}
            ></div>
            <div 
              ref={overlayRef} 
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 backdrop-blur-[2px]"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative elements */}
      <DecoElements prefersReducedMotion={prefersReducedMotion} mousePosition={mousePosition} />

      {/* Content */}
      <div className='w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative'>
        <div 
          ref={textRef}
          className='text-center md:text-left max-w-4xl mx-auto px-4 relative z-20'
        >
          <div className="overflow-hidden">
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans     text-white mb-4 drop-shadow-md'>
              Welcome to Joicy&apos;s Haven
            </h1>
          </div>
          
          <div className="overflow-hidden text-center">
            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 drop-shadow-md'>
              <span className="inline-block font-mono">Relax, </span>
              <span className="inline-block text-[#d0aa67] font-mono mx-2">Rejuvenate, </span>
              <span className="inline-block font-mono">and Learn with Us</span>
            </h3>
          </div>
          
          <div className="overflow-hidden">
            <p className='text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed'>
              At Joicy&apos;s Haven, we have packages for everyone. Whether you&apos;re here to indulge in our luxurious spa services or explore our professional training programs, we have something to nurture both body and mind.
            </p>
          </div>

          <div 
            ref={buttonsRef}
            className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4'
          >
            <Link 
              href='/Appointmentpage' 
              ref={bookBtnRef}
              className='w-full sm:w-56 bg-[#2f3093] text-white font-semibold text-base md:text-[15px] py-3 px-6 rounded-xl hover:bg-[#3f41a3] transition-all duration-300 text-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2f3093]/50 focus:ring-offset-2 focus:ring-offset-gray-900'
            >
              <span className="flex items-center justify-center">
                Book Appointment
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
            <Link 
              href='/Trainingpage' 
              ref={bookBtnRef}
              className='w-full sm:w-56 bg-[#d0aa67] text-white font-semibold text-base md:text-[15px] py-3 px-6 rounded-xl hover:bg-[#e0ba77] transition-all duration-300 text-center shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d0aa67]/50 focus:ring-offset-2 focus:ring-offset-gray-900'
            >
               <span className="flex items-center justify-center">
                Apply For Training
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide indicators with names */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-end">
        <div className="text-white/70 text-sm mb-2">
          {activeSlide === 0 ? "Spa Experience" : "Training Programs"}
        </div>
        <div className="flex gap-2">
          {backgroundImages.map((_, idx) => (
            <button 
              key={idx} 
              className={`w-8 h-1 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-[#d0aa67] w-12' : 'bg-white/30'}`}
              onClick={() => swiperRef.current?.swiper.slideTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="text-white/50 text-xs mb-2 animate-pulse">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
      {/* 'https://github.com/codedsholly11/joicyshaven.git' */}
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" aria-hidden="true"></div>
      
      {/* Social proof element */}
      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 rotate-90 hidden lg:flex items-center gap-4">
        <div className="w-8 h-px bg-white/30"></div>
        <span className="text-white/60 text-xs tracking-widest uppercase">Award-winning spa & training</span>
      </div>
    </div>
  );
};

// Add these animations to your global CSS


export default Hero;