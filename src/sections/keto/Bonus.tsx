import React from 'react';
import Link from 'next/link';

const Bonus: React.FC = () => (
  <div className="bg-black py-8 px-6 -mt-24">
    <div className="max-w-sm mx-auto md:max-w-md lg:max-w-lg text-center">
      {/* Main Headline */}
      <h2 className="text-white font-inter text-2xl md:text-3xl font-bold leading-tight mb-4 mt-8">
        Y muchos bonos más...
      </h2>

      {/* Decorative Line */}
      <div className="flex justify-center items-center mx-auto mb-16 w-[50%] h-[1px] bg-[#0F7457]"></div>


      {/* CTA Text */}
      <h3 className="text-white font-inter text-xl md:text-2xl font-bold leading-tight mb-2">
        ¿Quieres empezar? <br /> Haz clic y te envío toda la info al WhatsApp{' '}
        <span className="inline-block">👇</span>
      </h3>

      {/* CTA Button */}
      <Link
        href=""
        className="bg-[#0F7457] flex items-center justify-center mt-6 hover:bg-green-800 text-white font-inter font-bold py-4 px-8 rounded-2xl text-lg md:text-xl w-full max-w-[280px] mx-auto">
        EMPEZAR RETO
      </Link>
    </div>
  </div>
);

export default Bonus;