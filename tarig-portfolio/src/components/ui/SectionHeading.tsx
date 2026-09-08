interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="section-label">{`// ${label}`}</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-muted text-[15px] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
