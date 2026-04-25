import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionHeader } from "@/components/section-header";

const timeline = [
  ["2021.09 ~ 2024.02", "Petpeotalk", "구독 구조와 온보딩을 재설계해 구독 매출 260% 개선"],
  ["2024.08 ~ 2025.02", "Karrot", "현장 관찰과 퍼널 분석으로 onboarding conversion 22.2%에서 30.4%로 개선"],
  ["2025.02 ~ 현재", "Coupang Eats Services", "가격 정책, 실시간 모니터링, 대시보드, AI workflow 자동화 주도"],
  ["2026.03 ~", "KeywordMoney", "AI 기반 SEO 콘텐츠 시스템과 agent 운영 구조 설계"],
];

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8">
        <SectionHeader
          eyebrow="Story"
          title="저는 제품과 운영, 데이터와 자동화의 경계에서 문제를 풉니다."
          description="공통된 축은 단순합니다. 모호한 문제를 정의하고, 가설을 세우고, 작동하는 시스템으로 바꿉니다."
        />
        <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-ink p-8 text-white">
            <p className="text-sm text-white/45">Working principle</p>
            <p className="mt-8 text-4xl font-bold leading-tight">
              사람의 반복 업무를 구조로 바꾸고, 구조가 다시 더 나은 의사결정을 만들게 합니다.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map(([period, company, result]) => (
              <div key={company} className="rounded-2xl border border-line bg-background p-6">
                <p className="font-mono text-sm text-accent">{period}</p>
                <h2 className="mt-4 text-2xl font-bold">{company}</h2>
                <p className="mt-3 leading-7 text-muted">{result}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
