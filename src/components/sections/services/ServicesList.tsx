"use client";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: "layers",
    title: "Full Stack Development",
    color: "text-primary",
    description:
      "End-to-end product engineering from database schema to pixel-perfect UI. I architect, build, and ship — with clean handoff docs and maintainable codebases.",
    deliverables: ["System Architecture Blueprint", "REST/GraphQL APIs", "React/Next.js Frontend", "PostgreSQL/MongoDB Schema", "Deployment Pipeline"],
  },
  {
    num: "02",
    icon: "brush",
    title: "Frontend Engineering",
    color: "text-secondary",
    description:
      "React & Next.js specialist with a focus on performance, animation, and component system design. I build UIs that feel as good as they look.",
    deliverables: ["Component Library", "Framer Motion Animations", "Responsive Layouts", "Accessibility Audit", "Design Token System"],
  },
  {
    num: "03",
    icon: "storage",
    title: "Backend Architecture",
    color: "text-tertiary",
    description:
      "Scalable, fault-tolerant backend systems using Node.js, Python, Go, and cloud-native patterns. Built for uptime, not for demos.",
    deliverables: ["Microservices Architecture", "Auth & Security Layer", "Database Optimization", "Cloud Infrastructure (AWS/GCP)", "API Documentation"],
  },
  {
    num: "04",
    icon: "smart_toy",
    title: "Custom Automation",
    color: "text-primary",
    description:
      "Automate repetitive processes, QA pipelines, and data workflows with precision scripts, Selenium/Playwright suites, and n8n/Zapier integrations.",
    deliverables: ["E2E Test Suite", "CI/CD Pipeline", "Web Scraping Systems", "Workflow Automation", "Monitoring & Alerts"],
  },
  {
    num: "05",
    icon: "lightbulb",
    title: "SEO & Growth Strategy",
    color: "text-secondary",
    description:
      "Comprehensive search engine optimization services to improve visibility, drive organic traffic, and increase conversions. Ideal for businesses looking to establish a strong online presence and dominate search results.",
    deliverables: ["Technical SEO Audit", "Keyword Strategy", "On-Page Optimization", "Content Strategy", "Off-Page SEO", "Local SEO", "Analytics & Reporting", "90-Day Action Plan"],
  },
];

export default function ServicesList() {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="space-y-6">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group bg-surface-container-low rounded-xl border border-border-subtle hover:border-primary/40 transition-all duration-300 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left */}
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-text-secondary mt-1">{s.num}</span>
                <div>
                  <span className={`material-symbols-outlined text-3xl ${s.color} block mb-2`}>{s.icon}</span>
                  <h3 className="font-display text-[22px] font-semibold text-text-primary">{s.title}</h3>
                </div>
              </div>
              {/* Middle */}
              <div className="md:col-span-1">
                <p className="font-body text-[16px] text-text-secondary leading-relaxed">{s.description}</p>
              </div>
              {/* Right */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-text-secondary mb-3">Deliverables</p>
                <ul className="space-y-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 font-body text-[14px] text-text-secondary">
                      <span className={`w-1 h-1 rounded-full ${s.color} bg-current flex-shrink-0`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
