'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-orange-600 w-full">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl"
        >
          {/* Заголовок формы */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 uppercase italic tracking-tight">
              Jetzt Bestellen
            </h2>
            <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-6 text-lg font-medium">
              Hinterlassen Sie Ihre Daten и wir rufen Sie zur Bestätigung zurück!
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Поле: Имя */}
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-400 uppercase ml-4 tracking-widest">
                  Name
                </label>
                <input 
                  type="text" 
                  placeholder="Ihr Name"
                  className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl outline-none transition-all text-gray-800 font-semibold"
                />
              </div>

              {/* Поле: Телефон */}
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-400 uppercase ml-4 tracking-widest">
                  Telefon
                </label>
                <input 
                  type="tel" 
                  placeholder="+49 (___) ___-__-__"
                  className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl outline-none transition-all text-gray-800 font-semibold"
                />
              </div>
            </div>

            {/* Поле: Выбор заказа / Сообщение */}
            <div className="space-y-2">
              <label className="text-sm font-black text-gray-400 uppercase ml-4 tracking-widest">
                Ihre Bestellung
              </label>
              <textarea 
                rows={4}
                placeholder="Welche Pizza(s) möchten Sie bestellen?"
                className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-3xl outline-none transition-all text-gray-800 font-semibold resize-none"
              ></textarea>
            </div>

            {/* Кнопка отправки */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-6 rounded-3xl text-2xl shadow-[0_8px_0_0_rgba(154,52,18,1)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-[0.2em]"
            >
              Bestellung Absenden
            </motion.button>
          </form>

          {/* Дополнительная инфо под формой */}
          <p className="text-center text-gray-400 mt-8 text-sm">
            Durch das Absenden akzeptieren Sie unsere <span className="underline cursor-pointer">Datenschutzbestimmungen</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}