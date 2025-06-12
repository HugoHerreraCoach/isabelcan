import React from 'react';

const Bonus: React.FC = () => (
  <div className="bg-black py-8 px-6 -mt-24">
    <div className="max-w-sm mx-auto md:max-w-md lg:max-w-lg text-center">
      {/* Main Headline */}
      <h2 className="text-white font-inter text-2xl md:text-3xl font-bold leading-tight mb-4 mt-8">
        Y muchos bonos más...
      </h2>

      {/* Decorative Line */}
      <div className="flex justify-center mb-16">
        <div className="w-32 h-0.5 bg-[#0F7457]"></div>
      </div>

      {/* CTA Text */}
      <div className="mb-4">
        <h3 className="text-white font-inter text-xl md:text-2xl font-bold leading-tight mb-2">
          ¿Quieres empezar? <br/> Haz clic y te envío toda la info al WhatsApp{' '}
          <span className="inline-block">👇</span>
        </h3>  
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-[#0F7457] hover:bg-emerald-700 active:bg-emerald-800 text-white font-inter font-bold py-4 px-8 rounded-2xl text-lg md:text-xl tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] w-full max-w-sm">
          EMPEZAR RETO
        </button>
      </div>
    </div>
  </div>
);

export default Bonus;