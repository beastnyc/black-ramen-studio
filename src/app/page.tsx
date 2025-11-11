import { SiteHeader } from "@/components/site-header";
import { InstagramReelHero } from "@/components/instagram-reel-hero";

export default function Home() {
  return (
    <div className="home-shell" id="home">
      <SiteHeader />
      <InstagramReelHero />
    </div>
  );
}
