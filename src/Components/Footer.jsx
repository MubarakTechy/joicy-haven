import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-indigo-50 to-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Section */}
          <div className="space-y-6">
            <div className="relative w-28 h-28">
              <Image 
                src="/logo.png" 
                alt="Joicy's Haven Logo"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-indigo-900 mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed">
                Beside Valuation Mark, Opposite Kwara Hotel, 
                GRA Ilorin, Kwara State
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-indigo-800">Phone</h3>
              <p>
                <a href="tel:08100880442" className="text-indigo-700 hover:underline">08100880442</a> {' / '}
                <a href="tel:07063900993" className="text-indigo-700 hover:underline">07063900993</a>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-indigo-800">Email</h3>
              <p>
                <a href="mailto:info@joicyshaven.com" className="text-indigo-700 hover:underline">
                  info@joicyshaven.com
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { src: "/facebook.png", alt: "Facebook" },
                  { src: "/instagram.png", alt: "Instagram" },
                  { src: "/TikTok.png", alt: "TikTok" }
                ].map((social) => (
                  <a 
                    key={social.alt}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
                  >
                    <div className="relative w-5 h-5">
                      <Image
                        src={social.src}
                        alt={social.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/chair.jpg"
              alt="Footer Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Joicy's Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
