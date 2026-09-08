import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { socials, EMAIL } from "@/data/socials";

// Paste your Formspree endpoint here (e.g. "https://formspree.io/f/xxxxxxx")
// or wire up EmailJS / your own backend inside handleSubmit below.
// Leave empty to fall back to a mailto: link — no keys are hardcoded either way.
const FORM_ENDPOINT = "";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(String(data.get("message") ?? ""));
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr,1.1fr] gap-14">
        <Reveal>
          <SectionHeading
            label="contact"
            title="Let's build something."
            description="Open to Flutter, mobile and web development work. Reach out directly or send a message."
          />

          <ul className="mt-8 space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.icon === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors"
                >
                  <span className="font-mono text-accent">{`>`}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={100}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-xs font-mono text-ink-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-md border border-line bg-bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono text-ink-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-md border border-line bg-bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-md border border-line bg-bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-2.5 rounded-md bg-accent text-bg text-sm font-medium hover:bg-accent-soft transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && <p className="text-sm text-accent">Message sent — thank you.</p>}
            {status === "error" && (
              <p className="text-sm text-[#F56A5B]">Something went wrong — please email me directly.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
