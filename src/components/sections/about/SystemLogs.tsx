"use client";
import { motion } from "framer-motion";

export default function SystemLogs() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md ml-auto bg-surface-container-low rounded-xl border border-border-subtle p-6"
      >
        <h3 className="font-mono text-[14px] uppercase tracking-widest text-primary mb-6">
          System Logs
        </h3>
        <div className="space-y-5">
          {[
            { icon: "local_cafe", label: "Fuel Level", value: "Karak Chai, 3-4 cups per sprint." },
            { icon: "bedtime", label: "Peak Activity", value: "Midnight - 4:00 AM Productivity Surge." },
            { icon: "menu_book", label: "Obsession", value: "Exploring new technologies for inovation & fun." },
          ].map((log) => (
            <div key={log.label} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-text-secondary text-xl mt-0.5">
                {log.icon}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-text-secondary mb-0.5">
                  {log.label}
                </p>
                <p className="font-body text-[14px] text-text-primary">{log.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
