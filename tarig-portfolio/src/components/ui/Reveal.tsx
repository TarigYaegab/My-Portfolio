import type { PropsWithChildren } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  className?: string;
  delayMs?: number;
}

export default function Reveal({ children, className = "", delayMs = 0 }: PropsWithChildren<RevealProps>) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
