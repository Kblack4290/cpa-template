'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NavLink } from "./navLinkProps";
import { NavDropdown } from "./navDropdown";
import { ConsultButton } from "../buttons/consultBtnProps";
import { services } from "../services/servicesData";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 bg-teal-500 w-full transition-shadow duration-300 ${hasScrolled ? 'shadow-lg' : ''}`}>
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
                            {/* Replace NavLink with NavDropdown for Services */}
                            <NavDropdown
                                title="Services"
                                href="/services"
                                services={services}
                            />
                            <NavLink href="/about">
                                About
                            </NavLink>
                            <NavLink href="/testimonials">
                                Testimonials
                            </NavLink>
                            <NavLink href="/contact">
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-end">
                        <ConsultButton />
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
                    {/* Mobile menu with dropdown */}
                    <NavDropdown
                        title="Services"
                        href="/services"
                        services={services}
                        isMobile={true}
                    />
                    <NavLink href="/about" isMobile>
                        About Me
                    </NavLink>
                    <NavLink href="/testimonials" isMobile>
                        Testimonials
                    </NavLink>
                    <NavLink href="/contact" isMobile>
                        Contact Me
                    </NavLink>
                    <ConsultButton isMobile />
                </div>
            </div>
        </nav>
    )
}