export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-[24px] py-[96px]">
      <div className="space-y-[24px]">
        <p className="text-[1.3rem] uppercase tracking-[0.45em] text-[var(--accent-broth)]">About Us</p>
        <h1 className="text-[clamp(3.2rem,4vw,5rem)] font-[600] leading-[1.12]">
          Built on curiosity and craft
        </h1>
        <div className="max-w-[64ch] space-y-[18px] text-[1.6rem] text-[var(--muted)]">
          <p>
            Black Ramen Studio was born from a simple belief: the best creative work happens when you refuse to be
            boxed in by traditional disciplines.
          </p>
          <p>
            Like a perfectly balanced bowl of ramen, we blend seemingly disparate ingredients into cohesive
            experiences. Design meets code. Strategy meets storytelling. Research meets intuition.
          </p>
          <p>
            We&apos;re a multipotentiality studio for a multipotentiality world — embracing complexity, celebrating
            curiosity, and delivering work that matters.
          </p>
        </div>
      </div>
    </div>
  );
}
