"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div>
            <p className="font-mono text-[12px] uppercase tracking-widest text-secondary mb-3">
              {/* About */}
            </p>
            <h1 className="font-display text-[52px] md:text-[60px] font-bold leading-[1.1] tracking-[-0.02em] text-primary mb-4">
              Surgical Precision in Code.
            </h1>
          </div>
          <p className="font-body text-[16px] leading-[1.6] text-text-secondary">
            I am Malik Haider, a self-taught automation engineer who treats software development
            like high-stakes surgery. My journey began not in a classroom, but in the trenches of
            curiosity, dismantling logic until it worked with absolute efficiency.
          </p>
          <p className="font-body text-[16px] leading-[1.6] text-text-secondary">
            Every line of code I write is calculated to reduce friction, eliminate human error,
            and scale without compromise. I specialize in building digital architectures that are
            as robust as they are elegant.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="/projects"
              className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-border-subtle text-text-primary px-6 py-3 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:bg-surface-elevated transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right — Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden border border-border-subtle">
            {/* Placeholder portrait — replace src with real photo */}
            <div className="relative w-full h-[480px] bg-surface-container overflow-hidden">
              <img 
                src="/profile.jpeg"  // 👈 Replace this with your actual photo path
                alt="Your Name - Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-surface-container-lowest/80 backdrop-blur-md rounded-lg px-4 py-2 border border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="font-mono text-[11px] text-secondary uppercase tracking-widest">
                  Available for Projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
