"use client";

import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionDiv, reveal, stagger } from "./motion";
import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/projects";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.45 });
  const cameraX = pointer.x - 0.5;
  const cameraY = pointer.y - 0.5;
  const sceneFocus = activeIndex ?? pointer.x * Math.max(projects.length - 1, 1);
  const sceneStyle = {
    perspectiveOrigin: `${50 + cameraX * 24}% ${40 + cameraY * 10}%`,
  } as CSSProperties;
  const railStyle = {
    transformStyle: "preserve-3d",
  } as CSSProperties;

  function move(direction: "prev" | "next") {
    scrollerRef.current?.scrollBy({
      left: direction === "next" ? 190 : -190,
      behavior: "smooth",
    });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = trackRef.current?.getBoundingClientRect();

    if (!rect || event.clientX < rect.left || event.clientX > rect.right) {
      return;
    }

    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const rootRect = event.currentTarget.getBoundingClientRect();
    const y = Math.min(Math.max((event.clientY - rootRect.top) / rootRect.height, 0), 1);

    setPointer({ x, y });
  }

  return (
    <MotionDiv
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative h-full w-full overflow-hidden"
      onPointerLeave={() => {
        setActiveIndex(null);
        setPointer({ x: 0.5, y: 0.45 });
      }}
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,oklch(0.78_0.09_250_/_0.18),transparent_34%),linear-gradient(180deg,transparent_0%,oklch(0.93_0.012_255_/_0.48)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/72 to-transparent" />

      <MotionDiv
        variants={reveal}
        className="relative z-30 mx-auto w-full max-w-[1400px] px-6 pt-[4.15rem] sm:px-10"
      >
        <div className="max-w-6xl">
          <div className="mb-3 flex items-center gap-3 text-sm text-muted">
            <span>AI</span>
            <span>·</span>
            <span>자동화</span>
            <span>·</span>
            <span>데이터</span>
          </div>
          <h1 className="text-balance text-2xl font-black leading-[1.08] tracking-tight text-foreground sm:text-[2.05rem] lg:text-[2.65rem]">
            문제를 정의하고,
            <br />
            가설을 검증해 <span className="text-accent">시스템</span>으로 해결합니다.
          </h1>
          <p className="mt-3 max-w-5xl text-base leading-6 text-muted sm:text-[1.05rem] sm:leading-7">
            AI, 자동화, 데이터 분석을 활용해 고객의 문제와 운영의 비효율을 해결하는
            AI Builder이자 Product Manager, 이진호입니다.
          </p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Selected Work</p>
              <p className="mt-1 max-w-xl text-sm leading-5 text-muted">
                프로젝트 카드 위로 마우스를 올려보세요.
              </p>
            </div>
            <div className="pointer-events-auto hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => move("prev")}
                className="grid size-9 place-items-center rounded-full border border-line bg-background/80 text-muted transition hover:border-foreground/20 hover:text-foreground"
                aria-label="이전 프로젝트"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => move("next")}
                className="grid size-9 place-items-center rounded-full bg-foreground text-background transition hover:scale-105"
                aria-label="다음 프로젝트"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv
        variants={reveal}
        className="absolute inset-0 z-40 overflow-visible"
      >
        <div className="pointer-events-none absolute inset-x-6 bottom-7 h-24 rounded-[50%] bg-[radial-gradient(ellipse_at_center,oklch(0.49_0.08_255_/_0.22),transparent_68%)] blur-xl" />
        <div className="relative h-full overflow-visible [perspective:1400px]" style={sceneStyle}>
          <div
            ref={scrollerRef}
            className="absolute inset-0 overflow-x-auto overflow-y-visible pb-16 pt-[23rem] [scrollbar-width:none] sm:pb-20 sm:pt-[22.5rem]"
          >
            <div
              ref={trackRef}
              className="mx-auto flex h-full w-full max-w-[1400px] snap-x snap-mandatory items-start overflow-visible px-6 transition-transform duration-300 ease-out sm:px-10"
              style={railStyle}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  cameraX={cameraX}
                  index={index}
                  key={project.slug}
                  onActiveChange={setActiveIndex}
                  project={project}
                  sceneFocus={sceneFocus}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
