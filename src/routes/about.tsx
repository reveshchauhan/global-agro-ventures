import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Handshake, Target } from "lucide-react";
import constructionImage from "@/assets/construction.jpg";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — TriCore Global Ventures" },
      {
        name: "description",
        content:
          "How TriCore Global Ventures grew from a civil contracting firm into a diversified construction, energy and commodity trading group based in Dubai.",
      },
      { property: "og:title", content: "About TriCore Global Ventures" },
      {
        property: "og:description",
        content:
          "Our story, values and the standards behind twelve years of project and trade delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Deliver what was promised",
    text: "Scope, schedule and specification are agreed in writing and tracked openly. If something slips, you hear it from us first.",
  },
  {
    icon: Handshake,
    title: "Long relationships over single deals",
    text: "Most of our volume comes from clients and suppliers we have worked with for more than five years.",
  },
  {
    icon: Compass,
    title: "Local knowledge, global standards",
    text: "Teams on the ground at origin and destination, working to consistent quality and compliance procedures.",
  },
];

const timeline = [
  { year: "2013", text: "Founded as a civil contracting firm executing commercial fit-out projects." },
  { year: "2016", text: "Added general trading and industrial supply for regional contractors." },
  { year: "2018", text: "Commissioned our first megawatt-scale rooftop solar plant." },
  { year: "2021", text: "Opened the agro-commodity desk with sourcing partners in Asia and Africa." },
  { year: "2024", text: "Expanded managed IT services and crossed 38 countries served." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the group"
        title="A diversified group built around delivery"
        description="Four divisions, one operating discipline: clear scope, verified quality, and communication that does not stop when the contract is signed."
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="From site contractor to multi-sector partner"
              description="TriCore began in 2013 with a small team of civil engineers taking on commercial projects in the Gulf. Clients kept returning with adjacent problems — rising energy bills, unreliable IT, raw materials stuck at the border. Rather than refer them out, we built the capability in-house and held it to the same standards as our construction work."
            />
            <p className="mt-5 text-muted-foreground">
              That approach shaped how the group runs today. Every division shares a common
              reporting structure, a single commercial team and one escalation path, so clients
              deal with people who can actually resolve an issue instead of forwarding it.
            </p>
          </div>
          <img
            src={constructionImage}
            alt="Construction site with tower crane and steel frame structure"
            width={1280}
            height={860}
            loading="lazy"
            className="h-80 w-full rounded-sm object-cover shadow-lift md:h-[28rem]"
          />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What guides us" title="Three commitments we hold to" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-sm border border-border bg-card p-8">
                <v.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="Milestones" title="How the group developed" />
        <ol className="mt-12 border-l border-border">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="font-display text-lg font-bold">{t.year}</p>
              <p className="mt-1 max-w-2xl text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="surface-ink">
        <div className="container-page grid grid-cols-2 gap-y-10 py-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
          Looking for a partner who can handle the whole scope?
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
        >
          Talk to our team <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
