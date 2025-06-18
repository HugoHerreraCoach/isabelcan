import React from 'react';
import Image from "next/image";

// Datos del componente
const sistemaParaTi = [
    "Quieres resultados reales, no solo motivación",
    "Estás dispuesta a invertir tiempo y energía en tu crecimiento", 
    "Estás buscando un camino con estructura y mentoría",
    "Estás cansada de hacerlo sola"
];

const noEsParaTi = [
    "Esperas resultados sin acción",
    "No estás lista para seguir un sistema paso a paso"
];

export default function ParaQuienEs() {
    return (
        <div className="bg-black flex items-center justify-center p-4">
            <div className="w-[90%] mx-auto space-y-8 py-8 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {/* Línea decorativa superior */}
                <div className="w-[20%] h-[2px] bg-[#0F7457] mx-auto"></div>
                
                {/* Título principal */}
                <h1 className="text-[#70AB9B] text-3xl font-bold font-serif text-center">
                    ¿PARA QUIÉN ES?
                </h1>
                
                {/* Sección: Este sistema es para ti si */}
                <div className="space-y-6">
                    <h2 className="text-white text-2xl font-bold font-inter underline decoration-white">
                        Este sistema es para ti si:
                    </h2>
                    
                    <ul className="space-y-4">
                        {sistemaParaTi.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {/* Checkmark verde */}
                                <div className="flex-shrink-0 w-6 h-6 relative mt-0.5">
                                    <Image
                                        src="/keto/checkketo.png"
                                        alt="Checkmark"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-white text-2xl font-inter leading-[1.2] ">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Sección: No es para ti si */}
                <div className="space-y-6 pt-4">
                    <h2 className="text-white text-2xl font-bold text-center  font-inter underline decoration-white">
                        No es para ti si:
                    </h2>
                    
                    <ul className="space-y-4">
                        {noEsParaTi.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {/* X roja */}
                                <div className="flex-shrink-0 w-6 h-6 relative mt-0.5">
                                    <Image
                                        src="/afiliados/delete.png"
                                        alt="X mark"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-white text-2xl font-inter leading-[1.2] ">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}