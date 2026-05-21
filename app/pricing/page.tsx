import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { CheckoutButton } from "@/components/CheckoutButton";
import { PricingCards } from "@/components/PricingCards";
import { SectionHeader } from "@/components/SectionHeader";
import { addOns, maintenancePlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for premium website design, redesigns, add-ons, deposits, full payments, and monthly maintenance plans."
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Pricing</p>
          <h1>Clear website design packages with secure Stripe payment options.</h1>
          <p>
            Compare packages, pay a deposit to start, pay in full, or subscribe to a monthly care
            plan after launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="payment-note">
            <strong>Stripe clarification:</strong> payments on this website are for Triple Web
            Studio services only. Customers use Stripe here to pay the agency for deposits, full
            package payments, and monthly maintenance plans. Adding Stripe payments to a client
            website is available as a separate optional add-on.
          </div>
          <PricingCards />
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeader
            eyebrow="Add-ons"
            title="Add only what your business needs."
            description="Use these as planning ranges. Your quote will confirm scope, timeline, and exact inclusions before work starts."
          />
          <div className="addon-grid">
            {addOns.map(([name, price]) => (
              <div className="addon-item" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Monthly maintenance"
            title="Keep your website healthy after launch."
            description="Choose a monthly care plan for updates, monitoring, support, and ongoing improvements."
          />
          <div className="maintenance-grid">
            {maintenancePlans.map((plan) => (
              <article className="maintenance-card" key={plan.id}>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.description}</p>
                <CheckoutButton itemId={plan.id} className="button-primary full-width">
                  Subscribe
                </CheckoutButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-grid split-grid-start">
          <div>
            <SectionHeader
              eyebrow="Secure checkout"
              title="Pay online without sending card details through the website."
              description="Checkout Sessions are created server-side. Stripe handles the payment page, card processing, and subscription billing."
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
              <Lock size={24} aria-hidden="true" />
              <h3>No stored card details</h3>
              <p>Credit card data is processed by Stripe, not saved on this site.</p>
            </article>
            <article className="outcome-card">
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>Webhook confirmation</h3>
              <p>Completed checkouts trigger a server webhook for payment confirmation.</p>
            </article>
            <article className="outcome-card">
              <CheckCircle2 size={24} aria-hidden="true" />
              <h3>Clear next steps</h3>
              <p>After payment, clients are directed to a success page with project-start guidance.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
