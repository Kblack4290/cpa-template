import { ServiceHeader } from "./servicesHeader";
import { ServiceCard } from "./servicesCard";

const services = [
    {
        title: "Tax Preparation",
        description: "Comprehensive tax return preparation for individuals and businesses with maximum deductions.",
        image: "/olga-delawrence-5616whx5NdQ-unsplash.jpg",
        link: "/services/tax-preparation"
    },
    {
        title: "Tax Planning",
        description: "Strategic planning to minimize tax liability and prepare for future financial decisions.",
        image: "/brett-jordan-cBY2CtqQ6YI-unsplash.jpg",
        link: "/services/tax-planning"
    },
    {
        title: "Bookkeeping",
        description: "Accurate financial record-keeping services to keep your business organized and compliant.",
        image: "/fin-0rHxkbcvQAE-unsplash.jpg",
        link: "/services/bookkeeping"
    },
    {
        title: "Financial Advisory",
        description: "Expert financial guidance to help you make informed decisions for your future.",
        image: "/jen-titus-gYaXHmxvwr0-unsplash.jpg",
        link: "/services/financial-advisory"
    },
    {
        title: "IRS Representation",
        description: "Professional representation in IRS matters including audits, appeals, and collections.",
        image: "/luis-caroca-h_YX8re2Uu4-unsplash.jpg",
        link: "/services/irs-representation"
    },
    {
        title: "Business Formation",
        description: "Guidance on selecting and establishing the right business structure for your company.",
        image: "/imagine-buddy-FDaCU3etvAc-unsplash.jpg",
        link: "/services/business-formation"
    }
];

export const Services = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <ServiceHeader />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};