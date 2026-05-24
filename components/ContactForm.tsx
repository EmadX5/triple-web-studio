"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const packageOptions = [
  "Starter Website",
  "Business Website",
  "Premium Growth Website",
  "Monthly Maintenance",
  "Not sure yet"
];

const budgetOptions = [
  "$899-$1,500",
  "$1,500-$2,500",
  "$2,500-$4,000",
  "$4,000+",
  "Need guidance"
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-confirmation" role="status">
        <strong>Thanks. Your quote request has been received.</strong>
        <p>
          We will review your business details and reply with clear next steps. If your project
          is urgent, you can also email hello@triplewebdesign.com.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Business name
          <input name="businessName" type="text" autoComplete="organization" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          City/Province
          <input name="location" type="text" autoComplete="address-level2" required />
        </label>
        <label>
          Current website URL, optional
          <input name="website" type="url" placeholder="https://" />
        </label>
        <label>
          Type of business
          <input name="businessType" type="text" placeholder="Plumber, salon, clinic..." required />
        </label>
        <label>
          Package interested in
          <select name="packageInterest" defaultValue="Business Website" required>
            {packageOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Budget range
          <select name="budget" defaultValue="Need guidance" required>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what you need your website to do."
          required
        />
      </label>

      {error ? <p className="form-error" role="alert">{error}</p> : null}

      <button className="button button-primary" type="submit" disabled={loading}>
        <Send size={18} aria-hidden="true" />
        {loading ? "Sending..." : "Request Free Quote"}
      </button>
    </form>
  );
}
