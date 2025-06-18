import Footer from "@/components/Footer";
import BenefitsDetox from "@/sections/detox/BenefitsDetox";
import BonusDetox from "@/sections/detox/BonusDetox";
import CardsDetox from "@/sections/detox/CardsDetox";
import DetoxIntro from "@/sections/detox/DetoxIntro";


export default function DetoxPage() {
  return (
    <>
      <DetoxIntro />
      <BenefitsDetox />
      <CardsDetox />
      <BonusDetox />
      {/* Footer */}
      <Footer />
    </>
  );
}