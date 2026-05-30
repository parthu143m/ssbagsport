import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Style sack",
  description: "Get in touch with Style sack. Send us your inquiry, feedback, or custom design requests. Connect with us via social links or phone.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#E5E5E5] flex items-start md:items-center justify-center">
      <div className="w-full max-w-[440px] bg-white min-h-screen md:min-h-0 md:rounded-3xl md:shadow-2xl flex flex-col justify-between">
        <div>
          <Navbar />
          <main className="flex flex-col px-5 pb-8 pt-2">
            <ContactForm />
          </main>
        </div>

        {/* Footer */}
        <footer className="px-5 pt-4 pb-6 border-t border-stone-100 flex justify-between text-[10px] text-stone-400">
          <span>© Style sack.</span>
          <span>Everyday Professional Collection.</span>
        </footer>
      </div>
    </div>
  );
}
