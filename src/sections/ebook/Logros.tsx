import React from 'react';
import Image from "next/image";

// Datos del componente
const logrosParaTi = [
    "Claridad en tu propósito y mensaje.",
    "Identidad visual única (nombre, logo, paleta)", 
    "Comunicación emocional para redes.",
    "Confianza al hablar y grabar videos.",
    "Estrategias para escalar y monetizar tu marca"
];


export default function Logros() {
    return (
        <div className="bg-black flex items-center justify-center p-4">
            <div className="w-[90%] mx-auto space-y-8 py-8 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {/* Línea decorativa superior */}
                <div className="w-[30%] h-[2px] bg-[#0F7457] mx-auto"></div>
                
                {/* Título principal */}
                <h1 className="text-white text-3xl font-bold font-serif text-center">
                    ¿QUE VAS A <span className='text-[#70AB9B]'>LOGRAR</span>?
                </h1>
                
                {/* Sección: Este sistema es para ti si */}
                <div className="space-y-6">
                    <ul className="space-y-4">
                        {logrosParaTi.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {/* Checkmark verde */}
                                <div className="flex-shrink-0 w-6 h-6 relative mt-0.5">
                                    <Image
                                        src="/keto/checklist.png"
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
            </div>
        </div>
    )
}