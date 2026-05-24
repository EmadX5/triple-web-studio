import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Refund Policy",
  description: "Website service terms and refund policy for Triple Web Design."
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Terms / Refund Policy</p>
          <h1>Clear service terms for deposits, website projects, and monthly care plans.</h1>
          <p>Last updated: May 19, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>Services</h2>
          <p>
            Triple Web Design provides website design, redesign, local SEO setup, forms,
            integrations, deployment guidance, and maintenance services for businesses.
            Project scope, deliverables, timeline, and revision rounds are confirmed before work
            begins.
          </p>

          <h2>Deposits and Payments</h2>
          <p>
            Deposits are used to reserve project time and begin planning. Full package payments and
            monthly care plan subscriptions may also be paid through Stripe Checkout on this
            website. Card details are processed by Stripe and are not stored by this website.
          </p>

          <h2>Client Responsibilities</h2>
          <p>
            Clients are responsible for providing requested content, brand assets, business details,
            account access, feedback, and approvals in a timely manner. Delays in client feedback or
            materials may extend project timelines.
          </p>

          <h2>Revisions</h2>
          <p>
            Revision rounds are included based on the selected package. Additional revisions,
            pages, integrations, or scope changes may be quoted separately.
          </p>

          <h2>Refund Policy</h2>
          <p>
            Because website projects reserve time and involve custom work, deposits are generally
            non-refundable once project planning or production begins. If a project is cancelled
            before work starts, refund eligibility may be reviewed case by case. Monthly maintenance
            subscriptions may be cancelled before the next billing period.
          </p>

          <h2>Ownership</h2>
          <p>
            Once the project is paid in full, the client owns the completed website files and
            project-specific content, subject to third-party licenses, stock assets, fonts, plugins,
            hosting platforms, or external services used in the project.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Domains, hosting, email, Stripe, booking tools, plugins, analytics, and other third-party
            services may have separate terms, fees, and account requirements.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
