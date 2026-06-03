import { Heart, Award, ArrowUp } from "lucide-react";
import { doctorInfo } from "../data";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 relative overflow-hidden">
      {/* Accent color background blob */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
          
          {/* Logo Brand column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 max-w-max group">
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="font-display font-extrabold text-base text-white tracking-tight leading-tight block">
                  Dr. Akash
                </span>
                <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase block -mt-1">
                  Child Clinic
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Top quality general pediatric treatments, milestone tracking, immunization schedules, and AIIMS standard pediatric nephrology super-specialty consultations.
            </p>
            <div className="flex items-center gap-2 mt-2 bg-slate-800/80 border border-slate-700/50 rounded-xl px-3 py-1.5 max-w-max">
              <Award className="w-4 h-4 text-blue-400 fill-current" />
              <span className="text-[11px] font-bold text-slate-200">MD Pediatrics (AIIMS New Delhi)</span>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Navigation</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#home" className="text-xs sm:text-sm hover:text-white transition-colors">Home Intro</a>
              <a href="#about" className="text-xs sm:text-sm hover:text-white transition-colors">Biography & Credentials</a>
              <a href="#services" className="text-xs sm:text-sm hover:text-white transition-colors">Clinic Services</a>
              <a href="#book" className="text-xs sm:text-sm hover:text-white transition-colors">WhatsApp Appointment</a>
              <a href="#contact" className="text-xs sm:text-sm hover:text-white transition-colors">Contact Address</a>
            </div>
          </div>

          {/* Contact and address column */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Clinic coordinates</h4>
            <p className="text-xs sm:text-sm leading-snug">
              Neeraj Medicos, Opposite Mahatma Gandhi Hospital,<br />
              Kathua, Jammu & Kashmir
            </p>
            <div className="flex flex-col gap-1 text-xs">
              <span className="block text-slate-400">
                Primary Contact: <strong className="text-white">+91 {doctorInfo.contactNumber}</strong>
              </span>
              <span className="block text-slate-400">
                OPD Open slots: <strong className="text-white">{doctorInfo.opdTiming}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Footer bottom details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <div>
            <p>© {new Date().getFullYear()} Dr. Akash Child Clinic. All Rights Reserved.</p>
            <p className="mt-1">Designed with AIIMS professional standards for Pediatric & child kidney care in Kathua.</p>
          </div>
          
          <button
            onClick={scrollUp}
            className="flex items-center gap-2 p-2.5 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-200 transition-colors uppercase font-bold text-[10px] tracking-wider cursor-pointer shadow-sm group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
