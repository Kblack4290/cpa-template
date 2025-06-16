import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Client Testimonials | Prime Tax Solutions",
    description: "See what our clients say about our tax and accounting services. Read testimonials from small business owners, individuals, and more.",
};

export default function Testimonials() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-72">
                <div className="absolute inset-0">
                    <Image
                        src="/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
                        alt="Happy clients"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h1>
                    <p className="text-xl text-white max-w-3xl">
                        Do not just take our word for it. See what our clients have to say about working with us.
                    </p>
                </div>
            </section>

            {/* Featured Testimonials */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Clients Say</h2>
                        <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700">
                            We take pride in providing exceptional service to our clients. Here is what they have to say about their experience working with Prime Tax Solutions.
                        </p>
                    </div>

                    {/* Featured Testimonial Card */}
                    <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-16 max-w-4xl mx-auto relative">
                        <div className="absolute -top-6 left-8">
                            <svg className="h-12 w-12 text-teal-500 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl text-gray-700 italic mb-6">
                                Working with Prime Tax Solutions has been transformative for my business. Their strategic tax planning saved us over $15,000 last year, and their ongoing accounting support gives me the peace of mind to focus on growing my company. They are responsive, knowledgeable, and truly care about our success.
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <Image
                                        src="/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                                        alt="Rebecca Anderson"
                                        width={60}
                                        height={60}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Rebecca Anderson</p>
                                    <p className="text-gray-600">CEO, Bright Morning Bakery</p>
                                </div>
                                <div className="ml-auto">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                &quot;I have been working with Prime Tax Solutions for my personal taxes for 3 years now. They are thorough, professional, and have found deductions I never knew existed. Highly recommend!&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <Image
                                        src="/ben-parker-OhKElOkQ3RE-unsplash.jpg"
                                        alt="David Chen"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">David Chen</p>
                                    <p className="text-gray-600">Software Engineer</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                &quot;As a small business owner, I was overwhelmed with tax and bookkeeping requirements. Prime Tax Solutions took this burden off my shoulders and set up efficient systems. Their support has been invaluable.&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <Image
                                        src="/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg"
                                        alt="James Wilson"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">James Wilson</p>
                                    <p className="text-gray-600">Owner, Wilson Plumbing</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                &quot;When I faced an IRS audit, I was terrified. Sarah at Prime Tax Solutions handled everything professionally and resolved the issue with minimal stress. Now she handles all my tax needs!&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <Image
                                        src="/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
                                        alt="Maria Lopez"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Maria Lopez</p>
                                    <p className="text-gray-600">Real Estate Agent</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                &quot;Starting a business was overwhelming, but Prime Tax Solutions guided me through the entire business formation process. Their ongoing support with bookkeeping and tax planning has been fantastic.&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <Image
                                        src="/bruce-mars-8YG31Xn4dSw-unsplash.jpg"
                                        alt="Thomas Johnson"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Thomas Johnson</p>
                                    <p className="text-gray-600">Founder, EcoClean Solutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                &quot;The financial advisory services from Prime Tax Solutions have been instrumental in our retirement planning. They have helped us optimize our investments and minimize tax liability both now and in the future.&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <Image
                                        src="/jeff-hardi-6XT0Uclo4UA-unsplash.jpg"
                                        alt="Robert & Susan Taylor"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Robert & Susan Taylor</p>
                                    <p className="text-gray-600">Retired Educators</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                &quot;As a non-profit organization, we have unique tax and accounting needs. Prime Tax Solutions understands our requirements and helps us maintain compliance while maximizing our resources to serve our community.&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <Image
                                        src="/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
                                        alt="Patricia Williams"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Patricia Williams</p>
                                    <p className="text-gray-600">Director, Helping Hands Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials by Category */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Testimonials by Client Type</h2>
                        <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700">
                            See how we have helped clients with specific needs and industries.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8 border-b">
                            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
                                <button className="border-teal-500 text-teal-600 py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
                                    Small Businesses
                                </button>
                                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
                                    Individuals
                                </button>
                                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
                                    Self-Employed
                                </button>
                                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
                                    Non-Profits
                                </button>
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div>
                            <div className="space-y-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a.565.565 0 0 0 .565-.565.566.566 0 0 0-.565-.565H8.574a.565.565 0 0 0 0 1.13zm0 3.39h6.852a.565.565 0 1 0 0-1.13H8.574a.565.565 0 1 0 0 1.13zm-3.39-3.39a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm0 3.39a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm0-6.78a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm3.39 0h6.852a.566.566 0 0 0 .565-.565.566.566 0 0 0-.565-.565H8.574a.565.565 0 0 0-.565.565c0 .312.253.564.565.564z" />
                                                <path d="M18.017 0H5.983C4.786 0 3.813.974 3.813 2.17v19.66c0 1.196.973 2.17 2.17 2.17h12.034c1.196 0 2.17-.974 2.17-2.17V2.17c0-1.196-.974-2.17-2.17-2.17zm.565 21.83c0 .312-.253.565-.565.565H5.983a.565.565 0 0 1-.565-.565V2.17c0-.312.253-.565.565-.565h12.034c.312 0 .565.253.565.565v19.66z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-gray-700">
                                                &quot;Prime Tax Solutions helped us implement a proper accounting system that gave us real-time insights into our cash flow. Their tax planning strategies have saved us thousands, and their bookkeeping services ensure we are always ready for tax time. They are like having a CFO without the full-time cost.&quot;
                                            </p>
                                            <div className="mt-4 flex items-center">
                                                <p className="font-semibold text-gray-900">Michael Roberts</p>
                                                <span className="mx-2 text-gray-500">•</span>
                                                <p className="text-gray-600">Green Valley Landscaping</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a.565.565 0 0 0 .565-.565.566.566 0 0 0-.565-.565H8.574a.565.565 0 0 0 0 1.13zm0 3.39h6.852a.565.565 0 1 0 0-1.13H8.574a.565.565 0 1 0 0 1.13zm-3.39-3.39a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm0 3.39a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm0-6.78a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm3.39 0h6.852a.566.566 0 0 0 .565-.565.566.566 0 0 0-.565-.565H8.574a.565.565 0 0 0-.565.565c0 .312.253.564.565.564z" />
                                                <path d="M18.017 0H5.983C4.786 0 3.813.974 3.813 2.17v19.66c0 1.196.973 2.17 2.17 2.17h12.034c1.196 0 2.17-.974 2.17-2.17V2.17c0-1.196-.974-2.17-2.17-2.17zm.565 21.83c0 .312-.253.565-.565.565H5.983a.565.565 0 0 1-.565-.565V2.17c0-.312.253-.565.565-.565h12.034c.312 0 .565.253.565.565v19.66z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-gray-700">
                                                &quot;As we expanded our retail business to multiple locations, the complexity of our taxes and accounting multiplied. Prime Tax Solutions not only kept everything organized but provided strategic advice that helped facilitate our growth. Their expertise in retail accounting has been invaluable.&quot;
                                            </p>
                                            <div className="mt-4 flex items-center">
                                                <p className="font-semibold text-gray-900">Jennifer Kim</p>
                                                <span className="mx-2 text-gray-500">•</span>
                                                <p className="text-gray-600">Urban Style Boutique</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a.565.565 0 0 0 .565-.565.566.566 0 0 0-.565-.565H8.574a.565.565 0 0 0 0 1.13zm0 3.39h6.852a.565.565 0 1 0 0-1.13H8.574a.565.565 0 1 0 0 1.13zm-3.39-3.39a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm0 3.39a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm0-6.78a.565.565 0 1 0 0-1.13.565.565 0 0 0 0 1.13zm3.39 0h6.852a.566.566 0 0 0 .565-.565.566.566 0 0 0-.565-.565H8.574a.565.565 0 0 0-.565.565c0 .312.253.564.565.564z" />
                                                <path d="M18.017 0H5.983C4.786 0 3.813.974 3.813 2.17v19.66c0 1.196.973 2.17 2.17 2.17h12.034c1.196 0 2.17-.974 2.17-2.17V2.17c0-1.196-.974-2.17-2.17-2.17zm.565 21.83c0 .312-.253.565-.565.565H5.983a.565.565 0 0 1-.565-.565V2.17c0-.312.253-.565.565-.565h12.034c.312 0 .565.253.565.565v19.66z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-gray-700">
                                                &quot;After struggling with our previous accountant who didn&apos;t understand our industry, switching to Prime Tax Solutions was a game-changer. They understand the unique tax considerations for our restaurant business and have helped us implement efficient systems for tracking expenses and managing cash flow.&quot;
                                            </p>
                                            <div className="mt-4 flex items-center">
                                                <p className="font-semibold text-gray-900">Carlos Rodriguez</p>
                                                <span className="mx-2 text-gray-500">•</span>
                                                <p className="text-gray-600">Harbor View Restaurant</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-teal-600 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-white mb-4">Join Our Satisfied Clients</h2>
                    <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                        Experience the difference that personalized tax and accounting services can make for your financial success.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-teal-600 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition-colors"
                    >
                        Schedule Your Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}