"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const smoothScroll = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const scrollStep = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * progress);
      if (progress < 1) requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      smoothScroll(element.offsetTop, 1000);
      setMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation on mount
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
          ${scrolled ? "h-[8vh] shadow-md backdrop-blur-lg bg-white/80" : "h-[10vh] bg-transparent"}
          flex items-center justify-between px-6 md:px-16`}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={scrolled ? 60 : 70}
          height={scrolled ? 60 : 70}
          className="cursor-pointer transition-all duration-300"
        />

        <ul className="hidden md:flex items-center gap-10 text-lg xl:text-xl font-mono text-white">
          <li onClick={() => scrollToSection("Hero")} className="hover:text-[#2f3093]  cursor-pointer transition-colors">HOME</li>
          <li onClick={() => scrollToSection("About")} className="hover:text-[#2f3093] cursor-pointer transition-colors">ABOUT</li>
          <li onClick={() => scrollToSection("Service")} className="hover:text-[#2f3093] cursor-pointer transition-colors">SERVICE</li>
          <li><Link href="/Trainingpage" className="hover:text-[#2f3093]">TRAINING</Link></li>
          <Link href="/Appointmentpage">
            <button className="bg-[#d0aa67] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#2f3093] transition duration-300">
              Book Now
            </button>
          </Link>
        </ul>

        <button
          onClick={handleMenu}
          className="md:hidden text-4xl text-gray-800 transition-transform"
        >
          {menu ? <IoClose size={30} className="text-[#d0aa67]" /> : <RiMenuFill size={30} className="text-[#d0aa67]"  />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <ul className="fixed top-[10vh] left-0 w-full bg-gray-800 backdrop-blur-lg shadow-md flex flex-col items-center gap-6 py-8 text-lg font-mono text-white z-40 transition-all duration-500 ease-in-out">
          <li onClick={() => scrollToSection("Hero")} className="hover:text-[#2f3093] cursor-pointer">HOME</li>
          <li onClick={() => scrollToSection("About")} className="hover:text-[#2f3093] cursor-pointer">ABOUT</li>
          <li onClick={() => scrollToSection("Service")} className="hover:text-[#2f3093] cursor-pointer">SERVICE</li>
          <li><Link href="/Trainingpage" onClick={() => setMenu(false)}>TRAINING</Link></li>
          <Link href="/Appointmentpage" onClick={() => setMenu(false)}>
            <button className="bg-[#d0aa67] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#2f3093] transition duration-300">
              Book Now
            </button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Nav;
