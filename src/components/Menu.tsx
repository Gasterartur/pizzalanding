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
      {/* Увеличили max-width с 6xl до 7xl */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-black text-center mb-16 uppercase italic text-gray-900 tracking-tighter">
          Speisekarte
        </h2>
        
        {/* Категории */}
        <div className="flex overflow-x-auto pb-8 gap-4 no-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`shrink-0 px-10 py-5 rounded-2xl font-black text-xl transition-all ${
                activeTab === cat.id 
                  ? 'bg-orange-600 text-white shadow-2xl -translate-y-1' 
                  : 'bg-white text-gray-500 hover:bg-orange-50 border border-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {menuData[activeTab].map((item) => (
                <div key={item.id} className="bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:shadow-xl transition-all h-full">
                  
                  {/* ИЗОБРАЖЕНИЕ - сделали еще солиднее */}
                  <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-inner">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      sizes="(max-width: 768px) 200px, 300px"
                      className="object-cover transition-transform hover:scale-105 duration-500" 
                    />
                  </div>

                  {/* ТЕКСТОВЫЙ БЛОК */}
                  {/* ТЕКСТОВЫЙ БЛОК */}
<div className="flex-1 min-w-0 w-full">
  
  {/* Заголовок и цена теперь всегда друг под другом */}
  <div className="flex flex-col items-start mb-4 border-b-2 border-orange-100 pb-3">
    <h3 className="text-2xl md:text-4xl font-black text-gray-900 uppercase italic leading-tight mb-1">
      {item.name}
    </h3>
    <span className="text-orange-600 font-black text-xl md:text-3xl">
      {item.price}€
    </span>
  </div>

  {/* Описание */}
  <p className="text-gray-600 text-base md:text-xl leading-relaxed font-medium">
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