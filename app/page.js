import Link from "next/link";
import Badge from "@/components/Badge";
import { miniBio, stack, projectHighlights } from "@/lib/data";

async function getQuote() {
  // Server-side fetch to a free public API
  const res = await fetch("https://zenquotes.io/api/random", { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  const q = Array.isArray(data) ? data[0] : null;
  return q ? `${q.q} — ${q.a}` : null;
}

export default async function Home() {
  const quote = await getQuote();
  return (
    <section className="space-y-10">
      <div className="card p-8 mt-6">
        <p className="text-sm text-white/70 mb-2">Olá, eu sou</p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
          {miniBio.name}
        </h1>
        <p className="mt-2 text-lg text-white/80">{miniBio.role}</p>
        <p className="mt-6 text-white/80 max-w-2xl">{miniBio.intro}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.slice(0, 8).map(s => <Badge key={s}>{s}</Badge>)}
        </div>
        <div className="mt-8 flex gap-3">
          <Link href="/projetos" className="px-4 py-2 rounded-xl bg-primary hover:opacity-90">Ver projetos</Link>
          <Link href="/sobre" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10">Sobre o site</Link>
        </div>
      </div>

      {quote && (
        <div className="card p-6">
          <p className="text-sm text-white/60">Frase do dia (API ZenQuotes):</p>
          <blockquote className="mt-2 text-lg italic text-white/90">“{quote}”</blockquote>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4">Destaques</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectHighlights.map((p) => (
            <a key={p.title} href={p.href} target="_blank" className="card p-5 hover:scale-[1.01] transition">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-white/80 mt-1">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
