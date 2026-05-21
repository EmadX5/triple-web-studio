import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Wrench
} from "lucide-react";
import { PricingCards } from "@/components/PricingCards";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeader } from "@/components/SectionHeader";
import { businessTypes, services } from "@/lib/data";

const trustItems = [
  { label: "Mobile-first design", icon: Smartphone },
  { label: "SEO setup included", icon: Search },
  { label: "Stripe payments accepted", icon: CreditCard },
  { label: "Fast launch", icon: Timer },
  { label: "No hidden fees", icon: ShieldCheck }
];

const serviceIcons = [Globe2, Wrench, Search, CalendarCheck, MapPin, ClipboardCheck];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Triple Web Studio / Vancouver-based, Canada-wide</p>
          <h1>Premium Websites for Canadian Brands That Need More Trust, Leads, and Growth</h1>
          <p className="hero-lede">
            We design fast, mobile-friendly, SEO-ready websites for companies that need to look
            established, get found on Google, and turn visitors into qualified inquiries.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Get a Free Quote
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="/pricing">
              View Pricing
            </Link>
          </div>
          <div className="hero-proof" aria-label="Agency proof points">
            <div>
              <strong>Clear</strong>
              <span>Transparent project pricing</span>
            </div>
            <div>
              <strong>2-3 wks</strong>
              <span>Typical business launch window</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Quote forms that keep working</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust highlights">
        <div className="container">
          <ul>
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="content-stack">
            <SectionHeader
              eyebrow="The online trust gap"
            title="Customers search first. A weak website quietly costs you trust."
            description="Before someone calls, books, visits, or requests a quote, they usually check your company online. If your website feels dated, slow, or unclear, confidence drops before the conversation starts."
            />
            <ul className="check-list">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                A professional site makes your company feel established and safe to contact.
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Clear service pages help local customers understand what you do quickly.
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Fast mobile pages, calls to action, and contact forms turn searches into leads.
              </li>
            </ul>
          </div>
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
              alt="Small business team reviewing website performance on a laptop"
            />
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeader
            eyebrow="What we build"
            title="Strategic website services for companies that need real momentum."
            description="From first websites to full redesigns, every page is planned around trust, speed, search visibility, and the next action a customer should take."
          />
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || Sparkles;
              return (
                <article className="service-card" key={service.title}>
                  <span className={`icon-tile ${index === 1 ? "icon-tile-red" : index === 5 ? "icon-tile-green" : ""}`}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeader
            eyebrow="Before and after"
            title="From invisible online to professional, searchable, and ready for customers."
            description="The goal is not just a prettier website. It is a clearer path from search result to phone call, booking, quote request, or visit."
          />
          <div className="comparison">
            <div className="comparison-panel">
              <h3>Before</h3>
              <ul className="plain-list">
                <li>No website, or one that looks abandoned.</li>
                <li>Customers cannot tell what you offer or where you work.</li>
                <li>Mobile visitors struggle to call, book, or request a quote.</li>
                <li>Google has little structure to understand your business.</li>
              </ul>
            </div>
            <div className="comparison-panel after">
              <h3>After</h3>
              <ul className="plain-list">
                <li>Professional pages that make your business feel trustworthy.</li>
                <li>Clear services, location signals, and contact paths.</li>
                <li>Fast mobile layout with click-to-call and lead forms.</li>
                <li>SEO basics, maps, analytics, and launch guidance included.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Pricing preview"
            title="Clear packages for the stage your company is in."
            description="Start with a deposit through Stripe Checkout, or compare full package options on the pricing page."
          />
          <PricingCards preview />
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeader
            eyebrow="Work examples"
            title="Polished website directions for Canadian service brands."
            description="These sample concepts show the kind of refined, practical websites we build for service companies, local shops, clinics, restaurants, and studios."
          />
          <PortfolioGrid limit={3} />
          <div className="cta-row">
            <Link className="button button-secondary" href="/portfolio">
              View More Examples
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our process"
            title="A straightforward path from idea to launched website."
            description="You get clear steps, focused revisions, and launch support without a drawn-out agency maze."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeader
            eyebrow="Who we help"
            title="Built for busy owners across Canada."
            description="Contractors, trades, service providers, clinics, shops, restaurants, consultants, and local teams that need a website to carry more trust and demand."
          />
          <div className="business-grid">
            {businessTypes.map((type) => (
              <div className="business-pill" key={type}>
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="Review slots ready for real client proof."
            description="These are clearly marked placeholders until Triple Web Studio adds verified reviews from completed projects."
          />
          <div className="testimonial-grid">
            {[
              [
                "Placeholder testimonial",
                "Triple Web Studio made our services easier to understand and gave customers a clearer way to request a quote.",
                "Local contractor"
              ],
              [
                "Placeholder testimonial",
                "The new website feels professional, loads fast on mobile, and finally matches the quality of our business.",
                "Salon owner"
              ],
              [
                "Placeholder testimonial",
                "We appreciated the transparent pricing, simple process, and help getting our website launched properly.",
                "Clinic manager"
              ]
            ].map(([label, quote, person]) => (
              <article className="testimonial-card" key={quote}>
                <span className="placeholder-label">{label}</span>
                <p>“{quote}”</p>
                <strong>{person}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow">Ready to get your business online?</p>
            <h2>Start with a clear quote and a website plan that fits your business.</h2>
            <p>
              Tell us what you do, where you serve customers, and what your website needs to help
              with. We will reply with practical next steps.
            </p>
          </div>
          <div className="cta-row">
            <Link className="button button-primary" href="/contact">
              Start Your Website
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="/contact">
              Book Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
