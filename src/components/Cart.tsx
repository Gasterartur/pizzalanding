'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import './Cart.css';

export default function Cart() {
  const { items, removeItem, updateQty, total, count, clear } = useCart();
  const [open, setOpen] = useState(false);

  const goToOrder = () => {
    setOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button className="cart-fab" onClick={() => setOpen((o) => !o)} aria-label="Warenkorb">
        🛒
        {count > 0 && <span className="cart-badge">{count}</span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="cart-panel"
          >
            <div className="cart-panel-header">
              <h3>Warenkorb</h3>
              <button className="cart-close" onClick={() => setOpen(false)} aria-label="Schließen">
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <p className="cart-empty">Ihr Warenkorb ist leer.</p>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">{(item.price * item.qty).toFixed(2)}€</span>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Weniger">
                          −
                        </button>
                        <span className="cart-item-qty">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Mehr">
                          +
                        </button>
                        <button className="cart-remove" onClick={() => removeItem(item.id)} aria-label="Entfernen">
                          🗑
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <span>Gesamt</span>
                  <span>{total.toFixed(2)}€</span>
                </div>

                <button className="cart-checkout-btn" onClick={goToOrder}>
                  Zur Bestellung
                </button>
                <button className="cart-clear-btn" onClick={clear}>
                  Warenkorb leeren
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
