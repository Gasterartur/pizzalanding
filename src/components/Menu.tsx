'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from './MenuData';

const categories = [
  { id: 'pizza', name: '🍕 Pizza' },
  { id: 'pasta', name: '🍝 Pasta' },
  { id: 'desserts', name: '🍰 Deserte' },
  { id: 'drinks', name: '🥤 Getränke' },
];



export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('pizza');

  return (
    <section id="menu" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-12 uppercase italic text-gray-900">
          Speisekarte
        </h2>
        
        <div className="flex overflow-x-auto pb-6 gap-3 no-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`shrink-0 px-8 py-4 rounded-2xl font-black text-lg transition-all ${
                activeTab === cat.id 
                  ? 'bg-orange-600 text-white shadow-xl -translate-y-1' 
                  : 'bg-white text-gray-500 hover:bg-orange-50 border border-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {menuData[activeTab].map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-4 md:gap-6 hover:shadow-md transition-shadow">
                  {/* ИЗОБРАЖЕНИЕ */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-[1.8rem] bg-gray-100">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>

                  {/* ТЕКСТ */}
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="text-lg md:text-2xl font-black text-gray-800 uppercase italic truncate">
                        {item.name}
                      </h3>
                      <span className="text-orange-600 font-black text-base md:text-xl whitespace-nowrap">
                        {item.price}€
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs md:text-base leading-tight line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}