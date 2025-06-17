'use client';

import { useState } from "react";
import { ConsultationModal } from "../modals/consultationModal";

type ConsultBtnProps = {
    isMobile?: boolean;
    className?: string;
    children?: React.ReactNode;
};

export const ConsultButton = ({
    isMobile = false,
    className = "",
    children = "Schedule a Consultation"
}: ConsultBtnProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const calendlyEventUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
    const rootElementIdForModal = "root-calendly-modal";

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    let appliedBaseClasses = "bg-orange-600 rounded-md transition-colors cursor-pointer";

    if (!className.includes("hover:bg-")) {
        appliedBaseClasses += " hover:bg-orange-700";
    }

    if (!className.match(/text-(?!white|black|transparent)\w+|text-white|text-black|text-transparent/)) {
        appliedBaseClasses += " text-white";
    }


    const mobileClasses = isMobile
        ? "block px-4 py-2 mt-3 text-center"
        : "px-4 py-2";


    if (!calendlyEventUrl) {
        console.warn("Calendly URL is not set. Please check your .env.local file and ensure NEXT_PUBLIC_CALENDLY_URL is defined.");
    }

    return (
        <>
            <button
                onClick={openModal}
                className={`${appliedBaseClasses} ${mobileClasses} ${className}`}
            >
                {children}
            </button>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                calendlyUrl={calendlyEventUrl}
                rootElementId={rootElementIdForModal}
            />
        </>
    );
};