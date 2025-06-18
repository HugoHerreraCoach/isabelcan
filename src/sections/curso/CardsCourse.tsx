import Image from "next/image"
import React from 'react';

// Datos de las cards
const cardsData = [
    {
        id: 1,
        icon: "/course/flecha.png",
        title: "Tienes un producto o servicio, pero nadie lo compra como esperas",
    },
    {
        id: 2,
        icon: "/course/mano.png",
        title: "Sientes que estás “vendiendo bien”… pero sin cerrar",
    },
    {
        id: 3,
        icon: "/ebook/marketing.png",
        title: "Quieres dominar el arte de crear valor real y percibido",
    },
    {
        id: 4,
        icon: "/course/salida.png",
        title: "Estás listo para dejar de improvisar y vender con claridad",
    }

];

export default function CardsCourse() {
    return (
        <div className="bg-black flex items-center justify-center p-8">
            <div className="w-full mx-auto">

                {/* Título principal. */}
                <h1 className="text-white text-3xl font-bold font-serif text-center p-8">
                    ¿PARA <span className='text-[#70AB9B]'>QUIÉN</span> ES ?
                </h1>
                {/* Grid responsive - 1 columna en móvil, 2 en tablet, 4 en desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#0F7457]/50 rounded-2xl p-6 sm:p-8 text-center space-y-4 hover:bg-green-900 transition-colors duration-200"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        fill
                                        className="object-contain filter brightness-0 invert"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Texto */}

                            <h3 className="text-white space-y-1 text-2xl  font-inter leading-[1.2]">
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}