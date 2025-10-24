
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AppFeatures from "@/components/AppFeatures";
// import AppInAction from "@/components/AppInAction";
import StyleGeniusEverywhere from "@/components/StyleGeniusEverywhere";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navigation />
      <Hero />
      <AppFeatures />
      {/* <AppInAction /> */}
      <StyleGeniusEverywhere />
      <HowItWorks />
      <Reviews />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
