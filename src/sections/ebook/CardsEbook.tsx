import Image from "next/image"
import Link from "next/link";
import React from 'react';

// Datos de las cards
const cardsData = [
    {
        id: 1,
        icon: "/ebook/marca.png",
        title: "Estás construyendo una marca personal desde cero",
    },
    {
        id: 2,
        icon: "/ebook/information.png",
        title: "Ya empezaste, pero te falta claridad o estructura",
    },
    {
        id: 3,
        icon: "/ebook/marketing.png",
        title: "Quieres convertir tu historia en impacto (y ventas)",
    },
    {
        id: 4,
        icon: "/ebook/guia.png",
        title: "Necesitas una guía práctica, linda y concreta",
    }

];

export default function CardsEbook() {
    return (
        <div className="bg-black flex items-center justify-center p-8">
            <div className="w-full mx-auto">
                {/* Línea decorativa superior */}
                <div className="w-[30%] h-[1px] bg-[#0F7457] mx-auto"></div>

                {/* Título principal */}
                <h1 className="text-white text-3xl font-bold font-dmSerifDisplay text-center p-8">
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
                <div className="py-10">
                    {/* Línea decorativa superior */}
                    <div className="w-[30%] h-[2px] bg-[#0F7457] mx-auto"></div>

                    <h3 className="text-white font-inter text-2xl leading-[1.2]  p-8 flex justify-center items-center text-center">
                        Recibirás el e-book interactivo + todos los recursos editables para comenzar hoy mismo.
                    </h3>

                    <h3 className='text-white font-inter text-2xl p-8  justify-center items-center text-center'>Accede hoy por solo <span className='text-4xl  flex justify-center items-center text-center font-bold'> $12 </span></h3>

                    {/* CTA Button */}

                    <Link href="#" className=" flex justify-center items-center text-center bg-white hover:bg-emerald-700  text-black font-inter font-bold py-4 px-8 rounded-2xl text-2xl mx-auto">
                        QUIERO MI E-BOOK AHORA
                    </Link>

                </div>
            </div>
        </div>
    )
}