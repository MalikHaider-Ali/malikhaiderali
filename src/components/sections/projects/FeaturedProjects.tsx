import { getApprovedProjects } from "@/app/actions/projects";
import FeaturedProjectsClient from "./FeaturedProjectsClient";

export default async function FeaturedProjects() {
  const projects = await getApprovedProjects().catch(() => []);
  return <FeaturedProjectsClient projects={projects} />;
}