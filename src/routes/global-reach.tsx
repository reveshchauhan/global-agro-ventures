import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Anchor, FileCheck2, Plane, Warehouse } from "lucide-react";
import heroImage from "@/assets/hero-trade.jpg";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { regions } from "@/data/site";

export const Route = createFileRoute("/global-reach")({
  head: () => ({
    meta: [
      { title: "Global Reach — Markets, Logistics & Compliance | TriCore" },
      {
        name: "description",
        content:
          "TriCore operates across the Middle East, Asia, Africa and Europe with sea, air and land freight, customs brokerage and full trade documentation.",
      },
      { property: "og:title", content: "Global Reach — TriCore Global Ventures" },
      {
        property: "og:description",
        content: "Sourcing and delivery across 38 countries on four continents.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/global-reach" },
    ],
    links: [{ rel: "canonical", href: "/global-reach" }],
  }),
  component: GlobalReachPage,
});

const capabilities = [
  { icon: Anchor, title: "Ocean freight", text: "FCL, LCL and breakbulk with consolidation through Jebel Ali and origin ports." },
  { icon: Plane, title: "Air freight", text: "Time-critical and high-value cargo with door-to-door coordination." },
  { icon: Warehouse, title: "Warehousing", text: "Bonded and ambient storage for staging, re-packing and scheduled release." },
  { icon: FileCheck2, title: "Documentation", text: "LC handling, certificates of origin, phytosanitary, halal and health certificates." },
];

function GlobalReachPage() {
  return (
    <>
      <PageHero
        eyebrow="Global reach"
        title="Four continents, one coordinated supply chain"
        description="Dubai sits at the centre of our network — close enough to origin markets in Asia and Africa to move quickly, and connected enough to serve Europe and the Gulf reliably."
      />

      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="Where we operate" title="Regional footprint" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {regions.map((r) => (
            <div key={r.name} className="rounded-sm border border-border bg-card p-8">
              <h2 className="font-display text-xl font-bold">{r.name}</h2>
              <div className="mt-3 h-0.5 w-12 accent-rule" />
              <p className="mt-4 text-sm font-medium">{r.detail}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Cargo terminal with containers ready for export"
          width={1920}
          height={1088}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.19_0.035_254)]/85" />
        <div className="container-page relative py-20 text-ink-foreground md:py-24">
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
            Logistics and compliance handled in-house
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title}>
                <c.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
          Shipping to a market not listed here?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We regularly open new lanes with existing clients. Tell us the destination and we will
          confirm feasibility.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
        >
          Contact our trade desk <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
