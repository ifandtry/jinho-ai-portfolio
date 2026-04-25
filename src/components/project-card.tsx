"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BellRing,
  Bot,
  ChartNoAxesCombined,
  DatabaseZap,
  PanelsTopLeft,
  Route,
} from "lucide-react";
import { MotionDiv } from "./motion";
import type { Project } from "@/lib/projects";

const iconMap = {
  activity: Activity,
  panels: PanelsTopLeft,
  bell: BellRing,
  database: DatabaseZap,
  bot: Bot,
  route: Route,
  chart: ChartNoAxesCombined,
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Activity;

  return (
    <Link className="card-perspective block h-full" href={`/projects/${project.slug}`}>
      <MotionDiv
        whileHover={{
          y: -12,
          rotateX: featured ? 4 : 3,
          rotateY: featured ? -5 : -3,
          scale: featured ? 1.03 : 1.02,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`premium-shadow group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink p-7 text-white ${
          featured ? "md:min-h-[520px] md:w-[360px]" : "md:w-[280px]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,oklch(0.57_0.16_262_/_0.26),transparent_18rem)]" />
        <div className="relative flex items-start justify-between">
          <span className="font-mono text-lg text-white/50">{project.index}</span>
          <span className="grid size-10 place-items-center rounded-full bg-white/8 text-white/80">
            <Icon size={18} />
          </span>
        </div>
        <div className="relative mt-10">
          <p className="mb-4 text-sm text-white/48">{project.category}</p>
          <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-white/62">{project.subtitle}</p>
        </div>
        <div className="relative mt-auto">
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="mb-4 flex items-center justify-between text-xs text-white/45">
              <span>Impact</span>
              <ArrowUpRight size={15} />
            </div>
            <p className="text-2xl font-semibold text-white">{project.impact}</p>
          </div>
          <div className="h-20 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,oklch(0.34_0.11_262_/_0.45),oklch(0.16_0.02_255_/_0.35))] p-4">
            <div className="flex h-full items-end gap-1">
              {[34, 56, 42, 68, 48, 76, 61, 86].map((height, index) => (
                <span
                  key={index}
                  className="w-full rounded-full bg-accent/80"
                  style={{ height: `${height}%`, opacity: 0.35 + index * 0.06 }}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}
