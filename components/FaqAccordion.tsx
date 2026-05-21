import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export function FaqAccordion() {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details key={faq.question} open={index === 0}>
          <summary>
            <span>{faq.question}</span>
            <ChevronDown size={20} aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
