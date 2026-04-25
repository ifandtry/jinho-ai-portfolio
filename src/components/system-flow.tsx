import { ArrowRight } from "lucide-react";

export function SystemFlow({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div className="soft-shadow flex min-h-32 flex-1 flex-col justify-between rounded-2xl border border-line bg-background p-5">
            <span className="font-mono text-sm text-accent">0{index + 1}</span>
            <p className="text-lg font-bold tracking-tight">{step}</p>
          </div>
          {index < steps.length - 1 ? <ArrowRight className="hidden text-muted md:block" size={18} /> : null}
        </div>
      ))}
    </div>
  );
}
