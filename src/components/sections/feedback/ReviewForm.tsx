"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitReview } from "@/app/actions/reviews";

const inputClass =
  "w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[16px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", role: "", quote: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (rating === 0) {
      setError("Please select a star rating.");
      return;
    }

    setLoading(true);
    const result = await submitReview({ ...form, rating });
    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12 border-t border-border-subtle">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-surface-container-low rounded-xl border border-border-subtle p-8"
      >
        <h2 className="font-display text-[28px] font-bold text-text-primary text-center mb-2">
          Share Your Experience
        </h2>
        <p className="font-body text-[14px] text-text-secondary text-center mb-8">
          Approved reviews appear in the testimonials section above.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-3"
          >
            <span className="material-symbols-outlined text-5xl text-secondary">reviews</span>
            <p className="font-display text-[20px] font-semibold text-text-primary">Thank you!</p>
            <p className="font-body text-[15px] text-text-secondary">
              Your review has been submitted and is pending approval.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", role: "", quote: "" });
                setRating(0);
              }}
              className="mt-4 border border-border-subtle text-text-primary px-6 py-2.5 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:bg-surface-elevated transition-colors"
            >
              Submit Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                  Full Name <span className="text-primary-container">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className={inputClass}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                  Role / Company
                </label>
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  type="text"
                  className={inputClass}
                  placeholder="e.g. CTO, Acme Corp"
                />
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-2">
                Rating <span className="text-primary-container">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    <span
                      className={`material-symbols-outlined text-3xl transition-colors ${
                        (hover || rating) >= star ? "text-[#FFBD2E]" : "text-text-secondary"
                      }`}
                      style={{
                        fontVariationSettings:
                          (hover || rating) >= star ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Review Details <span className="text-primary-container">*</span>
              </label>
              <textarea
                name="quote"
                value={form.quote}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Describe your experience working together..."
                required
              />
            </div>

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3"
              >
                <span className="material-symbols-outlined text-base">error</span>
                <p className="font-body text-[14px]">{error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-4 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-base animate-spin">
                    progress_activity
                  </span>
                  Submitting...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">send</span>
                  Submit Review
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}