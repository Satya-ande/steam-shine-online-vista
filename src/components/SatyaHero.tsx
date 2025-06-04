
import React from 'react';

const SatyaHero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Mobile Car Detailing
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Professional car care that comes to you. Experience the perfect blend of 
          traditional detailing and cutting-edge steam technology.
        </p>
        <button 
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Service Now
        </button>
      </div>
    </section>
  );
};

export default SatyaHero;
