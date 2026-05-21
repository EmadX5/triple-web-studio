import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Triple Web Studio website visitors and customers."
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Privacy Policy</p>
          <h1>How Triple Web Studio handles website inquiries and payment information.</h1>
          <p>Last updated: May 19, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p>
            This Privacy Policy explains how Triple Web Studio collects, uses, and protects
            information submitted through this website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect your name, business name, email address, phone number, city/province,
            website URL, business type, package interest, budget range, and project message when
            you submit a quote request.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use submitted information to respond to inquiries, prepare quotes, plan website
            projects, provide support, process payments, and improve our services.
          </p>

          <h2>Payments</h2>
          <p>
            Payments are processed through Stripe Checkout. Triple Web Studio does not store credit
            card details on this website. Stripe may collect payment details according to its own
            privacy and security policies.
          </p>

          <h2>Analytics and Site Data</h2>
          <p>
            The website may use analytics tools to understand traffic, page performance, and
            conversion paths. Analytics data is used to improve the site and marketing experience.
          </p>

          <h2>Sharing Information</h2>
          <p>
            We do not sell personal information. We may share information with trusted service
            providers when needed to operate this website, process payments, communicate with
            clients, or deliver services.
          </p>

          <h2>Data Security</h2>
          <p>
            We use reasonable safeguards to protect submitted information. No online transmission
            can be guaranteed completely secure, but we limit collection to practical business needs.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
