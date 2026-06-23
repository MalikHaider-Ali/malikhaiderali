"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    label: "Discover",
    description:
      "Deep-dive into your requirements, pain points, and architecture goals. No assumptions — surgical diagnosis first.",
  },
  {
    id: "02",
    label: "Architect",
    description:
      "Blueprint every component, data flow, and integration point. Designed for scale before a single line of code.",
  },
  {
    id: "03",
    label: "Execute",
    description:
      "Production-grade implementation with continuous reviews, automated testing, and zero-tolerance for tech debt.",
  },
  {
    id: "04",
    label: "Deliver",
    description:
      "Handoff with full documentation, CI/CD pipelines live, and 30-day post-launch support included.",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState("01");
  const current = steps.find((s) => s.id === active)!;

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-border-subtle">
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        <div className="md:w-1/3">
          <p className="font-mono text-[12px] uppercase tracking-widest text-text-secondary mb-2">
            The Process
          </p>
          <h2 className="font-display text-[32px] font-bold text-text-primary mb-2">
            Surgical steps to digital excellence.
          </h2>
        </div>
        <div className="md:w-2/3">
          {/* Step tabs */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-5 py-2 rounded-lg font-mono text-[12px] uppercase tracking-widest transition-all duration-200 border ${
                  active === s.id
                    ? "bg-primary-container text-on-primary-container border-primary-container"
                    : "border-border-subtle text-text-secondary hover:border-primary/50"
                }`}
              >
                {s.id} {s.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-surface-container-low p-8 rounded-xl border border-border-subtle"
            >
              <div className="font-mono text-[48px] font-bold text-primary/20 mb-4">{current.id}</div>
              <h3 className="font-display text-[24px] font-semibold text-text-primary mb-3">
                {current.label}
              </h3>
              <p className="font-body text-[16px] text-text-secondary leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
