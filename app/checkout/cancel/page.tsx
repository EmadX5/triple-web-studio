import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Cancelled",
  description: "Your Triple Web Studio checkout payment was cancelled."
};

export default function CheckoutCancelPage() {
  return (
    <section className="section section-paper">
      <div className="container">
        <div className="success-panel cancel">
          <AlertCircle size={44} aria-hidden="true" />
          <p className="eyebrow">Checkout cancelled</p>
          <h1>Your payment was cancelled.</h1>
          <p className="lead">
            You can return to pricing or contact us if you need help choosing the right package.
          </p>
          <div className="cta-row">
            <Link className="button button-primary" href="/pricing">
              Return to Pricing
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
