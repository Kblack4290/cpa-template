import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/components/services/servicesData";

export const metadata = {
    title: services[2].metadata.title,
    description: services[2].metadata.description,
};

export default function BookkeepingPage() {
    const bookkeepingService = services.find(service => service.title === "Bookkeeping") || services[2];
    return <ServicePage service={bookkeepingService} />;
}
