"use client";
import { useState } from "react";
import Script from "next/script";

// Add this type declaration at the top of your file
declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Get reCAPTCHA token - no more ts-ignore needed
        const token = await new Promise<string>((resolve) => {
            window.grecaptcha.ready(() => {
                window.grecaptcha
                    .execute("YOUR_RECAPTCHA_SITE_KEY", { action: "submit" })
                    .then(resolve);
            });
        });

        try {
            // In a real app, you would send this data to your API
            // Along with the reCAPTCHA token for verification
            console.log({ ...formData, recaptchaToken: token });

            // Simulate API request
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // Reset status after a few seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Send Us a Message</h3>

            {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Sorry, there was an error sending your message. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone (optional)</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    >
                        <option value="">Please select</option>
                        <option value="Tax Preparation">Tax Preparation</option>
                        <option value="Tax Planning">Tax Planning</option>
                        <option value="Bookkeeping">Bookkeeping</option>
                        <option value="Financial Advisory">Financial Advisory</option>
                        <option value="IRS Representation">IRS Representation</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    ></textarea>
                </div>

                <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" data-size="invisible"></div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <Script
                src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"
                strategy="afterInteractive"
            />
        </div>
    );
};