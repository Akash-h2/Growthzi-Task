import FindProgramSection from "@/components/FindProgramSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import OurExpertsSection from "@/components/OurExpertsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <WhyChooseUs />
      <FindProgramSection />
      <OurExpertsSection/>
      <Footer />
    </div>
  );
}




