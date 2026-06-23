"use client";
import { motion } from "framer-motion";

const values = [
  {
    icon: "precision_manufacturing",
    title: "Precision",
    color: "text-secondary",
    desc: "No wasted cycles. No bloat. Just lean, high-performance logic.",
  },
  {
    icon: "auto_awesome",
    title: "Autonomy",
    color: "text-primary",
    desc: "Systems that think for themselves, so you don't have to.",
  },
  {
    icon: "verified_user",
    title: "Integrity",
    color: "text-tertiary",
    desc: "Architectural standards that withstand the test of time and scale.",
  },
];

export default function AboutValues() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12 border-t border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface-container-low p-6 rounded-xl border border-border-subtle hover:border-primary/30 transition-all duration-300"
          >
            <span className={`material-symbols-outlined text-3xl ${v.color} mb-4 block`}>
              {v.icon}
            </span>
            <h3 className="font-display text-[20px] font-semibold text-text-primary mb-2">
              {v.title}
            </h3>
            <p className="font-body text-[14px] text-text-secondary">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
