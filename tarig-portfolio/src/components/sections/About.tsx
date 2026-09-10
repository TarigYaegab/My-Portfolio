import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const POINTS = [
  {
    label: "What I build",
    text: "Software applications and web interfaces focused on practical solutions, usability, and maintainable code.",
  },
  {
    label: "How I work",
    text: "Clean architecture, separating business logic from data and UI, so features can evolve without breaking the whole system.",
  },
  {
    label: "What I'm after",
    text: "Building dependable software that solves real problems — from idea to a working product.",
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
            description="Software engineering focused on building practical applications across mobile and web technologies, with a strong interest in clean architecture and maintainable software. I care about code that stays readable once a project grows past its first version."
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
