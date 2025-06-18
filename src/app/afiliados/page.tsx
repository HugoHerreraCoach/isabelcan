import Footer from "@/components/Footer";
import AfiliadosIntro from "@/sections/afiliados/AfiliadosIntro";
import AfOportunity from "@/sections/afiliados/AfOportunity";
import CardsAfiliados from "@/sections/afiliados/CardsAfiliados";
import FormularioInteres from "@/sections/afiliados/FormularioInteres";
import ParaQuienEs from "@/sections/afiliados/ParaQuienEs";

export default function AfiliadosPage() {
  return (
    <>
      <AfiliadosIntro />
      <AfOportunity />
      <CardsAfiliados />
      <ParaQuienEs/>
      <FormularioInteres />
      <Footer/>
    </>
  );
}
