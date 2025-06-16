import React from 'react';
import Image from "next/image";
import WaitlistForm from './WaitlistForm';

// Datos del componente
const logrosParaTi = [
    "Aprenderás a construir una oferta irresistible en 5 partes (al estilo Hormozi).",
    "Sabrás cómo aumentar la urgencia, el deseo y la percepción de valor",
    "Descubrirás cómo cobrar más sin que te digan “está caro”",
    "Crearás tu propia propuesta en clase (con ejercicios guiados)",
];


export default function GoalCourse() {
    return (
        <>
            <div className="bg-black flex items-center justify-center p-4">
                <div className="w-[90%] mx-auto space-y-8 py-8 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                    {/* Línea decorativa superior */}
                    <div className="w-[40%] h-[2px] bg-[#0F7457] mx-auto"></div>

                    {/* Título principal */}
                    <h1 className="text-white text-4xl font-bold font-dmSerifDisplay text-center">
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
            <div className='bg-white p-4'>
                <h1 className='text-black font-bold font-dmSerifDisplay text-3xl p-8 text-center'>“Este no es otro curso de ventas motivacional. Es estrategia, estructura y neuropsicología aplicada.”</h1>
            </div>

            <div className='bg-black'>
                <h1 className='text-white font-inter text-2xl p-8 text-center'>Cupos limitados. Los primeros en la lista tendrán prioridad de acceso, precio exclusivo y un bono sorpresa.</h1>
                <WaitlistForm/>
            </div>
        </>
    )
}