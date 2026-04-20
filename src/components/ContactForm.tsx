'use client';

import { useState } from 'react'; // Добавили
import { motion } from 'framer-motion';

export default function ContactForm() {
  // Состояния для полей
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' }); // Очистка
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-orange-600 w-full">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 uppercase italic tracking-tight">
              Jetzt Bestellen
            </h2>
            <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
            
            {/* Сообщение об успехе/ошибке */}
            {status === 'success' && <p className="text-green-600 mt-4 font-bold">✅ Bestellung gesendet!</p>}
            {status === 'error' && <p className="text-red-600 mt-4 font-bold">❌ Fehler. Versuchen Sie es позже.</p>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-400 uppercase ml-4 tracking-widest">Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  type="text" 
                  placeholder="Ihr Name"
                  className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl outline-none transition-all text-gray-800 font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-400 uppercase ml-4 tracking-widest">Telefon</label>
                <input 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  type="tel" 
                  placeholder="+49 (___) ___-__-__"
                  className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl outline-none transition-all text-gray-800 font-semibold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-gray-400 uppercase ml-4 tracking-widest">Ihre Bestellung</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                placeholder="Welche Pizza(s) möchten Sie bestellen?"
                className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl outline-none transition-all text-gray-800 font-semibold resize-none"
              ></textarea>
            </div>

            <motion.button 
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" // Изменили с type="button"
              className={`w-full ${status === 'loading' ? 'bg-gray-400' : 'bg-orange-600'} text-white font-black py-6 rounded-3xl text-2xl shadow-[0_8px_0_0_rgba(154,52,18,1)] transition-all uppercase tracking-[0.2em]`}
            >
              {status === 'loading' ? 'Wird gesendet...' : 'Bestellung Absenden'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}