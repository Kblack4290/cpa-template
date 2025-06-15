import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/components/services/servicesData";

export const metadata = {
    title: services[4].metadata.title,
    description: services[4].metadata.description,
};

export default function IRSRepresentationPage() {
    const irsRepresentationService = services.find(service => service.title === "IRS Representation") || services[4];
    return <ServicePage service={irsRepresentationService} />;
}