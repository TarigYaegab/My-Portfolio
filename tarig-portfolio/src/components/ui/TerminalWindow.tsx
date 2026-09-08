import { useEffect, useState } from "react";

const LINES = [
  { prompt: "$ whoami", output: "tarig_yagoub" },
  { prompt: "$ cat role.txt", output: "Software Developer / Flutter Developer" },
  { prompt: "$ flutter build apk --release", output: "Building... ✓ Done in 41.2s" },
  { prompt: "$ git push origin main", output: "Everything up-to-date" },
];

/**
 * A typed-out terminal session — the developer's native environment,
 * used as the hero's visual anchor instead of a stock photo.
 */
export default function TerminalWindow() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState<boolean[]>([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex].prompt;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(t);
    }

    const revealTimer = setTimeout(() => {
      setShowOutput((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
      const nextLineTimer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 420);
      return () => clearTimeout(nextLineTimer);
    }, 280);
    return () => clearTimeout(revealTimer);
  }, [charIndex, lineIndex]);

  return (
    <div className="w-full rounded-lg border border-line bg-bg-surface shadow-2xl shadow-black/30 overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-bg-alt">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F56A5B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#59C97A]" />
        <span className="ml-3 text-xs text-ink-faint font-mono">tarig@dev: ~/portfolio</span>
      </div>
      <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[220px]">
        {LINES.slice(0, lineIndex + 1).map((line, i) => {
          const isCurrent = i === lineIndex;
          const text = isCurrent ? line.prompt.slice(0, charIndex) : line.prompt;
          return (
            <div key={i} className="mb-2">
              <div className="text-accent">
                {text}
                {isCurrent && charIndex < line.prompt.length && (
                  <span className="inline-block w-[7px] h-[1em] bg-accent align-middle ml-0.5 animate-blink" />
                )}
              </div>
              {showOutput[i] && <div className="text-ink-muted pl-0.5">{line.output}</div>}
            </div>
          );
        })}
        {lineIndex >= LINES.length && (
          <div className="text-accent">
            $ <span className="inline-block w-[7px] h-[1em] bg-accent align-middle ml-0.5 animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
