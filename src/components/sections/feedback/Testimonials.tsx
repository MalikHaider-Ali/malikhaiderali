import { getApprovedReviews } from "@/app/actions/reviews";
import TestimonialsClient from "./TestimonialsClient";

export default async function Testimonials() {
  const reviews = await getApprovedReviews().catch(() => []);
  return <TestimonialsClient reviews={reviews} />;
}