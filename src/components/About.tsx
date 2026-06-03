import { motion } from "motion/react";
import { Award, BookOpen, Stethoscope, Briefcase, HeartHandshake, CheckCircle } from "lucide-react";
import { doctorInfo, doctorImgUrl } from "../data";

export default function About() {
  const qualifications = [
    {
      title: "MD Pediatrics",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "Post-Graduation",
      subtitle: "Acquired specialized learning under India's leading pediatricians"
    },
    {
      title: "MBBS",
      institution: "Top Medical University",
      year: "Under-Graduation",
      subtitle: "Secured high distinctions in basic pediatric medical sciences"
    }
  ];

  const expertises = [
    "General Child consultations & detailed diagnostics",
    "Pediatric Nephrology (Child Kidneys, Nephrotic Syndrome, Childhood UTIs)",
    "Newborn Intensive Care and Breastfeeding assistance",
    "Immunization program management & schedule updates",
    "Puberty & Adolescent health guidance",
    "Child growth milestone assessment & nutritious diet planning"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Meet the Doctor
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            About Dr. Akash Kumar
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 leading-relaxed">
            Bringing elite pediatric healthcare and kidney super-specialist consultations directly from AIIMS New Delhi to families in Kathua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image & Direct Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-100 relative group">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={doctorImgUrl}
                  alt={doctorInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Info Block */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">OPD Location</span>
                    <span className="text-slate-800 font-bold text-sm">Neeraj Medicos, Kathua</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Host Hospital Affiliation</span>
                    <span className="text-slate-800 font-bold text-sm">Consultant, GMC Kathua</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AIIMS Pride Quote */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute right-[-10px] bottom-[-20px] opacity-10">
                <Award className="w-36 h-36" />
              </div>
              <p className="italic text-[15px] font-medium leading-relaxed relative z-10">
                "Our guiding philosophy is that children are not merely mini-adults. They have distinct biological, mental, and developmental needs. We strive to provide accurate, non-overmedicated medical counseling for children's kidney and pediatric health."
              </p>
              <span className="block mt-3 text-right font-display text-xs font-bold tracking-wider uppercase relative z-10">
                — {doctorInfo.name}
              </span>
            </div>
          </div>

          {/* Right Column: Qualifications, Exp, Expertise */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Biography */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-6 h-6 text-blue-500" />
                <h3 className="font-display font-bold text-xl text-slate-800">Professional Profile</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {doctorInfo.name} is a renowned Pediatrician and Child Kidney Specialist (Pediatric Nephrologist) operating in Kathua. He holds the prestigious <strong>MD in Pediatrics from AIIMS (New Delhi)</strong>, which is consistently ranked as the #1 medical institute in India.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                Currently practicing as an assistant or consultant faculty at <strong>Government Medical College (GMC), Kathua</strong>, Dr. Akash combines clinical research with state-of-the-art diagnostics. His dual qualification renders him uniquely skilled in treating both routine childhood ailments and complex underlying kidney, bladder, and urinary track disorders in children.
              </p>
            </div>

            {/* Qualifications Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <h3 className="font-display font-bold text-xl text-slate-800">Academic Background</h3>
              </div>
              
              <div className="flex flex-col gap-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                {qualifications.map((q, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold relative z-10 mt-1 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-blue-600 block">{q.year}</span>
                      <h4 className="font-bold text-slate-800 text-base">{q.title}</h4>
                      <p className="text-sm font-semibold text-slate-700">{q.institution}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{q.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-500" />
                <h3 className="font-display font-bold text-xl text-slate-800">Primary Focus Areas</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertises.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-sm sm:text-[15px] leading-tight">
                      {exp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
