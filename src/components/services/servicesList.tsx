import { HorizontalServiceCard } from "./horizontalServicesCard";
import { services } from "./services";

export const ServicesList = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h1>
                <div className="w-20 h-1 bg-teal-500 mx-auto mb-10"></div>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    We offer a comprehensive range of professional tax and financial services
                    tailored to meet your unique needs and goals.
                </p>

                <div className="space-y-6">
                    {services.map((service, index) => (
                        <HorizontalServiceCard
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