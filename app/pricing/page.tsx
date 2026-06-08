import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, ShieldCheck } from "lucide-react";
import { PricingCards } from "@/components/PricingCards";
import { SectionHeader } from "@/components/SectionHeader";
import { maintenancePlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for website design, revision rounds, monthly maintenance, and Google Business Profile support."
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Pricing</p>
          <h1>Clear website packages with no surprise fees.</h1>
          <p>
            Websites start at $1,500 CAD. Scope, pages, revisions, timeline, and optional monthly
            care are confirmed before work starts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="payment-note">
            <strong>Revision rule:</strong> every website includes clear revision rounds before
            launch. Revisions cover consolidated feedback on wording, images, colors, layout, and
            calls to action. New pages, new features, or major direction changes are quoted
            separately before work continues.
          </div>
          <PricingCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Monthly maintenance"
            title="If websites and Google stress you out, we can maintain things for you."
            description="Choose a care plan for updates, monitoring, Google Business Profile support, bad review alerts, and ongoing help after launch."
          />
          <div className="maintenance-grid">
            {maintenancePlans.map((plan) => (
              <article className="maintenance-card" key={plan.id}>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.description}</p>
                <Link className="button button-primary full-width" href="/contact">
                  Ask About This Plan
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-grid split-grid-start">
          <div>
            <SectionHeader
              eyebrow="Clear scope"
              title="You know what is included before the project starts."
              description="We confirm pages, timeline, revision rounds, launch support, and monthly care options upfront so the project does not drift into surprise fees."
            />
            <div className="cta-row">
              <Link className="button button-primary" href="/contact">
                Ask a Pricing Question
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="outcome-grid">
            <article className="outcome-card">
              <ClipboardCheck size={24} aria-hidden="true" />
              <h3>Scope confirmed</h3>
              <p>Pages, features, revision rounds, and launch steps are agreed before work begins.</p>
            </article>
            <article className="outcome-card">
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>No ranking promises</h3>
              <p>Google visibility depends on many factors. We keep your site and profile accurate, active, and easier to trust.</p>
            </article>
            <article className="outcome-card">
              <CheckCircle2 size={24} aria-hidden="true" />
              <h3>Optional care</h3>
              <p>Host it yourself after launch, or keep us on monthly care for updates and support.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
