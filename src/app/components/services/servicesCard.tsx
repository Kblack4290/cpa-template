import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
    title: string;
    description: string;
    icon: string;
    link: string;
};

export const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 mb-4 mx-auto">
                <Image src={icon} alt={title} width={32} height={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{title}</h3>
            <p className="text-gray-600 mb-6 text-center">{description}</p>
            <div className="text-center">
                <Link
                    href={link}
                    className="inline-block px-4 py-2 text-sm text-teal-600 border border-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition-colors"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};