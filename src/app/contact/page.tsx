import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="font-mono text-[12px] uppercase tracking-widest text-secondary mb-3">
            </p>
            <h1 className="font-display text-[56px] md:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary">
              Let&apos;s Build Something
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
