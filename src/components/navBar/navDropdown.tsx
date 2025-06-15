'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type NavDropdownProps = {
    title: string;
    href: string;
    services: { title: string; link: string }[];
    isMobile?: boolean;
};

export const NavDropdown = ({ title, href, services, isMobile = false }: NavDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (isMobile) {
        return (
            <div className="space-y-1">
                <Link href={href} className="block px-3 py-2 text-white hover:text-zinc-300 transition-colors">
                    {title}
                </Link>
                <div className="pl-6 space-y-1">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="block px-3 py-2 text-white hover:text-zinc-300 transition-colors text-sm"
                        >
                            {service.title}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link
                href={href}
                className="px-3 py-2 md:text-sm lg:text-lg text-white hover:text-zinc-300 transition-colors"
            >
                {title}
                <span className="ml-1">▾</span>
            </Link>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
                    <div className="py-2">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.link}
                                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};