import TimelineItem from "@/components/TimelineItem";
import { academic } from "@/lib/data";

export const metadata = { title: "Experiência Acadêmica • Bárbara" };

export default function Academico(){
  return (
    <section className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Experiência Acadêmica</h1>
      <div className="card p-6 space-y-6">
        {academic.map((a, i) => <TimelineItem key={i} {...a} />)}
      </div>
    </section>
  )
}
