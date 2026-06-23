import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import BentoGrid from "@/components/sections/BentoGrid";
import Ticker from "@/components/sections/Ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <Hero />
        <StatsBar />
        <BentoGrid />
        <Ticker />
      </main>
      <Footer />
    </>
  );
}
