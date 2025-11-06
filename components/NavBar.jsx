"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/academico", label: "Experiência Acadêmica" },
  { href: "/profissional", label: "Experiência Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[var(--bg)]/50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-lg sm:text-xl font-bold">
            <span className="text-primary">bárbara</span>.dev
          </Link>
          <ul className="hidden sm:flex gap-2">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${pathname===l.href ? "bg-white/10" : "hover:bg-white/10"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
