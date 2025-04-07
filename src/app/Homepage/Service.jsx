import React from 'react'
import Image from 'next/image'

const items = [
  {
    id: 1,
    Image: '/rec2.png',
    description: 'Experience deep relaxation and muscle relief with our professional massage therapy treatments.',
  },
  {
    id: 2,
    Image: '/bkg.png',
    description: 'Indulge in our luxurious body treatments designed to detoxify, hydrate, and rejuvenate your skin.',
  },
  {
    id: 3,
    Image: '/sauna.jpg',
    description: 'Unwind in our therapeutic sauna sessions to cleanse your body and refresh your mind.',
  },
  {
    id: 4,
    Image: '/blue.jpg',
    description: 'Revitalize your complexion with our specialized facial treatments tailored to your skin type.',
  },
  {
    id: 5,
    Image: '/chair.jpg',
    description: 'Pamper your feet with our professional pedicure services for ultimate comfort and care.',
  },
  {
    id: 6,
    Image: '/nail.jpg',
    description: 'Express yourself with our premium nail studio services featuring top-quality products and designs.',
  },
]

const Service = () => {
  return (
    <div
      id="Service"
      className="w-full py-16 px-4 bg-gradient-to-b from-gray-900 to-[#2f3093] text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Treatment Packages</h1>
        <p className="text-lg text-gray-300">
          Experience bliss and relaxation with our hand-picked therapies.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 backdrop-blur-sm p-4 rounded-2xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg text-white"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={item.Image}
                alt={item.description}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <p className="text-md leading-relaxed mb-5">{item.description}</p>
          <a href="/Appointmentpage">  <button className="px-6 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-[#2f3093] transition-all duration-300 flex items-center justify-center mx-auto">
                BOOK NOW
              </button>
            </a>
          </div>
        ))}
 
      </div>
  
    </div>
  )
}

export default Service