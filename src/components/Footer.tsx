import Image from "next/image"
import Link from "next/link"

const icons = [
    {
        id: 1,
        src: "/inicio/facebookIcon.svg",
        alt: "Ícono de Facebook",
        enlace: "https://www.facebook.com/isabel.belcan",
    },
    {
        id: 2,
        src: "/inicio/instagramIcon.svg",
        alt: "Ícono de Instagram",
        enlace: "https://www.instagram.com/isabel.belcan",
    },
    {
        id: 3,
        src: "/inicio/linkedinIcon.svg",
        alt: "Ícono de Linkedin",
        enlace: "https://www.linkedin.com/in/isa-belcan-consultora-de-marketing-digital-16a607192/",
    },
    {
        id: 4,
        src: "/inicio/tiktokIcon.svg",
        alt: "Ícono de Tiktok",
        enlace: "https://www.tiktok.com/@isa_belcan",
    },
    {
        id: 5,
        src: "/inicio/youtubeIcon.svg",
        alt: "Ícono de Youtube",
        enlace: "https://www.youtube.com/@isabelcanconsultora",
    },
]

export default function Footer(){

    const currentYear = new Date().getFullYear(); 

    return (
        <footer>
            <div className="bg-[#1B1B1B] flex flex-col items-center pt-10 pb-6">
                <div className="flex gap-5 items center justify-center">
                    {icons.map(icon => 
                        <Link 
                            key={icon.id}
                            href={icon.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                                
                                <Image 
                                src={icon.src}
                                alt={icon.alt}
                                width={40}
                                height={40}
                                />
                        </Link>
                    )}
                </div>
                <p className="text-sm text-center text-[#FEFFFF] pt-6 pb-2">© {currentYear} Isa Belcan.<br/>Todos los derechos reservados</p>
                <div className="flex gap-4 pt-2">
                    <p className="text-xs text-white">Isa Belcan</p>
                    <p className="text-xs text-white">|</p>
                    <p className="text-xs text-white">Aviso legal</p>
                    <p className="text-xs text-white">|</p>
                    <p className="text-xs text-white">Politica de Cookies</p>
                </div>
            </div>
        </footer>
    )
}