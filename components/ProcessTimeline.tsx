import { processSteps } from "@/lib/data";

export function ProcessTimeline() {
  return (
    <div className="process-timeline">
      {processSteps.map((item) => (
        <article className="process-step" key={item.step}>
          <span>{item.step}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
