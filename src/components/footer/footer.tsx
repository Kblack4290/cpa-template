import Link from 'next/link';
import Image from 'next/image';

// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 relative mr-2">
                                <Image
                                    src="/logoipsum-225.svg"
                                    alt="Prime Tax Solutions Logo"
                                    fill
                                    className="object-contain filter brightness-0 invert"
                                />
                            </div>
                            <span className="text-xl font-semibold text-white">Prime Tax Solutions</span>
                        </Link>
                        <p className="text-sm">
                            Providing expert tax and accounting services to help you achieve financial clarity and success.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
                            <li><Link href="/testimonials" className="hover:text-teal-400 transition-colors">Testimonials</Link></li>
                            <li><Link href="/#contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
                        <address className="not-italic text-sm space-y-2">
                            <p>123 Main Street<br />Anytown, USA 12345</p>
                            <p>Email: <a href="mailto:info@primetaxsolutions.com" className="hover:text-teal-400 transition-colors">info@primetaxsolutions.com</a></p>
                            <p>Phone: <a href="tel:+15551234567" className="hover:text-teal-400 transition-colors">(555) 123-4567</a></p>
                        </address>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm">
                        &copy; {currentYear} Prime Tax Solutions. All rights reserved.
                    </p>
                    <p className="text-xs mt-1">
                        Website by Keith Black
                    </p>
                </div>
            </div>
        </footer>
    );
};