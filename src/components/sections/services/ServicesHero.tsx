"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-12">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-[12px] uppercase tracking-widest text-secondary mb-4"
      >
        {/* Services */}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[56px] md:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary mb-6 max-w-3xl"
      >
        Engineering Solutions That Scale.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-[18px] text-text-secondary max-w-2xl"
      >
        From infrastructure automation to bespoke full-stack engineering — every engagement is
        approached with surgical intent and production-grade standards.
      </motion.p>
    </section>
  );
}
