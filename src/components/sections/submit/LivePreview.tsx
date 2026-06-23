"use client";
import { motion } from "framer-motion";

export default function LivePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="space-y-6"
    >
      {/* Live Preview Card */}
      <div className="bg-surface-container-low rounded-xl border border-border-subtle overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
              {/* Live Preview */}
            </span>
          </div>
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
          </div>
        </div>

        {/* Preview Image */}
        <div className="relative h-52 bg-surface-container-high flex items-center justify-center border-b border-border-subtle overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container-lowest opacity-80" />
          <div className="relative z-10 text-center space-y-2">
            <span className="material-symbols-outlined text-5xl text-text-secondary">image</span>
            <p className="font-mono text-[11px] text-text-secondary uppercase tracking-widest">
              Preview Render
            </p>
          </div>
        </div>

        {/* Preview Meta */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="bg-secondary/20 text-secondary text-[10px] font-mono px-3 py-1 rounded border border-secondary/30">
              WEB APP
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
              Client Name
            </span>
          </div>
          <h3 className="font-display text-[22px] font-semibold text-text-primary">
            Project Title
          </h3>
          <p className="font-body text-[14px] text-text-secondary">
            Enter project details to see a surgical preview of how your work will be showcased in
            the main grid.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Tech_Stack_01", "Tech_Stack_02"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-container-high text-[11px] font-mono text-text-secondary border border-border-subtle rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-text-secondary text-xl cursor-pointer hover:text-primary transition-colors">
                open_in_new
              </span>
              <span className="material-symbols-outlined text-text-secondary text-xl cursor-pointer hover:text-secondary transition-colors">
                image
              </span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              View Case Study
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>

      {/* Submission Protocol */}
      <div className="bg-surface-container-low rounded-xl border border-border-subtle p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-secondary text-base">info</span>
          <h3 className="font-mono text-[12px] uppercase tracking-widest text-secondary">
            Submission Protocol
          </h3>
        </div>
        <ul className="space-y-2">
          {[
            "Images must be optimized for retina displays.",
            "Descriptions should highlight technical challenges.",
            "Projects are reviewed within 24–48 hours.",
          ].map((rule) => (
            <li key={rule} className="flex items-start gap-2 font-body text-[14px] text-text-secondary">
              <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0 mt-2" />
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
