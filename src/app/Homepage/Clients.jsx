"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Clients = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Responsive slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Client testimonials data
  const testimonials = [
    {
      id: 1,
      content: " Joicy's Haven is my go-to sanctuary for relaxation. The massage was divine, and the calming atmosphere made it an unforgettable escape from my busy life. Highly recommend! ",
      author: "Emmanuel M.",
      rating: 5
    },
    {
      id: 2,
      content: " I tried the signature facial, and the results were amazing. My skin feels so smooth and rejuvenated! The staff is incredibly friendly and knowledgeable. ",
      author: "Ruth S.",
      rating: 5
    },
    {
      id: 3,
      content: " From the moment I walked in, I felt at peace. The hot stone massage was the best I've ever had. Joicy's Haven truly knows how to pamper their clients. ",
      author: "David L.",
      rating: 5
    },
    {
      id: 4,
      content: "The aromatherapy session was just what I needed after a stressful week. The attention to detail and personalized care made all the difference.",
      author: "Sarah K.",
      rating: 5
    },
    {
      id: 5,
      content: "I've been to many spas, but Joicy's Haven stands out. Their holistic approach to wellness has made a remarkable difference in my overall well-being.",
      author: "Michael P.",
      rating: 5
    }
  ];

  // Generate stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div id="Testimonials" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Happy Clients</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it  hear what our valued clients have to say about their experiences at Joicy&apos;s Haven.
          </p>
        </div>

        <div className="relative px-4">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-500">Verified Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

     
    </div>
  );
};

export default Clients;
