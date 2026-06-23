"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const inputClass =
  "w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[16px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors";

const selectClass =
  "w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[16px] text-text-secondary focus:outline-none focus:border-primary/50 transition-colors appearance-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface-container-low rounded-xl border border-border-subtle p-8"
    >
      {sent ? (
        <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4">
          <span className="material-symbols-outlined text-5xl text-secondary">check_circle</span>
          <h3 className="font-display text-[24px] font-semibold text-text-primary">Message Sent!</h3>
          <p className="font-body text-[16px] text-text-secondary">
            I&apos;ll respond within 24 operational hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Full Name
              </label>
              <input type="text" className={inputClass} required />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Email Address
              </label>
              <input type="email" className={inputClass} required />
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Subject
            </label>
            <input type="text" placeholder="Project Inquiry" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Service Needed
              </label>
              <select className={selectClass}>
                <option value="">Select service</option>
                <option>Full Stack Web Development</option>
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
              <select className={selectClass}>
                <option value="">Project budget</option>
                <option>Under 25,000</option>
                <option>25,000 – 50,000</option>
                <option>50,000 – 100,000</option>
                <option>100,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
              <span className="absolute right-3 top-[38px] material-symbols-outlined text-text-secondary pointer-events-none text-base">
                expand_more
              </span>
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Briefly describe your project goals..."
              className={`${inputClass} resize-none`}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-4 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95"
          >
            <span className="material-symbols-outlined text-base">send</span>
            Send Message
          </button>
        </form>
      )}
    </motion.div>
  );
}
