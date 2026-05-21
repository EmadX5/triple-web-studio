import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/lib/data";

type PortfolioGridProps = {
  limit?: number;
};

export function PortfolioGrid({ limit }: PortfolioGridProps) {
  const items = typeof limit === "number" ? portfolioItems.slice(0, limit) : portfolioItems;

  return (
    <div className="portfolio-grid">
      {items.map((item) => (
        <article className="portfolio-card" key={item.name}>
          <div className="browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <img src={item.image} alt={`${item.name} ${item.category}`} loading="lazy" />
          <div className="portfolio-copy">
            <p>{item.category}</p>
            <h3>{item.name}</h3>
            <span>
              {item.result}
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
