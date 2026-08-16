type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="surface-ink">
      <div className="container-page py-20 md:py-28">
        <p className="text-eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-eyebrow text-muted-foreground">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
