'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Product = () => {
  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Variants for individual item animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Hover effect variants
  const hoverVariants = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  return (
    <motion.div 
      className='bground bg-gradient-to-br from-indigo-50 to-white flex flex-col w-[100%] md:h-[100vh] gap-[30px] py-[20px]'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className='flex flex-col items-center justify-center'
        variants={itemVariants}
      >
        <motion.p 
          className='text-[#d0aa67] md:text-[20px] text-[30px] md:font-semibold font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why choose us?
        </motion.p>
        <div className='flex items-center'>
          <motion.h2 
            className='text-[30px] font-bold text-[#d0aa67] mx-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Relax.
          </motion.h2>
          <motion.h2 
            className='text-[30px] font-bold text-[#2f3093] mx-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Refresh.
          </motion.h2>
          <motion.h2 
            className='text-[30px] font-bold mx-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Renew.
          </motion.h2>
        </div>
      </motion.div>

      <motion.div className='flex flex-col gap-[50px]' variants={itemVariants}>
        <div className='flex flex-col md:flex-row items-center justify-around md:gap-[100px] gap-[20px]'>
          {[
            { 
              icon: "/Therapy.png", 
              title: "Expert therapists", 
              description: "Skilled professionals for personalized treatments."
            },
            { 
              icon: "/perfume.png", 
              title: "Serene atmosphere", 
              description: "Calm and peaceful environment for relaxation."
            },
            { 
              icon: "/candle.png", 
              title: "Personalized care", 
              description: "Tailored treatments to meet your unique needs."
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className='flex flex-col items-center justify-center'
              variants={itemVariants}
              whileHover={hoverVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image src={item.icon} alt={item.title} width={50} height={50} />
              </motion.div>
              <motion.h3 
                className='md:text-[30px] text-[35px] text-[#2f3093] font-mono'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className='md:w-[250px] w-[90vw] text-center text-xl md:text-[15px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <div className='flex flex-col md:flex-row items-center md:gap-[100px] gap-[20px]'>
          {[
            { 
              icon: "/Timetable.png", 
              title: "Flexible Scheduling", 
              description: "Convenient appointment times to fit your lifestyle."
            },
            { 
              icon: "/used.png", 
              title: "Premium Products", 
              description: "High-quality, carefully selected wellness products."
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className='flex flex-col items-center justify-center'
              variants={itemVariants}
              whileHover={hoverVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image src={item.icon} alt={item.title} width={50} height={50} />
              </motion.div>
              <motion.h3 
                className='text-[30px] text-[#2f3093] font-mono'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className='md:w-[250px] w-[90vw] text-center text-xl md:text-[15px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Product;