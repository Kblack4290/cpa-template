import Image from "next/image";

export const HeroImages = () => {
    return (
        <div className="hidden md:block relative w-full md:w-1/2 mt-12 md:mt-0 h-64 lg:h-80 xl:4h-100">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-xl 
                        md:absolute md:right-0 md:bottom-20 md:w-19/20 md:h-19/20 md:rotate-2 md:z-10">
                <Image
                    src="/images/alexander-mils-lCPhGxs7pww-unsplash.jpg"
                    alt="Money management"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="hidden sm:hidden md:block absolute left-0 bottom-0 w-3/5 h-4/5 rounded-lg overflow-hidden shadow-xl transform -rotate-5 z-20">
                <Image
                    src="/images/kelly-sikkema-M98NRBuzbpc-unsplash.jpg"
                    alt="Tax documents"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};