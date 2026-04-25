import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function NextProjectStrip({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-8 rounded-[1.75rem] bg-ink p-8 text-white transition hover:-translate-y-1 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="mb-5 text-sm text-white/45">다음 프로젝트</p>
        <p className="text-4xl font-bold tracking-tight">{project.title}</p>
        <p className="mt-4 max-w-2xl text-white/58">{project.subtitle}</p>
      </div>
      <span className="flex items-center gap-3 text-sm font-semibold text-white/75">
        보기 <ArrowRight className="transition group-hover:translate-x-1" size={18} />
      </span>
    </Link>
  );
}
