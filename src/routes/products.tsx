import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PackageCheck } from "lucide-react";
import commoditiesImage from "@/assets/commodities.jpg";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { productCategories, site } from "@/data/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Agro & Food Commodities | TriCore Global Ventures" },
      {
        name: "description",
        content:
          "Grains, rice, pulses, edible oils, sugar, spices, nuts, dairy and canned foods supplied in bulk, bagged or private-label packing.",
      },
      { property: "og:title", content: "Our Commodity Portfolio — TriCore" },
      {
        property: "og:description",
        content:
          "Origin-sourced agro and food commodities with inspection, documentation and freight handled end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const packing = [
  "25 kg / 50 kg PP or jute bags",
  "1 MT jumbo bags and bulk vessels",
  "Consumer packs from 500 g to 10 kg",
  "Private-label and custom branding",
  "Flexitanks and drums for liquids",
  "Container stuffing photos on request",
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Food and agro commodities from verified origins"
        description="We contract directly with mills, processors and cooperatives, then manage inspection, documentation and freight so the cargo arrives as specified."
      />

      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Eight commodity groups, shipped worldwide"
          description="Cannot find a product below? Send your specification and we will source against it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 rounded-sm border border-border bg-card p-7 transition-shadow hover:shadow-lift"
            >
              <PackageCheck className="h-6 w-6 text-accent" />
              <h2 className="mt-4 font-display text-lg font-bold">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-sm bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={commoditiesImage}
            alt="Sacks of rice, pulses, lentils and spices arranged on a dark wooden surface"
            width={1280}
            height={860}
            loading="lazy"
            className="h-80 w-full rounded-sm object-cover shadow-lift md:h-[26rem]"
          />
          <div>
            <SectionHeading
              eyebrow="Packing & quality"
              title="Specified, inspected and documented"
              description="Every contract is fixed against an agreed specification sheet. Pre-shipment inspection is arranged with an independent surveyor, and full documentation travels with the cargo."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {packing.map((p) => (
                <li key={p} className="rounded-sm border border-border bg-card p-4 text-sm">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Enquiries:{" "}
              <a className="font-semibold text-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
          Send your specification and destination port
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Include quantity, packing, incoterm and delivery window — we will revert with an
          indicative offer.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
        >
          Request pricing <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
