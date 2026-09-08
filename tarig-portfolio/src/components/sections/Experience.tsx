import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading label="experience" title="Timeline" />
        </Reveal>

        <ol className="mt-12 relative border-l border-line pl-8 space-y-10 max-w-2xl">
          {experience.map((item, i) => (
            <Reveal key={`${item.organization}-${i}`} delayMs={i * 80}>
              <li className="relative">
                <span className="absolute -left-[2.35rem] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-xs text-ink-faint">{item.period}</p>
                <h3 className="mt-1 font-display font-semibold text-ink">{item.role}</h3>
                <p className="text-sm text-accent">{item.organization}</p>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
