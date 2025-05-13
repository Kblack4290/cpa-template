'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    return (
        <nav className="bg-teal-500 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-24">

                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative">
                                <Image
                                    src="logoipsum-225.svg"
                                    alt="Place Holder Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="ml-2 text-xl md:text-2xl font-semibold text-white">Prime Tax Solutions</span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex flex-1 items-center justify-center">
                        <div className="flex items-center space-x-4">
                            <Link href="/services" className="px-3 py-2 text-white  hover:text-zinc-300 transition-colors md:text-sm lg:text-lg ">
                                Services
                            </Link>
                            <Link href="/about" className="px-3 py-2 text-white  hover:text-zinc-300 transition-colors md:text-sm lg:text-lg ">
                                About
                            </Link>
                            <Link href="/testimonials" className="px-3 py-2 text-white  hover:text-zinc-300 transition-colors md:text-sm lg:text-lg ">
                                Testimonials
                            </Link>
                            <Link href="/contact" className="px-3 py-2 text-white  hover:text-zinc-300 transition-colors md:text-sm lg:text-lg ">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-end">
                        <Link href="/schedule" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                            Schedule a Consultation
                        </Link>
                    </div>
                    <div className="lg:hidden flex flex-1 items-center justify-end">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-zinc-300 focus:outline-none p-2 ">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/services" className="block px-3 py-2 text-white  hover:text-zinc-300 transition-colors">
                        Services
                    </Link>
                    <Link href="/about" className="block px-3 py-2 text-white  hover:text-zinc-300 transition-colors">
                        About Me
                    </Link>
                    <Link href="/testimonials" className="block px-3 py-2 text-white  hover:text-zinc-300 transition-colors">
                        Testimonials
                    </Link>
                    <Link href="/contact" className="block px-3 py-2 text-white  hover:text-zinc-300 transition-colors">
                        Contact Me
                    </Link>
                    <Link href="/schedule" className="block px-4 py-2 mt-3 text-center bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                        Schedule a Consult
                    </Link>
                </div>
            </div>


        </nav>
    )
}