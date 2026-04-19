export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Колонка 1: Адрес */}
        <div>
          <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">Adresse</h4>
          <p>Musterstraße 123</p>
          <p>10115 Berlin, Deutschland</p>
        </div>

        {/* Колонка 2: Контакты */}
        <div>
          <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">Kontakt</h4>
          <p className="hover:text-orange-500 transition-colors">
            <a href="tel:+49123456789">+49 123 456 789</a>
          </p>
          <p className="hover:text-orange-500 transition-colors">
            <a href="mailto:info@pizzeria.de">info@pizzeria.de</a>
          </p>
        </div>

        {/* Колонка 3: Юридическая инфо */}
        <div>
          <h4 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">Rechtliches</h4>
          <nav className="flex flex-col gap-2">
            <a href="/datenschutz" className="hover:text-orange-500 transition-colors italic">Datenschutz</a>
            <a href="/impressum" className="hover:text-orange-500 transition-colors italic">Impressum</a>
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pizzeria Premium Quality. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}