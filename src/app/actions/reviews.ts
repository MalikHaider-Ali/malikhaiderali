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

export async function submitReview(formData: {
  name: string;
  role: string;
  rating: number;
  quote: string;
}) {
  const { name, role, rating, quote } = formData;

  if (!name || !quote || rating < 1 || rating > 5) {
    return { error: "Please fill in all required fields and select a rating." };
  }

  const supabase = getClient();
  if (!supabase) {
    return { error: "Database not configured. Please contact the site owner." };
  }

  const { error } = await supabase.from("reviews").insert([
    {
      name: name.trim(),
      role: role.trim() || "Client",
      rating,
      quote: quote.trim(),
      approved: true, // ✅ auto approve
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return { error: "Failed to submit review. Please try again." };
  }

  revalidatePath("/feedback");
  return { success: true };
}

export async function getApprovedReviews() {
  const supabase = getClient();
  if (!supabase) {
    console.log("❌ Supabase not configured");
    return [];
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Supabase fetch error:", error);
    return [];
  }

  console.log("✅ Reviews from Supabase:", data?.length);
  return data ?? [];
}