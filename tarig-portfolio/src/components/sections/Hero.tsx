import TerminalWindow from "@/components/ui/TerminalWindow";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr,1fr] gap-14 items-center">
        <div className="animate-fade-up">
          <p className="section-label">{`// software developer`}</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-ink">
            Tarig Yagoub
          </h1>
          <p className="mt-3 text-lg text-ink-muted">Software Developer / Flutter Developer</p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-muted">
            I build modern, scalable mobile and web applications — with a focus on Flutter and
            clean architecture that holds up as a product grows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-accent text-bg text-sm font-medium hover:bg-accent-soft transition-colors"
            >
              View my projects
            </a>
            <a
              href="https://github.com/[YOUR_GITHUB]"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-md border border-line text-ink text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a href="#contact" className="text-sm text-ink-muted hover:text-ink transition-colors">
              Contact me →
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms] opacity-0">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
