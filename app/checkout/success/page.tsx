import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Received",
  description: "Your Triple Web Studio payment was received successfully."
};

export default function CheckoutSuccessPage() {
  return (
    <section className="section section-paper">
      <div className="container">
        <div className="success-panel">
          <CheckCircle2 size={44} aria-hidden="true" />
          <p className="eyebrow">Payment complete</p>
          <h1>Payment received. Your project has started.</h1>
          <p className="lead">
            Please check your email for the next steps. We will confirm the package, gather your
            business details, and schedule the project kickoff.
          </p>
          <div className="cta-row">
            <Link className="button button-primary" href="/contact">
              Send Project Details
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
