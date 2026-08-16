import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { productCategories, services, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">
            {site.short}
            <span className="text-accent">.</span> Global Ventures
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-75">
            A diversified engineering, energy and commodity trading group serving clients across
            the Middle East, Asia, Africa and Europe.
          </p>
          <div className="mt-6 h-1 w-16 accent-rule" />
        </div>

        <div>
          <h2 className="text-eyebrow opacity-70">Services</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="transition-opacity hover:opacity-100">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-eyebrow opacity-70">Commodities</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {productCategories.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to="/products" hash={p.slug} className="transition-opacity hover:opacity-100">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-eyebrow opacity-70">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
