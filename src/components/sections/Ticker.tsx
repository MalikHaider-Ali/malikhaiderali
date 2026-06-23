"use client";

const tickerItems = [
  "Currently Learning: Rust Web Frameworks",
  "Currently Learning: Generative AI Agents",
  "Currently Learning: Advanced Kubernetes",
  "Currently Learning: WebAssembly",
  "Currently Learning: Edge Computing",
];

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems]; // duplicate for seamless loop

  return (
    <div className="border-y border-border-subtle bg-surface-container-lowest py-4 overflow-hidden">
      <div className="ticker-track flex gap-8 whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[12px] uppercase tracking-widest text-text-secondary flex items-center gap-3"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
