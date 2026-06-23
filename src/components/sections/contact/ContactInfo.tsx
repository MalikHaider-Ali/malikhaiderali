"use client";
import { motion } from "framer-motion";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const schedule: Record<string, boolean[]> = {
  S: [false, false, false, false],
  M: [true, true, true, true],
  T: [true, true, true, true],
  W: [true, true, true, true],
  TH: [true, true, true, false],
  F: [true, true, false, false],
  SA: [false, false, false, false],
};

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="space-y-6"
    >
      {/* Status */}
      <div className="bg-surface-container-low rounded-xl border border-border-subtle p-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">
            Available for New Projects
          </span>
        </div>

        <div className="space-y-5">
          {[
            { icon: "mail", label: "Email", value: "haider.malik1503@gmail.com" },
            { icon: "chat", label: "WhatsApp", value: "+92 315 0597853" },
            { icon: "location_on", label: "Location", value: "Global Remote / GMT+5" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-border-subtle flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl">{item.icon}</span>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-0.5">
                  {item.label}
                </p>
                <p className="font-body text-[15px] text-text-primary">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Uptime */}
      <div className="bg-surface-container-low rounded-xl border border-border-subtle p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-[18px] font-semibold text-text-primary">Weekly Uptime</h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
            System Operational
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {days.map((d) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <span className="font-mono text-[10px] text-text-secondary">{d}</span>
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className={`w-5 h-5 rounded-sm ${
                    d !== "S" ? "bg-secondary/70" : "bg-surface-container-high"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-mono text-[10px] text-text-secondary">Online Hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-surface-container-high border border-border-subtle" />
            <span className="font-mono text-[10px] text-text-secondary">Offline</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
