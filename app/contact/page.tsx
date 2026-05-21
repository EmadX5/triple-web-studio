import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Free Quote",
  description:
    "Request a free website design quote from Triple Web Studio for your Canadian business."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Contact</p>
          <h1>Tell us about your business and the website you need.</h1>
          <p>
            Share your goals, business type, city, budget range, and the package you are considering.
            We will reply with practical next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid split-grid-start">
          <div className="content-stack">
            <SectionHeader
              eyebrow="Free quote"
              title="Start with a quick project request."
              description="The more detail you share, the easier it is to recommend the right package, timeline, and add-ons."
            />
            <ul className="contact-list">
              <li>
                <MapPin size={18} aria-hidden="true" />
                Based in {siteConfig.location}, serving businesses across Canada.
              </li>
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
