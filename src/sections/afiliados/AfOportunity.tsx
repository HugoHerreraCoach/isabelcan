import Image from "next/image"
import React from 'react';

export default function AfOportunity() {
    return (
        <div className="bg-black flex items-center justify-center p-4">
            <div className="w-[90%] mx-auto text-center space-y-6">
                {/* Línea decorativa superior */}
                <div className="w-[40%] h-[2px] bg-[#0F7457] mx-auto mb-6"></div>
                
                {/* Título principal */}
                <h1 className="text-[#70AB9B] text-3xl font-bold font-serif">
                    ¿QUÉ ES ESTA OPORTUNIDAD?
                </h1>
                
                {/* Descripción principal */}
                <div className="space-y-4 px-2">
                    <p className="text-white text-2xl  leading-[1.2] font-inter">
                        Esto no es venderle a tu familia ni perseguir amigos. Es una forma estructurada y acompañada de generar ingresos con productos de salud y bienestar, usando un sistema que ya funciona.
                    </p>
                </div>
                
                {/* Imagen de perfil */}
                <div className="flex justify-center py-6">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                        <Image
                            src="/inicio/isa1.png"
                            alt="Team leader"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                </div>
                
                {/* Texto final */}
                <div className="pt-4">
                    <p className="text-white text-2xl  font-inter leading-[1.2]">
                        Si te unes a mi equipo, te daré:
                    </p>
                </div>
            </div>
        </div>
    )
}