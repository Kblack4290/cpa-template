import { HeroBackground } from "./heroBackground";
import { HeroContent } from "./heroContent";
import { HeroImages } from "./heroImages";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <HeroBackground />

            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between py-24 md:py-0 md:h-screen">
                <HeroContent />
                <HeroImages />
            </div>
        </section>
    );
};