import Footer from "@/components/Footer";
import BenefitsKey from "@/sections/energy/BenefitsKey";
import CardsEnergy from "@/sections/energy/CardsEnergy";
import EnergyIntro from "@/sections/energy/EnergyIntro";
import Bonus from "@/sections/detox/BonusDetox";

export default function Home() {
  return (
    <>
      <EnergyIntro />
      <CardsEnergy />
      <BenefitsKey />
      <CardsEnergy />
      <Bonus />
      {/* Footer */}
      <Footer/>
    </>
  );
}