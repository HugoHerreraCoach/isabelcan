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
        src: "/inicio/youtubeIcon.svg",
        alt: "Ícono de Youtube",
        enlace: "https://www.youtube.com/@isabelcanconsultora",
    },
]

export default function Main(){
    return(
        <header className="bg-linear-to-b from-[#1D1D1D] to-[#020202] text-white flex flex-col items-center pt-20">
            <Image
            src="/inicio/isa1.png"
            alt="Isa Belcan"
            width={500}
            height={500}
            className="w-[200px]"
            />
            <h1 className="text-[#70AB9B] font-serif text-4xl">Isa Belcan</h1>
            <p className="text-2xl text-center mx-10 leading-[1.2] py-4 font-regular">¡Te acompaño en el proceso de vivir mejor!</p>
            <div className="flex gap-5">
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
                            width={50}
                            height={50}
                            />
                    </Link>
                )}
            </div>
            <div className="bg-white w-[80%] flex flex-col items-center justify-center rounded-t-2xl mt-10">
                <p className="text-[#0F7457] font-serif text-3xl md:text-4xl lg:text-5xl text-center pt-4 leading-[1]">¡Transforma tu cuerpo!</p>
                <div className="h-[2px] w-[50%] bg-[#0F7457] mt-2"></div>
            </div>
        </header>
    )
}