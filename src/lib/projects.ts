import { Gauge, LineChart, Sparkles, Workflow } from "lucide-react";

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  impact: string;
  category: string;
  role: string;
  timeline: string;
  scale: string;
  keyResult: string;
  icon: string;
  metrics: Metric[];
  problem: string[];
  hypothesis: string;
  testDesign: { label: string; value: string }[];
  flow: string[];
  insights: string[];
};

export const projects: Project[] = [
  {
    slug: "price-feedback-loop",
    index: "01",
    title: "가격 최적화 실시간 피드백 루프",
    subtitle: "고거절 구간을 실시간으로 검증하고 대응하는 운영 루프",
    impact: "거절률 -9.7%p",
    category: "AI Builder / Price Planning",
    role: "PM / AI Builder",
    timeline: "2026.01 ~ 진행 중",
    scale: "40 regions, 30 hexes",
    keyResult: "거절률 -9.7%p",
    icon: "activity",
    metrics: [
      { label: "가격 개선", value: "-9.7%p", detail: "특정 고거절 구간 개선" },
      { label: "대상", value: "40", detail: "regions" },
      { label: "운영", value: "30", detail: "hexes" },
      { label: "효과 지속", value: "약 30분", detail: "평균 지속 시간" },
    ],
    problem: [
      "주간 사전 계획 중심이라 당일 수요와 공급 변화가 늦게 반영됨",
      "가격 이상 신호를 보고도 표준화된 대응 기준과 리뷰 루프가 약함",
      "실시간 대응 결과가 다음 계획 개선으로 충분히 축적되지 않음",
    ],
    hypothesis:
      "고거절 지역을 실시간으로 감지하고, 표준화된 대응을 자동화하면 거절률을 낮추고 고효율 운영 시간을 유지할 수 있다.",
    testDesign: [
      { label: "대상", value: "Q1 고거절 지역과 핵심 hex" },
      { label: "트리거", value: "피크 시간대 거절률 급등 신호" },
      { label: "실행 방식", value: "SOP 기반 대응, Slack 리뷰, 자동화 연결" },
      { label: "측정 지표", value: "거절률, 효과 지속 시간, 다음 계획 반영률" },
    ],
    flow: ["계획", "실시간 검증", "대응", "리뷰", "다음 계획 개선"],
    insights: [
      "실시간 대응은 단발 조치가 아니라 계획 품질을 높이는 학습 루프로 설계되어야 했다.",
      "가격 조정의 효과는 영구적이지 않기 때문에, 유지 시간과 재검증 기준이 함께 필요했다.",
      "Playwright 자동화 이후 backend API 기반 자동화로 확장 가능한 구조가 보였다.",
    ],
  },
  {
    slug: "streamlit-launcher",
    index: "02",
    title: "대시보드 자동화 플랫폼",
    subtitle: "7일 이상 걸리던 시각화 리드타임을 반나절 수준으로 단축",
    impact: "7일 → 0.5~1일",
    category: "Internal Platform",
    role: "Builder / Maintainer",
    timeline: "2026.03 완료",
    scale: "20 dashboards",
    keyResult: "리드타임 단축",
    icon: "panels",
    metrics: [],
    problem: [],
    hypothesis: "",
    testDesign: [],
    flow: [],
    insights: [],
  },
  {
    slug: "slack-alert-system",
    index: "03",
    title: "실시간 모니터링 & 알림 시스템",
    subtitle: "수작업 이상 탐지를 ClickHouse, Python, Slack으로 자동화",
    impact: "일 30분 반복 업무 제거",
    category: "Operations Automation",
    role: "Automation Builder",
    timeline: "2025.12 구축",
    scale: "피크 타임 자동 점검",
    keyResult: "운영 리스크 조기 감지",
    icon: "bell",
    metrics: [],
    problem: [],
    hypothesis: "",
    testDesign: [],
    flow: [],
    insights: [],
  },
  {
    slug: "ai-sql-workflow",
    index: "04",
    title: "AI 기반 SQL 워크플로우",
    subtitle: "흩어진 쿼리를 GitHub 기반 공유 자산으로 전환",
    impact: "분석 속도 3배",
    category: "AI Workflow",
    role: "Workflow Designer",
    timeline: "2025.07 ~",
    scale: "Redash / Superset",
    keyResult: "분석 범위 확장",
    icon: "database",
    metrics: [],
    problem: [],
    hypothesis: "",
    testDesign: [],
    flow: [],
    insights: [],
  },
  {
    slug: "keywordmoney",
    index: "05",
    title: "KeywordMoney AI 콘텐츠 시스템",
    subtitle: "키워드 탐색부터 작성, 개선, 배포까지 이어지는 AI 운영 구조",
    impact: "AI agent 운영 구조",
    category: "Founder Project",
    role: "Founder / Builder",
    timeline: "2026.03 ~",
    scale: "Local orchestrator",
    keyResult: "반복 가능한 콘텐츠 루프",
    icon: "bot",
    metrics: [],
    problem: [],
    hypothesis: "",
    testDesign: [],
    flow: [],
    insights: [],
  },
  {
    slug: "onboarding-funnel",
    index: "06",
    title: "온보딩 퍼널 개선",
    subtitle: "현장 인터뷰와 퍼널 분석으로 신뢰 형성 순서를 재설계",
    impact: "22.2% → 30.4%",
    category: "Product Experiment",
    role: "PM Intern",
    timeline: "2024.08 ~ 2025.02",
    scale: "Karrot real estate",
    keyResult: "전환율 개선",
    icon: "route",
    metrics: [],
    problem: [],
    hypothesis: "",
    testDesign: [],
    flow: [],
    insights: [],
  },
  {
    slug: "subscription-experiment",
    index: "07",
    title: "구독 구조 전환 실험",
    subtitle: "유료 플랜 인지 문제를 가격 구조와 온보딩으로 해결",
    impact: "구독 매출 260%",
    category: "Product Monetization",
    role: "Product Manager",
    timeline: "2021.09 ~ 2024.02",
    scale: "Dogibogi service",
    keyResult: "LTV/CAC 240%",
    icon: "chart",
    metrics: [],
    problem: [],
    hypothesis: "",
    testDesign: [],
    flow: [],
    insights: [],
  },
];

export const featuredProject = projects[0];

export const capabilities = [
  { label: "문제 정의", icon: Sparkles },
  { label: "실험 설계", icon: Gauge },
  { label: "시스템 구축", icon: Workflow },
  { label: "성과 분석", icon: LineChart },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
