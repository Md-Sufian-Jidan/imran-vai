import Clients from "@/components/modules/home/Clients";
import Services from "@/components/modules/home/Services";
import Portfolio from "@/components/modules/home/Portfolio";
import Process from "@/components/modules/home/Process";
import Testimonials from "@/components/modules/home/Testimonials";
import CTA from "@/components/modules/home/CTA";
import HomeHero3 from "@/components/modules/home/HomeHero3";
import HowItWorks from "@/components/modules/home/HowItWorks";
// import ServicesPreview from "@/components/modules/home/ServicesPreview";

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      {/* <Hero1 /> */}
      {/* <Hero2 /> */}
      <HomeHero3 />
      <Clients />
      <HowItWorks />
      {/* <ServicesPreview /> */}
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
