import HeroSection from '../components/HeroSection'
import StatsBanner from '../components/StatsBanner'
import ResearchSection from '../components/ResearchSection'
import LeadershipSection from '../components/LeadershipSection'
import AILabSection from '../components/AILabSection'
import EventCard from '../components/EventCard'


export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-sans text-navy antialiased">
      <HeroSection />
      <StatsBanner />

      <section className="px-6 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ResearchSection />
          <LeadershipSection />
          <AILabSection />
          <EventCard />
        </div>
      </section>
    </div>
  )
}
