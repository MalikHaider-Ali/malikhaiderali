"use client";
import { motion } from "framer-motion";

export default function StackHero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary font-mono text-[12px] uppercase tracking-widest mb-6"
      >
        <span className="material-symbols-outlined text-base">verified</span>
        Honest Proficiency Disclaimer
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[56px] md:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
      >
        The Tech Stack.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-[18px] text-text-secondary max-w-xl mx-auto"
      >
        I don&apos;t just &apos;know&apos; these tools. I have integrated them into high-availability
        environments where failure wasn&apos;t an option.
      </motion.p>
    </section>
  );
}
