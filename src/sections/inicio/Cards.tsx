import Image from "next/image"
import Link from "next/link"


export default function Cards(){
    return(
        <section>
            <div className="bg-white text-black -mb-25 px-2 flex flex-col items-center">
                <p className="text-xl text-center mx-10 leading-[1.3] pt-4 pb-4 font-regular">
                    ¿Sientes que tu cuerpo no va al ritmo de tu vida? Aquí tienes<span className="font-bold"> 3 caminos </span>para empezar hoy:
                </p>
                {/*Tarjetas*/}
                <div className="w-[90%] my-2 max-w-[500px] relative h-[200px] bg-[url('/inicio/card1.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col items-center justify-center">
                    <Link 
                        href="/keto"
                        className="text-3xl font-serif text-white"
                    >
                        🔥Reto Keto 15 D
                    </Link>
                    <Link
                        href="/keto"
                    >
                        <Image
                            src="/inicio/linkIcon.png"
                            alt="Icono de enlace"
                            width={115}
                            height={115}
                            className="w-[30px] absolute bottom-6 right-6"
                        />
                    </Link>
                </div>
                <div className="w-[90%] my-2 max-w-[500px] relative h-[200px] bg-[url('/inicio/card2.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col items-center justify-center">
                    <Link 
                        href="/detox"
                        className="text-3xl font-serif text-white"
                    >
                        Programa Detox 5D
                    </Link>
                    <Link
                        href="/detox"
                    >
                        <Image
                            src="/inicio/linkIcon.png"
                            alt="Icono de enlace"
                            width={115}
                            height={115}
                            className="w-[30px] absolute bottom-6 right-6"
                        />
                    </Link>
                </div>
                <div className="w-[90%] my-2 max-w-[500px] relative h-[200px] bg-[url('/inicio/card3.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col items-center justify-center">
                    <Link 
                        href="/energy"
                        className="text-3xl font-serif text-white"
                    >
                        ⚡Eleva tu energía
                    </Link>
                    <Link
                        href="/energy"
                    >
                        <Image
                            src="/inicio/linkIcon.png"
                            alt="Icono de enlace"
                            width={115}
                            height={115}
                            className="w-[30px] absolute bottom-6 right-6"
                        />
                    </Link>
                </div>
            </div>

            <div className="bg-black text-white px-2 flex flex-col items-center text-center">
                <h2 className="text-[#70AB9B] font-serif text-4xl leading-[1.1] pt-38">
                    Emprende con tu transformación
                </h2>
                <div className="w-[35%] h-[1px] bg-[#0F7457] mt-4 mb-8"></div>
                <p className="text-2xl">
                    ¿Te gustaría transformar tu vida y también ayudar a otras mujeres a lograrlo?
                </p>
                <Link
                    href="/afiliados"
                    className="bg-[#0F7457] px-4 py-3 rounded-full font-serif text-2xl mt-8 mb-4"
                >
                    ⚡Postula al programa de afiliados
                </Link>
            </div>
        </section>
    )
}