import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TrustSection } from "@/components/trustSection/trustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <TrustSection />
      <ContactSection />
    </>
  );
}
