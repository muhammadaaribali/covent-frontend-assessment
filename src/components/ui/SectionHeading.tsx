export function SectionHeading({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        {heading}
      </h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </div>
  );
}
