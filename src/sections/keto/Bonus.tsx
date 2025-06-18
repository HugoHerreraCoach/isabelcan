import React from 'react';
import Link from 'next/link';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.link/6xznhy`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0F7457] hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-2xl  text-center"
    >
      UNIRME AL RETO
    </Link>
  )
}

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
      <h3 className="text-white font-inter text-xl md:text-2xl font-bold leading-tight mb-8">
        ¿Quieres empezar? <br /> Haz clic y te envío toda la info al WhatsApp{' '}
        <span className="inline-block">👇</span>
      </h3>

      {/* CTA Button */}
      <WhatsAppButton />
    </div>
  </div>
);

export default Bonus;