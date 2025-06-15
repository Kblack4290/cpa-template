import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/components/services/servicesData";

export const metadata = {
    title: services[0].metadata.title,
    description: services[0].metadata.description,
};

export default function TaxPreparationPage() {
    const taxPrepService = services.find(service => service.title === "Tax Preparation") || services[0];
    return <ServicePage service={taxPrepService} />;
}