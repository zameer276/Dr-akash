import React, { useState } from "react";
import { MapPin, Phone, MessageSquare, Clock, Send, ShieldCheck, Check } from "lucide-react";
import { doctorInfo } from "../data";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // Reset
      setContactData({ name: "", email: "", message: "" });
    }, 850);
  };

  const handleWhatsappDirectChat = () => {
    const textMsg = encodeURIComponent("Hello Dr. Akash Child Clinic, I have a quick query regarding my child's health.");
    window.open(`https://wa.me/919797696204?text=${textMsg}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-1">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Contact & Find Us In Kathua
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
            Reach out directly for specialized consultations, clinical visits, or quick inquiries. No registration or long telephone lines needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info & Map */}
          <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="font-display font-extrabold text-xl text-slate-800 mb-2">
                Clinic Location & Directions
              </h3>

              {/* Address detail card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-sm sm:text-base block">Clinic Address</span>
                  <p className="text-slate-600 font-medium text-xs sm:text-sm mt-0.5 leading-snug">
                    {doctorInfo.address}
                  </p>
                  <span className="text-[11px] text-blue-600 font-bold block mt-1">
                    (Located opposite Mahatma Gandhi Hospital)
                  </span>
                </div>
              </div>

              {/* Call detail card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:+91${doctorInfo.contactNumber}`}
                  className="flex gap-4 items-start p-3 bg-white hover:bg-blue-50/50 rounded-2xl border border-slate-200/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm block">Phone Consultation</span>
                    <span className="text-[13px] font-bold text-blue-600 block mt-0.5">
                      +91 {doctorInfo.contactNumber}
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleWhatsappDirectChat}
                  className="flex gap-4 items-start p-3 bg-white hover:bg-emerald-50/50 rounded-2xl border border-slate-200/50 transition-all text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm block">WhatsApp Chat</span>
                    <span className="text-[13px] font-bold text-emerald-600 block mt-0.5">
                      Live Response
                    </span>
                  </div>
                </button>
              </div>

              {/* Opd hours detail */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-sm sm:text-base block">OPD Visiting Hours</span>
                  <span className="text-slate-600 font-bold text-xs sm:text-sm block mt-0.5">
                    {doctorInfo.opdTiming}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Note: General checkups on Sundays might require custom checking.
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded maps widget with referrerPolicy constraints */}
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-slate-50 aspect-[16/9] sm:aspect-[21/9] lg:aspect-video relative w-full h-full bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.8398462057776!2d75.5152292!3d32.373229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c499ec1b4af23%3A0xf64f7b2a95ae15d4!2sMahatma%20Gandhi%20Hospital%20Kathua!5e0!3m2!1sen!2sin!4v1717413662000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Dr. Akash Child Clinic Location Opposite Mahatma Gandhi Hospital Kathua Map"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Contact/Query Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-xl text-slate-800 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                Have an inquiry about available checkups, custom child vaccine formulations, or general questions? Message Dr. Akash’s support team directly.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-slate-800 text-lg">Thank You! Message Received</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-sm">
                    We've registered your clinical inquiry. Our pediatric care coordinator will reach back to your contact details shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-full text-slate-700 font-bold text-xs cursor-pointer transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                  {/* Parent Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="e.g. Suresh Sharma"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/80 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Contact Email/Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email or Mobile Number
                    </label>
                    <input
                      type="text"
                      id="contact_email"
                      required
                      value={contactData.email}
                      onChange={(e) => setContactData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="e.g. suresh@gmail.com / 9797696204"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/80 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Message or Inquiry
                    </label>
                    <textarea
                      id="contact_message"
                      required
                      rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData((p) => ({ ...p, message: e.target.value }))}
                      placeholder="How can we assist your baby today?"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/80 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors mt-2"
                  >
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Verification Tag */}
            <div className="border-t border-slate-200/60 pt-6 mt-6 flex items-center gap-3 bg-white/50 rounded-2xl p-4 border border-slate-200/50">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-slate-500 text-[11px] leading-snug font-medium">
                By ticking and sending, you acknowledge prompt scheduling of slots. Dr. Akash Clinic never compromises or shares parental information.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
