import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms / Refunds" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            Triple Web Design
          </Link>
          <p>
            Premium websites for Canadian businesses that need one clear online home, stronger
            trust, and easier ways for customers to call, book, or request a quote.
          </p>
          <Link className="button button-primary footer-cta" href="/contact">
            Get a Clear Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h2>Explore</h2>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              <MapPin size={18} aria-hidden="true" />
              {siteConfig.location}, serving {siteConfig.serviceArea}
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
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} Triple Web Design. All rights reserved.</span>
        <span>Clear scope, no surprise fees, optional monthly care.</span>
      </div>
    </footer>
  );
}
