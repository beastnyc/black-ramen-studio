/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <section className="projects-section">
      {/* Section Header */}
      <div className="projects-header">
        <motion.div
          className="projects-header-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="projects-label">ARCHIVE</span>
          <h2>
            <span className="bracket-label">[</span>
            SELECTED WORK
            <span className="bracket-label">]</span>
          </h2>
          <p className="projects-subtitle">
            A collection of multipotentiality in action
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {projects.map((project, index) => {
          const projectCode = `BR${String(index + 1).padStart(3, "0")}`;

          return (
            <motion.article
              key={project.id}
              className="project-card-wide"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="project-card-inner">
                {/* Left: Content */}
                <div className="project-content">
                  <div className="project-code">{projectCode}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description || `${project.title.toUpperCase()} APPROACHED US TO RELAUNCH THEIR CAMPAIGN FOR ${project.year}. THE BRIEF: POSITION THE BRAND ALONGSIDE LEADING NAMES IN ${project.category.toUpperCase()} BY GROUNDING IT IN AUTHENTIC ${project.category.toUpperCase()} AND COMMUNITY-DRIVEN STORYTELLING. WE WORKED FROM CONCEPT TO LAUNCH, PRODUCING A CAMPAIGN THAT SPOTLIGHTED A DIVERSE ROSTER OF STANDOUT PROJECTS AND SPARKED A MULTI-CHANNEL CONVERSATION THAT EXPANDED THE BRAND'S AUDIENCE AND CEMENTED ITS CREDIBILITY.`}
                  </p>
                </div>

                {/* Right: Image Grid */}
                <div className="project-images-grid">
                  {project.images?.slice(0, 5).map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="project-image-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img src={image} alt={`${project.title} ${imgIndex + 1}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
