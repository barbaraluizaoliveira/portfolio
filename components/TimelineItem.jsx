export default function TimelineItem({ when, title, where, details }){
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-accent"></div>
      <p className="text-xs text-white/60">{when}</p>
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-sm text-white/80">{where}</p>
      {details && <p className="mt-2 text-sm text-white/70">{details}</p>}
    </div>
  )
}
