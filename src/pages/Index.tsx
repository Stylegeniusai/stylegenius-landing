
import Hero from "@/components/Hero";
import AppFeatures from "@/components/AppFeatures";
import AppInAction from "@/components/AppInAction";
import StyleGeniusEverywhere from "@/components/StyleGeniusEverywhere";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <AppFeatures />
      <AppInAction />
      <StyleGeniusEverywhere />
      <HowItWorks />
      <Features />
      <AppShowcase />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
