import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Tax Preparation Services | Your CPA Firm",
    description: "Comprehensive tax return preparation for individuals and businesses with maximum deductions.",
};

export default function TaxPreparationPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative h-80">
                <div className="absolute inset-0">
                    <Image
                        src="/olga-delawrence-5616whx5NdQ-unsplash.jpg"
                        alt="Tax Preparation"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tax Preparation Services</h1>
                    <p className="text-xl text-white max-w-3xl">
                        Comprehensive tax return preparation for individuals and businesses with maximum deductions.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">How We Can Help</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Our tax preparation services are designed to ensure you maximize your deductions while
                        remaining fully compliant with all tax laws. We handle tax returns for individuals,
                        small businesses, corporations, partnerships, and non-profit organizations.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Tax Preparation Services Include:</h3>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-10">
                        <li>Individual tax return preparation</li>
                        <li>Business tax return preparation</li>
                        <li>Estate and trust tax preparation</li>
                        <li>Tax return review and second opinions</li>
                        <li>Amended tax returns</li>
                        <li>Back taxes and unfiled returns</li>
                    </ul>

                    <div className="bg-gray-50 p-8 rounded-lg mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            With our team of experienced CPAs and tax professionals, we stay current on the latest
                            tax laws to ensure your returns are accurate and maximize your potential refunds.
                        </p>
                        <p className="text-lg text-gray-700">
                            We provide personalized attention to each client, understanding your unique financial
                            situation to provide tailored tax solutions.
                        </p>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}