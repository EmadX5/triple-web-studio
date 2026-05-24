import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Design Services Canada",
  description:
    "Website design, redesigns, local SEO setup, booking forms, Google Maps, maintenance, and optional Stripe setup for Canadian service brands."
};

const icons = [Globe2, Wrench, Search, CalendarCheck, MapPin, ShieldCheck];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Services</p>
          <h1>Website design services built around trust, visibility, and leads.</h1>
          <p>
            Triple Web Design helps Canadian companies launch modern websites that are easy to
            understand, easy to find, and easy to contact from any device.
          </p>
          <div className="cta-row">
            <Link className="button button-primary" href="/contact">
              Get a Free Quote
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="/pricing">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Core services"
            title="Everything a premium service website needs to launch with confidence."
            description="Choose a focused website package, then add the services your business needs for bookings, payments, content, local SEO, or ongoing updates."
          />
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = icons[index] || CheckCircle2;
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

      <section className="section section-paper">
        <div className="container split-grid">
          <div className="content-stack">
            <SectionHeader
              eyebrow="Built for local decisions"
              title="Your site should answer the questions customers ask before they call."
              description="We structure content around services, locations, proof, pricing expectations, availability, and the fastest path to contact."
            />
            <ul className="check-list">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Clear service pages for contractors, clinics, salons, restaurants, trades, shops,
                consultants, and local service teams.
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Local SEO basics including title tags, meta descriptions, maps, Search Console, and
                index-friendly page structure.
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Lead paths such as quote forms, booking buttons, click-to-call links, and contact
                pages that are easy on mobile.
              </li>
            </ul>
          </div>
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
              alt="Modern workspace used for planning premium website projects"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid split-grid-start">
          <div>
            <SectionHeader
              eyebrow="Stripe clarity"
              title="Payments on this site are for Triple Web Design services."
              description="Deposits, full website package payments, and monthly maintenance subscriptions use secure Stripe Checkout so clients can pay the agency online."
            />
          </div>
          <div className="insight-grid">
            <article className="insight-card">
              <span className="icon-tile">
                <CreditCard size={22} aria-hidden="true" />
              </span>
              <h3>Agency payments</h3>
              <p>Use Stripe Checkout here to pay Triple Web Design for website work or care plans.</p>
            </article>
            <article className="insight-card">
              <span className="icon-tile icon-tile-green">
                <ShieldCheck size={22} aria-hidden="true" />
              </span>
              <h3>Secure checkout</h3>
              <p>Card details are handled by Stripe and are not stored by this website.</p>
            </article>
            <article className="insight-card">
              <span className="icon-tile icon-tile-red">
                <Wrench size={22} aria-hidden="true" />
              </span>
              <h3>Client Stripe setup</h3>
              <p>Adding Stripe payments to your own website is a separate optional add-on service.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
