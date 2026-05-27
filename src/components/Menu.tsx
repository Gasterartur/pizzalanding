'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from './MenuData';
import './MenuSection.css'; // Импортируем созданный файл стилей

const categories = [
  { id: 'pizza', name: '🍕 Pizza' },
  { id: 'pasta', name: '🍝 Pasta' },
  { id: 'desserts', name: '🍰 Deserte' },
  { id: 'drinks', name: '🥤 Getränke' },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('pizza');

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">
          Speisekarte
        </h2>
        
        {/* Категории */}
        <div className="categories-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`category-btn ${
                activeTab === cat.id ? 'active' : 'inactive'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="menu-grid-wrapper">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="menu-grid"
            >
              {menuData[activeTab].map((item) => (
                <div key={item.id} className="menu-card">
                  
                  {/* ИЗОБРАЖЕНИЕ */}
                  <div className="card-image-wrapper">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      sizes="(max-width: 768px) 200px, 300px"
                    />
                  </div>

                  {/* ТЕКСТОВЫЙ БЛОК */}
                  <div className="card-text-block">
                    {/* Заголовок и цена */}
                    <div className="card-text-header">
                      <h3 className="item-name">
                        {item.name}
                      </h3>
                      <span className="item-price">
                        {item.price}€
                      </span>
                    </div>

                    {/* Описание */}
                    <p className="item-description">
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