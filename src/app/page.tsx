import Hero from "@/components/modules/home/Hero";
import Clients from "@/components/modules/home/Clients";
import Services from "@/components/modules/home/Services";
import Portfolio from "@/components/modules/home/Portfolio";
import Process from "@/components/modules/home/Process";
import Testimonials from "@/components/modules/home/Testimonials";
import CTA from "@/components/modules/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
