import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PrizesSection from '@/components/PrizesSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import RequirementsSection from '@/components/RequirementsSection';
import TicketSection from '@/components/TicketSection';
import DonationSection from '@/components/DonationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PrizesSection />
        <WhyJoinSection />
        <RequirementsSection />
        <TicketSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
