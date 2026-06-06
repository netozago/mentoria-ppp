import { ContextBar } from "@/components/ppp/programa/ContextBar";
import { Hero } from "@/components/ppp/programa/Hero";
import { Ticker } from "@/components/ppp/shared/Ticker";
import { ProblemSection } from "@/components/ppp/programa/ProblemSection";
import { ClubFeaturesSection } from "@/components/ppp/programa/ClubFeaturesSection";
import { TrailsSection } from "@/components/ppp/programa/TrailsSection";
import { PricingPlans } from "@/components/ppp/programa/PricingPlans";
import { TestimonialsSection } from "@/components/ppp/programa/TestimonialsSection";
import { MemberProfileSection } from "@/components/ppp/programa/MemberProfileSection";
import { AuthoritySection } from "@/components/ppp/programa/AuthoritySection";
import { PressSection } from "@/components/ppp/programa/PressSection";
import { GuaranteeSection } from "@/components/ppp/programa/GuaranteeSection";
import { FAQSection } from "@/components/ppp/programa/FAQSection";
import { CTAFinal } from "@/components/ppp/programa/CTAFinal";
import { Footer } from "@/components/ppp/programa/Footer";

export default function ProgramaPage() {
  return (
    <main className="min-h-screen bg-ppp-void text-ppp-text-primary">
      <ContextBar />
      <Hero />
      <Ticker />
      <ProblemSection />
      <ClubFeaturesSection />
      <TrailsSection />
      <PricingPlans />
      <TestimonialsSection />
      <AuthoritySection />
      <PressSection />
      <MemberProfileSection />
      <GuaranteeSection />
      <FAQSection />
      <CTAFinal />
      <Footer />
    </main>
  );
}
