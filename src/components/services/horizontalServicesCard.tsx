import Link from "next/link";
import Image from "next/image";

type HorizontalServiceCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export const HorizontalServiceCard = ({ title, description, image, link }: HorizontalServiceCardProps) => {
    return (
        <Link href={link} className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 h-64 md:h-auto relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                    />
                </div>

                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors mb-4">
                        {title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {description}
                    </p>
                    <div className="mt-auto">
                        <span className="inline-flex items-center text-lg text-teal-600 font-medium group-hover:text-teal-700">
                            Learn More
                            <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};