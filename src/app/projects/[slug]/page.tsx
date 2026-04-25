import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { CaseStudyVisual } from "@/components/case-study-visual";
import { Footer } from "@/components/footer";
import { MetricCard } from "@/components/metric-card";
import { MotionDiv, MotionSection, reveal, stagger } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { NextProjectStrip } from "@/components/next-project-strip";
import { ResultChart } from "@/components/result-chart";
import { SectionHeader } from "@/components/section-header";
import { SystemFlow } from "@/components/system-flow";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  const isFullCaseStudy = project.slug === "price-feedback-loop";

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-28">
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
          <Link href="/#projects" className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
            <ArrowLeft size={16} />
            프로젝트로 돌아가기
          </Link>
          <MotionDiv
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <MotionDiv variants={reveal}>
              <p className="mb-5 font-mono text-sm text-accent">{project.index}</p>
              <h1 className="text-balance text-5xl font-black leading-tight tracking-tight sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-7 text-xl font-semibold text-foreground">{project.impact}</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{project.subtitle}</p>
              <div className="mt-9 flex flex-wrap gap-2">
                {[project.role, project.timeline, project.scale, project.keyResult].map((item) => (
                  <span key={item} className="rounded-full bg-panel px-4 py-2 text-sm text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv variants={reveal}>
              <CaseStudyVisual />
            </MotionDiv>
          </MotionDiv>
        </section>

        {isFullCaseStudy ? (
          <>
            <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
              <div className="grid gap-4 md:grid-cols-4">
                {project.metrics.map((metric) => (
                  <MetricCard key={metric.label} metric={metric} />
                ))}
              </div>
            </section>

            <MotionSection
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
            >
              <MotionDiv variants={reveal} className="mb-10">
                <SectionHeader eyebrow="Problem" title="실시간 대응이 없는 가격 계획은 계획으로 끝났습니다." />
              </MotionDiv>
              <div className="grid gap-4 md:grid-cols-3">
                {project.problem.map((item, index) => (
                  <MotionDiv key={item} variants={reveal} className="rounded-2xl border border-line bg-background p-6">
                    <span className="font-mono text-sm text-accent">0{index + 1}</span>
                    <p className="mt-8 text-lg font-semibold leading-7">{item}</p>
                  </MotionDiv>
                ))}
              </div>
            </MotionSection>

            <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
              <div className="rounded-[2rem] bg-ink p-8 text-white md:p-12">
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Hypothesis</p>
                <p className="text-balance text-3xl font-bold leading-snug md:text-5xl">{project.hypothesis}</p>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
              <SectionHeader
                eyebrow="Test Design"
                title="대상, 트리거, 실행 기준, 측정 지표를 먼저 고정했습니다."
              />
              <div className="mt-10 grid gap-4 md:grid-cols-4">
                {project.testDesign.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-line bg-background p-6">
                    <p className="mb-6 text-sm font-bold text-accent">{item.label}</p>
                    <p className="text-base leading-7 text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
              <SectionHeader
                eyebrow="System Flow"
                title="대응보다 중요한 것은 다음 계획이 더 좋아지는 루프였습니다."
                description="계획, 검증, 대응, 리뷰, 개선을 하나의 운영 구조로 묶어 가격 의사결정이 누적되게 설계했습니다."
              />
              <div className="mt-12">
                <SystemFlow steps={project.flow} />
              </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
              <ResultChart />
              <div className="rounded-3xl border border-line bg-background p-7">
                <p className="mb-7 text-sm font-bold text-accent">핵심 인사이트</p>
                <div className="space-y-5">
                  {["고거절 지역의 즉시 대응", "거절률 -9.7%p", "효과 약 30분 지속"].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-accent" size={18} />
                      <p className="leading-7 text-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
              <SectionHeader eyebrow="Lessons" title="반성은 결과보다 다음 시스템을 더 잘 만들기 위한 재료입니다." />
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {project.insights.map((insight) => (
                  <div key={insight} className="rounded-2xl border border-line bg-panel p-6">
                    <p className="text-lg font-semibold leading-8">{insight}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
            <p className="text-lg leading-8 text-muted">
              이 프로젝트는 같은 케이스 스터디 시스템으로 확장될 예정입니다. 현재는 핵심 임팩트와 맥락을 먼저 정리해두었습니다.
            </p>
          </section>
        )}

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <NextProjectStrip project={nextProject} />
        </section>
      </main>
      <Footer />
    </>
  );
}
