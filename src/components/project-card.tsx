"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
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

const barHeights = [38, 64, 48, 76, 54, 86, 68];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ProjectCard({
  cameraX = 0,
  index = 0,
  onActiveChange,
  project,
  sceneFocus = index,
}: {
  cameraX?: number;
  index?: number;
  onActiveChange?: (index: number | null) => void;
  project: Project;
  sceneFocus?: number;
}) {
  const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Activity;
  const [isActive, setIsActive] = useState(false);
  const [light, setLight] = useState({ x: 50, y: 24 });
  const distance = index - sceneFocus;
  const boundedDistance = clamp(distance, -4, 4);
  const proximity = 1 - Math.min(Math.abs(distance), 1);
  const depth = isActive ? 320 : 12 + proximity * 142 - Math.abs(boundedDistance) * 28;
  const yaw = isActive ? cameraX * 7 : clamp(cameraX * 30 - boundedDistance * 7.2, -30, 30);
  const pitch = isActive ? cameraX * -1.5 : cameraX * -4;
  const lift = isActive ? -50 : -proximity * 38;
  const cardScale = isActive ? 1.06 : 1 + proximity * 0.045;
  const cardTransform = `translate3d(0, ${lift}px, ${depth}px) rotateX(${pitch}deg) rotateY(${yaw}deg) scale(${cardScale})`;

  function activate() {
    setIsActive(true);
    onActiveChange?.(index);
  }

  function deactivate() {
    setIsActive(false);
    onActiveChange?.(null);
  }

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setLight({ x: clamp(x, 0, 100), y: clamp(y, 0, 100) });
    activate();
  }

  return (
    <Link
      className={`card-perspective relative block w-[160px] shrink-0 snap-center -ml-[1.65rem] outline-none transition-[z-index] duration-300 first:ml-0 sm:w-[188px] lg:w-[206px] ${
        isActive ? "z-50" : ""
      }`}
      href={`/projects/${project.slug}`}
      onBlur={deactivate}
      onFocus={activate}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onPointerEnter={activate}
      onPointerMove={handlePointerMove}
      style={{ zIndex: isActive ? 100 : Math.round(20 + proximity * 25) + index }}
    >
      <MotionDiv
        className={`premium-shadow relative flex h-[282px] origin-bottom-left flex-col overflow-hidden rounded-[1.05rem] bg-ink text-white transition-[width,border-color,box-shadow,filter,transform] duration-[760ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] sm:h-[292px] ${
          isActive
            ? "w-[252px] border border-accent/60 shadow-[0_54px_130px_oklch(0.25_0.13_262_/_0.48)] [filter:saturate(1.14)_contrast(1.03)] sm:w-[264px]"
            : "w-full border border-white/10 shadow-[0_24px_75px_oklch(0.16_0.02_255_/_0.16)]"
        }`}
        style={{ transform: cardTransform } as CSSProperties}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.245_0.07_255),oklch(0.17_0.035_255)_48%,oklch(0.12_0.03_262))]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(oklch(1_0_0_/_0.055)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0_/_0.055)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle at ${light.x}% ${light.y}%, oklch(0.82 0.09 250 / 0.34), transparent 31%), radial-gradient(circle at ${light.x}% ${light.y}%, oklch(1 0 0 / 0.18), transparent 16%)`,
          }}
        />
        <div
          className={`pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-300 ${
            isActive ? "opacity-80" : "opacity-0"
          }`}
          style={{
            background: `linear-gradient(${115 + (light.x - 50) * 0.5}deg, transparent 8%, oklch(1 0 0 / 0.18) 38%, transparent 66%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
        <div className={`absolute -right-10 top-5 size-24 rounded-full bg-accent/18 blur-2xl transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-65"}`} />

        <div className="relative z-10 flex items-start justify-between px-3.5 pt-3.5">
          <div>
            <p className="font-mono text-sm text-white/48">{project.index}</p>
            <p className={`mt-1 text-[0.58rem] uppercase tracking-[0.15em] transition-colors duration-500 ${isActive ? "text-accent/78" : "text-accent/0"}`}>
              Project Mockup
            </p>
          </div>
          <span className={`grid size-8 place-items-center rounded-full border border-white/10 bg-white/10 text-white/78 shadow-[0_0_26px_oklch(0.56_0.18_262_/_0.22)] transition-transform duration-500 ${isActive ? "scale-110" : ""}`}>
            <Icon size={16} />
          </span>
        </div>

        <ProjectMockup isActive={isActive} project={project} />

        <div className="relative z-10 mt-2 px-3.5">
          <p className={`line-clamp-1 text-[0.7rem] transition-colors duration-500 ${isActive ? "text-white/58" : "text-white/42"}`}>
            {project.category}
          </p>
          <h3 className={`mt-1 text-[1rem] font-bold leading-tight tracking-tight ${isActive ? "line-clamp-2" : "line-clamp-3"}`}>
            {project.title}
          </h3>
          <p className={`mt-1.5 line-clamp-1 text-xs leading-5 transition-colors duration-500 ${isActive ? "text-white/60" : "text-white/0"}`}>
            {project.subtitle}
          </p>
        </div>

        <div className="relative z-10 mt-2 p-3.5 pt-0">
          <div
            className={`rounded-xl border border-white/10 bg-white/[0.07] p-2 shadow-[0_1px_0_oklch(1_0_0_/_0.1)_inset] backdrop-blur transition-all duration-500 ${
              isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="mb-1 flex items-center justify-between text-xs text-white/45">
              <span>Impact</span>
              <ArrowUpRight size={15} />
            </div>
            <p className="truncate text-base font-semibold leading-tight text-white">{project.impact}</p>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}

function ProjectMockup({ isActive, project }: { isActive: boolean; project: Project }) {
  return (
    <div
      className={`relative z-10 mx-3.5 mt-2 overflow-hidden rounded-xl border bg-white/[0.045] shadow-[0_1px_0_oklch(1_0_0_/_0.08)_inset] transition-all duration-500 ${
        isActive ? "border-accent/28" : "border-white/10"
      }`}
    >
      <div className="flex h-5 items-center gap-1.5 border-b border-white/10 px-2">
        <span className="size-1.5 rounded-full bg-white/20" />
        <span className="size-1.5 rounded-full bg-white/16" />
        <span className="size-1.5 rounded-full bg-accent/75" />
      </div>
      <div className="relative h-[5.35rem] overflow-hidden sm:h-[5.75rem]">
        <div className="absolute inset-0 [background-image:linear-gradient(90deg,oklch(0.77_0.13_262_/_0.13)_1px,transparent_1px),linear-gradient(oklch(0.77_0.13_262_/_0.1)_1px,transparent_1px)] [background-size:18px_18px]" />
        <MockupContent project={project} />
      </div>
    </div>
  );
}

function MockupContent({ project }: { project: Project }) {
  switch (project.slug) {
    case "price-feedback-loop":
      return (
        <>
          <div className="absolute left-3 top-3 grid grid-cols-5 gap-1.5">
            {Array.from({ length: 15 }).map((_, index) => (
              <span
                key={index}
                className={`h-3.5 w-4 rounded-[0.28rem] ${
                  index % 4 === 0 ? "bg-accent/75" : index % 3 === 0 ? "bg-emerald-400/45" : "bg-white/12"
                }`}
              />
            ))}
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-8 rounded-lg border border-white/10 bg-white/[0.07] px-2 py-1">
            <div className="h-1.5 w-16 rounded-full bg-white/18" />
            <div className="mt-2 h-1.5 w-24 rounded-full bg-accent/70" />
          </div>
        </>
      );
    case "streamlit-launcher":
      return (
        <>
          <div className="absolute inset-y-3 left-3 w-8 rounded-lg bg-white/[0.08]" />
          <div className="absolute left-14 right-3 top-3 grid grid-cols-2 gap-2">
            <span className="h-8 rounded-lg bg-accent/35" />
            <span className="h-8 rounded-lg bg-white/12" />
            <span className="h-8 rounded-lg bg-white/12" />
            <span className="h-8 rounded-lg bg-accent/25" />
          </div>
          <div className="absolute bottom-3 left-14 right-3 h-3 rounded-full bg-white/12">
            <span className="block h-full w-2/3 rounded-full bg-accent/70" />
          </div>
        </>
      );
    case "slack-alert-system":
      return (
        <>
          <div className="absolute left-3 right-3 top-3 space-y-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-2 py-1.5">
                <span className={`size-2 rounded-full ${item === 0 ? "bg-accent" : "bg-emerald-400/60"}`} />
                <span className="h-1.5 flex-1 rounded-full bg-white/16" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border border-accent/35 bg-accent/20">
            <BellRing size={16} className="text-white/80" />
          </div>
        </>
      );
    case "ai-sql-workflow":
      return (
        <>
          <div className="absolute left-3 top-3 h-14 w-[58%] rounded-lg border border-white/10 bg-white/[0.06] p-2">
            <span className="block h-1.5 w-14 rounded-full bg-accent/65" />
            <span className="mt-2 block h-1.5 w-20 rounded-full bg-white/16" />
            <span className="mt-2 block h-1.5 w-16 rounded-full bg-white/12" />
          </div>
          <div className="absolute bottom-3 right-3 grid gap-1.5">
            {[0, 1, 2].map((item) => (
              <span key={item} className="h-3 w-12 rounded-full border border-white/10 bg-white/[0.08]" />
            ))}
          </div>
          <div className="absolute bottom-4 left-5 h-px w-24 bg-accent/60" />
        </>
      );
    case "keywordmoney":
      return (
        <>
          <div className="absolute left-3 top-3 grid grid-cols-2 gap-2">
            <span className="h-10 w-14 rounded-lg bg-accent/28" />
            <span className="h-10 w-14 rounded-lg bg-white/12" />
            <span className="h-10 w-14 rounded-lg bg-white/12" />
            <span className="h-10 w-14 rounded-lg bg-accent/38" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-full bg-white/[0.08] p-1.5">
            <Bot size={14} className="text-accent/85" />
            <span className="h-1.5 flex-1 rounded-full bg-white/16" />
          </div>
        </>
      );
    case "onboarding-funnel":
      return (
        <>
          <div className="absolute left-4 top-3 flex h-20 flex-col justify-between">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className="grid size-5 place-items-center rounded-full border border-accent/35 bg-accent/18 text-[0.55rem] text-white/70">
                {item + 1}
              </span>
            ))}
          </div>
          <div className="absolute left-14 right-3 top-5 space-y-3">
            <span className="block h-2 w-full rounded-full bg-white/14" />
            <span className="block h-2 w-4/5 rounded-full bg-white/14" />
            <span className="block h-2 w-3/5 rounded-full bg-accent/60" />
          </div>
        </>
      );
    default:
      return (
        <>
          <div className="absolute left-3 right-3 top-3 flex h-12 items-end gap-1.5">
            {barHeights.map((height, index) => (
              <span
                key={`${project.slug}-${height}-${index}`}
                className="w-full rounded-full bg-accent/70 shadow-[0_0_12px_oklch(0.56_0.18_262_/_0.45)]"
                style={{ height: `${height}%`, opacity: 0.42 + index * 0.065 }}
              />
            ))}
          </div>
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
            <span className="h-7 rounded-lg bg-white/10" />
            <span className="h-7 rounded-lg bg-accent/25" />
            <span className="h-7 rounded-lg bg-white/10" />
          </div>
        </>
      );
  }
}
