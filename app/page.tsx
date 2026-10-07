import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import TrustedBy from "@/components/TrustedBy";
import InteractivePreview from "@/components/InteractivePreview";
import ModulesGrid from "@/components/ModulesGrid";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <SolutionSection />
        <ServicesSection />
        <InsightsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}
