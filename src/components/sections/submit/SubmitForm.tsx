"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { submitProject } from "@/app/actions/projects";
import { createClient } from "@supabase/supabase-js";

const inputClass =
  "w-full bg-surface-container-high border border-border-subtle rounded-lg px-4 py-3 font-body text-[16px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors";

const categories = ["Web App", "Automation", "Architecture", "Mobile", "API", "DevOps"];

interface FormData {
  title: string;
  client: string;
  category: string;
  techStack: string;
  description: string;
  features: string;
  demoUrl: string;
  githubUrl: string;
}

async function uploadThumbnail(file: File): Promise<string | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url.startsWith("https://") || !key) return null;

  const supabase = createClient(url, key);
  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from("project-thumbnails")
    .upload(fileName, file, { cacheControl: "3600", upsert: false });

  if (error) {
    console.error("Upload error:", error);
    return null;
  }

  const { data } = supabase.storage.from("project-thumbnails").getPublicUrl(fileName);
  return data.publicUrl;
}

export default function SubmitForm({
  onUpdate,
}: {
  onUpdate?: (data: FormData) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormData>({
    title: "",
    client: "",
    category: "Web App",
    techStack: "",
    description: "",
    features: "• Real-time data sync\n• End-to-end encryption",
    demoUrl: "",
    githubUrl: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    onUpdate?.(updated);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFileName(file.name);
      setImageFile(file);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setImageFile(file);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    let thumbnailUrl: string | undefined;
    if (imageFile) {
      const url = await uploadThumbnail(imageFile);
      if (url) thumbnailUrl = url;
    }

    const result = await submitProject({ ...form, thumbnailUrl });
    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container-low rounded-xl border border-border-subtle p-8 flex flex-col items-center justify-center min-h-[400px] text-center space-y-4"
      >
        <span className="material-symbols-outlined text-6xl text-secondary">task_alt</span>
        <h3 className="font-display text-[28px] font-bold text-text-primary">Project Submitted!</h3>
        <p className="font-body text-[16px] text-text-secondary max-w-sm">
          Your project is queued for review. Once approved it will appear on the Projects page.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              title: "", client: "", category: "Web App",
              techStack: "", description: "",
              features: "• Real-time data sync\n• End-to-end encryption",
              demoUrl: "", githubUrl: "",
            });
            setFileName(null);
            setImageFile(null);
            setError(null);
          }}
          className="mt-4 border border-border-subtle text-text-primary px-6 py-2.5 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:bg-surface-elevated transition-colors"
        >
          Submit Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface-container-low rounded-xl border border-border-subtle p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Project Title <span className="text-primary-container">*</span>
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Neural Nexus Dashboard"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Client Name
            </label>
            <input
              name="client"
              value={form.client}
              onChange={handleChange}
              placeholder="Internal / Confidential"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={`${inputClass} appearance-none`}
            >
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <span className="absolute right-3 bottom-3.5 material-symbols-outlined text-text-secondary pointer-events-none text-base">
              expand_more
            </span>
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Tech Stack
            </label>
            <input
              name="techStack"
              value={form.techStack}
              onChange={handleChange}
              placeholder="React, Node.js, AWS (comma separated)"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
            Project Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Describe the surgical precision applied to this project..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
            Key Features (one per line)
          </label>
          <textarea
            name="features"
            value={form.features}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} resize-none font-mono text-[14px]`}
          />
        </div>

        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
            Thumbnail Upload
          </label>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-all duration-200 ${
              dragOver
                ? "border-primary/60 bg-primary/5"
                : "border-border-subtle hover:border-primary/40 hover:bg-surface-elevated"
            }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="material-symbols-outlined text-4xl text-primary-container block mb-3">
              cloud_upload
            </span>
            {fileName ? (
              <div className="space-y-1">
                <p className="font-mono text-[13px] text-secondary">{fileName}</p>
                <p className="font-mono text-[11px] text-text-secondary">Click to change</p>
              </div>
            ) : (
              <>
                <p className="font-body text-[15px] text-text-secondary">
                  Drag and drop project cover or{" "}
                  <span className="text-primary-container underline">browse</span>
                </p>
                <p className="font-mono text-[11px] text-text-secondary mt-1">
                  Recommended: 1200×800px PNG/JPG
                </p>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              Live Demo URL
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 material-symbols-outlined text-text-secondary text-base">link</span>
              <input
                name="demoUrl"
                value={form.demoUrl}
                onChange={handleChange}
                type="url"
                placeholder="https://..."
                className={`${inputClass} pl-9`}
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-text-secondary block mb-1.5">
              GitHub Repository
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 material-symbols-outlined text-text-secondary text-base">code</span>
              <input
                name="githubUrl"
                value={form.githubUrl}
                onChange={handleChange}
                type="url"
                placeholder="https://github.com/..."
                className={`${inputClass} pl-9`}
              />
            </div>
          </div>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-error/10 border border-error/30 text-error rounded-lg px-4 py-3"
          >
            <span className="material-symbols-outlined text-base">error</span>
            <p className="font-body text-[14px]">{error}</p>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-4 rounded-lg font-mono text-[12px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
              Submitting...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-base">send</span>
              Submit Project for Review
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}