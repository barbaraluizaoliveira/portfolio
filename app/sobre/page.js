import Badge from "@/components/Badge";
import { stack } from "@/lib/data";

export const metadata = { title: "Sobre • Bárbara" };

export default function Sobre(){
  return (
    <section className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Sobre o site</h1>
      <div className="card p-6 space-y-4">
        <p>Este app foi desenvolvido com <strong>Next.js (App Router)</strong> e <strong>TailwindCSS</strong>, publicado na Vercel e integrado a <strong>APIs públicas</strong>:</p>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li><strong>ZenQuotes</strong> para frase do dia na Home (server-side fetch).</li>
          <li><strong>GitHub REST API</strong> para listar repositórios em <code>/projetos</code>.</li>
        </ul>
        <p>Outras escolhas técnicas:</p>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Componentização (Navbar, Footer, Badge, ProjectCard, TimelineItem).</li>
          <li>Design escuro com gradientes sutis, cantos arredondados e sombras suaves.</li>
          <li>Sem libs extras para facilitar a correção. Fácil de rodar: <code>npm i && npm run dev</code>.</li>
        </ul>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-3">Tecnologias e módulos</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => <Badge key={s}>{s}</Badge>)}
        </div>
      </div>
    </section>
  )
}
