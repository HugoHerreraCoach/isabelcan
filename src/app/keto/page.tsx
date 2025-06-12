import Footer from "@/components/Footer";
import CardsKeto from "@/sections/keto/CardsKeto";
import Benefits from "@/sections/keto/Benefits";
import KetoIntro from "@/sections/keto/KetoIntro";
import Bonus from "@/sections/keto/Bonus";

export default function Home() {
  return (
    <>
      <KetoIntro />
      <Benefits />
      <CardsKeto />
      <Bonus />
      <Footer/>
    </>
  );
}