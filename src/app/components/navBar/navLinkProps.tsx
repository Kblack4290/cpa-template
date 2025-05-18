import Link from "next/link";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    isMobile?: boolean;
};

export const NavLink = ({ href, children, isMobile = false }: NavLinkProps) => {
    const baseClasses = "text-white hover:text-zinc-300 transition-colors";
    const mobileClasses = isMobile ? "block px-3 py-2" : "px-3 py-2 md:text-sm lg:text-lg";

    return (
        <Link href={href} className={`${baseClasses} ${mobileClasses}`}>
            {children}
        </Link>
    );
};