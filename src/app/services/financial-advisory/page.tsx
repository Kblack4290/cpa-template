import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/components/services/servicesData";

export const metadata = {
    title: services[3].metadata.title,
    description: services[3].metadata.description,
};

export default function FinancialAdvisoryPage() {
    const financialAdvisoryService = services.find(service => service.title === "Financial Advisory") || services[3];
    return <ServicePage service={financialAdvisoryService} />;
}
