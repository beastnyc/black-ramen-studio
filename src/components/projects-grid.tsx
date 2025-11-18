/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <section className="archive-projects-section">
      {/* Projects Grid */}
      <div className="archive-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="archive-project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            {/* Project Image */}
            <div className="archive-project-image">
              <img src={project.coverImage} alt={project.title} />
            </div>

            {/* Project Info */}
            <div className="archive-project-info">
              <h3 className="archive-project-title">{project.title}</h3>
              <p className="archive-project-count">[{project.imageCount}] images</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
