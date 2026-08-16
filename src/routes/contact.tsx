import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { services, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request a Quote | TriCore Global Ventures" },
      {
        name: "description",
        content:
          "Contact TriCore Global Ventures in Dubai for construction, solar, IT, staffing or commodity trade enquiries. Replies within two working days.",
      },
      { property: "og:title", content: "Contact TriCore Global Ventures" },
      {
        property: "og:description",
        content: "Send your requirement, volume and destination — we reply with an indicative offer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    toast.success("Thank you — your enquiry has been noted.", {
      description: `Please also email ${site.email} so our team can respond directly.`,
    });
  }

  const fieldClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project or shipment"
        description="Share the essentials — scope or specification, quantity, location and timeline — and the right division will come back to you."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="rounded-sm border border-border bg-card p-8 md:p-10">
          <h2 className="text-2xl font-bold">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fields marked with an asterisk are required.
          </p>

          <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="name">
                Full name *
              </label>
              <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="company">
                Company
              </label>
              <input id="company" name="company" className={fieldClass} placeholder="Company name" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={fieldClass}
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="country">
                Country
              </label>
              <input id="country" name="country" className={fieldClass} placeholder="Destination country" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <label className="text-sm font-medium" htmlFor="interest">
                Area of interest
              </label>
              <select id="interest" name="interest" className={fieldClass} defaultValue={services[0]?.title}>
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>Agro & food commodities</option>
                <option>Other enquiry</option>
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <label className="text-sm font-medium" htmlFor="message">
                Requirement *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={fieldClass}
                placeholder="Scope or specification, quantity, packing, incoterm and timeline"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
              >
                <Send className="h-4 w-4" /> Submit enquiry
              </button>
              {sent ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  Enquiry noted. For a guaranteed response, email{" "}
                  <a className="font-semibold text-primary" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-sm surface-ink p-8">
            <h2 className="font-display text-xl font-bold">Head office</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="opacity-80">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a className="opacity-80" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a className="opacity-80" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="opacity-80">{site.hours}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-sand p-8">
            <h2 className="font-display text-lg font-bold">Working globally</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Our commercial team covers the Gulf, South and Southeast Asia, Africa and Europe.
              If your time zone makes calls difficult, email us and we will schedule a slot that
              works for you.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
