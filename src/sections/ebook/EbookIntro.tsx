import Image from "next/image"
import React from 'react';

const EbookButton = () => {
    const whatsappUrl = `https://go.hotmart.com/F85500180K`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-4 w-[250px] flex justify-center items-center mx-auto bg-white text-black font-bold py-4 px-6 rounded-xl text-center
                                         hover:bg-gray-100 text-2xl"
        >
            ACCEDER
        </a>
    )
}
export default function EbookIntro() {
    return (
        <div className="bg-black flex items-center justify-center p-4">
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
            <div className="relative w-[95%] mx-auto mt-20">
                <div className="relative h-[490px] md:h-[700px] lg:h-[800px] rounded-2xl overflow-hidden">
                    {/* Imagen de fondo */}
                    <Image
                        src="/ebook/background.jpg"
                        alt="Person running and exercising"
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                        className="object-cover opacity-40 rounded-2xl"
                        priority
                    />

                    {/* Contenido */}
                    <div className="relative h-full flex flex-col justify-between p-6 rounded-2xl">

                        {/* Título principal */}
                        <div className="flex-1 flex flex-col justify-center text-center space-y-8">
                            <h1 className="text-white font-dmSerifDisplay text-3xl font-bold leading-[1.2]">
                                <span >¿Sientes que tu <span className="bg-[#0F7457]">historia</span>,</span>
                                <span >merece ser contada… pero no sabes por dónde empezar?</span>

                            </h1>
                            <p className="text-white text-2xl  font-inter leading-[1.2] px-2">
                                Descubre cómo construir una marca personal auténtica, rentable y con propósito.
                            </p>
                        </div>

                        {/* Botón */}

                        <EbookButton/>

                    </div>
                </div>
            </div>
        </div>
    )
}