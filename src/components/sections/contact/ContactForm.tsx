"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions/contact";

const inputClass =
  "w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[16px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors";

const selectClass =
  "w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[16px] text-text-secondary focus:outline-none focus:border-primary/50 transition-colors appearance-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    service: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await sendContactEmail(form);
    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      setSent(true);
      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        service: "",
        budget: "",
        message: "",
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface-container-low rounded-xl border border-border-subtle p-8"
    >
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center space-y-4"
        >
          <span className="material-symbols-outlined text-6xl text-secondary">
            mark_email_read
          </span>
          <h3 className="font-display text-[24px] font-semibold text-text-primary">
            Message Sent!
          </h3>
          <p className="font-body text-[16px] text-text-secondary">
            I&apos;ll respond within 24 operational hours.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-4 border border-border-subtle text-text-primary px-6 py-2.5 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:bg-surface-elevated transition-colors"
          >
            Send Another
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
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Email Address <span className="text-primary-container">*</span>
              </label>
              <input
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                type="email"
                placeholder="john@example.com"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Project Inquiry"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Service Needed
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleSelectChange}
                className={selectClass}
              >
                <option value="">Select service</option>
                <option>Full Stack Development</option>
                <option>Frontend Engineering</option>
                <option>Backend Architecture</option>
                <option>Custom Automation</option>
                <option>Tech Consultation</option>
              </select>
              <span className="absolute right-3 top-[38px] material-symbols-outlined text-text-secondary pointer-events-none text-base">
                expand_more
              </span>
            </div>
            <div className="relative">
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Budget Range
              </label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleSelectChange}
                className={selectClass}
              >
                <option value="">Project budget</option>
                <option>Under $2,500</option>
                <option>$2,500 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
              <span className="absolute right-3 top-[38px] material-symbols-outlined text-text-secondary pointer-events-none text-base">
                expand_more
              </span>
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Message <span className="text-primary-container">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Briefly describe your project goals..."
              className={`${inputClass} resize-none`}
              required
            />
          </div>

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
                Sending...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base">send</span>
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}