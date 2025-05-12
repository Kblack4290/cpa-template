import Image from "next/image";
import Link from "next/link";


export const NavBar = () => {
    return (
        <nav className="bg-teal-500 shadow-lg">
            <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-24">

                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="logoipsum-225.svg"
                                alt="Place Holder Logo"
                                width={50}
                                height={50}
                            /> <span className="ml-2 text-2xl font-semibold text-white">Prime Tax Solutions</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <div className="flex items-center space-x-4">
                            <Link href="/services" className="px-3 py-2 text-white text-lg hover:text-zinc-500 transition-colors">
                                Services
                            </Link>
                            <Link href="/about" className="px-3 py-2 text-white text-lg hover:text-zinc-500 transition-colors">
                                About Me
                            </Link>
                            <Link href="/testimonials" className="px-3 py-2 text-lg text-white hover:text-zinc-500 transition-colors">
                                Testimonials
                            </Link>
                            <Link href="/contact" className="px-3 py-2 text-white text-lg hover:text-zinc-500 transition-colors">
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-end">
                        <Link href="/schedule" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}