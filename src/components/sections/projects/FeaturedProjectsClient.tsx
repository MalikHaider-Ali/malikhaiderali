"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/app/actions/projects";

const filters = ["All", "Web App", "Automation", "Architecture", "Mobile", "API", "DevOps"];

const fallbackImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCTr-yqtWtiuRhWmE8o4yFgjtNhZypROC0imi1cFH4QFS0IqGluVDMbHYvv0wBVtoRe3NgozitYbTqw8Dnknq20_DGXDj3LATI5DvC-0FjwXHQBJHNgDlf1_g3-f-9ydP-mLlRL1SNDmJQLH40BYqIRiM56zRfTR1GGpmQRy4YArtOS4nhZkPZBOhWyZWMhEUAKEMNvybCE16hhY9MXI6wZZc33NJJx0f3ujy8qizuueEoXDwULT2actUcbe1eo0jUbUrJjnBzyc2CB";

export default function FeaturedProjectsClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const availableFilters = filters.filter(
    (f) => f === "All" || projects.some((p) => p.category === f)
  );

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-display text-[36px] font-bold text-text-primary mb-1">
            Featured Projects
          </h2>
          <p className="font-body text-[16px] text-text-secondary">
            A curated selection of industrial-grade software solutions.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {availableFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full font-mono text-[12px] uppercase tracking-widest transition-all duration-200 border ${
                active === f
                  ? "bg-primary-container text-on-primary-container border-primary-container"
                  : "border-border-subtle text-text-secondary hover:border-primary/50 hover:text-text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-text-secondary font-mono text-[13px] uppercase tracking-widest">
          No projects in this category yet.
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((p, i) => {
            const tags = p.tech_stack
              ? p.tech_stack.split(",").map((t) => t.trim().toUpperCase()).filter(Boolean)
              : [];

            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.05 }}
                className="group relative rounded-xl overflow-hidden border border-border-subtle hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 bg-surface-container-high"
                  style={{
                    backgroundImage: `url('${p.thumbnail_url || fallbackImage}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary-container/20 text-primary-container text-[10px] font-mono rounded border border-primary-container/30">
                      {p.category}
                    </span>
                    {tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-secondary/20 text-secondary text-[10px] font-mono rounded border border-secondary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-text-primary mb-1">
                    {p.title}
                  </h3>
                  <p className="font-body text-[14px] text-text-secondary line-clamp-2">
                    {p.description}
                  </p>
                  {(p.demo_url || p.github_url) && (
                    <div className="flex gap-3 mt-3">
                      {p.demo_url && (
                        <a
                          href={p.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 font-mono text-[11px] text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                        >
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                          Demo
                        </a>
                      )}
                      {p.github_url && (
                        <a
                          href={p.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 font-mono text-[11px] text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                        >
                          <span className="material-symbols-outlined text-sm">code</span>
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}