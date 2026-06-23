"use client";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[12px] uppercase tracking-widest text-secondary mb-4"
      >
        Surgical Precision Engineer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-[56px] md:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
      >
        Building the{" "}
        <span className="text-primary-container">Future</span> of Automation.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-body text-[18px] text-text-secondary max-w-xl mx-auto"
      >
        High-performance engineering at the intersection of complex backends and intuitive interfaces.
      </motion.p>
    </section>
  );
}
