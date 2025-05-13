import Link from "next/link";

type ConsultBtnProps = {
    isMobile?: boolean;
};

export const ConsultButton = ({ isMobile = false }: ConsultBtnProps) => {
    const baseClasses = "bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors";
    const mobileClasses = isMobile
        ? "block px-4 py-2 mt-3 text-center"
        : "px-4 py-2";

    return (
        <Link href="/schedule" className={`${baseClasses} ${mobileClasses}`}>
            Schedule a Consult
        </Link>
    );
};