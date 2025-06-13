import React from "react";
import { useLocation } from "react-router-dom";

const OrderNow = () => {
  const location = useLocation();
  const { name, image, price } = location.state || {
    name: "EVA Smart Ring",
    image: "/assets/images/ProductShowcaseRing.png",
    price: 199
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 py-8 px-4">
      <div className="w-full max-w-lg bg-background rounded-organic shadow-soft-elevation-1 p-8 sm:p-10 flex flex-col items-center animate-fade-in-up transition-all duration-700">
        <h1 className="font-heading font-bold text-3xl text-text-primary mb-1 text-center animate-fade-in">
          Order Now
        </h1>
        <img
          src="./assets/images/QRimage.png"
          alt="Scan to Pay"
          className="w-48 h-48 mt-6 object-contain rounded-lg border border-gray-300 shadow-md animate-fade-in delay-500"
        />

        <h2 className="text-2xl font-semibold mb-2 text-text-primary animate-fade-in delay-200">
          {name}
        </h2>
        <p className="text-lg text-text-secondary mb-6 animate-fade-in delay-300 text-center">
          Experience the next generation of wellness technology. Order your {name} now and get it delivered fast!
        </p>
        <div className="text-xl font-bold mb-6 text-primary">INR {price}</div>

        <button
          className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg animate-fade-in delay-400 transition-all duration-300 hover:scale-[1.03]"
          onClick={() => alert('Order placed!')}
        >
          Order Now
        </button>

        {/* QR Code for payment */}
        
      </div>
    </section>
  );
};

export default OrderNow;
