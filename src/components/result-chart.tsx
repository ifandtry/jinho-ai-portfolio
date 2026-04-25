export function ResultChart() {
  const before = [36, 32, 29, 25, 22, 19, 21, 23, 20, 18, 19, 17];
  const after = [27, 24, 22, 18, 16, 14, 15, 16, 14, 13, 14, 13];

  return (
    <div className="soft-shadow rounded-3xl border border-line bg-background p-6">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">거절률 변화</p>
          <p className="mt-2 text-3xl font-bold tracking-tight">31.9% → 22.2%</p>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
          -9.7%p
        </span>
      </div>
      <div className="relative h-64">
        <div className="absolute inset-0 grid grid-rows-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index} className="border-t border-line" />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-2">
          {before.map((value, index) => (
            <div key={index} className="flex h-full flex-1 items-end gap-1">
              <span className="w-full rounded-t-md bg-foreground/12" style={{ height: `${value * 2}%` }} />
              <span className="w-full rounded-t-md bg-accent/75" style={{ height: `${after[index] * 2}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-5 text-sm text-muted">
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-foreground/30" />
          Before
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          After
        </span>
      </div>
    </div>
  );
}
