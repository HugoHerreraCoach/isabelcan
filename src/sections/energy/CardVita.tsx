import React from 'react';
import Image from 'next/image';

interface Ingredient {
  text: string;
}

const CardVita: React.FC = () => {
  const ingredients: Ingredient[] = [
    { text: '🌱 Cordyceps, Ginseng, Guayusa' },
    { text: '🍇 Antioxidantes: Maíz morado, Acai, Gojii' },
    { text: '💊 Vitaminas A, C y D' }
  ];

  return (
    <div className="w-full mx-auto bg-white p-4  mt-72 ">
      
      {/* Layout responsive: móvil vertical, md+ en grid de 2 columnas */}
      <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
        
        {/* Columna 1: Header + Imagen */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-center mb-4 sm:mb-6 mt-12">
            <h1 className="text-3xl text-center font-dmSerifDisplay font-bold text-gray-800">
             🌿 ¿QUÉ ES VITA XTR?
            </h1>
          </div>

          {/* Imagen del producto */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="relative w-full h-68">
              <Image
                src="/energy/vita.png"
                alt="Vita XTR"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Columna 2: Descripción + Lista */}
        <div className="flex flex-col justify-center px-4">
          {/* Descripción */}
          <h2 className="text-2xl  font-inter text-black mb-3 sm:mb-4 md:mb-5">
            Una bebida natural que combina:
          </h2>

          {/* Lista de ingredientes */}
          <ul className="space-y-2 mb-6 px-4 mx-auto">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-2xl text-black font-inter list-disc leading-relaxed">
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Beneficios finales - Al pie, ocupando todo el ancho */}
      <div className="md:col-span-2 mt-4 md:mt-8">
        <p className="text-2xl font-inter  text-black md:text-center leading-relaxed px-2 sm:px-4">
          Sin químicos. Sin crash. Solo enfoque real y energía sostenida.
        </p>
      </div>
    </div>
  );
};

export default CardVita;