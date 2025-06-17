'use client';

import { PopupModal } from "react-calendly";
import { useEffect, useState } from "react";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
    calendlyUrl: string;
    rootElementId: string;
}

export const ConsultationModal = ({
    isOpen,
    onClose,
    calendlyUrl,
    rootElementId,
}: ConsultationModalProps) => {
    const [rootEl, setRootEl] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const element = document.getElementById(rootElementId);
            if (element) {
                setRootEl(element);
            } else {
                console.warn(`[ConsultationModal] Root element with ID '${rootElementId}' not found. Falling back to document.body.`);
                setRootEl(document.body);
            }
        }
    }, [isOpen, rootElementId]);

    if (!isOpen || !rootEl) {
        return null;
    }

    return (
        <PopupModal
            url={calendlyUrl}
            onModalClose={onClose}
            open={isOpen}
            rootElement={rootEl}
            pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
            }}
        />
    );
};