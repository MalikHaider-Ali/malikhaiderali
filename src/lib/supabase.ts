import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const isConfigured =
  supabaseUrl.startsWith("https://") && supabaseAnonKey.length > 0;

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type Review = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  approved: boolean;
  created_at: string;
};