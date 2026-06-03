import { motion } from "motion/react";
import { Phone, Calendar, MessageSquare, Award, Shield, Users } from "lucide-react";
import { doctorInfo, clinicHeroBannerUrl, doctorImgUrl } from "../data";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const handleWhatsappQuickBook = () => {
    const textMsg = encodeURIComponent(
      "Hello Dr. Akash Child Clinic, I would like to book an appointment for my child. Please guide me with the available slot today."
    );
    window.open(`https://wa.me/919797696204?text=${textMsg}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-tr from-blue-50 via-white to-sky-50 overflow-hidden"
    >
      {/* Background Decorative Blob/Circle elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* AIIMS Specialization Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 px-3.5 py-1.5 rounded-full text-blue-700 font-bold text-xs sm:text-sm tracking-wide uppercase max-w-max">
              <Award className="w-4 h-4 fill-current text-blue-600 animate-pulse" />
              <span>AIIMS Trained Pediatric Specialist</span>
            </div>

            {/* Main Title heading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-800 tracking-tight leading-tight">
              Expert Care for <br />
              <span className="text-blue-600 relative inline">
                Your Child's
              </span>{" "}
              Health & Smiles
            </h1>

            {/* Doctor Info Subtitles */}
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl font-bold text-slate-700">
                {doctorInfo.name}
              </h2>
              <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                {doctorInfo.qualification} — Consultant at {doctorInfo.consultant}
              </p>
              <p className="text-[17px] font-semibold text-slate-600 max-w-xl">
                Specialized in <span className="text-slate-800 font-bold decoration-blue-400 decoration-wavy underline underline-offset-4">General Child Pediatrics</span> & <span className="text-slate-800 font-bold decoration-blue-500 decoration-wavy underline underline-offset-4">Child Kidney Diseases</span>.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mt-1">
              <div className="bg-white/80 border border-blue-100 rounded-xl p-3 flex flex-col items-center text-center shadow-sm">
                <Shield className="w-5 h-5 text-blue-600 mb-1" />
                <span className="text-xs font-bold text-slate-800">100% Trusted</span>
                <span className="text-[10px] text-slate-500">AIIMS MD</span>
              </div>
              <div className="bg-white/80 border border-blue-100 rounded-xl p-3 flex flex-col items-center text-center shadow-sm">
                <Users className="w-5 h-5 text-blue-600 mb-1" />
                <span className="text-xs font-bold text-slate-800">Kid-Friendly</span>
                <span className="text-[10px] text-slate-500">Gentle Care</span>
              </div>
              <div className="bg-white/80 border border-blue-100 rounded-xl p-3 flex flex-col items-center text-center shadow-sm">
                <Award className="w-5 h-5 text-blue-600 mb-1" />
                <span className="text-xs font-bold text-slate-800">Top-Consultant</span>
                <span className="text-[10px] text-slate-500">GMC Kathua</span>
              </div>
            </div>

            {/* Quick Clinic Meta Information */}
            <div className="bg-blue-600/5 border border-blue-200/50 rounded-2xl p-4 max-w-xl flex items-start gap-3.5 mt-2">
              <div className="bg-blue-500 text-white rounded-lg p-2.5 mt-0.5 shadow-sm">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-800 block text-sm sm:text-base">
                  OPD Timings: {doctorInfo.opdTiming}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 block">
                  Location: {doctorInfo.address}
                </span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-xl">
              <button
                onClick={onBookClick}
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/35 transform hover:-translate-y-0.5 transition-all text-[15px] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              
              <button
                onClick={handleWhatsappQuickBook}
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/15 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all text-[15px] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Booking</span>
              </button>

              <a
                href={`tel:+91${doctorInfo.contactNumber}`}
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-blue-200 bg-white hover:bg-blue-50 text-blue-600 font-bold shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all text-[15px] duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {doctorInfo.contactNumber}</span>
              </a>
            </div>

          </motion.div>

          {/* Graphical/Image Section */}
          <motion.div
            className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Beautiful visual layout styling */}
            <div className="relative w-80 sm:w-96 aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border-4 border-white z-10 bg-gradient-to-tr from-blue-100 to-sky-100">
              <img
                src={doctorImgUrl}
                alt="Dr. Akash Kumar - MBBS, MD Pediatrics (AIIMS)"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlapping Info pill for AIIMS */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">MD Pediatrics (AIIMS)</span>
                    <span className="text-[11px] text-slate-500 block leading-tight">Ex-Resident at AIIMS New Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Little Floating elements */}
            <div className="absolute -top-4 -right-2 bg-emerald-500 text-white rounded-2xl px-4 py-2 shadow-xl border border-emerald-400 z-20 flex items-center gap-2 transform rotate-3">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
              <span className="text-xs font-bold">OPD Open (5-7 PM)</span>
            </div>

            {/* Small second picture block in corner representing the Clinic standard */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block z-20">
              <img
                src={clinicHeroBannerUrl}
                alt="Clinic Interior Lobby"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
