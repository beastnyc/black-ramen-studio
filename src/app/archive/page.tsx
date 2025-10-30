/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const projects = [
  {
    title: "Neon Futures Brand System",
    category: "Design",
    year: "2024",
    description: "Complete visual identity for a tech collective exploring AI ethics and creative autonomy.",
    tags: ["Branding", "Art Direction", "Print"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
  },
  {
    title: "Ritual Commerce Platform",
    category: "Development",
    year: "2024",
    description: "Full-stack e-commerce experience for a regenerative agriculture cooperative.",
    tags: ["React", "TypeScript", "Shopify"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
  },
  {
    title: "Community OS Strategy",
    category: "Strategy",
    year: "2024",
    description: "Organizational design and engagement frameworks for a distributed creative network.",
    tags: ["Research", "Workshops", "Systems"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    status: "In Progress",
  },
  {
    title: "The Slow Web Manifesto",
    category: "Writing",
    year: "2023",
    description: "Editorial series on building digital spaces that respect attention and foster depth.",
    tags: ["Editorial", "Publishing", "Culture"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    status: "Published",
  },
  {
    title: "Night Market Installation",
    category: "Spatial",
    year: "2023",
    description: "Immersive food and sound experience exploring Asian diaspora narratives.",
    tags: ["Installation", "Sound Design", "Storytelling"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
  },
  {
    title: "Open Source Design Tools",
    category: "Development",
    year: "2023",
    description: "Contributing to accessible design systems and component libraries for the commons.",
    tags: ["Open Source", "Design Systems", "Community"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    status: "Ongoing",
  },
];

const categories = ["All", "Design", "Development", "Strategy", "Writing", "Spatial"];

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-[24px] py-[96px]">
      <div className="mb-[64px] space-y-[24px]">
        <p className="text-[1.3rem] uppercase tracking-[0.45em] text-[var(--accent-broth)]">Project Archive</p>
        <h1 className="text-[clamp(3.2rem,4vw,5rem)] font-[600] leading-[1.12]">
          Experiments across mediums
        </h1>
        <p className="max-w-[64ch] text-[1.6rem] text-[var(--muted)]">
          A living archive of our work spanning design, development, strategy, writing, and spatial experiences. Each
          project is an exploration of what happens when you refuse to stay in one lane.
        </p>
      </div>

      {/* Category filters - can be made interactive with client component */}
      <div className="mb-[48px] flex flex-wrap gap-[12px]">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-secondary)] px-[20px] py-[10px] text-[1.2rem] uppercase tracking-[0.24em] text-[var(--muted)] transition hover:border-[var(--accent-warm)] hover:text-[var(--fg)]"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-[32px] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] transition hover:border-[var(--accent-warm)]"
          >
            {/* Project image */}
            <div className="relative h-[280px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />

              {/* Status badge */}
              <div className="absolute right-[16px] top-[16px] rounded-[6px] border border-[var(--border)] bg-[var(--bg)]/80 px-[12px] py-[6px] text-[1rem] uppercase tracking-[0.24em] text-[var(--accent-broth)] backdrop-blur-sm">
                {project.status}
              </div>
            </div>

            {/* Project details */}
            <div className="space-y-[16px] p-[24px]">
              <div className="flex items-center justify-between">
                <span className="text-[1.1rem] uppercase tracking-[0.32em] text-[var(--accent-broth)]">
                  {project.category}
                </span>
                <span className="text-[1.1rem] text-[var(--muted)]">{project.year}</span>
              </div>

              <h2 className="text-[2rem] font-[600] leading-[1.2]">{project.title}</h2>

              <p className="text-[1.4rem] leading-[1.6] text-[var(--muted)]">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-[8px] pt-[8px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] bg-[var(--bg)] px-[10px] py-[4px] text-[1rem] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View project link */}
              <Link
                href={`/archive/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-[16px] inline-flex items-center gap-[8px] text-[1.2rem] font-[600] uppercase tracking-[0.24em] text-[var(--accent-warm)] transition hover:gap-[12px]"
              >
                View Project
                <span className="transition-transform">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load more button */}
      <div className="mt-[64px] flex justify-center">
        <button className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-secondary)] px-[32px] py-[16px] text-[1.3rem] font-[600] uppercase tracking-[0.24em] transition hover:border-[var(--accent-warm)] hover:bg-[var(--accent-warm)] hover:text-[#ffffff]">
          Load More Projects
        </button>
      </div>
    </div>
  );
}
