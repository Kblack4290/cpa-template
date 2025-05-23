import { ContactForm } from "./contactForm";
import { ContactInfo } from "./contactInfo";
import { GoogleMap } from "./googleMap";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
                    <div className="w-20 h-1 bg-teal-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions or ready to take control of your finances? Reach out and we&apos;ll get back to you promptly.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Info and Map */}
                    <div className="lg:w-1/2 space-y-8">
                        <ContactInfo />
                        <GoogleMap />
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};