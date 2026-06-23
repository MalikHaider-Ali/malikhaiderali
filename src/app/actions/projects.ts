"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url.startsWith("https://") || !key) return null;
  return createClient(url, key, {
    global: {
      fetch: (url, options) =>
        fetch(url, { ...options, cache: "no-store" }), // ✅ never cache
    },
  });
}

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  tech_stack: string;
  description: string;
  features: string;
  demo_url: string;
  github_url: string;
  thumbnail_url: string | null;
  approved: boolean;
  created_at: string;
};

export async function submitProject(formData: {
  title: string;
  client: string;
  category: string;
  techStack: string;
  description: string;
  features: string;
  demoUrl: string;
  githubUrl: string;
  thumbnailUrl?: string;
}) {
  if (!formData.title) {
    return { error: "Project title is required." };
  }

  const supabase = getClient();
  if (!supabase) {
    return { error: "Database not configured. Please add Supabase credentials." };
  }

  const { error } = await supabase.from("projects").insert([
    {
      title: formData.title.trim(),
      client: formData.client.trim() || "Confidential",
      category: formData.category,
      tech_stack: formData.techStack.trim(),
      description: formData.description.trim(),
      features: formData.features.trim(),
      demo_url: formData.demoUrl.trim(),
      github_url: formData.githubUrl.trim(),
      thumbnail_url: formData.thumbnailUrl ?? null,
      approved: true,
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return { error: "Failed to submit project. Please try again." };
  }

  revalidatePath("/projects");
  return { success: true };
}

export async function getApprovedProjects() {
  const supabase = getClient();
  if (!supabase) {
    console.log("❌ Supabase not configured");
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Supabase fetch error:", error);
    return [];
  }

  console.log("✅ Projects from Supabase:", data?.length);
  return (data ?? []) as Project[];
}