import Link from "next/link";

export default function ProjectCard({ repo }) {
  return (
    <div className="card p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1">
          <Link href={repo.html_url} target="_blank" className="hover:underline">
            {repo.name}
          </Link>
        </h3>
        <p className="text-white/80 text-sm line-clamp-3">{repo.description || "Sem descrição."}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-white/60">
        <span>★ {repo.stargazers_count}</span>
        <span>Atualizado: {new Date(repo.updated_at).toLocaleDateString("pt-BR")}</span>
      </div>
    </div>
  );
}
