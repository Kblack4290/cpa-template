import { ConsultButton } from "../buttons/consultBtnProps";

export const HeroContent = () => {
    return (
        <div className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                Maximize Your Tax Savings With Confidence
            </h1>
            <p className="mt-3 md:mt-4 text-base sm:text-lg lg:text-xl text-gray-700">
                Reliable CPA services tailored for individuals and small businesses.
            </p>
            <div className="mt-6 md:mt-8">
                <ConsultButton
                    className="text-sm sm:text-base md:px-6 md:py-3"
                >
                    Schedule a Free Consultation
                </ConsultButton>
            </div>
        </div>
    );
};