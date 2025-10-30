"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const STATEMENT_PARTS = {
  name: "Black Ramen Studio",
  line1: " is a multidisciplinary creative practice",
  line2: "that refuses to stay in one lane. We design, code, strategize,",
  line3: "and tell stories across any medium that serves the idea.",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState(() =>
    new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(new Date()),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentDate(
        new Intl.DateTimeFormat("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }).format(new Date()),
      );
    }, 60000);
    return () => window.clearInterval(timer);
  }, []);

  const listeningLink = useMemo(
    () => ({
      href: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
      label: "Lo-Fi Beats",
    }),
    [],
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const [navOpen, setNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    };

    if (navOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navOpen]);

  return (
    <header className="homeHeader">
      <div className="homeHeader__content">
        <h2>
          <span style={{ fontWeight: 400 }}>{STATEMENT_PARTS.name}</span>
          {STATEMENT_PARTS.line1}
          <br />
          {STATEMENT_PARTS.line2}
          <br />
          {STATEMENT_PARTS.line3}
        </h2>
      </div>

      <div className="homeHeader__center" ref={dropdownRef}>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="homeHeader__menuButton"
        >
          Menu
        </button>

        {navOpen && (
          <nav className="homeHeader__dropdown" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className={isActive(link.href) ? "homeHeader__dropdownLink is-active" : "homeHeader__dropdownLink"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <div className="homeHeader__info">
        <div className="homeHeader__meta">
          <span className="homeHeader__metaLabel">
            <span style={{ fontWeight: 400 }}>[{currentDate}]</span> <span style={{ fontWeight: 700 }}>Currently Brewing</span>
          </span>
        </div>
        <div className="homeHeader__meta">
          <span className="homeHeader__metaLabel">
            <span style={{ fontWeight: 400 }}>Listening to</span>{" "}
            <a href={listeningLink.href} target="_blank" rel="noreferrer" className="homeHeader__metaLink">
              {listeningLink.label}
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}
