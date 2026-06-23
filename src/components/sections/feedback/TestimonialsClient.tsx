"use client";
import { motion } from "framer-motion";
import type { Review } from "@/lib/supabase";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-base ${
            i < count ? "text-[#FFBD2E]" : "text-text-secondary"
          }`}
          style={{ fontVariationSettings: i < count ? "'FILL' 1" : "'FILL' 0" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function TestimonialsClient({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="text-center py-16 text-text-secondary font-mono text-[13px] uppercase tracking-widest">
          No reviews yet — be the first to share your experience.
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.08 }}
            className="bg-surface-container-low p-6 rounded-xl border border-border-subtle hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[13px] font-bold text-primary">
                  {getInitials(t.name)}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-display text-[15px] font-semibold text-text-primary truncate">
                  {t.name}
                </p>
                <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest truncate">
                  {t.role}
                </p>
              </div>
            </div>

            <Stars count={t.rating} />

            <p className="font-body text-[14px] text-text-secondary leading-relaxed mt-4 italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>

            {t.created_at && (
              <p className="font-mono text-[10px] text-text-secondary/50 mt-4 pt-4 border-t border-border-subtle">
                {new Date(t.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}