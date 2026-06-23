"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InitializeContact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const workDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const activeHours: Record<string, string[]> = {
    MON: ["09-11", "11-13", "13-15", "15-17"],
    TUE: ["09-11", "11-13", "13-15", "15-17"],
    WED: ["09-11", "11-13", "13-15", "15-17"],
    THU: ["09-11", "11-13", "13-15"],
    FRI: ["09-11", "11-13"],
    SAT: [],
    SUN: [],
  };

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Quick Contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h2 className="font-display text-[42px] font-bold text-secondary mb-3">
              Initialize Contact
            </h2>
            <p className="font-body text-[16px] text-text-secondary">
              Ready to automate your excellence? Fill out the brief below and I&apos;ll respond
              within 24 operational hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary block mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-2.5 font-body text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-2.5 font-body text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Subject", options: ["New Project", "Consultation", "Support"] },
                { label: "Service", options: ["AI Automation", "Full Stack Web Development", "SEO & Growth Strategy"] },
                { label: "Budget", options: ["15k-20k", "20k-25k", "25k+"] },
              ].map((sel) => (
                <div key={sel.label} className="relative">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary block mb-1.5">
                    {sel.label}
                  </label>
                  <select className="w-full bg-surface-container-high border border-border-subtle rounded-lg px-3 py-2.5 font-body text-[13px] text-text-secondary focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                    {sel.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-text-secondary block mb-1.5">
                Brief
              </label>
              <textarea
                rows={4}
                placeholder="Project requirements and objectives..."
                className="w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary px-6 py-3 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:bg-secondary/20 transition-colors active:scale-95">
              Transmit Brief
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </motion.div>

        {/* Right - Info & Schedule */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Contact details */}
          <div className="bg-surface-container-low rounded-xl border border-border-subtle p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">
                Active & Available
              </span>
            </div>
            <div className="space-y-4">
              {[
                { icon: "alternate_email", label: "Electronic Mail", value: "haider.malik1503@gmail.com" },
                { icon: "chat_bubble", label: "WhatsApp / Signal", value: "+92 315 059 7853" },
                { icon: "location_on", label: "Central Hub", value: "Islamabad, Pakistan (UTC+5)" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl">{c.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
                      {c.label}
                    </p>
                    <p className="font-body text-[14px] text-text-primary">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Schedule */}
          <div className="bg-surface-container-low rounded-xl border border-border-subtle p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-[18px] font-semibold text-text-primary">
                Operational Schedule
              </h3>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {workDays.map((d) => {
                const active = (activeHours[d] || []).length > 0;
                return (
                  <div key={d} className="flex flex-col items-center gap-1">
                    <span className="font-mono text-[9px] text-text-secondary">{d.slice(0, 3)}</span>
                    {[...Array(4)].map((_, j) => (
                      <div
                        key={j}
                        className={`w-full aspect-square rounded-sm ${
                          active && j < (activeHours[d] || []).length
                            ? "bg-secondary/70"
                            : "bg-surface-container-high border border-border-subtle"
                        }`}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-text-secondary">
                Current System Time:
              </span>
              <span className="font-mono text-[14px] text-text-primary">{time}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
