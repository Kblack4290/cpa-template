import Image from "next/image";

export const Hero = () => {


    return (
        <>
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-teal-500 from-[50%] to-white"></div>

                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50"
                            stroke="white"
                            strokeWidth="8"
                            fill="none"
                            className="animate-pulse"
                            style={{
                                animation: "pulse 8s ease-in-out infinite",
                                transformOrigin: "center",
                                transform: "scale(5) rotate(-20deg) translateY(10%)"
                            }}
                        />
                    </svg>
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0">
                        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                            Maximize Your Tax Savings With Confidence
                        </h1>
                        <p className="mt-3 md:mt-4 text-base sm:text-lg lg:text-xl text-gray-700">
                            Reliable CPA services tailored for individuals and small businesses.
                        </p>
                        <div className="mt-8">
                            <button className="bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-orange-700 transition-colors text-sm sm:text-base">
                                Schedule a Free Consultation
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/2 mt-12 md:mt-0 h-64 lg:h-80 xl:4h-100">
                        <div className="w-full h-full rounded-lg overflow-hidden shadow-xl 
                                    md:absolute md:right-0 md:bottom-20 md:w-19/20 md:h-19/20 md:rotate-2 md:z-10">
                            <Image
                                src="/alexander-mils-lCPhGxs7pww-unsplash.jpg"
                                alt="Money management"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Top image (tax documents) */}
                        <div className="hidden sm:hidden md:block absolute left-0 bottom-0 w-3/5 h-4/5 rounded-lg overflow-hidden shadow-xl transform -rotate-5 z-20">
                            <Image
                                src="/kelly-sikkema-M98NRBuzbpc-unsplash.jpg"
                                alt="Tax documents"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}