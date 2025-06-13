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
        id: 'deto-pack-001',
        title: 'DETOX 5 DÍAS',
        description: '3 STICKS DE PRUNEX1 + 2 STICKS LIQUID FIBER + 3 STICKS DE ALPHA BALANCE + 1 STICK DE FLORA LIV + 5 STICKS DE REXET + 1 STICK DE BERRY BALANCE + 1 STICK DE THERMO T3 + 7 STICKS DE PROTEIN ACTIVE FIT + 3 STICKS DE PROTEIN XOUP',
        image: '/detox/detox.png',
        features: []
    },
    {
        id: 'deto-training-002',
        title: 'Plan de Alimentación Listo en 10 Min',
        description: 'Menú de 5 días con recetas simples (desayuno, almuerzo, cena',
        image: '/detox/menudetox.png',
        
    },
    {
        id: 'deto-training-003',
        title: 'Desinflámate en Movimiento',
        description: 'Rutina diaria de 10 minutos con movimientos suaves que activan el sistema digestivo y linfático.',
        image: '/detox/bonodetox.png',
        
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

const CardsDetox: React.FC = () => (
    <div className="bg-gray-50 py-8 px-6">
        <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl">
            {/* Header */}
            <div className="relative flex flex-col items-center">
                {/* Decorative line on top */}
                <div className="absolute -top-4 w-32 h-0.5 bg-[#0F7457]"></div>

                <div className="flex items-center justify-center gap-2 mb-4 mt-2">
                    <h2 className="text-xl font-dmSerifDisplay md:text-2xl font-bold text-black">
                        🍋¿QUÉ INCLUYE?
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

export default CardsDetox;