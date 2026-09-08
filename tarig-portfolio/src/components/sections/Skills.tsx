import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading label="skills" title="Technologies I work with" />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.category} delayMs={i * 80}>
              <div className="h-full rounded-lg border border-line bg-bg-surface p-5">
                <h3 className="font-display text-sm font-semibold text-ink">{group.category}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[12px] font-mono px-2.5 py-1 rounded border border-line text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
