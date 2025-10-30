import Link from "next/link";

const quickLinks = [
  { href: "mailto:hello@blackramenstudio.com", label: "Email" },
  { href: "/#approach", label: "Approach" },
  { href: "/archive", label: "Archive" },
  { href: "/#stories", label: "Stories" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[24px] px-[24px] py-[32px] sm:flex-row sm:items-center sm:justify-between sm:gap-[32px]">
        <div className="space-y-[6px] text-[1.2rem] text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Black Ramen Studio</p>
          <p>Simmering ideas into existence.</p>
        </div>
        <div className="flex flex-wrap gap-[18px] text-[1.1rem] uppercase tracking-[0.22em] text-[var(--muted)]">
          {quickLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a key={link.label} href={link.href} className="transition hover:text-[var(--accent-warm)]">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="transition hover:text-[var(--accent-warm)]">
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
