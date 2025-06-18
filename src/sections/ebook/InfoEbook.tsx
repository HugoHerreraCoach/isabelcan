import Image from "next/image"
import React from 'react';

export default function InfoEbook() {
    return (
        <div className="bg-black flex items-center justify-center p-4">
            <div className="w-[90%] mx-auto text-center space-y-6">
                {/* Línea decorativa superior */}
                <div className="w-[40%] h-[2px] bg-[#0F7457] mx-auto mb-6"></div>

                {/* Descripción principal */}
                <div className="space-y-4 px-2">
                    <p className="text-white text-2xl  leading-[1.2] font-inter">
                        El primer e-book interactivo para crear tu marca personal paso a paso — lleno de plantillas editables, ejercicios prácticos y diseño visual envolvente.
                    </p>
                </div>

                {/* Imagen de ebook */}

                <div className="flex justify-center py-6 relative w-full h-full">
                    <Image
                        src="/ebook/ebook.png"
                        alt="Team leader"
                        width={300}
                        height={300}
                        className="object-cover"
                        priority
                    />
                </div>


                {/* Texto final */}
                <div className="pt-4">
                    <h2 className="text-white text-4xl  font-inter leading-[1.2]">
                        SOLO <span className="text-6xl font-bold">$12 </span> (Acceso inmediato)
                    </h2>
                </div>
            </div>
        </div>
    )
}