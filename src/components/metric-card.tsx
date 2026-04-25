import type { Metric } from "@/lib/projects";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="soft-shadow rounded-2xl border border-line bg-background/80 p-6">
      <p className="text-sm text-muted">{metric.label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-accent">{metric.value}</p>
      <p className="mt-2 text-sm text-muted">{metric.detail}</p>
    </div>
  );
}
