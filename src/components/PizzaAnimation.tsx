"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PizzaAnimation() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setStep(2), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Функции скролла
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToMenu = () =>
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    /* ГЛАВНЫЙ КОНТЕЙНЕР */
    <div className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          /* ПЕРВЫЙ КАДР (ПОСУДА) */
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            /* ТУТ ЛОГИКА КОЛОНКИ:
               flex-col — стоит по умолчанию (на мобилках и 768px).
               lg:flex-row — станет в ряд ТОЛЬКО на экранах от 1024px.
            */
            className="flex flex-col lg:flex-row items-center justify-center w-full gap-y-8 lg:gap-x-16 px-6"
          >
            {/* ГРУППА 1: ГРЯЗНАЯ ПОСУДА */}
          <div className="flex flex-col items-center gap-4"> {/* Увеличил отступ между фото и текстом */}
  {/* КРУГ: Сделал 150x150 для мобилок, чтобы был ровный круг */}
  <div className="relative w-[150px] h-[150px] lg:w-[20vw] lg:h-[20vw] lg:max-w-[300px] lg:max-h-[300px] rounded-full overflow-hidden border-[6px] lg:border-[12px] border-red-50 shadow-xl">
    <Image
      src="/left-image.jpg"
      alt="Dirty dishes"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* ТЕКСТ: Добавил ограничение по ширине (max-w) */}
  <span className="text-red-500 font-black uppercase text-sm lg:text-2xl italic text-center max-w-[180px] lg:max-w-[350px] leading-tight">
    Sieht es nach dem Kochen <br className="hidden md:block" /> bei Ihnen auch so aus?
  </span>
</div>

            {/* ГРУППА 2: ТЕКСТ (ЦЕНТР) */}
            <div className="text-center max-w-[500px]">
              <h2 className="text-2xl md:text-4xl lg:text-7xl font-black text-gray-800 leading-tight lg:leading-[0.9] uppercase italic m-0">
                Wollen Sie <br />
                <span className="text-red-600">müdich fressen</span> <br />
                <span className="text-gray-300 text-lg lg:text-3xl font-light not-italic block my-2 lg:my-6 tracking-[0.3em]">
                  ODER
                </span>
                <span className="text-green-600">frisch & köstlich essen?</span>
              </h2>
            </div>

            {/* ГРУППА 3: ЧИСТАЯ ПОСУДА */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[150px] h-[150px] lg:w-[20vw] lg:h-[20vw] lg:max-w-[300px] lg:max-h-[300px] rounded-full overflow-hidden border-[6px] lg:border-[12px] border-green-50 shadow-xl">
                <Image
                  src="/right-image.jpg"
                  alt="Clean dishes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-green-500 font-black uppercase text-sm lg:text-2xl italic">
                oder doch lieber so?
              </span>
            </div>
          </motion.div>
        ) : (
          /* ВТОРОЙ КАДР (ВИДЕО) */
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-full"
          >
            <video
              src="/cheese-stretch.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

            {/* ЛОГОТИП В ПРАВОМ ВЕРХНЕМ УГЛУ */}
            <div className="absolute top-0 right-30 md:top-0 md:right-8 z-30">
              <div className="bg-white/95 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-xl border-b-4 border-orange-500 flex items-center gap-3 md:gap-4 shadow-2xl">
                {/* Буква P: уменьшил для мобилок, оставил крупной для десктопа */}
                <div className="w-8 h-8 md:w-20 md:h-16 bg-orange-500 rounded-lg md:rounded-xl flex items-center justify-center text-white font-black text-lg md:text-3xl transform -rotate-3 shrink-0">
                  P
                </div>
                {/* Текст: тоже адаптивный размер */}
                <span className="font-black text-lg md:text-4xl text-gray-900 uppercase">
                  Pizzeria
                </span>
              </div>
            </div>

            {/* КНОПКИ */}
            <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-6 px-6 z-20">
              <h3 className="text-white text-4xl lg:text-8xl font-black uppercase italic text-center drop-shadow-2xl">
                Guten Appetit!
              </h3>
              <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[300px] lg:max-w-none lg:justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-orange-600 text-white py-5 px-10 rounded-full font-black text-xl lg:text-3xl shadow-[0_8px_0_0_#9a3412] active:translate-y-2 active:shadow-none transition-all uppercase"
                >
                  Kontakt
                </button>
                <button
                  onClick={scrollToMenu}
                  className="bg-orange-600 text-white py-5 px-10 rounded-full font-black text-xl lg:text-3xl shadow-[0_8px_0_0_#9a3412] active:translate-y-2 active:shadow-none transition-all uppercase"
                >
                  Menu
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
