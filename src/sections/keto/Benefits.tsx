import React from 'react';
import Image from 'next/image';

const BENEFITS_LIST = [
    "Reduce inflamación abdominal",
    "Activa tu quema de grasa",
    "Mejora tu enfoque mental",
    "Vuelve a entrar en tu ropa favorita",
    "Incluye audios de motivación y hábitos",
    "Lo haces desde casa, a tu ritmo"
] as const;

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-start gap-3 w-full max-w-2xl mx-auto">
        <div className="flex-shrink-0 w-6 h-6 mt-1">
            <img
                src="/keto/checklist.png"
                alt="Check"
                className="w-full h-full object-contain"
            />
        </div>
        <p className="text-black text-3xl leading-[1.2] font-inter">
            {text}
        </p>
    </div>
);

const Benefits: React.FC = () => (
    <>
        <div className="bg-white py-8 px-6 mx-auto mt-24">
            {/* Header */}
            <div className="text-center mb-8 mt-48">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-3xl  font-bold text-black font-dmSerif mt-8">
                        🌿 BENEFICIOS <br />SIMPLES Y VISUALES
                    </h2>
                </div>

            </div>

            {/* Benefits List */}
            <div className="mx-auto px-6 md:px-6 lg:px-8">
                <div className="space-y-6 md:space-y-8 mx-auto">
                    {BENEFITS_LIST.map((benefit, index) => (
                        <BenefitItem key={index} text={benefit} />
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-12 bg-black w-full p-6 text-center">
            <Image
                src="/inicio/isa1.png"
                alt="Isa Belcan"
                width={100}
                height={100}
                className="mx-auto mb-6 rounded-full object-cover"
            />
            {/* Quote */}
            <h3 className="text-white text-2xl font-inter  mb-6 leading-[1.2] px-2">
                “No es solo el cuerpo… es cómo me siento ahora cada mañana.”
            </h3>

            {/* Before/After Image */}
            <div className="relative">
                <img
                    src="/keto/photisapeso.png"
                    alt="Proceso de desintoxicación - Antes y después"
                    className="w-full mx-auto rounded-xl object-cover pb-4"
                />
            </div>
        </div>
    </>
);

export default Benefits;