import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { packages } from "@/lib/data";
import { CheckoutButton } from "@/components/CheckoutButton";

type PricingCardsProps = {
  preview?: boolean;
};

export function PricingCards({ preview = false }: PricingCardsProps) {
  return (
    <div className="pricing-grid">
      {packages.map((plan) => (
        <article className={`pricing-card ${plan.badge ? "featured" : ""}`} key={plan.id}>
          {plan.badge ? <span className="plan-badge">{plan.badge}</span> : null}
          <div className="plan-top">
            <div>
              <h3>{plan.name}</h3>
              <p>{plan.bestFor}</p>
            </div>
            <strong>{plan.price}</strong>
          </div>

          <ul className="feature-list">
            {plan.features.slice(0, preview ? 6 : plan.features.length).map((feature) => (
              <li key={feature}>
                <Check size={18} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="plan-delivery">
            <ShieldCheck size={18} aria-hidden="true" />
            {plan.delivery}
          </div>

          <CheckoutButton itemId={plan.depositItemId} className="button-primary full-width">
            {plan.id === "starter"
              ? "Pay $300 Deposit"
              : plan.id === "business"
                ? "Pay $500 Deposit"
                : "Pay $750 Deposit"}
          </CheckoutButton>

          {!preview ? (
            <CheckoutButton itemId={plan.fullItemId} className="button-secondary full-width" size="small">
              Pay in Full
            </CheckoutButton>
          ) : null}
        </article>
      ))}
      {preview ? (
        <div className="pricing-preview-link">
          <Link className="button button-secondary" href="/pricing">
            Compare Full Pricing
          </Link>
        </div>
      ) : null}
    </div>
  );
}
