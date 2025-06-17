import Footer from "@/components/Footer";
import BenefitsKey from "@/sections/energy/BenefitsKey";
import CardsEnergy from "@/sections/energy/CardsEnergy";
import EnergyIntro from "@/sections/energy/EnergyIntro";
import Bonus from "@/sections/energy/BonusEnergy";
import CardVita from "@/sections/energy/CardVita";

export default function Home() {
  return (
    <>
      <EnergyIntro />
      <CardVita />
      <BenefitsKey />
      <CardsEnergy />
      <Bonus />
      {/* Footer */}
      <Footer/>
    </>
  );
}