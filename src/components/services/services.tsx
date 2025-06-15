import { ServiceHeader } from "./servicesHeader";
import { ServiceCard } from "./servicesCard";
import { services } from "./servicesData";



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