import Image from "next/image";

export const MeetCPACard = () => {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
                {/* CPA Photo */}
                <div className="md:w-1/3">
                    <div className="h-72 md:h-full relative">
                        <Image
                            src="/gulnar-mardanova-F3HTyBW2k3k-unsplash.jpg"
                            alt="Sarah Johnson, CPA"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">Certified Public Accountant</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Sarah Johnson</h3>
                    <p className="mt-2 text-gray-600">MBA, CPA with over 15 years of experience in tax planning and preparation.</p>

                    <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-teal-100 flex justify-center items-center mr-3">
                                <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-gray-700">Former Big 4 Tax Consultant</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-teal-100 flex justify-center items-center mr-3">
                                <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-gray-700">Specializing in Small Business Taxation</span>
                        </div>
                    </div>

                    <div className="mt-6 inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors">
                        <span>Read full bio</span>
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};