'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const training = [
  {
    title: 'Nails Training',
    list: ['Acrylic Nails', 'Nail Preparation', 'Tip Application', 'Gel Polish', 'Products, etc'],
    price: '150k',
  },
  {
    title: 'Cosmetic Treatment',
    list: ['Manicure', 'Pedicure'],
    price: '80k',
  },
  {
    title: 'Semi Permanent Brows',
    list: ['Product intro, Prep 101', 'Ombre', 'Practical', 'Mapping e.t.c'],
    price: '120k',
  },
  {
    title: 'Facials Training',
    list: ['Introduction, Types of facial, Types of skin', 'Products, equipment', 'Extraction, e.t.c'],
    price: '200k',
  },
  {
    title: 'Lash Extension',
    list: [
      'Introduction, Types of lash, Lash mapping',
      'After care technicians',
      'Lash removal',
      'Refill e.t.c',
    ],
    price: '60k',
  },
]

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const Training = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#2f3093] to-[#1f1f5f] text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Training Packages</h1>

      <div className="grid md:grid-cols-3 gap-10 w-[90%] max-w-6xl">
        {training.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#d0aa67] relative"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-[#f0c46a]">{item.title}</h3>
              <div className="text-sm bg-[#d0aa67] text-black font-semibold px-3 py-1 rounded-full shadow-md">
                {item.price}
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-white text-sm list-disc list-inside">
              {item.list.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Link
          href="/Trainingpage"
          className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 shadow-lg"
        >
          Enrol Now
          <Image src="/arrow.png" alt="arrow" width={24} height={24} />
        </Link>
      </motion.div>
    </div>
  )
}

export default Training
