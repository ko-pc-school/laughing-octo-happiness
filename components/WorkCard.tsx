type WorkCardProps = {
  tag: string;
  title: string;
  description: string;
};

export default function WorkCard({ tag, title, description }: WorkCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-accent/40">
      <span className="text-[11px] tracking-widest text-accent/80">
        {tag}
      </span>
      <h3 className="mt-4 text-lg font-light text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">{description}</p>
    </div>
  );
}
