import { useState, useEffect } from "react";
import { Phone, Menu, X, Heart } from "lucide-react";
import { doctorInfo } from "../data";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Dr. Akash", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-blue-50"
          : "bg-gradient-to-b from-blue-50/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl text-slate-800 tracking-tight leading-tight block">
                Dr. Akash
              </span>
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block -mt-1">
                Child Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-slate-600 hover:text-blue-600 text-[15px] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:+91${doctorInfo.contactNumber}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {doctorInfo.contactNumber}</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={`tel:+91${doctorInfo.contactNumber}`}
              className="p-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600"
              aria-label="Call Clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-lg absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50 last:border-b-0 text-[16px] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`tel:+91${doctorInfo.contactNumber}`}
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-blue-200 text-blue-600 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {doctorInfo.contactNumber}</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md text-center"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
