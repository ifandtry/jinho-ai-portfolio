import { Code2, Mail, UserRound } from "lucide-react";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`border-t border-line/80 px-5 sm:px-8 ${compact ? "py-2" : "py-10"}`}>
      <div
        className={`mx-auto flex max-w-7xl flex-col text-muted md:flex-row md:items-center md:justify-between ${
          compact ? "text-xs" : "text-sm"
        } ${
          compact ? "gap-2" : "gap-6"
        }`}
      >
        <p>© 2026 Jinho Lee. Built for systems, product, and AI automation work.</p>
        <div className="flex items-center gap-5">
          <a aria-label="GitHub" className="transition hover:text-foreground" href="https://github.com/ifandtry">
            <Code2 size={18} />
          </a>
          <a aria-label="LinkedIn" className="transition hover:text-foreground" href="https://www.linkedin.com">
            <UserRound size={18} />
          </a>
          <a aria-label="Email" className="transition hover:text-foreground" href="mailto:hello@example.com">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
