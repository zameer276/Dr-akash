import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { services } from "../data";

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  
  // Custom theme colors for pediatric card background variations
  const cardThemes = [
    { bg: "bg-blue-50/75 border-blue-100", iconBg: "bg-blue-500 text-white", text: "text-blue-700" },
    { bg: "bg-pink-50/75 border-pink-100", iconBg: "bg-pink-500 text-white", text: "text-pink-700" },
    { bg: "bg-indigo-50/75 border-indigo-100", iconBg: "bg-indigo-500 text-white", text: "text-indigo-700" },
    { bg: "bg-amber-50/75 border-amber-100", iconBg: "bg-amber-500 text-white", text: "text-amber-700" },
    { bg: "bg-emerald-50/75 border-emerald-100", iconBg: "bg-emerald-500 text-white", text: "text-emerald-700" },
    { bg: "bg-rose-50/75 border-rose-100", iconBg: "bg-rose-500 text-white", text: "text-rose-700" },
  ];

  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.Activity className="w-8 h-8" />;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-1">
            Care We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Our Pediatric & Kidney Care Services
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
            Providing empathetic, specialized services for children's entire wellness journey, ranging from primary care to deep kidney consultations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <motion.div
                key={service.id}
                className={`rounded-2xl border p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${theme.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex flex-col gap-4">
                  {/* Service Icon inside a gorgeous styled bubble depending on category */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${theme.iconBg}`}>
                    {getIcon(service.iconName)}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-800 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className={`font-bold text-xs uppercase tracking-wider ${theme.text}`}>
                    Expert consultation available
                  </span>
                  <button
                    onClick={onBookClick}
                    className="p-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-blue-600 border border-slate-100 transition-colors shadow-sm cursor-pointer"
                    aria-label={`Book appointment for ${service.title}`}
                  >
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Alert for Nephrotic Syndrome / Bedwetting */}
        <motion.div
          className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-blue-500 shrink-0 flex items-center justify-center text-white shadow-md">
            <Icons.HeartPulse className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-display font-extrabold text-blue-900 text-lg leading-snug">
              Urgent Kidney Concerns?
            </h4>
            <p className="text-blue-700/90 text-sm mt-1 leading-relaxed">
              Dr. Akash specialized at <strong>AIIMS, New Delhi</strong> specifically in pediatric kidney challenges like childhood swollen eyes (Nephrotic Syndrome), blood in urine, painful urination/infection, and bedwetting.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
          >
            Schedule Screening
          </button>
        </motion.div>
      </div>
    </section>
  );
}
