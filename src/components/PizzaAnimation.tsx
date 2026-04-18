'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PizzaAnimation() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Функция для плавного скролла
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToMenu = () => {
  const menuSection = document.getElementById('menu'); // Ищем id="menu"
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  }
  
};

  return (
    // Расширяем на весь экран: w-screen h-screen
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(15px)' }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-around w-full px-10 md:px-20"
          >
            {/* Левая часть */}
            <div className="flex flex-col items-center gap-8 w-1/3">
              <div className="relative w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] overflow-hidden rounded-full shadow-2xl border-[12px] border-red-50">
                <Image src="/left-image.jpg" alt="Dirty" fill className="object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-black text-red-500 uppercase text-center leading-tight">
                Nach dem Essen <br/> sieht es so aus
              </span>
            </div>

            {/* Центр */}
            <div className="flex-1 text-center px-4">
              <h2 className="text-4xl md:text-7xl font-black text-gray-800 leading-[0.9] uppercase italic">
                Wollen Sie <br/>
                <span className="text-red-600">müdich fressen</span> <br/> 
                <span className="text-gray-300 text-3xl font-light not-italic block my-6 tracking-[0.4em]">ODER</span>
                <span className="text-green-600">frisch & köstlich essen?</span>
              </h2>
            </div>

            {/* Правая часть */}
            <div className="flex flex-col items-center gap-8 w-1/3">
              <div className="relative w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] overflow-hidden rounded-full shadow-2xl border-[12px] border-green-50">
                <Image src="/right-image.jpg" alt="Clean" fill className="object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-black text-green-500 uppercase text-center leading-tight">
                oder doch <br/> so aus
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <video
              src="/cheese-stretch.mp4" 
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

         
<motion.div 
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
  className="absolute top-0 right-0 z-20"
>
  <div className="bg-white/95 backdrop-blur-md px-12 py-8 rounded-[2.5rem] shadow-2xl flex items-center gap-8 border-b-8 border-orange-500 min-w-[450px]">
    {/* Иконка логотипа стала больше */}
    <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center text-white font-black text-5xl shadow-inner transform -rotate-3">
      P
    </div>
    
    <div className="flex flex-col">
      {/* Основной текст стал крупнее */}
      <span className="font-black text-6xl text-gray-900 leading-none tracking-tighter">
        PIZZERIA
      </span>
      {/* Подзаголовок стал заметнее */}
      <span className="text-sm text-orange-600 font-bold tracking-[0.4em] uppercase mt-2 ml-1">
        Premium Italian Quality
      </span>
    </div>
  </div>
</motion.div>

            {/* БЛОК С КНОПКОЙ */}
            <div className="absolute bottom-20 left-0 w-full flex flex-col items-center gap-10 z-20">
              <motion.h3 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white text-6xl md:text-8xl font-black drop-shadow-2xl uppercase italic"
              >
                Guten Appetit!
              </motion.h3>
              
              <motion.button 
                onClick={scrollToContact} // Вызов скролла
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 1 }}
                className="group relative bg-orange-600 hover:bg-orange-500 text-white px-20 py-8 rounded-full text-3xl font-black shadow-[0_12px_0_0_rgba(154,52,18,1)] active:shadow-none active:translate-y-2 transition-all uppercase tracking-widest"
              >
                <div className="absolute -inset-2 bg-orange-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <span className="relative">Kontakt aufnehmen</span>
              </motion.button>

              <motion.button 
                onClick={scrollToMenu} // Вызов скролла
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 1 }}
                className="group relative bg-orange-600 hover:bg-orange-500 text-white px-20 py-8 rounded-full text-3xl font-black shadow-[0_12px_0_0_rgba(154,52,18,1)] active:shadow-none active:translate-y-2 transition-all uppercase tracking-widest"
              >
                <div className="absolute -inset-2 bg-orange-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <span className="relative">Menu</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}