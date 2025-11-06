import ProjectCard from "@/components/ProjectCard";

async function getRepos() {
  const res = await fetch("https://api.github.com/users/barbaraluizaoliveira/repos?sort=updated&per_page=12", {
    cache: "no-store",
    headers: { "Accept": "application/vnd.github+json" }
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata = { title: "Projetos • Bárbara" };

export default async function Projetos(){
  const repos = await getRepos();
  return (
    <section className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Projetos Desenvolvidos</h1>
      <p className="text-white/80">Lista ao vivo dos meus repositórios públicos no GitHub (via API).</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((r) => <ProjectCard repo={r} key={r.id} />)}
      </div>
    </section>
  )
}
