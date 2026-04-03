import Hero from "@/components/modules/home/Hero";
import Clients from "@/components/modules/home/Clients";
import Services from "@/components/modules/home/Services";
import Portfolio from "@/components/modules/home/Portfolio";
import Process from "@/components/modules/home/Process";
import Testimonials from "@/components/modules/home/Testimonials";
import CTA from "@/components/modules/home/CTA";
import Hero1 from "@/components/modules/home/Hero1";
import Hero2 from "@/components/modules/home/Hero2";
import Hero3 from "@/components/modules/home/Hero3";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Clients />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
