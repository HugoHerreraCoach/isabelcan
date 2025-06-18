import Image from "next/image"
import Link from "next/link";
import React from 'react';

const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.link/6xznhy`

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F7457] hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-2xl  text-center "
        >
            UNIRME AL RETO
        </Link>
    )
}

export default function KetoIntro() {
    return (
        <header className="bg-linear-to-b from-[#1D1D1D] to-[#020202] text-white flex flex-col items-center">
            {/* Logo */}
            <div className="absolute top-4 right-1 z-10">
                <Image
                    src="/inicio/isaLogo.png"
                    alt="Logo"
                    width={16}
                    height={16}
                    className="w-16 h-16 object-contain"
                />
            </div>
            {/* Image Container with All Overlay Content */}
            <div className="relative w-full h-[300px]">
                <Image
                    src="/inicio/abdomen.png"
                    alt="Isa Belcan"
                    fill
                    className="mr-10"
                    priority
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-76">
                    <h1 className="text-[#70AB9B] text-4xl mx-10 leading-[1.2] font-serif text-center"> 🔥 Reto QUEMA GRASA en 14 días</h1>

                    <div className="bg-white w-[90%] flex flex-col items-center justify-center rounded-t-2xl  px-6 pt-2 pb-2 -mb-32 mt-10 ">

                        {/* Main Description */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl text-black mb-4 font-inter leading-[1.2] px-3 mt-4">
                                <span className="font-bold">Pierde grasa, gana energía y vuelve a sentirte liviana...</span>
                                {" "}en solo 14 días. Sin pastillas raras, sin dietas complicadas.
                            </h2>
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
