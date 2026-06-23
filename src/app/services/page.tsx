import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import WhyMe from "@/components/sections/services/WhyMe";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <ServicesHero />
        <ServicesList />
        <WhyMe />
      </main>
      <Footer />
    </>
  );
}
