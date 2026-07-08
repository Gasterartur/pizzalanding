"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./PizzaAnimation.css"; // Подключаем созданные стили

export default function PizzaAnimation() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setStep(2), 6000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToMenu = () =>
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="pizza-container">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          /* ПЕРВЫЙ КАДР (ПОСУДА) */
          <motion.div
            key="step1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="step1-wrapper"
          >
            {/* ГРУППА 1: ГРЯЗНАЯ ПОСУДА */}
            <motion.div
              className="dishes-group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
            >
              <div className="dish-image-circle dirty">
                <Image
                  src="/left-image.jpg"
                  alt="Dirty dishes"
                  fill
                  sizes="(min-width: 1024px) 20vw, 150px"
                  className="object-cover"
                  priority
                />
              </div>
             <span className="dish-text dirty">
              Sieht es nach dem Kochen <br className="br-hidden-mobile" /> bei
              Ihnen auch so aus?
              </span>
            </motion.div>

            {/* ГРУППА 2: ТЕКСТ (ЦЕНТР) */}
            <motion.div
              className="center-text-group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 3 }}
            >
              <h2 className="main-title">
                Wollen Sie <br />
                <span className="text-red-600">müde und gestresst das Essen fassen</span> <br />
                <span className="divider-text">ODER</span>
                <span className="text-green-600">frisch & köstlich genießen?</span>
              </h2>
            </motion.div>

            {/* ГРУППА 3: ЧИСТАЯ ПОСУДА */}
            <motion.div
              className="dishes-group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              <div className="dish-image-circle clean">
                <Image
                  src="/right-image.jpg"
                  alt="Clean dishes"
                  fill
                  sizes="(min-width: 1024px) 20vw, 150px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="dish-text clean">
                oder doch lieber so?
              </span>
            </motion.div>
          </motion.div>
        ) : (
          /* ВТОРОЙ КАДР (ВИДЕО) */
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="step2-wrapper"
          >
            <video
              src="/cheese-stretch.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="bg-video"
            />
            <div className="video-overlay" />

            {/* ЛОГОТИП В ПРАВОМ ВЕРХНЕМ УГЛУ */}
            <div className="logo-badge">
              <div className="logo-container">
                <div className="logo-letter">P</div>
                <span className="logo-text">Pizzeria</span>
              </div>
            </div>

            {/* КНОПКИ */}
            <div className="cta-container">
              <h3 className="cta-title">Guten Appetit!</h3>
              <div className="buttons-holder">
                <button onClick={scrollToContact} className="action-button">
                  Kontakt
                </button>
                <button onClick={scrollToMenu} className="action-button">
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