"use client";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "web",
    title: "Frontend",
    color: "text-primary",
    borderColor: "border-primary/20",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Next.js", "Framer Motion", "Redux", "Vite", "Lenis", "GitHub", "Vercel"],
  },
  {
    icon: "dns",
    title: "Backend",
    color: "text-secondary",
    borderColor: "border-secondary/20",
    tags: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    icon: "robot_2",
    title: "Automation",
    color: "text-tertiary",
    borderColor: "border-tertiary/20",
    tags: ["n8n", "Zapier", "ngrok", "GitHub Actions"],
  },
  {
    icon: "search",
    title: "SEO",
    color: "text-quaternary",
    borderColor: "border-quaternary/20",
    tags: ["Google Search Console", "Google Analytics", "Meta Tags", "Schema Markup"],
  },
];

export default function StackCategories() {
  return (
    <section id="stack" className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface-container-low p-8 rounded-xl border border-border-subtle hover:border-primary/40 transition-all duration-300"
          >
            <span className={`material-symbols-outlined text-3xl ${cat.color} mb-4 block`}>
              {cat.icon}
            </span>
            <h3 className="font-display text-[22px] font-semibold text-text-primary mb-5">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 bg-surface-elevated text-[12px] font-mono ${cat.color} border ${cat.borderColor} rounded`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
