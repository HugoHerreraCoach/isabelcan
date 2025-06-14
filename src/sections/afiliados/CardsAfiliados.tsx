import Image from "next/image"
import React from 'react';

// Datos de las cards
const cardsData = [
    {
        id: 1,
        icon: "/afiliados/embudo.png",
        title: "Tu embudo de ventas (listo para usar)",
    },
    {
        id: 2,
        icon: "/afiliados/mensaje.png",
        title: "Plantillas de mensajes y contenidos",
    },
    {
        id: 3,
        icon: "/afiliados/team.png",
        title: "Acceso a un equipo que te apoyo",
    },
    {
        id: 4,
        icon: "/afiliados/capacitacion.png",
        title: "Capacitación práctica, desde cero",
    },
    {
        id: 5,
        icon: "/afiliados/coaching.png",
        title: "Acompañamiento directo conmigo",
    }

];

export default function CardsAfiliados() {
    return (
        <div className="bg-black flex items-center justify-center p-8">
            <div className="w-full mx-auto">
                {/* Grid responsive - 1 columna en móvil, 2 en tablet, 4 en desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#0F7457] rounded-2xl p-6 sm:p-8 text-center space-y-4 hover:bg-green-900 transition-colors duration-200"
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