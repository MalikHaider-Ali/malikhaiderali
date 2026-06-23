import { getApprovedProjects } from "@/app/actions/projects";
import FeaturedProjectsClient from "./FeaturedProjectsClient";
import type { Project } from "@/app/actions/projects";

const staticProjects: Project[] = [
  {
    id: "static-1",
    title: "Quantum Dashboard",
    description: "Real-time infrastructure monitoring with predictive failure analysis.",
    tech_stack: "NEXT.JS, GO",
    category: "Web App",
    client: "CloudScale AI",
    thumbnail_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTr-yqtWtiuRhWmE8o4yFgjtNhZypROC0imi1cFH4QFS0IqGluVDMbHYvv0wBVtoRe3NgozitYbTqw8Dnknq20_DGXDj3LATI5DvC-0FjwXHQBJHNgDlf1_g3-f-9ydP-mLlRL1SNDmJQLH40BYqIRiM56zRfTR1GGpmQRy4YArtOS4nhZkPZBOhWyZWMhEUAKEMNvybCE16hhY9MXI6wZZc33NJJx0f3ujy8qizuueEoXDwULT2actUcbe1eo0jUbUrJjnBzyc2CB",
    demo_url: "", github_url: "", features: "", approved: true, created_at: "",
  },
  {
    id: "static-2",
    title: "Nexus Engine",
    description: "High-throughput data synchronization protocol for distributed systems.",
    tech_stack: "RUST, NATS",
    category: "Architecture",
    client: "Nexus Labs",
    thumbnail_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkgxEkGhhoYEKA9J65ypuvHHMpKpXjYqTf7GNJUQ6Pv6n3JFT4WwpBbrq6wM8M7kyvUZ4G6fXnd3HIVzwvFedQSlwpUQNXQC32QYvXTh2f9lUobBsby-y-22VUi0Pvn2DQXMbjuzvamo7RS1jmaOIyRrOtqrA21qbbyaRZENCWOc_Xe2rNMP4BSyvc2_7QG5kv-Zc-1D5BQyJ032YUZPYhbWlCk0D3pj2cpsbBii8Rp_ZeU67i38HRrDwoEaX6VE5CeA_gHYZn7a8x",
    demo_url: "", github_url: "", features: "", approved: true, created_at: "",
  },
  {
    id: "static-3",
    title: "Pipeline Orchestrator",
    description: "CI/CD pipeline orchestration at enterprise scale.",
    tech_stack: "PYTHON, DOCKER",
    category: "Automation",
    client: "Fintech Global",
    thumbnail_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTr-yqtWtiuRhWmE8o4yFgjtNhZypROC0imi1cFH4QFS0IqGluVDMbHYvv0wBVtoRe3NgozitYbTqw8Dnknq20_DGXDj3LATI5DvC-0FjwXHQBJHNgDlf1_g3-f-9ydP-mLlRL1SNDmJQLH40BYqIRiM56zRfTR1GGpmQRy4YArtOS4nhZkPZBOhWyZWMhEUAKEMNvybCE16hhY9MXI6wZZc33NJJx0f3ujy8qizuueEoXDwULT2actUcbe1eo0jUbUrJjnBzyc2CB",
    demo_url: "", github_url: "", features: "", approved: true, created_at: "",
  },
];

export default async function FeaturedProjects() {
  // Always fetch fresh from Supabase
  const liveProjects = await getApprovedProjects().catch(() => []);

  // Show live projects on top, static ones below as padding
  // If Supabase has data, show live + static
  // If Supabase empty (not configured), show static only
  const all = liveProjects.length > 0
    ? [...liveProjects, ...staticProjects]
    : staticProjects;

  return <FeaturedProjectsClient projects={all} />;
}