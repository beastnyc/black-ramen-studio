/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo } from "react";
import { heroImages } from "@/data/hero-images";

export function InstagramReelHero() {
  const duplicatedImages = useMemo(() => [...heroImages, ...heroImages, ...heroImages], []);

  return (
    <section className="scrolling-hero-section">
      {/* Scrolling image strip */}
      <div className="scrolling-hero-gallery">
        <div className="scrolling-hero-strip">
          {duplicatedImages.map((image, index) => (
            <div key={`${image.alt}-${index}`} className="scrolling-hero-card">
              <img src={image.src} alt={image.alt} loading={index < heroImages.length ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
