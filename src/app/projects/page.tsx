import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import CoreServices from "@/components/sections/projects/CoreServices";
import ProcessSteps from "@/components/sections/projects/ProcessSteps";
import InvestmentTiers from "@/components/sections/projects/InvestmentTiers";

export const dynamic = "force-dynamic";

function ProjectsLoading() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border border-border-subtle overflow-hidden animate-pulse">
            <div className="h-56 bg-surface-container-high" />
            <div className="p-6 space-y-3">
              <div className="h-3 bg-surface-container-high rounded w-1/4" />
              <div className="h-4 bg-surface-container-high rounded w-3/4" />
              <div className="h-3 bg-surface-container-high rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <ProjectsHero />
        <Suspense fallback={<ProjectsLoading />}>
          <FeaturedProjects />
        </Suspense>
        <CoreServices />
        <ProcessSteps />
        <InvestmentTiers />
      </main>
      <Footer />
    </>
  );
}