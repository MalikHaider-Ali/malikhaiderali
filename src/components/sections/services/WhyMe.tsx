"use client";
import { motion } from "framer-motion";

const reasons = [
  { icon: "precision_manufacturing", title: "Surgical Precision", desc: "No wasted cycles. Every decision is deliberate, documented, and defensible." },
  { icon: "schedule", title: "Deadline Respect", desc: "98% on-time delivery rate across 20+ projects. Time is your most valuable resource." },
  { icon: "code_blocks", title: "Clean Codebase", desc: "Maintainable, well-documented code you can onboard a new dev to in hours, not weeks." },
  { icon: "support_agent", title: "Post-Launch Support", desc: "Every engagement includes post-delivery support. I don't disappear at handoff." },
];

export default function WhyMe() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-border-subtle">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[40px] font-bold text-text-primary mb-3"
        >
          Why Work With Me?
        </motion.h2>
        <p className="font-body text-[16px] text-text-secondary">
          The intangibles that make every engagement worth it.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface-container-low p-6 rounded-xl border border-border-subtle hover:border-secondary/40 transition-all duration-300 text-center"
          >
            <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">{r.icon}</span>
            <h3 className="font-display text-[18px] font-semibold text-text-primary mb-2">{r.title}</h3>
            <p className="font-body text-[14px] text-text-secondary">{r.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-14"
      >
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95"
        >
          <span className="material-symbols-outlined text-base">send</span>
          Start a Project
        </a>
      </motion.div>
    </section>
  );
}
