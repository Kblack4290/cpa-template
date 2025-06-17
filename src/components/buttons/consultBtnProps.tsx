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

    const baseClasses = "bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors cursor-pointer";
    const mobileClasses = isMobile
        ? "block px-4 py-2 mt-3 text-center"
        : "px-4 py-2";

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <>
            <button
                onClick={openModal}
                className={`${baseClasses} ${mobileClasses} ${className}`}
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