import React from 'react';
import Image from "next/image";

// Datos del componente
const ebookParaTi = [
    "Es una herramienta interactiva para crear una marca personal auténtica, con ejercicios accionables, colores, estructura y plantillas listas para usar.",
];

const noEsParaTi = [
    "No es un PDF lleno de texto que se queda olvidado.",
];

export default function BenefitsEbook() {
    return (
        <>
            <div className="bg-black flex items-center justify-center">
                <div className="w-full">
                    {/* Contenedor blanco redondeado */}
                    <div className="bg-white p-6 rounded-t-3xl text-center space-y-6">
                        {/* Título principal */}
                        <h1 className="text-black text-3xl font-serif font-bold leading-[1.2]">
                            ¿QUÉ HACE DIFERENTE A ESTE <span className="text-[#0F7457]">E-BOOK</span>?
                        </h1>

                        {/* Sección: No es para ti si */}
                        <div className="space-y-6 pt-4">
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
                                        <p className="text-black text-2xl font-inter leading-[1.2]">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sección: Ebook es para ti si */}
                        <div className="space-y-6">
                            <ul className="space-y-4">
                                {ebookParaTi.map((item, index) => (
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
                                        <p className="text-black text-2xl font-inter leading-[1.2]">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative">
                {/* Contenedor con fondo dividido verticalmente */}
                <div className="relative h-52 overflow-hidden ">
                    {/* Fondo dividido verticalmente */}
                    <div className="absolute inset-0 flex flex-col">
                        {/* Mitad superior blanca */}
                        <div className="h-1/2 bg-white"></div>
                        {/* Mitad inferior negra */}
                        <div className="h-1/2 bg-black"></div>
                    </div>

                    {/* Imagen del ebook centrada */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full  h-full">
                            <Image
                                src="/ebook/ebookhuella.png" // Reemplaza con tu ruta de imagen
                                alt="Ebook preview"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}