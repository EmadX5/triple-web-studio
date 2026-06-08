import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Globe2,
  MapPin,
  MessageSquareWarning,
  Search,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Design Services Canada",
  description:
    "Website design, local SEO setup, booking forms, Google Maps, maintenance, and Google Business Profile support for Canadian service brands."
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
            Triple Web Design helps Canadian companies launch modern websites that make services,
            hours, locations, and contact options easy to find from any device.
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
            description="Choose a focused website package, then add the services your business needs for bookings, content, local SEO, Google Business Profile support, or ongoing updates."
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
              eyebrow="Website + local presence care"
              title="We can maintain the website and help keep your Google profile useful."
              description="Monthly care is for owners who would rather not deal with website updates, profile details, reviews, forms, hosting questions, or confusing dashboards."
            />
          </div>
          <div className="insight-grid">
            <article className="insight-card">
              <span className="icon-tile">
                <Wrench size={22} aria-hidden="true" />
              </span>
              <h3>Website updates</h3>
              <p>Small content edits, form checks, uptime checks, hosting coordination, and support when the internet side of things gets annoying.</p>
            </article>
            <article className="insight-card">
              <span className="icon-tile icon-tile-green">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <h3>Google Business Profile</h3>
              <p>Hours, services, photos, website links, profile updates, and simple performance snapshots kept easier to manage.</p>
            </article>
            <article className="insight-card">
              <span className="icon-tile icon-tile-red">
                <MessageSquareWarning size={22} aria-hidden="true" />
              </span>
              <h3>Review alerts</h3>
              <p>We can watch for low-star reviews, notify you, and help draft professional responses. Google decides what can be removed.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
