// src/components/Menu.tsx
export default function Menu() {
  const products = [
    { name: "Pizza Margherita", price: "12.90€", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800", desc: "Frische Tomaten, Mozzarella, Basilikum." },
    { name: "Pizza Diavola", price: "14.50€", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800", desc: "Scharfe Salami, Peperoni, rote Zwiebeln." }
  ];

  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
        {/* остальной код меню */}
      <h2 className="text-5xl font-black text-center mb-16 uppercase italic">Unser Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div key={i} className="group bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all">
            <img src={p.img} alt={p.name} className="h-64 w-full object-cover group-hover:scale-110 transition-duration-500" />
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <span className="text-orange-600 font-black text-xl">{p.price}</span>
              </div>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}