import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import ImageGridSection from "@/components/ImageGridSection";
import HardwareSection from "@/components/HardwareSection";
import ShameSection from "@/components/ShameSection";
import ArticlesSection from "@/components/ArticlesSection";
import SocialSection from "@/components/SocialSection";
import ReviewSection from "@/components/ReviewSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <ComparisonSection />
        <ProcessSection />
        <ImageGridSection />
        <HardwareSection />
        <ShameSection />
        <ArticlesSection />
        <SocialSection />
        <ReviewSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
