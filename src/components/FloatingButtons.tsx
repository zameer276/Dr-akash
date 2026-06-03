import { useState, useEffect } from "react";
import { MessageSquare, Phone, Calendar } from "lucide-react";
import { doctorInfo } from "../data";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Show floating triggers after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsappDefaultChat = () => {
    const message = encodeURIComponent("Hello Dr. Akash Child Clinic, I would like to query about child OPD consultations/kidney care.");
    window.open(`https://wa.me/919797696204?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button for desktop & tablet */}
      <div
        className={`fixed z-40 transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-10 pointer-events-none"
        } bottom-20 md:bottom-8 right-6`}
      >
        <button
          onClick={handleWhatsappDefaultChat}
          className="flex items-center gap-2 group relative p-3 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-1 cursor-pointer transition-all duration-300"
          title="Direct WhatsApp booking or enquiry"
        >
          {/* WhatsApp Text Tooltip on hover */}
          <span className="hidden sm:inline-block max-w-0 group-hover:max-w-[150px] overflow-hidden whitespace-nowrap font-bold text-xs tracking-wider uppercase transition-all duration-500 ease-out">
            WhatsApp Booking
          </span>
          <MessageSquare className="w-5.5 h-5.5 fill-current" />
          
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      </div>

      {/* Sticky Mobile bottom Quick Action toolbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur shadow-[0_-4px_16px_rgba(0,0,0,0.08)] border-t border-slate-100 p-3 flex gap-3 animate-in slide-in-from-bottom duration-300">
        
        {/* Direct Phone call widget */}
        <a
          href={`tel:+91${doctorInfo.contactNumber}`}
          className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full border border-blue-200 bg-blue-50/50 text-blue-600 font-bold text-xs"
        >
          <Phone className="w-4 h-4" />
          <span>Call: {doctorInfo.contactNumber}</span>
        </a>

        {/* WhatsApp appointment widget */}
        <a
          href="#book"
          className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </a>

      </div>
    </>
  );
}
