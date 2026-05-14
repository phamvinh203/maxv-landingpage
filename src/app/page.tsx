import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import CustomerTestimonialsSection from "@/src/components/sections/CustomerTestimonialsSection";
import FAQSection from "@/src/components/sections/FAQSection";
import FeaturesSection from "@/src/components/sections/FeaturesSection";
import HeroSection from "@/src/components/sections/HeroSection";
import PricingSection from "@/src/components/sections/PricingSection";
import ProblemsSection from "@/src/components/sections/ProblemsSection";
import ReasonsSection from "@/src/components/sections/ReasonsSection";
import RegisterSection from "@/src/components/sections/RegisterSection";
import SolutionsSection from "@/src/components/sections/SolutionsSection";
import TrustedCompaniesSection from "@/src/components/sections/TrustedCompaniesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustedCompaniesSection />
      <ProblemsSection />
      <SolutionsSection />
      <ReasonsSection />
      <FeaturesSection />
      <CustomerTestimonialsSection />
      <PricingSection />
      <RegisterSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
