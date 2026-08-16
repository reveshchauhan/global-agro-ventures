import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction, Solar, IT & Trade | TriCore" },
      {
        name: "description",
        content:
          "Civil construction, solar EPC, managed IT, import & export, contract staffing and general trading delivered by one accountable group.",
      },
      { property: "og:title", content: "Our Services — TriCore Global Ventures" },
      {
        property: "og:description",
        content:
          "Six service lines covering construction, renewable energy, technology, trade and workforce management.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const process = [
  { step: "01", title: "Brief & scoping", text: "We map requirements, constraints, budget and timeline in a written scope." },
  { step: "02", title: "Proposal", text: "A costed proposal with deliverables, milestones and assumptions stated plainly." },
  { step: "03", title: "Execution", text: "Assigned project lead, weekly reporting and documented quality checkpoints." },
  { step: "04", title: "Handover & support", text: "Documentation, training where relevant, and an ongoing support agreement." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities that cover the whole project, not just a slice of it"
        description="Six divisions, coordinated centrally. Engage one of them or combine several under a single contract and reporting line."
      />

      <section className="container-page py-20 md:py-24">
        <div className="space-y-6">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 rounded-sm border border-border bg-card p-8 md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="font-display text-sm font-bold text-accent">{s.code}</p>
                  <h2 className="mt-3 text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.summary}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Enquire about {s.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 rounded-sm bg-secondary p-4 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A predictable four-stage process"
            description="The same sequence applies whether you are commissioning a solar plant or contracting a container of rice."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-sm border border-border bg-card p-7">
                <p className="font-display text-3xl font-bold text-accent">{p.step}</p>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
