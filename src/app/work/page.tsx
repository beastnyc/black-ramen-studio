export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-[24px] py-[96px]">
      <div className="space-y-[24px]">
        <p className="text-[1.3rem] uppercase tracking-[0.45em] text-[var(--accent-broth)]">Selected Work</p>
        <h1 className="text-[clamp(3.2rem,4vw,5rem)] font-[600] leading-[1.12]">
          Projects that push boundaries
        </h1>
        <p className="max-w-[64ch] text-[1.6rem] text-[var(--muted)]">
          Coming soon: A showcase of our design, development, strategy, and storytelling work across various mediums.
        </p>
      </div>
    </div>
  );
}
