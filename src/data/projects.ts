export interface Project {
  id: string;
  title: string;
  publication: string;
  credits: string;
  imageCount: number;
  coverImage: string;
  images?: string[];
  year: string;
  category: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "neon-futures",
    title: "NEON FUTURES BRAND SYSTEM",
    publication: "Black Ramen Studio — Project 2024",
    credits: "DIRECTION Studio IDENTITY Collective",
    imageCount: 12,
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "/projects/neon-futures/01.jpg",
      "/projects/neon-futures/02.jpg",
      "/projects/neon-futures/03.jpg",
    ],
    year: "2024",
    category: "Design",
    description: "Complete visual identity for a tech collective exploring AI ethics and creative autonomy.",
  },
  {
    id: "ritual-commerce",
    title: "RITUAL COMMERCE PLATFORM",
    publication: "Black Ramen Studio — Project 2024",
    credits: "DEVELOPMENT Studio DESIGN Collective",
    imageCount: 8,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=1000&q=80",
    year: "2024",
    category: "Development",
  },
  {
    id: "community-os",
    title: "COMMUNITY OS STRATEGY",
    publication: "Black Ramen Studio — Project 2024",
    credits: "STRATEGY Studio RESEARCH Collective",
    imageCount: 15,
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=1000&q=80",
    year: "2024",
    category: "Strategy",
  },
  {
    id: "slow-web",
    title: "THE SLOW WEB MANIFESTO",
    publication: "Black Ramen Studio — Project 2023",
    credits: "WRITING Studio PUBLISHING Collective",
    imageCount: 6,
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&h=1000&q=80",
    year: "2023",
    category: "Editorial",
  },
  {
    id: "night-market",
    title: "NIGHT MARKET INSTALLATION",
    publication: "Black Ramen Studio — Project 2023",
    credits: "SPATIAL Studio SOUND Collective",
    imageCount: 20,
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=1000&q=80",
    year: "2023",
    category: "Installation",
  },
  {
    id: "open-source",
    title: "OPEN SOURCE DESIGN TOOLS",
    publication: "Black Ramen Studio — Project 2023",
    credits: "DEVELOPMENT Studio COMMUNITY Collective",
    imageCount: 10,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=1000&q=80",
    year: "2023",
    category: "Development",
  },
];

// To use local images instead of Unsplash:
// 1. Add your images to /public/projects/[project-slug]/cover.jpg
// 2. Replace the coverImage URLs above with: "/projects/[project-slug]/cover.jpg"
