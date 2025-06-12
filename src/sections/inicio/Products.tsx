import Image from "next/image"
import Link from "next/link"


export default function Products(){
    return(
        <section className="bg-black">
            <div className="bg-black max-w-[500px] mx-auto">
                <Image
                    src="/inicio/isa2.jpg"
                    alt="Icono de enlace"
                    width={1000}
                    height={1489}
                    className="w-[100%]"
                />
                <div className="w-[100%] px-4 h-[200px] pb-[220px] bg-black flex flex-col items-center justify-center">
                    <Link
                        href="/ebook"
                        className="text-white flex items-center my-2 justify-center bg-linear-to-tl from-[#545454] to-[#7B7B7B] rounded-3xl p-5"
                    >
                        <p className="w-[60%] text-xl leading-[1.2]">
                            <span className="font-serif">Ebook: </span>Tu huella en el mundo - Construye y escala tu marca personal.
                        </p>
                        <Image
                            src="/inicio/ebook.png"
                            alt="Icono de enlace"
                            width={115}
                            height={115}
                            className="w-[30%]"
                        />
                    </Link>
                    <Link
                        href="/curso"
                        className="text-white flex items-center my-2 justify-center bg-linear-to-tl from-[#545454] to-[#7B7B7B] rounded-3xl p-5"
                    >
                        <p className="w-[60%] text-xl leading-[1.2]">
                            <span className="font-serif">CURSO: </span>Haz ofertas tan buenas que la gente se sienta est#&pida si dice que NO
                        </p>
                        <Image
                            src="/inicio/isa3.png"
                            alt="Icono de enlace"
                            width={115}
                            height={115}
                            className="w-[30%]"
                        />
                    </Link>
                </div>
            </div>
            
    </section>
    )
}