import { HeroBackground } from "./heroBackground";
import { HeroContent } from "./heroContent";
import { HeroImages } from "./heroImages";

export const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <HeroBackground />

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
                <HeroContent />
                <HeroImages />
            </div>
        </section>
    );
};