import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutValues from "@/components/sections/about/AboutValues";
import Timeline from "@/components/sections/about/Timeline";
import SystemLogs from "@/components/sections/about/SystemLogs";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <AboutHero />
        <AboutValues />
        <Timeline />
        <SystemLogs />
      </main>
      <Footer />
    </>
  );
}
