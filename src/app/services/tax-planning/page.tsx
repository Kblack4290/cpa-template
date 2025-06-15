import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/components/services/servicesData";

export const metadata = {
    title: services[1].metadata.title,
    description: services[1].metadata.description,
};

export default function TaxPlanningPage() {
    const taxPlanningService = services.find(service => service.title === "Tax Planning") || services[1];
    return <ServicePage service={taxPlanningService} />;
}