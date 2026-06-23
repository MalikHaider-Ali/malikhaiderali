import Link from "next/link";

export default function Footer() {
  // Add your social media URLs here
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/MalikHaider-Ali" },
    { name: "LinkedIn", url: "https://linkedin.com/in/malikhaiderali-ai/" },
    { name: "Twitter", url: "https://x.com/haidermalik7844?s=11" },
    { name: "Email", url: "mailto:haider.malik1503@gmail.com" }
  ];

  return (
    <footer className="bg-surface-container-lowest w-full py-20 border-t border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1280px] mx-auto px-6">
        <div className="space-y-3 md:col-span-1">
          <span className="font-display text-2xl font-bold text-on-surface">Malik Haider Ali</span>
          <p className="font-body text-[14px] text-text-secondary">
            © 2024 Malik Haider Ali. Engineered with Surgical Precision.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold mb-1">
            Navigation
          </span>
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/services", label: "Services" },
            { href: "/stack", label: "Stack" },
            { href: "/about", label: "About" },
            { href: "/submit", label: "Submit Work" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[14px] text-text-secondary hover:text-on-surface hover:translate-x-1 transition-all duration-200 inline-block"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold mb-1">
            Connect
          </span>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[14px] text-text-secondary hover:text-on-surface hover:translate-x-1 transition-all duration-200 inline-block"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold mb-1">
            Legal
          </span>
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body text-[14px] text-text-secondary hover:text-on-surface hover:translate-x-1 transition-all duration-200 inline-block"
            >
              {item}
            </a>
          ))}
          <Link
            href="/testimonials"
            className="font-body text-[14px] text-text-secondary hover:text-on-surface hover:translate-x-1 transition-all duration-200 inline-block"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </footer>
  );
}