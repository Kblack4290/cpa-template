'use client'

import { useRouter, usePathname } from 'next/navigation';

type ScrollLinkProps = {
    href: string; // Should be in the format /#targetId
    children: React.ReactNode;
    targetId: string;
    isMobile?: boolean;
    onClick?: () => void; // For mobile menu closing
};

export const ScrollLink = ({
    children,
    targetId,
    isMobile = false,
    onClick
}: ScrollLinkProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const baseClasses = "text-white hover:text-zinc-300 transition-colors";
    const mobileClasses = isMobile ? "block px-3 py-2" : "px-3 py-2 md:text-sm lg:text-lg";

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } else {

            router.push(`/#${targetId}`);
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            href={`/#${targetId}`}
            onClick={handleClick}
            className={`${baseClasses} ${mobileClasses} cursor-pointer`}
        >
            {children}
        </a>
    );
};