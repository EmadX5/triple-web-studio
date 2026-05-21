import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Portfolio and Website Examples",
  description:
    "Sample website concepts for contractors, barbers, restaurants, clinics, gyms, cleaning companies, and service brands."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Portfolio / Work Examples</p>
          <h1>Website directions that feel credible, refined, and ready for customers.</h1>
          <p>
            These polished placeholder concepts show how Triple Web Studio positions different
            business types with clear services, strong calls to action, and mobile-first layouts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Sample directions"
            title="Professional examples for the businesses Canadians search for every day."
            description="Each example is a realistic direction, not a live client case study. Real projects can replace these once reviews and approved work are available."
          />
          <PortfolioGrid />
          <div className="cta-row">
            <Link className="button button-primary" href="/contact">
              Request a Similar Website
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/pricing">
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
