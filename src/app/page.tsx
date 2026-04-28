import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCarousel } from "@/components/project-carousel";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col overflow-hidden">
      <Navbar />
      <main id="projects" className="relative h-[calc(100svh-41px)] overflow-hidden">
        <ProjectCarousel projects={projects} />
      </main>
      <Footer compact />
    </div>
  );
}
