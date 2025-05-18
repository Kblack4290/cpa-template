import { ServiceHeader } from "./servicesHeader";
import { ServiceCard } from "./servicesCard";

const services = [
    {
        title: "Tax Preparation",
        description: "Comprehensive tax return preparation for individuals and businesses with maximum deductions.",
        icon: "/icons/tax-preparation.svg",
        link: "/services/tax-preparation"
    },
    {
        title: "Tax Planning",
        description: "Strategic planning to minimize tax liability and prepare for future financial decisions.",
        icon: "/icons/tax-planning.svg",
        link: "/services/tax-planning"
    },
    {
        title: "Bookkeeping",
        description: "Accurate financial record-keeping services to keep your business organized and compliant.",
        icon: "/icons/bookkeeping.svg",
        link: "/services/bookkeeping"
    },
    {
        title: "Financial Advisory",
        description: "Expert financial guidance to help you make informed decisions for your future.",
        icon: "/icons/financial-advisory.svg",
        link: "/services/financial-advisory"
    },
    {
        title: "IRS Representation",
        description: "Professional representation in IRS matters including audits, appeals, and collections.",
        icon: "/icons/irs-representation.svg",
        link: "/services/irs-representation"
    },
    {
        title: "Business Formation",
        description: "Guidance on selecting and establishing the right business structure for your company.",
        icon: "/icons/business-formation.svg",
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
                            icon={service.icon}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};