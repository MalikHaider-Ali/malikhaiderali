import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SubmitForm from "@/components/sections/submit/SubmitForm";
import LivePreview from "@/components/sections/submit/LivePreview";

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="mb-10">
            <p className="font-mono text-[12px] uppercase tracking-widest text-secondary mb-3">
              {/* Project Submission */}
            </p>
            <h1 className="font-display text-[52px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary">
              Submit Your Work
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SubmitForm />
            <LivePreview />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
