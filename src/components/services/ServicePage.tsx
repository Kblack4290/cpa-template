import Image from "next/image";
import { ServiceData } from "./servicesData";
import { ConsultButton } from "../buttons/consultBtnProps";

type ServicePageProps = {
    service: ServiceData;
};

export const ServicePage = ({ service }: ServicePageProps) => {
    return (
        <main>
            <section className="relative h-120">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                    <p className="text-xl text-white max-w-3xl">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        {service.title === 'IRS Representation' ? 'Expert' : 'Professional'} {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        {service.pageDescription}
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our {service.title} Services Include:</h3>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-10">
                        {service.serviceIncludes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className="bg-gray-50 p-8 rounded-lg mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            {service.title === 'IRS Representation' ? 'Why You Need Professional Representation' :
                                service.title === 'Business Formation' ? 'Choosing the Right Business Structure' :
                                    service.title === 'Bookkeeping' ? 'Benefits of Professional Bookkeeping' :
                                        service.title === 'Financial Advisory' ? 'The Prime Tax Solutions Advantage' :
                                            'The Benefits of ' + service.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {service.benefits.map((benefit, index) => (
                                <div key={index}>
                                    <h4 className="text-xl font-medium text-gray-800 mb-2">{benefit.title}</h4>
                                    <p className="text-gray-700">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Process</h3>
                        <ol className="space-y-6 text-lg text-gray-700">
                            {service.process.map((step, index) => (
                                <li key={index} className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-bold mr-4">{index + 1}</span>
                                    <div>
                                        <h4 className="font-medium text-gray-800">{step.title}</h4>
                                        <p>{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="text-center">
                        <ConsultButton
                            className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                        >
                            {service.ctaText}
                        </ConsultButton>
                    </div>
                </div>
            </section>
        </main>
    );
};
