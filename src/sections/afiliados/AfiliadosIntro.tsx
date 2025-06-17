import Image from "next/image"
import Link from "next/link"
import React from 'react';

const CalendarButton = () => {
    const whatsappUrl = `https://calendar.app.google/ezzV6nGvsQwrKz8cA`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-[200px] flex justify-center items-center mx-auto bg-white text-black font-bold text-lg py-4 px-6 rounded-xl text-center
                                         hover:bg-gray-100"
        >
            UNIRME AL RETO
        </a>
    )
}
export default function AfiliadosIntro() {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-4">
            <div className="absolute top-4 right-1 z-10">
                <Image
                    src="/inicio/isaLogo.png"
                    alt="Logo"
                    width={16}
                    height={16}
                    className="w-16 h-16 object-contain"
                />
            </div>
            {/* Contenedor redondeado con márgenes - 90% del ancho */}
            <div className="relative w-[90%] mx-auto my-14">
                <div className="relative h-[650px]  rounded-2xl overflow-hidden shadow-2xl">
                    {/* Imagen de fondo */}
                    <Image
                        src="/afiliados/mountain.jpg"
                        alt="Person running and exercising"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Contenido */}
                    <div className="relative h-full flex flex-col justify-between p-6">

                        {/* Título principal */}
                        <div className="flex-1 flex flex-col justify-center text-center space-y-8">
                            <h1 className="text-white font-dmSerifDisplay text-4xl font-bold leading-[1.2]">
                                <span className="block">¿Sientes que</span>
                                <span className="block">tienes <span className="bg-[#0F7457]">potencial</span>,</span>
                                <span className="block">pero te falta</span>
                                <span className="bg-[#0F7457]">dirección</span>?
                            </h1>
                            <p className="text-white text-3xl  font-inter leading-[1.2] px-2">
                                Sin experiencia. Solo decisión y un sistema probado.
                            </p>
                        </div>

                        {/* Botón */}
                        <div className="pb-4">
                            <CalendarButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}