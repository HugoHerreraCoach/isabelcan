import Footer from "@/components/Footer";
import BenefitsEbook from "@/sections/ebook/BenefitsEbook";
import EbookIntro from "@/sections/ebook/EbookIntro";
import InfoEbook from "@/sections/ebook/InfoEbook";

export default function Home() {
  return (
    <>
      <EbookIntro/>
      <InfoEbook/>
      <BenefitsEbook/>
      <Footer/>
    </>
  );
}