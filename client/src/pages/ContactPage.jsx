import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function ContactPage() {
  return (
    <div className="font-poppins">
      <NavBar />
      <div className="flex flex-col items-center py-24 space-y-12">
        <h4 className="text-3xl font-semibold">Send us a message</h4>
        <p className="text-gray-500 text-xs">
          Required fields are marked <span className="text-red-500">*</span>
        </p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
