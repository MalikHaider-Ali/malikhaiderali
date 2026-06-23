"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "layers",
    title: "Full Stack Web Development",
    color: "text-primary",
    features: ["End-to-end Architecture", "Real-time App Systems", "API Strategy & Design"],
  },
  {
    icon: "brush",
    title: "Frontend Engineering",
    color: "text-secondary",
    features: ["React/Next.js Mastery", "Advanced Micro-animations", "Design System Ops"],
  },
  {
    icon: "storage",
    title: "Backend Architecture",
    color: "text-tertiary",
    features: ["Scalable Microservices", "Go & Rust High-Perf", "Cloud Infrastructure"],
  },
  {
    icon: "smart_toy",
    title: "Custom Automation",
    color: "text-primary",
    features: ["CI/CD Pipeline Orchestration", "LLM-based Workflows", "Selenium/Playwright Expert"],
  },
  {
    icon: "hub",
    title: "SEO & Growth Strategy",
    color: "text-secondary",
    features: ["Technical SEO Audits", "Keyword & Content Strategy", "Analytics-Driven Growth"],
  },
  {
    icon: "lightbulb",
    title: "Tech Consultation",
    color: "text-tertiary",
    features: ["Fractional CTO Services", "Stack Feasibility Audit", "Recruitment Advisory"],
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[42px] font-bold text-text-primary mb-3"
        >
          Core Services
        </motion.h2>
        <p className="font-body text-[16px] text-text-secondary max-w-md mx-auto">
          Specialized engineering solutions tailored for rapid scale and extreme reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-surface-container-low p-6 rounded-xl border border-border-subtle hover:border-primary/40 transition-all duration-300"
          >
            <span className={`material-symbols-outlined text-3xl ${s.color} mb-4 block`}>
              {s.icon}
            </span>
            <h3 className="font-display text-[18px] font-semibold text-text-primary mb-4">
              {s.title}
            </h3>
            <ul className="space-y-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-[14px] text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
