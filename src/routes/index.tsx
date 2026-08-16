import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Globe2, Leaf, ShieldCheck, Ship, Truck } from "lucide-react";
import heroImage from "@/assets/hero-trade.jpg";
import commoditiesImage from "@/assets/commodities.jpg";
import solarImage from "@/assets/solar.jpg";
import { SectionHeading } from "@/components/page-hero";
import { productCategories, services, site, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TriCore Global Ventures — Construction, Solar & Commodity Trade" },
      {
        name: "description",
        content:
          "Diversified group delivering civil construction, solar EPC, IT services and agro-commodity import & export across 38 countries.",
      },
      { property: "og:title", content: "TriCore Global Ventures" },
      {
        property: "og:description",
        content:
          "Civil construction, solar energy, IT support and global commodity trading from a single accountable partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          email: site.email,
          telephone: site.phone,
          description: site.tagline,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.addressLines[0],
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Building2,
    title: "Build",
    text: "Civil construction and infrastructure delivered with disciplined project controls.",
  },
  {
    icon: Leaf,
    title: "Power",
    text: "Solar EPC and O&M that cut energy costs and carbon intensity together.",
  },
  {
    icon: Ship,
    title: "Trade",
    text: "Agro-commodity and industrial trade across 38 countries and four continents.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Container port at sunrise with cranes loading a cargo vessel"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.19_0.035_254)]/78" />
        <div className="container-page relative py-28 text-ink-foreground md:py-40">
          <div className="max-w-3xl animate-rise">
            <p className="text-eyebrow text-accent">Since 2013 — Dubai, UAE</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.03] md:text-7xl">
              Building, powering and supplying markets worldwide
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-85 md:text-lg">
              TriCore Global Ventures brings construction, renewable energy, technology and
              cross-border commodity trade under one accountable partner — so complex projects
              move forward without the handoffs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={solarImage}
              alt="Engineers inspecting a utility-scale solar array"
              width={1280}
              height={860}
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-sm object-cover shadow-soft md:h-80"
            />
            <img
              src={commoditiesImage}
              alt="Agro commodities including rice, pulses and spices in sacks"
              width={1280}
              height={860}
              loading="lazy"
              className="h-40 w-full rounded-sm object-cover shadow-soft md:h-52"
            />
            <div className="flex h-40 flex-col justify-center rounded-sm surface-ink p-6 md:h-52">
              <p className="font-display text-3xl font-bold">38</p>
              <p className="mt-1 text-sm opacity-75">
                countries reached through our sourcing and delivery network
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A decade of execution across four demanding industries"
              description="We started as a civil contracting firm and grew into a diversified group because our clients kept asking for more: energy systems for their sites, IT for their operations, and reliable supply for their raw materials. Today those capabilities sit under one management team with shared standards for quality, safety and reporting."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-sm border border-border bg-card p-5">
                  <p.icon className="h-6 w-6 text-accent" />
                  <p className="mt-3 font-display font-bold">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              More about the group <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Six service lines, one point of accountability"
            description="Each division runs its own specialists and quality process, coordinated by a single commercial team so you never manage the seams between them."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group bg-card p-8 transition-colors hover:bg-sand"
              >
                <p className="font-display text-sm font-bold text-accent">{s.code}</p>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Commodity portfolio"
            title="Food and agro commodities, sourced at origin"
            description="Contract volumes in bulk, bagged or private-label packing, with inspection and documentation handled end to end."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            View full product list <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((p) => (
            <Link
              key={p.slug}
              to="/products"
              hash={p.slug}
              className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-lift"
            >
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="surface-ink">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Verified quality",
              text: "Third-party inspection at origin, plus documented QA/QC on every project site.",
            },
            {
              icon: Truck,
              title: "Dependable logistics",
              text: "Consolidated freight, customs brokerage and shipment visibility from order to delivery.",
            },
            {
              icon: Globe2,
              title: "Local presence",
              text: "Sourcing partners and field teams across the Gulf, Asia, Africa and Europe.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon className="h-8 w-8 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="rounded-sm border border-border bg-sand p-10 text-center md:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
            Tell us what you need delivered, and where
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Send your specification, volume and destination. Our team replies with an indicative
            offer within two working days.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
