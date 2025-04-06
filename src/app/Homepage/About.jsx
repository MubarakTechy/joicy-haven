'use client'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section
      id="About"
      className="w-full py-20 px-4 md:px-16 bg-[#f9f9f9] flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      {/* Text Content */}
      <div className="md:w-1/2 w-full flex flex-col gap-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2f3093]">
          About Joicy’s Haven
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Joicy’s Haven offers personalized beauty and wellness treatments in a
          relaxing environment, enhancing balance and confidence. We also offer
          hands-on training for individuals eager to learn and grow in the
          beauty industry.
        </p>
        <a
          href="https://wa.me/+2347063900993"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 w-fit mx-auto md:mx-0"
        >
          Learn More
        </a>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src="/About.png"
          alt="About Joicy’s Haven"
          width={500}
          height={500}
          className="rounded-xl w-[90%] md:w-[85%] object-cover shadow-lg"
        />
      </div>
    </section>
  )
}

export default About
