import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-foreground">
          J.
        </Link>
        <nav className="hidden items-center gap-12 text-sm font-medium text-muted md:flex">
          <Link className="transition hover:text-foreground" href="/#projects">
            프로젝트
          </Link>
          <Link className="transition hover:text-foreground" href="/story">
            스토리
          </Link>
          <Link className="transition hover:text-foreground" href="/contact">
            연락하기
          </Link>
        </nav>
        <button
          className="grid size-10 place-items-center rounded-full bg-foreground text-background shadow-lg transition hover:scale-105"
          aria-label="메뉴 열기"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
