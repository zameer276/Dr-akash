import { useState } from "react";
import { ChevronDown, HelpCircle, AlertCircle } from "lucide-react";
import { faqs } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq1"); // Default open first FAQ

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 relative scroll-mt-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-1">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
            Find answers to common questions about Dr. Akash's specialized services, clinic OPD hours, and online consulting options in Kathua.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-300 shadow-md shadow-blue-500/5 rotate-y-0"
                    : "border-slate-100 hover:border-slate-200 shadow-sm"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? "text-blue-500" : "text-slate-400"}`} />
                    <span className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100/80 text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "bg-blue-100/60 text-blue-600 rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Dropdown Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                  }`}
                >
                  <div className="p-6 sm:p-7 pt-4 text-slate-600 font-medium text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Notice at bottom */}
        <div className="mt-10 bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3 max-w-2xl mx-auto">
          <AlertCircle className="w-5 h-5 text-blue-500 shrink-0" />
          <p className="text-slate-600 font-medium text-xs">
            Have a question that is not listed here? Our front-desk coordinator is happy to help you via physical visit or instant WhatsApp booking!
          </p>
        </div>

      </div>
    </section>
  );
}
