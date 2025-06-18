import React from 'react';

interface CardContent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  features?: string[];
  badge?: string;
}

const CARD_ICON = '/keto/checkketo.png';

const CARDS_DATA: CardContent[] = [
  {
    id: 'keto-pack-001',
    title: '1 Caja de Pack 5/14 KETO de Fuxion',
    subtitle: '(Contiene BIOPRO+ FIT, THERMO T3, NOCARB-T, VITA XTRA T+, PRUNEX 1)',
    description: '',
    image: '/keto/fuxion.png',
    features: []
  },
  {
    id: 'keto-training-002',
    title: 'Cuerpo KETO:',
    subtitle: 'El Entrenamiento Inteligente en casa o gym',
    description: 'Incluye:',
    image: '/keto/bonoketo.png',
    features: [
      'Rutinas en casa o en gym adaptadas a tu nivel',
      'Videos de entrenamiento organizados por día',
      'Enfoque en movilidad, fuerza funcional y resistencia'
    ]
  },
  {
    id: 'keto-training-003',
    title: 'Menú KETO Real:',
    subtitle: 'Come bien, vive ligera',
    description: 'Incluye:',
    image: '/keto/menuketo.png',
    features: [
      'Menú base de Fuxion (desayuno, almuerzo, cena)',
      'Lista de compras sencilla',
      'Recetas fáciles en menos de 15 min',
      'Guía de sustituciones por si comes fuera',
    ]
  }
] as const;

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="text-xl font-inter text-black leading-relaxed flex items-start">
    <span className="text-black mr-2 flex-shrink-0">•</span>
    {text}
  </li>
);

const Card: React.FC<{ card: CardContent }> = ({ card }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
    {/* Header */}
    <div className="flex items-start gap-3 mb-4">
      <div className="flex-shrink-0 w-8 h-8">
        <img
          src={CARD_ICON}
          alt="Check"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 font-inter font-bold text-xl md:text-lg leading-tight mb-1">
          {card.title}
        </h3>
        {card.subtitle && (
          <p className="text-black font-inter text-xl md:text-xl leading-relaxed">
            {card.subtitle}
          </p>
        )}
      </div>
    </div>

    {/* Features */}
    {card.description && (
      <div className="mb-3">
        <p className="text-black text-center font-inter text-xl mb-3">
          {card.description}
        </p>
        {card.features && card.features.length > 0 && (
          <ul className="space-y-2 ">
            {card.features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>
        )}
      </div>
    )}
    {/* Product Image */}
    <div className="relative mb-4">
      <div className="rounded-xl flex justify-center items-center">
        <img
          src={card.image}
          alt={card.title}
          className="w-full max-h-48 object-contain"
        />
      </div>
    </div>
  </div>
);

const CardsKeto: React.FC = () => (
  <div className="bg-gray-50 py-8 px-6">
    <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl">
      {/* Header */}
      <div className="relative flex flex-col items-center">
        {/* Decorative line on top */}
        <div className="absolute -top-4 w-32 h-0.5 bg-[#0F7457]"></div>

        <div className="flex items-center justify-center gap-2 mb-4 mt-2">
          <div className="w-8 h-8">
            <img
              src="/keto/medit.png"
              alt="Crown"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl font-dmSerifDisplay font-bold text-black">
            ¿QUÉ INCLUYE?
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CARDS_DATA.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  </div>
);

export default CardsKeto;