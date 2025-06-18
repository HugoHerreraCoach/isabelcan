import React from 'react';

const BENEFITS_LIST = [
    "Limpieza natural del sistema digestivo",
    "Reducción de hinchazón abdominal",
    "Más claridad mental y energía estable",
    "Mejor sueño y menos antojos",
    "Ideal como reinicio después de excesos",
    "Sin dietas estrictas ni ayunos extremos"
] as const;

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-start gap-3 max-w-2xl mx-auto ">
        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
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

const BenefitsDetox: React.FC = () => (
    <>
        <div className="bg-white py-8 px-6 mx-auto">
            {/* Header */}
            <div className="text-center mb-8 mt-96 sm:mt-80 lg:mt-68">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-3xl font-dmSerifDisplay font-bold text-black mt-16">
                        🌿 BENEFICIOS <br />SIMPLES
                    </h2>
                </div>

            </div>

            {/* Benefits List */}
            <div className="space-y-6 md:space-y-8 mx-auto px-6 md:px-6 lg:px-8">
                {BENEFITS_LIST.map((benefit, index) => (
                    <BenefitItem key={index} text={benefit} />
                ))}
            </div>
        </div>

        <div className="mt-12 bg-black w-full p-6 text-center">
            {/* Quote */}
            <h3 className="text-white text-2xl font-inter mb-6 leading-[1.2] px-2">
                “Después del Detox, me sentí liviana como hace años no me sentía!”
            </h3>

            {/* Before/After Image */}
            <div className="relative">
                <img
                    src="/detox/desintoxicacion.png"
                    alt="Proceso de desintoxicación - Antes y después"
                    className="w-full mx-auto px-2 rounded-xl object-cover mb-10"
                />
            </div>
        </div>
    </>
);

export default BenefitsDetox;