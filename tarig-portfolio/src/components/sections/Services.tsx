import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading label="services" title="What I can help with" />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-lg overflow-hidden border border-line">
          {services.map((service, i) => (
            <Reveal key={service.title} delayMs={(i % 3) * 60} className="bg-bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
