import { useState } from "react";

import CartItem from "./CartItem";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="container py-4 flex justify-end relative">
      <button onClick={toggleCart}>
        Carrinho
      </button>
      <div
        className={`fixed top-0 h-full bg-white shadow-lg transition-transform transform w-[16rem] right-0 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={toggleCart} className="absolute top-4 right-4">
          x
        </button>
        <div className="p-4">
          <p className="font-bold mb-4">Carrinho</p>
          <div className="flex gap-4 flex-col">
            {/* <CartItem /> */}
            {/* <p className="font-bold flex justify-between">Total<span className="font-normal">$100</span></p> */}
          </div>
          <p>Seu carrinho está vazio.</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
