import Hero from "@/components/Hero";
import TeamSection from "@/components/Team";
import Stats from "@/components/Stats";
import BannerTypes from "@/components/BannerTypes";
import PricingTable from "@/components/PricingTable";
import InformPackages from "@/components/InformPackages";
import CoverageArea from "@/components/CoverageArea";
import Products from "@/components/Products";
import SpecialSections from "@/components/SpecialSections";
import InformModels from "@/components/InformModels";
import LivesEvents from "@/components/LivesEvents";
import ContactFooter from "@/components/ContactFooter";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <TeamSection />
      <Stats />
      <BannerTypes />
      <PricingTable />
      <InformPackages />
      <CoverageArea />
      <Products />
      <SpecialSections />
      <InformModels />
      <LivesEvents />
      <ContactFooter />
      <CallToAction />
    </div>
  );
};

export default Index;
