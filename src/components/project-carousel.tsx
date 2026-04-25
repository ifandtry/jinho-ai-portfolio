"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionDiv, reveal, stagger } from "./motion";
import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/projects";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function move(direction: "prev" | "next") {
    scrollerRef.current?.scrollBy({
      left: direction === "next" ? 360 : -360,
      behavior: "smooth",
    });
  }

  return (
    <MotionDiv variants={stagger} className="relative">
      <MotionDiv variants={reveal} className="mb-5 flex items-end justify-between gap-4 px-5 sm:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Selected Work</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            가로로 탐색하며 문제 정의, 실험, 자동화, 임팩트가 연결된 프로젝트를 확인하세요.
          </p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => move("prev")}
            className="grid size-11 place-items-center rounded-full border border-line bg-background/80 text-muted transition hover:border-foreground/20 hover:text-foreground"
            aria-label="이전 프로젝트"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => move("next")}
            className="grid size-11 place-items-center rounded-full bg-foreground text-background transition hover:scale-105"
            aria-label="다음 프로젝트"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </MotionDiv>
      <MotionDiv
        ref={scrollerRef}
        variants={reveal}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-14 pt-2 [scrollbar-width:none] sm:px-8"
      >
        {projects.map((project, index) => (
          <div key={project.slug} className="min-w-[275px] snap-center md:min-w-fit">
            <ProjectCard project={project} featured={index === 0} />
          </div>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
}
