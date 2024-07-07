import { useMemo, useState } from "react";
import { useSelector } from 'react-redux'

import CartItem from "./CartItem";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const { products } = useSelector((state: any) => state.cartReducer);

  const productsCount = useMemo(() => {
    return products.reduce((acc: any, curr: any) => acc + curr.quantity, 0)
  }, [products])

  return (
    <div className="container py-4 flex justify-end relative">
      <button onClick={toggleCart}>
        Cart ({productsCount})
      </button>
      <div
        className={`fixed top-0 h-full bg-white shadow-lg transition-transform transform w-[95%] sm:w-[25rem] right-0 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={toggleCart} className="absolute top-3 right-4 text-2xl">
          x
        </button>
        <div className="p-4">
          <p className="font-bold mb-4 text-2xl">Cart</p>
          <div className="flex gap-4 flex-col">
            {products.map((product: any, key : number) => <CartItem key={key} product={product} />)}
            {/* <p className="font-bold flex justify-between">Total<span className="font-normal">$100</span></p> */}
          </div>
          {/* <p>Your cart is empty</p> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
