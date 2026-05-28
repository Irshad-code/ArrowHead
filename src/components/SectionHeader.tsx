export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Arrowhead</div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-secondary md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
