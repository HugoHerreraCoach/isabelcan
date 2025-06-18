"use client"
import Image from "next/image"
import React from 'react';

export default function CourseIntro() {
    // Función para manejar el scroll al formulario
    const handleScrollToForm = () => {
        const formElement = document.getElementById('waitlist-form-section');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
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
                <div className="relative w-[95%] mx-auto my-20">
                    <div className="relative h-[510px] md:h-[510px] lg:h-[800px]  rounded-2xl overflow-hidden shadow-2xl">
                        {/* Imagen de fondo */}
                        <Image
                            src="/course/edificio.png"
                            alt="Person running and exercising"
                            fill
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                            className="object-cover opacity-60"
                            priority
                        />

                        {/* Contenido */}
                        <div className="relative h-full flex flex-col justify-between p-6">

                            {/* Título principal */}
                            <div className="flex-1 flex flex-col justify-center text-center space-y-8">
                                <h1 className="text-white font-serif text-3xl font-bold leading-[1.2]">
                                    <span >Haz <span className="bg-[#0F7457]">ofertas</span> tan  <span className="bg-[#0F7457]"> buenas</span> ... que la gente se sienta <span className="bg-[#0F7457]">estúpid#</span> si dice que <span className="bg-[#0F7457]">no .</span>  </span>

                                </h1>
                                <p className="text-white text-2xl  font-inter leading-[1.2] px-2">
                                    Aprende a crear ofertas que venden sin esfuerzo ni descuentos.
                                </p>
                            </div>

                            {/* Botón */}
                            <button
                                onClick={handleScrollToForm} // Llama a la función de scroll
                                className="pb-4 w-[200px] flex justify-center items-center mx-auto bg-white text-black font-bold text-2xl py-4 px-6 rounded-xl text-cente hover:bg-[#0F7457]"
                            >
                                ÚNETE
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black flex justify-center items-center text-center p-8">

                {/* Descripción principal */}
                <div className="space-y-4 px-2">
                    {/* Línea decorativa superior */}
                    <div className="w-[40%] h-[2px] bg-[#0F7457] mx-auto mb-6"></div>
                    <p className="text-white text-2xl  leading-[1.2] font-inter">
                        📩 Únete a la lista prioritaria y sé la primera en enterarte del lanzamiento.
                    </p>
                </div>
            </div>

        </>
    )
}