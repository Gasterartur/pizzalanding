export const menuData: Record<string, {id: number, name: string, price: string, desc: string, img: string}[]> = {
  pizza: [
    { id: 1, name: 'Margherita', price: '12.50', desc: 'Frische Tomaten, Mozzarella, Basilikum', img: '/pizza-m.jpg' },
    { id: 2, name: 'Diavola', price: '14.90', desc: 'Scharfe Salami, Peperoni, Oliven', img: '/pizza-d.jpg' },
  { id: 3, name: 'Quattro Formaggi', price: '15.50', desc: 'Eine herzhafte Mischung aus Mozzarella, Gorgonzola, Emmentaler und Parmesan.', img: '/pizza-4ch.jpg' },
 { id: 4, name: 'Pepperoni', price: '15.90', desc: 'Würzige Tomatensauce, schmelzender Mozzarella und reichlich scharfe Salami-Scheiben.', img: '/pizza-pep.jpg' },
 { id: 5, name: 'Hawaii', price: '16.50', desc: 'Klassische Tomatensauce und Mozzarella mit saftigem Schinken und süßen Ananasstücken.', img: '/pizza-ha.jpg' },
  ],
  pasta: [
    { id: 6, name: 'Carbonara', price: '13.50', desc: 'Speck, Ei, Pecorino, Pfeffer', img: '/pasta-c.jpg' },
    { id: 7, name: 'Bolognese', price: '12.90', desc: 'Rinderhack-Ragout, Parmesan', img: '/pasta-b.jpg' },
  ],
  desserts: [
    { id: 8, name: 'Tiramisu', price: '7.50', desc: 'Hausgemacht nach Familienrezept', img: '/dessert-t.jpg' },
    { id: 9, name: 'Cheesecake', price: '5.50', desc: 'Eine samtige Füllung aus hochwertigem Frischkäse auf einem knusprigen Boden aus Butterkeksen.', img: '/dessert-ck.jpg' },
    { id: 10, name: 'Schoko Lava Cake', price: '9.50', desc: 'Ein kleiner, warmer Schokoladenkuchen mit einem ganz besonderen Geheimnis - einem flüssigen Kern aus dunkler Schokolade.', img: '/dessert-sh.jpg' },
    { id: 11, name: 'Panna Cotta', price: '8.50', desc: 'Ein traditionelles italienisches Dessert aus gekochter Sahne und Vanille, gekrönt mit einem frischen Spiegel aus Waldbeeren.', img: '/dessert-pc.jpg' },
  ],
  drinks: [
    { id: 12, name: 'Hauswein Red', price: '5.50', desc: '0.2l Italienischer Rotwein', img: '/drink-h.jpg' },
    { id: 13, name: 'Limonade Zitrone', price: '4.50', desc: '0.4l Zitronenlimonade', img: '/drink-l.jpg' },
     { id: 14, name: 'Cola Fanta Sprite und andere Getränke', price: '4.50', desc: '0.4l', img: '/drink-cfs.jpg' },
  ],
};

