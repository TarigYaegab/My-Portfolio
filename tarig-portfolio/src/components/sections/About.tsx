import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const POINTS = [
  {
    label: "What I build",
    text: "Mobile applications with Flutter, and web interfaces — built to be maintainable, not just to work once.",
  },
  {
    label: "How I work",
    text: "Clean architecture, separating domain logic from data and UI, so features can change without breaking each other.",
  },
  {
    label: "What I'm after",
    text: "Shipping software that's dependable in real use — not just a demo.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="about-me"
            title="I turn ideas into working software."
            description="Software developer focused on Flutter, with working knowledge of web technologies and Python. I care about code that stays readable once a project grows past its first version."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {POINTS.map((p, i) => (
            <Reveal key={p.label} delayMs={i * 100}>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="font-mono text-xs text-accent">{p.label}</p>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
