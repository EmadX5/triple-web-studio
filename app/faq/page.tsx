import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about website pricing, timelines, ownership, hosting, redesigns, maintenance, Google Business Profile support, and payment setup."
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">FAQ</p>
          <h1>Clear answers before you start a website project.</h1>
          <p>
            Pricing, timelines, ownership, hosting, maintenance, local profile support, and what we need
            from you before design begins.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Questions"
            title="What Canadian business owners usually ask first."
            description="Still unsure? Send a quote request and we will answer based on your exact business, location, and website needs."
          />
          <FaqAccordion />
          <div className="cta-row">
            <Link className="button button-primary" href="/contact">
              Ask Your Question
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/pricing">
              Compare Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
