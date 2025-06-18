import Footer from "@/components/Footer";
import BenefitsEbook from "@/sections/ebook/BenefitsEbook";
import CardsEbook from "@/sections/ebook/CardsEbook";
import EbookIntro from "@/sections/ebook/EbookIntro";
import InfoEbook from "@/sections/ebook/InfoEbook";
import Logros from "@/sections/ebook/Logros";

export default function EbookPage() {
  return (
    <>
      <EbookIntro/>
      <InfoEbook/>
      <BenefitsEbook/>
      <Logros/>
      <CardsEbook/>
      <Footer/>
    </>
  );
}