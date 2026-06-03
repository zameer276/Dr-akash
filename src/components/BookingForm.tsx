import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, User, Phone, CheckSquare, Clock, ArrowRight, ShieldCheck, HeartPulse, Download, FileText, Check, RotateCcw } from "lucide-react";
import { jsPDF } from "jspdf";
import { doctorInfo } from "../data";
import { AppointmentFormData } from "../types";

export default function BookingForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    parentName: "",
    childName: "",
    childAge: "",
    mobileNumber: "",
    problem: "",
    preferredDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tokenNumber, setTokenNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate validation and trigger WhatsApp automation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Generate a distinct provisional OPD Token ID for the user
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const generatedToken = `DAC-2026-${randomNum}`;
      setTokenNumber(generatedToken);

      // Extract details
      const { parentName, childName, childAge, mobileNumber, problem, preferredDate } = formData;
      
      // Formatting date nicely
      const dateFormatted = preferredDate ? new Date(preferredDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }) : "Soonest Slots Available";

      // User manual message content format requirement
      const message = `Hello Dr. Akash Child Clinic,

Parent Name: ${parentName}
Child Name: ${childName}
Age: ${childAge}
Mobile: ${mobileNumber}
Problem: ${problem || "Not specified / Routine Checkup"}
Preferred Date: ${dateFormatted}

I would like to book an appointment.`;

      const whatsappUrl = `https://wa.me/919797696204?text=${encodeURIComponent(message)}`;
      
      // Open in a new tab/window
      window.open(whatsappUrl, "_blank");
    }, 850);
  };

  // Modern jsPDF Generator
  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a5" // beautifully fits on common thermal receipt or A5 clinical pads
    });

    const activeToken = tokenNumber || "DAC-2026-8951";

    // Background Canvas Styling (slate-50 off-white color base)
    doc.setFillColor(248, 250, 252);
    doc.rect(0, 0, 148, 210, "F");

    // Primary Deep Navy Header Strip
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 0, 148, 7, "F");

    // Blue Line Accenting
    doc.setFillColor(37, 99, 235);
    doc.rect(0, 7, 148, 1, "F");

    // Title: Dr. Akash Child Clinic
    doc.setTextColor(30, 41, 59);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("DR. AKASH CHILD CLINIC", 74, 16, { align: "center" });

    // AIIMS Specialization Tagline
    doc.setTextColor(37, 99, 235);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text("MBBS, MD Pediatrics (AIIMS, New Delhi)", 74, 21, { align: "center" });

    // Specialist Info
    doc.setTextColor(71, 85, 105);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text("Pediatrician & Child Kidney Specialist | Consultant, GMC Kathua", 74, 25, { align: "center" });

    // Address
    doc.setTextColor(100, 116, 139);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text("Neeraj Medicos, Opposite Mahatma Gandhi Hospital, Kathua | Tel: +91 9797696204", 74, 29, { align: "center" });

    // Solid Divider
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(10, 31, 138, 31);

    // OPD Quick Token Info Area
    doc.setFillColor(239, 246, 255);
    doc.rect(10, 35, 128, 15, "F");
    doc.setDrawColor(191, 219, 254);
    doc.setLineWidth(0.3);
    doc.rect(10, 35, 128, 15, "S");

    // Token Headers
    doc.setTextColor(37, 99, 235);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("REGISTRATION TOKEN ID", 15, 41);

    doc.setTextColor(30, 41, 59);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.text(activeToken, 15, 46);

    // Dynamic Status tag
    doc.setTextColor(16, 185, 129);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.text("VERIFIED PROVISIONAL", 123, 44, { align: "right" });

    // Spacer line
    doc.setDrawColor(241, 245, 249);
    doc.line(10, 54, 138, 54);

    // Patient Particulars Label
    doc.setTextColor(30, 41, 59);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text("PATIENT & APPOINTMENT PARTICULARS", 10, 60);

    // Inner Grid Box
    doc.setFillColor(255, 255, 255);
    doc.rect(10, 63, 128, 71, "F");
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.35);
    doc.rect(10, 63, 128, 71, "S");

    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);

    // Line 1: Parent Name
    doc.setFont("Helvetica", "normal");
    doc.text("Parent Name:", 15, 71);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(formData.parentName, 52, 71);

    // Light row separator
    doc.setDrawColor(241, 245, 249);
    doc.line(12, 75, 136, 75);

    // Line 2: Child Name
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("Child's Name:", 15, 81);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(formData.childName, 52, 81);

    doc.line(12, 85, 136, 85);

    // Line 3: Child's Age
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("Child's Age / Months:", 15, 91);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(formData.childAge, 52, 91);

    doc.line(12, 95, 136, 95);

    // Line 4: Primary Mobile
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("Contact Number:", 15, 101);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(formData.mobileNumber, 52, 101);

    doc.line(12, 105, 136, 105);

    // Line 5: Appointment Date
    const formattedDate = formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) : "Same-day Slot Booking";

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("Booking Date:", 15, 111);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(37, 99, 235);
    doc.text(formattedDate, 52, 111);

    doc.line(12, 115, 136, 115);

    // Line 6: Complaint
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("Primary Complaint:", 15, 121);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    const croppedComplaint = formData.problem ? (
      formData.problem.length > 55 ? formData.problem.substring(0, 52) + "..." : formData.problem
    ) : "Routine General Pediatrics Consult";
    doc.text(croppedComplaint, 52, 121);

    doc.line(12, 125, 136, 125);

    // Line 7: Clinic Hours
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("Clinic Timing (OPD):", 15, 130);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(217, 119, 6);
    doc.text(doctorInfo.opdTiming, 52, 130);


    // Instruction guidelines note
    doc.setFillColor(254, 252, 232);
    doc.rect(10, 138, 128, 22, "F");
    doc.setDrawColor(254, 240, 138);
    doc.rect(10, 138, 128, 22, "S");

    doc.setTextColor(133, 77, 14);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(8);
    doc.text("IMPORTANT ADVISORY FOR PARENTS:", 14, 143);

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(113, 63, 18);
    doc.setFontSize(7);
    doc.text("1. Clinic is open Daily from 5:00 PM to 7:00 PM opposite Mahatma Gandhi Hospital.", 14, 147);
    doc.text("2. Please present this downloadable ticket directly at Neeraj Medicos reception desk.", 14, 151);
    doc.text("3. Safe child distancing is strictly maintained. Avoid over-crowding inside the lobby.", 14, 155);


    // Barcode decoration
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.4);
    let barX = 15;
    for (let i = 0; i < 28; i++) {
      const step = Math.random() > 0.5 ? 1.6 : 1.0;
      const weight = Math.random() > 0.45 ? 0.75 : 0.3;
      doc.setLineWidth(weight);
      doc.line(barX, 168, barX, 178);
      barX += step;
    }
    doc.setTextColor(71, 85, 105);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7);
    doc.text(activeToken, 15, 182);

    // Verified stamp overlay
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.5);
    doc.rect(98, 165, 38, 16, "S");
    doc.setTextColor(16, 185, 129);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text("PROVISIONAL CONFIRMED", 117, 170, { align: "center" });
    doc.setFontSize(7);
    doc.text("DR. AKASH CLINIC", 117, 174, { align: "center" });
    doc.setFontSize(6);
    doc.text("KATHUA OP-DESK", 117, 178, { align: "center" });

    // Cut border
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.5);
    doc.line(0, 194, 148, 194);

    // Footer lines
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(7);
    doc.text("This computer provisional token facilitates spot reception tracking.", 74, 199, { align: "center" });
    doc.text(`Generated on ${new Date().toLocaleDateString('en-GB') || "2026-06-03"} | Dr. Akash Child Specialist & Nephrologist Network`, 74, 203, { align: "center" });

    // Download saving action
    doc.save(`opd_ticket_${formData.childName.toLowerCase().replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/50 scroll-mt-12 relative">
      <div className="absolute top-10 right-10 w-48 h-48 bg-blue-100/40 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-100/40 rounded-full blur-2xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-1">
            Easy Service Registration
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Book Appointment & OPD Ticket
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
            Provide the child's primary details. Registering initiates direct WhatsApp slot routing and instantly generates a professional, downloadable registration ticket for your records.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-50">
          
          {/* Left Panel: Guide info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-2xl tracking-tight mb-2">
                Dr. Akash Child Clinic
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm font-medium leading-relaxed mb-8">
                Providing rapid OPD slots, newborn growth reviews, and expert specialized child kidney services in Kathua.
              </p>

              {/* Informative Step Highlights */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-white shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Enter Pediatric Info</h4>
                    <p className="text-blue-100/80 text-xs sm:text-sm mt-0.5">Please provide core parent names, mobile numbers, and the child's age.</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-white shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">OPD Ticket Generated</h4>
                    <p className="text-blue-100/80 text-xs sm:text-sm mt-0.5">Instantly visualize and download a high-contrast clinical PDF receipt card.</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-white shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">WhatsApp Booking</h4>
                    <p className="text-blue-100/80 text-xs sm:text-sm mt-0.5">Your data parses beautifully into automatic chat strings for instant desk check-in!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Note */}
            <div className="mt-12 bg-white/10 rounded-2xl p-4 border border-white/10 flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-xs sm:text-sm block">Scheduled Consultations</span>
                <span className="text-xs text-blue-100 block">Daily 5:00 PM – 7:00 PM (OPD hours)</span>
                <span className="text-[10px] text-blue-200/90 block mt-1 hover:underline">
                  Need spot emergency support? Call +91 {doctorInfo.contactNumber}
                </span>
              </div>
            </div>

          </div>

          {/* Right Panel: Live Form & Generated OPD Card Screen */}
          <div className="lg:col-span-7 p-6 sm:p-10 relative bg-slate-50/50">
            {isSubmitted ? (
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header confirmation indicators */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3.5 shadow-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-800 tracking-tight">
                    OPD Registration Prepared!
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 max-w-sm">
                    Your appointment token details are ready. Review your computer-generated OPD sticker below and download the PDF copy.
                  </p>
                </div>

                {/* VISUAL OPD TICKET PREVIEW CARD */}
                <div className="relative border-2 border-dashed border-blue-200 rounded-2xl bg-white p-5 sm:p-6 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Subtle Stamp Overlay visual */}
                  <div className="absolute top-4 right-4 text-emerald-600/10 rotate-12 pointer-events-none select-none">
                    <ShieldCheck className="w-24 h-24 stroke-[1.5]" />
                  </div>

                  {/* Receipt Brand Banner Header */}
                  <div className="text-center pb-3 border-b border-dashed border-slate-150">
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-800 tracking-tight block">
                      DR. AKASH CHILD CLINIC
                    </span>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                      MBBS, MD PEDIATRICS (AIIMS)
                    </span>
                    <span className="text-[9px] text-slate-400 block -mt-0.5">
                      Opposite Mahatma Gandhi Hospital, Kathua
                    </span>
                  </div>

                  {/* Token Row Highlights */}
                  <div className="my-4 bg-blue-50/70 border border-blue-100 rounded-xl p-3 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] text-blue-700 font-extrabold tracking-wider uppercase block">
                        OPD Registration ID
                      </span>
                      <span className="font-mono font-bold text-sm text-slate-800">
                        {tokenNumber || "DAC-2026-XXXX"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 bg-emerald-500 text-white rounded text-[9px] font-black tracking-widest uppercase">
                        PROVISIONAL
                      </span>
                    </div>
                  </div>

                  {/* Ticket Key-Value Particulars List */}
                  <div className="flex flex-col gap-2.5 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Parent's Name:</span>
                      <strong className="text-slate-700">{formData.parentName}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Child's Name &amp; Age:</span>
                      <strong className="text-slate-700">{formData.childName} ({formData.childAge})</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Contact Phone:</span>
                      <strong className="text-slate-700">{formData.mobileNumber}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Preferred Entry Slot:</span>
                      <strong className="text-blue-600">
                        {formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        }) : "Same-day OPD Slot"}
                      </strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Clinic Timings (OPD):</span>
                      <strong className="text-amber-600">{doctorInfo.opdTiming}</strong>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-slate-400 font-medium">Primary Symptom Checklist:</span>
                      <p className="text-slate-600 leading-snug mt-0.5 bg-slate-50 rounded-lg p-2 font-mono text-[11px] border border-slate-100 italic">
                        "{formData.problem || "Routine Consultation/Vaccine screening guidelines follow."}"
                      </p>
                    </div>
                  </div>

                  {/* Stamp Barcode aesthetics bottom */}
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-150 flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex gap-0.5 h-6 w-28 bg-slate-800/10 items-stretch opacity-75">
                        <span className="w-1 bg-slate-800" /><span className="w-0.5 bg-transparent" /><span className="w-1.5 bg-slate-800" /><span className="w-0.5 bg-slate-800" /><span className="w-1 bg-slate-800" /><span className="w-0.5 bg-transparent" /><span className="w-1.5 bg-slate-800" /><span className="w-0.5 bg-slate-800" /><span className="w-2 bg-slate-800" /><span className="w-0.5 bg-transparent" /><span className="w-1 bg-slate-800" /><span className="w-0.5 bg-slate-800" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono mt-1">{tokenNumber}</span>
                    </div>

                    <div className="border border-emerald-500/80 rounded px-2 py-1 text-[9px] font-mono leading-none text-emerald-600/90 text-center uppercase tracking-wide">
                      <span className="font-bold block text-[8px]">PROVISIONAL</span>
                      <span className="block mt-0.5">DR. AKASH</span>
                    </div>
                  </div>
                </div>

                {/* SUBMIT STEP TRIGGER CONTROLS BUTTONS */}
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* PDF Ticket download button trigger client-side */}
                    <button
                      onClick={handleDownloadPDF}
                      className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <Download className="w-4.5 h-4.5" />
                      <span>Download PDF Ticket</span>
                    </button>

                    {/* WhatsApp Action button trigger */}
                    <button
                      onClick={() => {
                        const dateFormatted = formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        }) : "Soonest Slots Available";

                        const text = encodeURIComponent(
                          `Hello Dr. Akash Child Clinic,

Parent Name: ${formData.parentName}
Child Name: ${formData.childName}
Age: ${formData.childAge}
Mobile: ${formData.mobileNumber}
Problem: ${formData.problem || "Checkup"}
Preferred Date: ${dateFormatted}
OPD Ticket: ${tokenNumber}

I would like to book an appointment.`
                        );
                        window.open(`https://wa.me/919797696204?text=${text}`, "_blank");
                      }}
                      className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <Phone className="w-4.5 h-4.5" />
                      <span>Send via WhatsApp</span>
                    </button>

                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-400 px-1 mt-1">
                    <span>* Download this ticket &amp; carry to Neeraj Medicos reception.</span>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold transition-all p-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Register Another Child</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Parent Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="parentName" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Parent's Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="parentName"
                        id="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Suresh Sharma"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Child Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="childName" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Child's Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="childName"
                        id="childName"
                        required
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Child Age */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="childAge" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Child's Age <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="childAge"
                        id="childAge"
                        required
                        value={formData.childAge}
                        onChange={handleInputChange}
                        placeholder="e.g. 4 years / 3 months"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mobileNumber" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Active Contact Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="mobileNumber"
                        id="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. 9797696204"
                        pattern="^[0-9]{10}$"
                        title="10-digit mobile number is required"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferredDate" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Preferred Booking Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        name="preferredDate"
                        id="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Security Statement */}
                  <div className="bg-slate-100/50 rounded-xl p-3.5 border border-slate-200/50 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 text-[11px] block uppercase tracking-wider">Instant OPD Token</span>
                      <p className="text-slate-500 text-[11px] leading-tight font-medium">Entering details prints a provisional entry card. Saves front-desk registry queues.</p>
                    </div>
                  </div>

                </div>

                {/* Problem Description */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="problem" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Symptom or Problem Description
                  </label>
                  <textarea
                    name="problem"
                    id="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="e.g. Swelling around eyes, painful urine, newborn vaccination checklist, general fever..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/10 cursor-pointer flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{isSubmitting ? "Compiling booking data..." : "Confirm & Send WhatsApp Booking"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
