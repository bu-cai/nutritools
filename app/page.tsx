import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import ToolsGrid from "@/components/home/ToolsGrid";
import HowItWorks from "@/components/home/HowItWorks";
import SeoStats from "@/components/home/SeoStats";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <SeoStats />
        <ToolsGrid />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
