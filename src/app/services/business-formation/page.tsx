import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/components/services/servicesData";

export const metadata = {
    title: services[5].metadata.title,
    description: services[5].metadata.description,
};

export default function BusinessFormationPage() {
    const businessFormationService = services.find(service => service.title === "Business Formation") || services[5];
    return <ServicePage service={businessFormationService} />;
}
