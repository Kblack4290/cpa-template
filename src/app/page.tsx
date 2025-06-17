import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TrustSection } from "@/components/trustSection/trustSection";
import { ScrollHandler } from "@/components/scrollHandler"; // Import ScrollHandler

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <Hero />
      <Services />
      <AboutSection />
      <TrustSection />
      <ContactSection />
    </>
  );
}