import HeroSction from "../components/herosection/hero";
import KijaniLabTimeline from "../components/vison/impact";
import NewsletterCard from "../components/vison/newslleter";
import MissionSection from "../components/vison/vision";

export default function HomePage() {
  return (
    <div>
      <HeroSction/>
      <MissionSection/>
      <KijaniLabTimeline/>
      <NewsletterCard/>

    </div>
  )
}
