import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useCartStore from "@/store/useCartStore";  

const Cart = () => {
  const { cartItems, removeFromCart } = useCartStore(); 
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        {isCartEmpty ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="mb-4 p-4 border-b border-white">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2"
                  onClick={() => removeFromCart(index)}
                >
                  Remove from Cart
                </button>
              </div>
            ))}
            <div className="mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
