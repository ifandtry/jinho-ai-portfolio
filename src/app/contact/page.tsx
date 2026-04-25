import { Code2, Mail, UserRound } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionHeader } from "@/components/section-header";

const contacts = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", icon: Mail },
  { label: "GitHub", value: "ifandtry", href: "https://github.com/ifandtry", icon: Code2 },
  { label: "LinkedIn", value: "Jinho Lee", href: "https://www.linkedin.com", icon: UserRound },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="AI Product, AX Builder, Product Operations 역할을 향해 열려 있습니다."
          description="문제를 정의하고 실제 작동하는 워크플로우와 시스템으로 바꾸는 일에 관심이 있습니다."
        />
        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group rounded-2xl border border-line bg-background p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="text-accent" size={22} />
              <p className="mt-8 text-sm text-muted">{label}</p>
              <p className="mt-2 text-xl font-bold tracking-tight">{value}</p>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
