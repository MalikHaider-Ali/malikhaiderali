"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Full Stack Web Developer", "Automation Engineer", "Problem Solver"];

const terminalCode = `class Malik Haider Ali:
    def __init__(self):
        self.stack = {
            "frontend": ["React", "Tailwind", "Next.js"],
            "backend": ["Python", "Node.js", "PostgreSQL"],
            "automation": ["Selenium", "Docker", "CI/CD"]
        }
        self.status = "Available for hire"

    def solve_problem(self, complex_req):
        return self.architect_solution(complex_req)

    def architect_solution(self, req):
        # Surgical precision logic
        print("Initializing production build...")
        return "Clean, Scalable, Maintainable"

# Running Malik Haider Ali's profile...
> malik = MalikHaiderAli()
> malik.architect_solution("The Future")
"Clean, Scalable, Maintainable"
_`;

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx, words]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);
  const [termText, setTermText] = useState("");
  const termRef = useRef<HTMLPreElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < terminalCode.length) {
        setTermText((prev) => prev + terminalCode.charAt(indexRef.current));
        indexRef.current++;
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="max-w-[1280px] mx-auto px-6 min-h-[calc(100vh-72px)] flex items-center py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary font-mono text-[12px] uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Available for freelance
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-display text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-text-primary hover:coral-gradient-text transition-all duration-500 cursor-default">
              Malik Haider Ali
            </h1>
            <div className="h-10">
              <span className="font-display text-[24px] font-semibold text-primary typewriter-cursor">
                {role}
              </span>
            </div>
            <p className="font-body text-[18px] leading-[1.6] text-text-secondary max-w-xl">
              Specializing in architectural automation and full-stack ecosystems. I engineer
              surgical-grade digital solutions that bridge the gap between complex requirements and
              seamless execution.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-primary px-8 py-4 rounded-lg font-mono text-[12px] uppercase tracking-widest text-on-primary hover:bg-primary-container transition-colors duration-300 shadow-lg shadow-primary/10"
            >
              View My Work
            </a>
            <a
              href="/cv web dev.pdf"
              className="border border-border-subtle px-8 py-4 rounded-lg font-mono text-[12px] uppercase tracking-widest text-text-primary hover:bg-surface-elevated transition-colors duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-surface rounded-xl border border-border-subtle overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-surface-container-high px-4 py-3 flex items-center gap-2 border-b border-border-subtle">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-4 font-mono text-[11px] text-text-secondary uppercase tracking-widest">
                malik-haider-ali.sh — 80x24
              </span>
            </div>
            {/* Terminal Body */}
            <div
              ref={containerRef}
              className="p-6 font-mono text-[14px] terminal-scroll h-[320px] overflow-y-auto"
            >
              <pre ref={termRef} className="text-on-surface whitespace-pre-wrap">
                {termText}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
