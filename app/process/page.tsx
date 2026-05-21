import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Website Design Process",
  description:
    "A clear premium website design process from consultation and strategy to design, revisions, launch, and support."
};

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Process</p>
          <h1>A simple website process for business owners who do not have time to chase details.</h1>
          <p>
            We keep the project focused, explain decisions clearly, and build toward launch from
            the first call.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Five steps"
            title="From free consultation to launch and support."
            description="Each phase is designed to keep momentum high and make sure your website is useful, credible, and ready for customers."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section-paper">
        <div className="container split-grid">
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Website project planning meeting with notes and laptop"
            />
          </div>
          <div className="content-stack">
            <SectionHeader
              eyebrow="What keeps projects moving"
              title="Clear content, fast feedback, and one decision at a time."
              description="We help you organize the business details customers need most, then turn them into a clean website structure."
            />
            <ul className="check-list">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Bring your logo, service list, photos, contact details, and any old website link.
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                We shape page structure, copy prompts, visual direction, and conversion paths.
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                You review the working site before launch and request package-based revisions.
              </li>
            </ul>
            <div className="cta-row">
              <Link className="button button-primary" href="/contact">
                Start the Process
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
