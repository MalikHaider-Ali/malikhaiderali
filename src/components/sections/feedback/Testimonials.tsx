import { getApprovedReviews } from "@/app/actions/reviews";
import TestimonialsClient from "./TestimonialsClient";
import type { Review } from "@/lib/supabase";

const staticFallback: Review[] = [
  {
    id: "static-1",
    name: "Marcus Vane",
    role: "CTO, CloudScale AI",
    rating: 5,
    quote: "Ahmad's approach to automation is truly surgical. He identified bottlenecks we hadn't even considered. Our deployment pipeline speed increased by 40% in just two weeks.",
    approved: true,
    created_at: "",
  },
  {
    id: "static-2",
    name: "Elena Rodriguez",
    role: "Lead DevOps, Fintech Global",
    rating: 5,
    quote: "Rare to find an engineer who balances technical depth with such clean documentation. The custom scripts he developed are now the backbone of our CI/CD architecture.",
    approved: true,
    created_at: "",
  },
  {
    id: "static-3",
    name: "Julian Frost",
    role: "Founder, Nexus Labs",
    rating: 5,
    quote: "Precision is an understatement. Ahmad delivered the entire automation suite on time and under budget. His work is a masterclass in modern engineering efficiency.",
    approved: true,
    created_at: "",
  },
];

export default async function Testimonials() {
  // Always fetch fresh from Supabase
  const liveReviews = await getApprovedReviews().catch(() => []);

  // Live reviews on top, static below as padding
  const all = liveReviews.length > 0
    ? [...liveReviews, ...staticFallback]
    : staticFallback;

  return <TestimonialsClient reviews={all} />;
}