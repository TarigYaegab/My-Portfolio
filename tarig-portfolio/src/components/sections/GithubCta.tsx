import Reveal from "@/components/ui/Reveal";

export default function GithubCta() {
  return (
    <section className="py-16 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="rounded-lg border border-line bg-bg-surface px-6 py-10 sm:px-12 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="section-label">{`Open-Source`}</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ink">
                Explore my code and open-source projects.
              </h2>
            </div>
            <a
              href="https://github.com/TarigYaegab"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 px-6 py-3 rounded-md bg-accent text-bg text-sm font-medium hover:bg-accent-soft transition-colors"
            >
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
