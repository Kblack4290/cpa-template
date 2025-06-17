'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollHandler = () => {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            if (targetId) {
                const timer = setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust 100 for sticky header
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, [pathname]);

    return null;
};