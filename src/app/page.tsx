import { MousePointer2 } from "lucide-react";
import { Footer } from "@/components/footer";
import { HeroScene } from "@/components/hero-scene";
import { MotionDiv, reveal, stagger } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { ProjectCarousel } from "@/components/project-carousel";
import { capabilities, projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <section
          id="projects"
          className="relative min-h-screen overflow-hidden pb-8 pt-28 sm:pt-32 lg:pb-0"
        >
          <HeroScene />
          <MotionDiv
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_0.18fr]"
          >
            <MotionDiv variants={reveal} className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3 text-sm text-muted">
                <span>AI</span>
                <span>·</span>
                <span>자동화</span>
                <span>·</span>
                <span>데이터</span>
              </div>
              <h1 className="text-balance text-5xl font-black leading-[1.08] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                문제를 정의하고,
                <br />
                <span className="text-accent">시스템</span>으로 해결합니다.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                AI와 자동화, 데이터 분석을 활용해 반복 업무를 운영 가능한 구조로 바꾸는
                AI Builder이자 Product Thinker, 이진호입니다.
              </p>
            </MotionDiv>
            <MotionDiv
              variants={reveal}
              className="hidden min-h-48 flex-col justify-end border-l border-line pl-8 text-sm leading-7 text-muted lg:flex"
            >
              <MousePointer2 className="mb-5 text-accent" size={18} />
              마우스나 버튼으로
              <br />
              프로젝트 카드를 가로로 탐색하세요.
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-20 mx-auto mt-9 max-w-[1500px] lg:mt-12"
          >
            <MotionDiv variants={reveal} className="mb-6 flex flex-wrap items-center gap-3 px-5 sm:px-8 lg:hidden">
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
            <ProjectCarousel projects={projects} />
          </MotionDiv>
        </section>
      </main>
      <Footer />
    </>
  );
}
