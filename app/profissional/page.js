import TimelineItem from "@/components/TimelineItem";
import { professional } from "@/lib/data";

export const metadata = { title: "Experiência Profissional • Bárbara" };

export default function Profissional(){
  return (
    <section className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Experiência Profissional</h1>
      <div className="card p-6 space-y-6">
        {professional.map((a, i) => <TimelineItem key={i} {...a} />)}
      </div>
    </section>
  )
}
