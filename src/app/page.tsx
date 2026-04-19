import PizzaAnimation from '@/components/PizzaAnimation';
import Menu from '@/components/Menu';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden"> 
      <PizzaAnimation />
      <Menu />
      <ContactForm />
     
    
      <Footer />
    </main>
  );
}