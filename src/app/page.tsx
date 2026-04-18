import PizzaAnimation from '@/components/PizzaAnimation';
import Menu from '@/components/Menu';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      <PizzaAnimation />

      <Menu />
      
      <ContactForm />

              <button 
                type="button"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl text-xl shadow-xl hover:shadow-orange-300 transition-all uppercase tracking-widest"
              >
                Absenden
              </button>

              <button 
               type="button"
               className="m-full bg-orange-600 hover:bg-orange-700 text-white font-black py-5 rounded-2xl text-xl shadow-xl hover:shadow-orange-300 transition-all uppercase tracking-widest"
                >
                Menu
              </button>
       

    
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 Premium Pizzeria. All rights reserved.
      </footer>
    </main>
  );
}