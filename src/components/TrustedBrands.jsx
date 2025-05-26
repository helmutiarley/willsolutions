import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

const TrustedBrands = () => {
  const brandLogos = [
    { name: 'Mikrotik', logoUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/b7282850-a0da-4f04-babe-1f8136be4773/76acf99165a7265b8487bdca0bd02bb8.png', alt: 'Mikrotik Logo' },
    { name: 'TP-Link', logoUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/b7282850-a0da-4f04-babe-1f8136be4773/18b15a9f712d14426ed989da53471a7c.png', alt: 'TP-Link Logo' },
    { name: 'D-Link', logoUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/b7282850-a0da-4f04-babe-1f8136be4773/a79eb3fb03603654a100ceec665f9d15.png', alt: 'D-Link Logo' },
    { name: 'Intelbras', logoUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/b7282850-a0da-4f04-babe-1f8136be4773/4fe1bf467a82b9bb3853e7a6494970c0.png', alt: 'Intelbras Logo' },
  ];

  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Marcas com as Quais Trabalhamos
        </motion.h2>
      </div>
      <div className="relative w-full">
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 25, 
              repeat: Infinity,
            }
          }}
        >
          {duplicatedLogos.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 p-4 mx-2" 
            >
              <div className="bg-gray-200 p-6 rounded-xl shadow-lg h-32 flex items-center justify-center border border-gray-300 transform hover:scale-105 transition-transform duration-300">
                {brand.logoUrl ? (
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.alt} 
                    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <Building size={48} className="text-sky-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;