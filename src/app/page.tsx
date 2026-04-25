import { ArrowDown, MousePointer2 } from "lucide-react";
import { Footer } from "@/components/footer";
import { HeroScene } from "@/components/hero-scene";
import { MotionDiv, MotionSection, reveal, stagger } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { capabilities, projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <section className="relative mx-auto min-h-[720px] max-w-7xl px-5 pb-16 pt-36 sm:px-8 lg:min-h-[760px] lg:pt-44">
          <HeroScene />
          <MotionDiv
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <MotionDiv variants={reveal} className="mb-8 flex items-center gap-3 text-sm text-muted">
              <span>AI</span>
              <span>·</span>
              <span>자동화</span>
              <span>·</span>
              <span>데이터</span>
            </MotionDiv>
            <MotionDiv variants={reveal}>
              <h1 className="text-balance text-5xl font-black leading-[1.08] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                문제를 정의하고,
                <br />
                <span className="text-accent">시스템</span>으로 해결합니다.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                AI와 자동화, 데이터 분석을 활용해 반복 업무를 운영 가능한 구조로 바꾸는
                AI Builder이자 Product Thinker, 이진호입니다.
              </p>
            </MotionDiv>
            <MotionDiv variants={reveal} className="mt-10 flex flex-wrap items-center gap-4">
              {capabilities.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-background/65 px-4 py-2 text-sm text-muted"
                >
                  <Icon size={15} className="text-accent" />
                  {label}
                </span>
              ))}
            </MotionDiv>
            <MotionDiv variants={reveal} className="mt-16 flex items-center gap-3 text-sm text-muted">
              <MousePointer2 size={17} />
              카드를 선택해 케이스 스터디를 탐색하세요
              <ArrowDown size={17} />
            </MotionDiv>
          </MotionDiv>
        </section>

        <MotionSection
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8"
        >
          <MotionDiv variants={reveal} className="mb-14">
            <SectionHeader
              eyebrow="Selected Work"
              title="운영의 반복을 줄이고, 의사결정 루프를 만든 프로젝트"
              description="각 프로젝트는 모호한 문제를 정의하고, 가설을 세우고, 실제 작동하는 시스템으로 전환한 과정에 집중합니다."
            />
          </MotionDiv>
          <MotionDiv variants={reveal} className="flex gap-6 overflow-x-auto pb-10 [scrollbar-width:none]">
            {projects.map((project, index) => (
              <div key={project.slug} className="min-w-[280px] md:min-w-fit">
                <ProjectCard project={project} featured={index === 0} />
              </div>
            ))}
          </MotionDiv>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
