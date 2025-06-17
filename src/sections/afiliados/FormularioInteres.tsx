import Link from "next/link"
import React from 'react';
const CalendarButton = () => {
    const whatsappUrl = `https://calendar.app.google/ezzV6nGvsQwrKz8cA`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[200px] flex justify-center items-center mx-auto bg-[#0F7457] text-white font-bold text-lg py-4 px-6 rounded-xl text-center
                                         hover:bg-green-900"
        >
            UNIRME AL RETO
        </a>
    )
}
export default function FormularioInteres() {
    return (
        <div className="bg-black flex items-center justify-center">
            <div className="w-full">
                {/* Contenedor blanco redondeado */}
                <div className="bg-white rounded-t-3xl p-6 sm:p-8 text-center space-y-6">
                    {/* Título principal */}
                    <h1 className="text-black text-2xl font-inter  font-bold leading-[1.2]">
                        ¿Te interesa formar parte del equipo y usar este sistema?
                    </h1>

                    {/* Descripción */}
                    <p className="text-black text-2xl leading-[1.2] font-inter">
                        Completa este formulario. Si calificas, te escribiré por WhatsApp para explicarte los siguientes pasos.
                    </p>

                    {/* Botón */}
                    <div className="pb-4">
                        <CalendarButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}