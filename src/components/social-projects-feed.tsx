/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/data/projects";

export function SocialProjectsFeed() {
  return (
    <section className="social-feed-section">
      <div className="social-feed-container">
        {projects.map((project) => (
          <article key={project.id} className="social-feed-card">
            <div className="social-feed-card-image">
              <img src={project.coverImage} alt={project.title} loading="lazy" />
            </div>
            <div className="social-feed-card-content">
              <div className="social-feed-card-header">
                <h3 className="social-feed-card-title">{project.title}</h3>
                <p className="social-feed-card-count">[{project.imageCount}] IMAGES</p>
              </div>
              <p className="social-feed-card-publication">{project.publication}</p>
              <p className="social-feed-card-credits">{project.credits}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
