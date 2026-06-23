"use client";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "25,000",
    period: "/project",
    features: ["Single Page App", "5 Custom Integrations", "2 Weeks Delivery"],
    cta: "Select Tier",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "35,000",
    period: "/project",
    badge: "MOST POPULAR",
    features: [
      "Multi-page Application",
      "Full Backend Auth/DB",
      "CI/CD Setup & Cloud Hosting",
      "1 Month Support",
    ],
    cta: "Start Scaling",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Complex Microservices", "Custom AI/ML Solutions", "Dedicated DevOps Support"],
    cta: "Inquire Now",
    highlighted: false,
  },
];

export default function InvestmentTiers() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-border-subtle">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[42px] font-bold text-text-primary mb-3"
        >
          Investment Tiers
        </motion.h2>
        <p className="font-body text-[16px] text-text-secondary">
          Transparent pricing for premium engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative p-8 rounded-xl border transition-all duration-300 flex flex-col ${
              tier.highlighted
                ? "bg-surface-container border-primary-container shadow-lg shadow-primary/10 scale-105"
                : "bg-surface-container-low border-border-subtle hover:border-primary/40"
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary-container text-on-primary-container text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                  {tier.badge}
                </span>
              </div>
            )}
            <div className="mb-6">
              <p className="font-mono text-[12px] uppercase tracking-widest text-text-secondary mb-2">
                {tier.name}
              </p>
              <div className="flex items-end gap-1">
                <span className="font-display text-[48px] font-bold text-text-primary leading-none">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="font-body text-[16px] text-text-secondary mb-1">{tier.period}</span>
                )}
              </div>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-[14px] text-text-secondary">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className={`block text-center py-3 rounded-lg font-mono text-[12px] uppercase tracking-widest transition-all duration-200 active:scale-95 ${
                tier.highlighted
                  ? "bg-primary-container text-on-primary-container hover:opacity-90"
                  : "border border-border-subtle text-text-primary hover:bg-surface-elevated"
              }`}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
