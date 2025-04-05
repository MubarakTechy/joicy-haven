import React from 'react'
import Image from 'next/image'

const items = [
  {
    id: 1,
    Image: '/Rectangle8.png',
    description: 'Massages, a good start on the way to active longevity!',
  },
  {
    id: 2,
    Image: '/Rectangle9.png',
    description: 'Body Treatments, will give you the feeling of zero gravity',
  },
  {
    id: 3,
    Image: '/Rectangle5.png',
    description:
      'Facial Treatments, will fill you with vitality and pleasure of being yourself.',
  },
]

const Service = () => {
  return (
    <div
      id="Service"
      className="w-full py-16 px-4 bg-gradient-to-b from-[#2f3093] to-[#1f1f5f] text-white"
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
            className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg text-white"
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
            <p className="text-md leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
        <Image
          src="/Rectangle4.png"
          alt="Treatment preview"
          width={500}
          height={300}
          className="rounded-xl w-full md:w-1/2 object-cover"
        />
        <Image
          src="/Rectangle2.png"
          alt="Treatment preview"
          width={500}
          height={300}
          className="rounded-xl w-full md:w-1/2 object-cover"
        />
      </div>
    </div>
  )
}

export default Service
