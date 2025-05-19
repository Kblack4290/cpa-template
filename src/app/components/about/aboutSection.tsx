import Link from "next/link";
import { MeetCPACard } from "./meetCPACard";

export const AboutSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Your CPA</h2>
                    <div className="w-20 h-1 bg-teal-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Experience and expertise you can trust for all your financial needs.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link href="/about" className="block w-full max-w-2xl hover:opacity-95 transition-opacity">
                        <MeetCPACard />
                    </Link>
                </div>
            </div>
        </section>
    );
};