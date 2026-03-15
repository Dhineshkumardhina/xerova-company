import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import PrintingSection from "@/components/PrintingSection";
import MerchandiseSection from "@/components/MerchandiseSection";
import RnDSection from "@/components/RnDSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop, Loader } from "@/components/UIElements";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className={`min-h-screen dark:gradient-bg gradient-bg-light scrollbar-custom ${loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}>
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <PrintingSection />
        <MerchandiseSection />
        <RnDSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
