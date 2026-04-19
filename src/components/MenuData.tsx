export const menuData: Record<string, {id: number, name: string, price: string, desc: string, img: string}[]> = {
  pizza: [
    { id: 1, name: 'Margherita', price: '12.50', desc: 'Frische Tomaten, Mozzarella, Basilikum', img: '/pizza-m.jpg' },
    { id: 2, name: 'Diavola', price: '14.90', desc: 'Scharfe Salami, Peperoni, Oliven', img: '/pizza-d.jpg' },
  ],
  pasta: [
    { id: 3, name: 'Carbonara', price: '13.50', desc: 'Speck, Ei, Pecorino, Pfeffer', img: '/pasta-c.jpg' },
    { id: 4, name: 'Bolognese', price: '12.90', desc: 'Rinderhack-Ragout, Parmesan', img: '/pasta-b.jpg' },
  ],
  desserts: [
    { id: 5, name: 'Tiramisu', price: '7.50', desc: 'Hausgemacht nach Familienrezept', img: '/dessert-t.jpg' },
  ],
  drinks: [
    { id: 7, name: 'Hauswein Red', price: '5.50', desc: '0.2l Italienischer Rotwein', img: '/drink-h.jpg' },
  ],
};

