import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import ModesSection from "@/components/homepage/ModesSection";
import StatsSection from "@/components/homepage/StatsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import CtaSection from "@/components/homepage/CtaSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";

export default function Home() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ModesSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}