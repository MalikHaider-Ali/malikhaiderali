"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "4.9/5", label: "Average Rating", color: "text-primary" },
  { value: "20+", label: "Projects Completed", color: "text-text-primary" },
  { value: "98%", label: "Optimization Gain", color: "text-secondary" },
];

export default function FeedbackStats() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-8">
      <div className="bg-surface-container-low rounded-xl border border-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center py-10"
            >
              <span className={`font-display text-[48px] font-bold ${s.color} mb-1`}>
                {s.value}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-widest text-text-secondary">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
