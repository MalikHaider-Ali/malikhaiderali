import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeedbackStats from "@/components/sections/feedback/FeedbackStats";
import Testimonials from "@/components/sections/feedback/Testimonials";
import ReviewForm from "@/components/sections/feedback/ReviewForm";
import InitializeContact from "@/components/sections/feedback/InitializeContact";

export const dynamic = "force-dynamic";

export default function FeedbackPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] overflow-x-hidden">
        <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-8 text-center">
          <h1 className="font-display text-[52px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-primary mb-4">
            Surgical Feedback
          </h1>
          <p className="font-body text-[18px] text-text-secondary max-w-xl mx-auto">
            Validating automation impact through the lens of precision and efficiency. Real results
            from real engineering partners.
          </p>
        </section>
        <FeedbackStats />
        <Testimonials />
        <ReviewForm />
        <InitializeContact />
      </main>
      <Footer />
    </>
  );
}
