import React from 'react';
const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.link/sm22xz`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0F7457] hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-[14px] tracking-wider transition-colors duration-200 shadow-lg w-full max-w-[280px] text-center inline-block"
    >
      UNIRME AL RETO
    </a>
  )
}
const BonusEnergy: React.FC = () => (
  <div className="bg-black py-8 px-6 -mt-24">
    <div className="max-w-sm mx-auto md:max-w-md lg:max-w-lg text-center">
      {/* Main Headline */}
      <h2 className="text-white font-inter text-2xl md:text-3xl font-bold leading-tight mb-4 mt-12">
        Y muchos bonos más...
      </h2>

      {/* Decorative Line */}
      <div className="flex justify-center mb-16">
        <div className="w-32 h-0.5 bg-[#0F7457]"></div>
      </div>

      {/* CTA Text */}
      <div className="mb-4">
        <h3 className="text-white font-inter text-xl md:text-2xl font-bold leading-tight mb-8">
          ¿Lista para liberar toxinas y volver a sentirte tú?
        </h3>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <WhatsAppButton />
      </div>
    </div>
  </div>
);

export default BonusEnergy;