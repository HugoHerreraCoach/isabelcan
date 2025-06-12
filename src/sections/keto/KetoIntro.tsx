import Image from "next/image"
import React from 'react';

export default function KetoIntro() {
    return (
        <header className="bg-linear-to-b from-[#1D1D1D] to-[#020202] text-white flex flex-col items-center">
            {/* Logo */}
            <div className="absolute top-6 right-1 z-10">
                <div className="w-32 h-32 rounded flex items-center justify-center">
                    <Image
                        src="/inicio/logo.png"
                        alt="Logo"
                        width={32}
                        height={24}
                        className="w-32 h-32 object-contain"
                    />
                </div>
            </div>
            {/* Image Container with All Overlay Content */}
            <div className="relative w-full h-[450px]">
                <Image
                    src="/inicio/abdomen.png"
                    alt="Isa Belcan"
                    fill
                    className="mr-10"
                    priority
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-72 md:mt-92 lg:mt-92">
                    <h1 className="text-[#70AB9B] font-serif text-4xl"> 🔥 Reto QUEMA</h1>
                    <h1 className="text-[#70AB9B] font-serif text-4xl text-center mx-10 leading-[1.2] py-4 font-regular">GRASA en 14 días</h1>

                    <div className="bg-white w-[85%] flex flex-col items-center justify-center rounded-t-2xl  px-6 pt-2 pb-2 -mb-32 mt-10 ">
                        
                            {/* Main Description */}
                            <div className="text-center mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 leading-[1.3] px-1 mt-4">
                                    Pierde grasa, gana energía y vuelve a sentirte liviana...
                                </h2>
                                <p className="text-black text-xl font-inter leading-[1.3]">
                                    en solo 14 días. Sin pastillas raras, sin dietas complicadas.
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-6 mb-12">
                                <button className="bg-[#0F7457] hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-[14px] tracking-wider transition-colors duration-200 shadow-lg w-full max-w-[280px]">
                                    UNIRME AL RETO
                                </button>
                                <div className="w-32 h-[1px] bg-[#0F7457]"></div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}
