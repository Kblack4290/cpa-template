import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
    title: string;
    description: string;
    image: string; // Changed from "icon" to "image"
    link: string;
};

export const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Replaced the icon container with an image container */}
            <div className="h-48 w-full rounded-lg overflow-hidden mb-4 relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
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