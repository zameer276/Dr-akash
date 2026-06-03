import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-pink-100/40 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-bold text-xs uppercase tracking-widest block mb-1">
            Parent Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Loved by Parents in Kathua
          </h2>
          <div className="w-16 h-1.5 bg-pink-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
            See how Dr. Akash's empathetic demeanor, expert counseling, and professional knowledge have helped local families.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              className="bg-slate-50 hover:bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                {/* Quote Icon decorative */}
                <div className="absolute top-6 right-6 text-slate-200">
                  <Quote className="w-10 h-10 fill-current opacity-70" />
                </div>

                {/* Stars ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Feedback Body */}
                <p className="text-slate-700 font-medium text-sm sm:text-[15px] leading-relaxed italic mb-6 relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Author Detailer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 select-none">
                    {t.parentName.split(" ")[0][0]}
                    {t.parentName.split(" ")[1]?.[0] || ""}
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm block">
                      {t.parentName}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Parent of {t.childName}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-white border border-slate-200/50 rounded-full px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <Heart className="w-3 h-3 text-pink-500 fill-current" />
                  <span>{t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High Rating Highlight block */}
        <div className="mt-12 text-center bg-blue-50/50 max-w-lg mx-auto p-4 rounded-2xl border border-blue-100 flex items-center justify-center gap-3">
          <span className="text-xs font-black text-blue-800">⭐ 4.9/5 Average Rating</span>
          <span className="text-slate-400 text-xs">|</span>
          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Verified Local Reviews in Jammu & Kashmir</span>
        </div>

      </div>
    </section>
  );
}
