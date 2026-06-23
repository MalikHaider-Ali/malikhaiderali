import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StackHero from "@/components/sections/stack/StackHero";
import SkillBars from "@/components/sections/stack/SkillBars";
import StackCategories from "@/components/sections/stack/StackCategories";

export default function StackPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <StackHero />
        <StackCategories />
        <SkillBars />
      </main>
      <Footer />
    </>
  );
}
