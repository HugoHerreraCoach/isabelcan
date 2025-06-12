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
    <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
            <img
                src="/keto/checklist.png"
                alt="Check"
                className="w-full h-full object-contain"
            />
        </div>
        <p className="text-black text-xl md:text-base leading-relaxed font-inter">
            {text}
        </p>
    </div>
);

const Benefits: React.FC = () => (
    <>
        <div className="bg-white py-8 px-6 max-w-sm mx-auto md:max-w-md lg:max-w-lg">
            {/* Header */}
            <div className="text-center mb-8 mt-48">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
                        🌿 BENEFICIOS <br />SIMPLES
                    </h2>
                </div>

            </div>

            {/* Benefits List */}
            <div className="space-y-5 md:space-y-6">
                {BENEFITS_LIST.map((benefit, index) => (
                    <BenefitItem key={index} text={benefit} />
                ))}
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
            <h3 className="text-white text-xl font-inter md:text-lg font-medium mb-6 leading-relaxed px-2">
                “No es solo el cuerpo… es cómo me siento ahora cada mañana.”
            </h3>

            {/* Before/After Image */}
            <div className="relative">
                <img
                    src="/keto/photisapeso.png"
                    alt="Proceso de desintoxicación - Antes y después"
                    className="w-full max-w-xs mx-auto rounded-xl object-cover"
                />
            </div>
        </div>
    </>
);

export default Benefits;