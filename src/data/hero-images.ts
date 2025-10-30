export interface HeroImage {
  src: string;
  alt: string;
}

// Add your hero images to /public/hero-images/ folder
// Then update the paths below
export const heroImages: HeroImage[] = [
  {
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Abstract paint strokes",
  },
  {
    src: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Artistic workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Creative portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Neon lights art",
  },
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Minimalist aesthetic",
  },
  {
    src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Japanese aesthetic",
  },
  {
    src: "https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Abstract colors",
  },
  {
    src: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&w=900&h=1600&q=80",
    alt: "Modern architecture",
  },
];

// Example: To use local images, replace URLs with paths like:
// {
//   src: "/hero-images/01.jpg",
//   alt: "Studio work showcase",
// },
