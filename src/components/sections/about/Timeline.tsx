"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "2026 · Present",
    role: "Lead Automation Strategist",
    desc: "Architecting enterprise-grade automation workflows and CI/CD pipelines.",
  },
  {
    period: "2025 · Present",
    role: "Freelance Full-Stack Web Developer",
    desc: "Delivering high-end SaaS platforms for global tech startups.",
  },
  {
    period: "2024 · 2025",
    role: "The Self-Taught Grind",
    desc: "80-hour weeks mastering JavaScript, React, and Python fundamentals.",
  },
];

export default function Timeline() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-border-subtle">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-[32px] font-bold text-text-primary mb-12"
      >
        Career Timeline
      </motion.h2>
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border-subtle" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary-container border-2 border-background" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-1">
                {item.period}
              </p>
              <h3 className="font-display text-[24px] font-semibold text-text-primary mb-1">
                {item.role}
              </h3>
              <p className="font-body text-[15px] text-text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
