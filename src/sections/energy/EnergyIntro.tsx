import Image from "next/image"
import Link from "next/link";
import React from 'react';
const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.link/sm22xz`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F7457] hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-[14px] tracking-wider transition-colors duration-200 shadow-lg w-full max-w-[280px] text-center inline-block"
        >
            UNIRME AL RETO
        </a>
    )
}
export default function EnergyIntro() {
    return (
        <header className="bg-linear-to-b from-[#1D1D1D] to-[#020202] text-white flex flex-col items-center">
            {/* Logo */}
            <div className="absolute top-6 right-1 z-10">
                <div className="w-32 h-32 rounded flex items-center justify-center">
                    <Image
                        src="/inicio/isaLogo.png"
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
                    src="/energy/mujerenergy.png"
                    alt="Isa Belcan"
                    fill
                    className="mr-10"
                    priority
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-72 md:mt-92 lg:mt-92">
                    <div className="bg-white w-[85%] flex flex-col items-center justify-center rounded-t-2xl  px-6 pt-2 pb-2 -mb-60 mt-10 ">
                        <h1 className="text-[#0F7457] text-center font-serif text-4xl leading-[1.5] mt-8"> ¿Sientes que el día te queda corto, pero tu energía más aún?</h1>

                        {/* Main Description */}
                        <div className="text-center mb-8 mt-6">
                            <p className="text-black text-xl font-inter leading-[1.3]">
                                Vita Xtra T+ es tu impulso natural para trabajar con enfoque, liderar con claridad y disfrutar sin agotarte.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6 mb-12">
                            <WhatsAppButton />
                            <div className="w-32 h-[1px] bg-[#0F7457]"></div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
