"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { target: 20, label: "Projects Completed", color: "text-primary" },
  { target: 5, label: "Global Clients", color: "text-secondary" },
  { target: 12, label: "Tech Mastered", color: "text-tertiary" },
  { target: 2, label: "Years Experience", color: "text-primary-fixed-dim" },
];

function CountUp({ target, color }: { target: number; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className={`font-display text-[48px] font-bold ${color}`}>
      {count}+
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-surface-container-lowest border-y border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start"
            >
              <CountUp target={stat.target} color={stat.color} />
              <span className="font-mono text-[12px] uppercase tracking-widest text-text-secondary mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
