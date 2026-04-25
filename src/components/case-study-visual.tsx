import { BellRing, Database, Map, MoreHorizontal, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const loopItems: { label: string; value: string; icon: LucideIcon }[] = [
  { label: "검증", value: "실시간 지표 확인", icon: Database },
  { label: "대응", value: "SOP 자동화", icon: TrendingDown },
  { label: "리뷰", value: "다음 계획 반영", icon: BellRing },
];

export function CaseStudyVisual() {
  return (
    <div className="card-perspective">
      <div className="premium-shadow rotate-0 rounded-[1.6rem] border border-white/10 bg-ink p-5 text-white md:-rotate-1">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/45">가격 최적화 모니터링</p>
            <p className="mt-1 text-lg font-semibold">Live feedback loop</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/45">
            <span>1h</span>
            <span className="rounded-full bg-accent px-2 py-1 text-white">Live</span>
            <MoreHorizontal size={18} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-xs text-white/45">거절률</p>
                <p className="mt-1 text-4xl font-bold">22.2%</p>
              </div>
              <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-sm text-emerald-200">
                -9.7%p
              </span>
            </div>
            <div className="flex h-32 items-end gap-2">
              {[70, 62, 54, 42, 38, 45, 35, 31, 36, 29].map((height, index) => (
                <span
                  key={index}
                  className="w-full rounded-t-lg bg-accent/80"
                  style={{ height: `${height}%`, opacity: 0.3 + index * 0.05 }}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/58">
                <Map size={16} />
                Region heatmap
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, index) => (
                  <span
                    key={index}
                    className="aspect-square rounded-md bg-accent"
                    style={{ opacity: 0.16 + ((index * 13) % 70) / 100 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm text-white/58">
                <BellRing size={16} />
                Slack alert
              </div>
              <div className="rounded-xl bg-white/7 p-3 text-sm leading-6 text-white/78">
                가격 급등 감지, 강남 3구
                <br />
                적용 후 거절률 25.6%
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {loopItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <Icon className="mb-4 text-accent" size={18} />
              <p className="text-sm font-semibold">{label}</p>
              <p className="mt-1 text-xs text-white/48">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
