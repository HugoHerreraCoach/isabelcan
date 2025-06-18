import React from 'react';
import Image from 'next/image';

const BENEFITS_LIST = [
    "Más energía mental y física sin picos ni caídas",
    "Mayor enfoque y claridad para decisiones importantes",
    "Menos fatiga, más productividad",
    "Suma bienestar a tu día sin alterar tu rutina",
    "Apoya tu sistema inmune y tu salud general",
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
        <p className="text-white text-xl leading-relaxed font-inter mb-4">
            {text}
        </p>
    </div>
);

const BenefitsKey: React.FC = () => (
    <div className="w-full">
        {/* Grid unificado: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:items-center">
            
            {/* Primera imagen */}
            <div className="relative md:order-1">
                <Image
                    width={500}
                    height={600}
                    src="/energy/womenhaapy.png"
                    alt="Mujer feliz con energía"
                    className="w-full object-cover"
                />
            </div>

            {/* Contenedor de beneficios */}
            <div className="md:order-2 relative z-10 md:z-auto">
                {/* Div negro con beneficios */}
                <div className="bg-black  px-6  md:px-8 lg:px-12 xl:px-16 
                              rounded-b-3xl md:rounded-none 
                              md:flex md:flex-col md:justify-center ">
                    
                    {/* Header responsive */}
                    <div className="text-center mb-8 md:mb-12 py-4">
                        <div className="w-32 h-0.5 bg-[#0F7457] mx-auto md:mt-10 lg:mt-10"></div>
                        <h2 className="text-3xl  py-6 font-bold font-serif text-white tracking-wide leading-tight">
                            BENEFICIOS CLAVE
                        </h2>
        
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-2 md:space-y-3 lg:space-y-3">
                        {BENEFITS_LIST.map((benefit, index) => (
                            <div key={index} className=" md:transform md:transition-all md:duration-300 md:hover:translate-x-2">
                                <BenefitItem text={benefit} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="md:order-3 -mt-8 md:mt-0 relative z-0 md:z-auto">
                <Image
                    width={500}
                    height={900}
                    src="/energy/menenergy.png"
                    alt="Resultado del producto"
                    className="w-full  md:h-full object-cover"
                />
            </div>
        </div>
    </div>
);

export default BenefitsKey;