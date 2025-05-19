import Link from "next/link";

export const TrustSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Choose a Tax Professional You Can Trust
                </h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto my-4"></div>

                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                    When it comes to your finances, you deserve a partner who embodies the highest standards of
                    professionalism. Our approach is built on <span className="font-semibold text-teal-700">reliability</span>,
                    <span className="font-semibold text-teal-700"> trustworthiness</span>, and
                    <span className="font-semibold text-teal-700"> honesty</span>. We bring
                    <span className="font-semibold text-teal-700"> persistent attention to detail</span> to every client&apos;s
                    unique situation, ensuring a <span className="font-semibold text-teal-700">deep understanding</span> of
                    your financial goals. Above all, we operate with unwavering
                    <span className="font-semibold text-teal-700"> integrity</span> in every interaction.
                </p>

                <div className="mt-10">
                    <Link
                        href="/testimonials"
                        className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors inline-flex items-center"
                    >
                        See What Our Clients Say
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};