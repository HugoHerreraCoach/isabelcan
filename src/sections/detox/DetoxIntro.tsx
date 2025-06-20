import Image from "next/image"
import Link from "next/link";
import React from 'react';

const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.link/s24yef`

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F7457] hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl text-2xl"
        >
            UNIRME AL RETO
        </Link>
    )
}

export default function DetoxIntro() {
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
            <div className="relative w-full h-[210px]">
                <Image
                    src="/detox/verduras.png"
                    alt="Isa Belcan"
                    fill
                    className="mr-10"
                    priority
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-64">
                    <div className="bg-white w-[90%] flex flex-col items-center justify-center rounded-t-2xl  px-6 pt-2 pb-2 -mb-60 mt-10 ">
                        <h1 className="text-[#0F7457] text-center font-serif text-4xl leading-[1.2] p-4"> 🍎 Programa Detox 5D</h1>

                        {/* Main Description */}
                        <div className="text-center mb-8 mt-6">
                            <p className="text-black text-3xl font-inter leading-[1.2]">
                                Desintoxica tu cuerpo, desinfla tu abdomen y recupérate desde adentro.5 días para sentirte más liviana, clara y en paz con tu cuerpo.
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
