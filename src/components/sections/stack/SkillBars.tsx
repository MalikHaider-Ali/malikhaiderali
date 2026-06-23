"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { label: "HTML5 / CSS3 / Semantic UI", percent: 90, color: "bg-secondary" },
  { label: "JavaScript (ES6+)", percent: 82, color: "bg-primary" },
  { label: "React / Next.js", percent: 80, color: "bg-secondary" },
  { label: "Vercel / GitHub / Git", percent: 75, color: "bg-tertiary" },
  { label: "JavaScript / REST API", percent: 78, color: "bg-primary" },
  { label: "Node.js / Express", percent: 72, color: "bg-secondary" },
];

function SkillBar({ label, percent, color, index }: { label: string; percent: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-[12px] uppercase tracking-widest text-text-secondary">
          {label}
        </span>
        <span className="font-mono text-[12px] text-text-secondary">{percent}%</span>
      </div>
      <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

export default function SkillBars() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-border-subtle">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="w-1 h-8 bg-primary rounded-full" />
        <h2 className="font-display text-[32px] font-bold text-text-primary">
          Quantified Expertise
        </h2>
      </motion.div>
      <div className="max-w-2xl space-y-6">
        {skills.map((s, i) => (
          <SkillBar key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
