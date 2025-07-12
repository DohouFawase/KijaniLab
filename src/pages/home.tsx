import HeroSction from "../components/herosection/hero";
import ServicesSection from "../components/service/service";
import KijaniLabTimeline from "../components/vison/impact";
import NewsletterCard from "../components/vison/newslleter";
import MissionSection from "../components/vison/vision";

export default function HomePage() {
  return (
    <div>
      <HeroSction/>
      <MissionSection/>
      <KijaniLabTimeline/>
      <ServicesSection/>
      <NewsletterCard/>

    </div>
  )
}
