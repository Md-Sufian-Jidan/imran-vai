import ContactForm from "./ContactForm";
import ContactInfoSidebar from "./ContactInfoSidebar";

export default function ContactFormSection() {

    return (
        <section className="md:py-24 py-10 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <ContactInfoSidebar />

            <div className="lg:col-span-7">
                <ContactForm />
            </div>
        </section>
    );
}