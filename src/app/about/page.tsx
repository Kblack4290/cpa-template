import Image from "next/image";
import Link from "next/link";
import { ConsultButton } from "@/components/buttons/consultBtnProps";

export const metadata = {
    title: "About Us | Prime Tax Solutions",
    description: "Learn about our experienced tax professionals and our commitment to helping clients achieve financial success.",
};

export default function About() {
    return (
        <main>
            <section className="relative h-120">
                <div className="absolute inset-0">
                    <Image
                        src="/images/cityImage.jpg"
                        alt="Professional accountant team"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Firm</h1>
                    <p className="text-xl text-white max-w-3xl">
                        Trusted tax and accounting experts committed to your financial success
                    </p>
                </div>
            </section>
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Your CPA</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Sarah Johnson, MBA, CPA brings over 15 years of experience in tax planning and preparation
                                to each client relationship. After working as a Big 4 Tax Consultant, Sarah founded
                                Prime Tax Solutions with a vision to provide expert financial services to individuals and small businesses.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                With specializations in small business taxation, tax strategy, and financial planning,
                                Sarah is committed to helping clients navigate complex financial situations and achieve their goals.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Sarah holds a Master&apos;s in Business Administration and maintains active
                                memberships in the American Institute of CPAs and the State Board of Accountancy.
                            </p>

                            <div className="mt-6 space-y-2">
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
                        </div>
                        <div className="order-1 md:order-2 relative aspect-square max-w-md mx-auto">
                            <div className="h-full w-full rounded-lg overflow-hidden relative">
                                <Image
                                    src="/images/profilePic.jpg"
                                    alt="Sarah Johnson, CPA"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-teal-500 text-white p-4 rounded-lg shadow-md">
                                <p className="font-semibold">Sarah Johnson</p>
                                <p className="text-sm">MBA, CPA</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
                            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
                            <p className="text-lg text-gray-700 mb-4">
                                Founded with a passion for helping clients achieve financial success, Prime Tax Solutions
                                began with a mission to provide personalized tax and accounting services that go beyond the numbers.
                                We recognized that behind every tax return and financial statement are real people with unique goals and challenges.
                            </p>
                            <p className="text-lg text-gray-700">
                                Over the years, we have grown from a small local practice to a trusted financial partner for
                                individuals and businesses across the region. Our success comes from our unwavering commitment
                                to client success, technical expertise, and personalized service.
                            </p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-gray-700 font-bold">1</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                                    <div className="font-bold text-gray-800">2010</div>
                                    <div className="text-gray-700">Firm founded with a focus on personalized tax services</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-gray-700 font-bold">2</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                                    <div className="font-bold text-gray-800">2015</div>
                                    <div className="text-gray-700">Expanded services to include business advisory and financial planning</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-gray-700 font-bold">3</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                                    <div className="font-bold text-gray-800">2020</div>
                                    <div className="text-gray-700">Opened second office location to better serve growing client base</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-gray-700 font-bold">4</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                                    <div className="font-bold text-gray-800">Today</div>
                                    <div className="text-gray-700">Serving over 500 clients with comprehensive tax and financial solutions</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
                            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Our core values guide everything we do, from how we treat our clients to how we approach complex tax challenges.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                                <div className="rounded-full bg-teal-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600">
                                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
                                <p className="text-gray-700">
                                    We adhere to the highest ethical standards in all our client relationships, providing honest advice even when it is not what clients might want to hear.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                                <div className="rounded-full bg-teal-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600">
                                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Focus</h3>
                                <p className="text-gray-700">
                                    We build lasting relationships by understanding each client&apos;s unique needs and providing personalized solutions that help achieve their financial goals.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                                <div className="rounded-full bg-teal-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600">
                                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise</h3>
                                <p className="text-gray-700">
                                    We maintain the highest professional standards through continuous education and staying current with evolving tax laws and financial strategies.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                                <div className="rounded-full bg-teal-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600">
                                        <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                                <p className="text-gray-700">
                                    We embrace technology and creative solutions to solve complex financial challenges and deliver more value to our clients.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                                <div className="rounded-full bg-teal-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600">
                                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsiveness</h3>
                                <p className="text-gray-700">
                                    We pride ourselves on timely communication and swift action to address our clients&apos; needs and concerns.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                                <div className="rounded-full bg-teal-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                                <p className="text-gray-700">
                                    We empower our clients through financial education, helping them understand the &quot;why&quot; behind our recommendations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Work With Us?</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                            Let&apos;s discuss how our experienced team can help you achieve your financial goals with tailored tax and accounting solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <ConsultButton
                                className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                            >
                                Schedule a Consultation
                            </ConsultButton>
                            <Link
                                href="/services"
                                className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 py-3 px-8 rounded-md text-lg font-medium transition-colors"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}