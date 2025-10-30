export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-[24px] py-[96px]">
      <div className="space-y-[24px]">
        <p className="text-[1.3rem] uppercase tracking-[0.45em] text-[var(--accent-broth)]">Get in Touch</p>
        <h1 className="text-[clamp(3.2rem,4vw,5rem)] font-[600] leading-[1.12]">
          Let&apos;s cook something together
        </h1>
        <div className="max-w-[64ch] space-y-[18px] text-[1.6rem] text-[var(--muted)]">
          <p>
            Have a project that defies easy categorization? Need help with design, development, strategy, or
            storytelling? Or maybe something we haven&apos;t thought of yet?
          </p>
          <p>We&apos;re always open to new collaborations and creative challenges.</p>
          <div className="pt-[24px]">
            <a
              href="mailto:hello@blackramenstudio.com"
              className="inline-block rounded-[8px] border border-[var(--border)] bg-[var(--accent-warm)] px-[32px] py-[16px] text-[1.4rem] font-[600] uppercase tracking-[0.24em] text-[#ffffff] transition hover:bg-[var(--accent-broth)]"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
