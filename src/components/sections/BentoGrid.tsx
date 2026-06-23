"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function BentoGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[48px] font-bold text-text-primary mb-4"
        >
          Navigating the Ecosystem
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-12 h-1 bg-primary rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Card */}
        <motion.a
          href="/about"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-surface-container-low p-8 rounded-xl border border-border-subtle hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col h-full justify-between gap-12">
            <span className="material-symbols-outlined text-4xl text-primary">person_search</span>
            <div>
              <h3 className="font-display text-[24px] font-semibold text-text-primary mb-2">About</h3>
              <p className="font-body text-[16px] text-text-secondary">
                Discover the philosophy behind the precision.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-primary">arrow_outward</span>
          </div>
        </motion.a>

        {/* Projects Card */}
        <motion.a
          href="/projects"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-border-subtle hover:border-primary/50 transition-all duration-500 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row h-full gap-8">
            <div className="flex-1 space-y-4">
              <span className="material-symbols-outlined text-4xl text-secondary">terminal</span>
              <div>
                <h3 className="font-display text-[24px] font-semibold text-text-primary mb-2">
                  Projects
                </h3>
                <p className="font-body text-[16px] text-text-secondary">
                  Architectural deep-dives and production-ready deployments across the stack.
                </p>
              </div>
            </div>
            <div className="flex-1 relative rounded-lg overflow-hidden border border-border-subtle/50 min-h-[120px]">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTr-yqtWtiuRhWmE8o4yFgjtNhZypROC0imi1cFH4QFS0IqGluVDMbHYvv0wBVtoRe3NgozitYbTqw8Dnknq20_DGXDj3LATI5DvC-0FjwXHQBJHNgDlf1_g3-f-9ydP-mLlRL1SNDmJQLH40BYqIRiM56zRfTR1GGpmQRy4YArtOS4nhZkPZBOhWyZWMhEUAKEMNvybCE16hhY9MXI6wZZc33NJJx0f3ujy8qizuueEoXDwULT2actUcbe1eo0jUbUrJjnBzyc2CB')",
                }}
              />
            </div>
          </div>
        </motion.a>

        {/* Services Card */}
        <motion.a
          href="/services"
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-border-subtle hover:border-primary/50 transition-all duration-500 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row h-full gap-8">
            <div className="flex-1 relative rounded-lg overflow-hidden border border-border-subtle/50 min-h-[120px]">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxEkGhhoYEKA9J65ypuvHHMpKpXjYqTf7GNJUQ6Pv6n3JFT4WwpBbrq6wM8M7kyvUZ4G6fXnd3HIVzwvFedQSlwpUQNXQC32QYvXTh2f9lUobBsby-y-22VUi0Pvn2DQXMbjuzvamo7RS1jmaOIyRrOtqrA21qbbyaRZENCWOc_Xe2rNMP4BSyvc2_7QG5kv-Zc-1D5BQyJ032YUZPYhbWlCk0D3pj2cpsbBii8Rp_ZeU67i38HRrDwoEaX6VE5CeA_gHYZn7a8x')",
                }}
              />
            </div>
            <div className="flex-1 space-y-4">
              <span className="material-symbols-outlined text-4xl text-tertiary">
                settings_input_component
              </span>
              <div>
                <h3 className="font-display text-[24px] font-semibold text-text-primary mb-2">
                  Services
                </h3>
                <p className="font-body text-[16px] text-text-secondary">
                  From infrastructure automation to bespoke full-stack engineering.
                </p>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Stack Card */}
        <motion.a
          href="/stack"
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-surface-container-low p-8 rounded-xl border border-border-subtle hover:border-primary/50 transition-all duration-500 cursor-pointer"
        >
          <div className="flex flex-col h-full justify-between gap-12">
            <span className="material-symbols-outlined text-4xl text-secondary-container">
              construction
            </span>
            <div>
              <h3 className="font-display text-[24px] font-semibold text-text-primary mb-2">
                The Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["REACT", "PYTHON", "NODE"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-surface-elevated text-[10px] font-mono text-secondary border border-secondary/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.a>

        {/* Testimonials Card */}
        <motion.a
          href="/testimonials"
          custom={4}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-surface-container-low p-8 rounded-xl border border-border-subtle hover:border-primary/50 transition-all duration-500 cursor-pointer"
        >
          <div className="flex flex-col h-full justify-between gap-12">
            <span className="material-symbols-outlined text-4xl text-primary">forum</span>
            <div>
              <h3 className="font-display text-[24px] font-semibold text-text-primary mb-2">
                Social Proof
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                What partners say about the surgical approach.
              </p>
            </div>
          </div>
        </motion.a>

        {/* Contact Card */}
        <motion.a
          href="/contact"
          custom={5}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-primary p-8 rounded-xl border border-primary hover:bg-primary-container transition-all duration-500 overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col h-full justify-between gap-12 relative z-10">
            <span className="material-symbols-outlined text-4xl text-on-primary">send</span>
            <div>
              <h3 className="font-display text-[24px] font-semibold text-on-primary mb-2">Contact</h3>
              <p className="font-body text-[16px] text-on-primary/80">Initiate the handshake protocol.</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-primary/10 rounded-full blur-3xl" />
        </motion.a>
      </div>
    </section>
  );
}
