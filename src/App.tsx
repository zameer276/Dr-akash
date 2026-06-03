import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById("book");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-blue-500/25 selection:text-slate-800 antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Header onBookClick={handleScrollToBooking} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero onBookClick={handleScrollToBooking} />

        {/* Doctor profile introduction & Credentials */}
        <About />

        {/* Clinical Services List */}
        <Services onBookClick={handleScrollToBooking} />

        {/* Testimonials from local Parents */}
        <Testimonials />

        {/* Interactive Sticky Appointment Booking form */}
        <BookingForm />

        {/* General FAQ block */}
        <FAQ />

        {/* Address coordinates & Map section */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Sticky Quick-Click triggers and floaters (WhatsApp & Mobile anchors) */}
      <FloatingButtons />
    </div>
  );
}
