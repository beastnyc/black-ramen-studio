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
    id: "tea-infused-cookies",
    title: "TEA INFUSED COOKIES",
    publication: "Black Ramen Studio — Project 2015",
    credits: "BRAND IDENTITY Product PACKAGING Food",
    imageCount: 12,
    coverImage: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&h=1000&q=80",
    ],
    year: "2015",
    category: "Food & Brand",
    description: "TEA INFUSED COOKIES APPROACHED US TO BUILD THEIR ARTISANAL FOOD BRAND FOR 2015. THE BRIEF: POSITION THE BROOKLYN-BASED COMPANY AS A PIONEER IN INNOVATIVE BAKING BY GROUNDING IT IN AUTHENTIC TEA CULTURE AND CRAFT CONFECTIONERY. WE WORKED FROM CONCEPT TO LAUNCH, PRODUCING A BRAND IDENTITY THAT MERGED TRADITIONAL TEA CEREMONY WITH CONTEMPORARY BROOKLYN FOOD CULTURE AND SPARKED A CONVERSATION ABOUT MINDFUL INDULGENCE THAT EXPANDED THE BRAND'S REACH BEYOND LOCAL MARKETS.",
  },
  {
    id: "ritual-commerce",
    title: "RITUAL COMMERCE",
    publication: "Black Ramen Studio — Project 2024",
    credits: "DEVELOPMENT Studio DESIGN Collective",
    imageCount: 8,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=1000&q=80",
    ],
    year: "2024",
    category: "Development",
    description: "RITUAL COMMERCE APPROACHED US TO BUILD THEIR NEXT-GENERATION E-COMMERCE PLATFORM FOR 2024. THE BRIEF: POSITION THE BRAND AS A LEADER IN REGENERATIVE BUSINESS BY GROUNDING IT IN AUTHENTIC SUSTAINABILITY AND TRANSPARENT PRACTICES. WE WORKED FROM CONCEPT TO LAUNCH, PRODUCING A PLATFORM THAT SHOWCASED ETHICAL SUPPLY CHAINS AND SPARKED A MULTI-CHANNEL CONVERSATION ABOUT CONSCIOUS COMMERCE THAT EXPANDED THE BRAND'S REACH.",
  },
  {
    id: "community-os",
    title: "COMMUNITY OS",
    publication: "Black Ramen Studio — Project 2024",
    credits: "STRATEGY Studio RESEARCH Collective",
    imageCount: 15,
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&h=1000&q=80",
    ],
    year: "2024",
    category: "Strategy",
    description: "COMMUNITY OS APPROACHED US TO DESIGN THEIR DISTRIBUTED NETWORK FRAMEWORK FOR 2024. THE BRIEF: POSITION THE ORGANIZATION AS A PIONEER IN COLLECTIVE INTELLIGENCE BY GROUNDING IT IN AUTHENTIC COLLABORATION AND SYSTEMS THINKING. WE WORKED FROM RESEARCH TO IMPLEMENTATION, PRODUCING FRAMEWORKS THAT EMPOWERED DISTRIBUTED TEAMS AND SPARKED NEW MODELS FOR ORGANIZATIONAL DESIGN.",
  },
  {
    id: "slow-web",
    title: "THE SLOW WEB",
    publication: "Black Ramen Studio — Project 2023",
    credits: "WRITING Studio PUBLISHING Collective",
    imageCount: 6,
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1456324463128-7ff6903988d8?auto=format&fit=crop&w=800&h=1000&q=80",
    ],
    year: "2023",
    category: "Editorial",
    description: "THE SLOW WEB APPROACHED US TO CREATE THEIR DIGITAL ETHICS MANIFESTO FOR 2023. THE BRIEF: POSITION THE MOVEMENT AS A COUNTERPOINT TO ATTENTION CAPITALISM BY GROUNDING IT IN AUTHENTIC DIGITAL EXPERIENCES AND MINDFUL DESIGN. WE WORKED FROM IDEATION TO PUBLICATION, PRODUCING AN EDITORIAL SERIES THAT CHALLENGED DIGITAL NORMS AND SPARKED CONVERSATIONS ABOUT INTENTIONAL TECHNOLOGY USE.",
  },
  {
    id: "night-market",
    title: "NIGHT MARKET",
    publication: "Black Ramen Studio — Project 2023",
    credits: "SPATIAL Studio SOUND Collective",
    imageCount: 20,
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&h=1000&q=80",
    ],
    year: "2023",
    category: "Installation",
    description: "NIGHT MARKET APPROACHED US TO CREATE AN IMMERSIVE CULTURAL EXPERIENCE FOR 2023. THE BRIEF: POSITION THE INSTALLATION AS A BRIDGE BETWEEN HERITAGE AND CONTEMPORARY CULTURE BY GROUNDING IT IN AUTHENTIC DIASPORA NARRATIVES. WE WORKED FROM CONCEPT TO EXECUTION, PRODUCING A MULTI-SENSORY ENVIRONMENT THAT WOVE TOGETHER FOOD, SOUND, AND STORYTELLING TO CREATE AN UNFORGETTABLE JOURNEY.",
  },
  {
    id: "open-source",
    title: "OPEN SOURCE TOOLS",
    publication: "Black Ramen Studio — Project 2023",
    credits: "DEVELOPMENT Studio COMMUNITY Collective",
    imageCount: 10,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&h=1000&q=80",
    ],
    year: "2023",
    category: "Development",
    description: "OPEN SOURCE TOOLS APPROACHED US TO BUILD ACCESSIBLE DESIGN SYSTEMS FOR 2023. THE BRIEF: POSITION THE PROJECT AS A DEMOCRATIZING FORCE IN DESIGN BY GROUNDING IT IN AUTHENTIC ACCESSIBILITY AND COMMUNITY CONTRIBUTION. WE WORKED FROM CONCEPT TO DEPLOYMENT, PRODUCING COMPONENT LIBRARIES THAT EMPOWERED CREATORS AND SPARKED A MOVEMENT FOR DESIGN AS A PUBLIC GOOD.",
  },
];

// To use local images instead of Unsplash:
// 1. Add your images to /public/projects/[project-slug]/cover.jpg
// 2. Replace the coverImage URLs above with: "/projects/[project-slug]/cover.jpg"
