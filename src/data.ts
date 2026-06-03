import { DoctorInfo, ServiceItem, TestimonialItem, FAQItem } from "./types";

export const doctorInfo: DoctorInfo = {
  name: "Dr. Akash Kumar",
  qualification: "MBBS, MD Pediatrics (AIIMS)",
  specialization: "Child Specialist & Child Kidney Specialist",
  consultant: "GMC Kathua",
  clinicName: "Dr. Akash Child Clinic",
  address: "Neeraj Medicos, Opposite Mahatma Gandhi Hospital, Kathua, Jammu & Kashmir",
  opdTiming: "Daily 5:00 PM – 7:00 PM",
  contactNumber: "9797696204",
  whatsappNumber: "+919797696204"
};

export const services: ServiceItem[] = [
  {
    id: "child-consultation",
    title: "Child Consultation",
    description: "Comprehensive health checkups, diagnostic assessments, and compassionate care for infants, children, and adolescents.",
    iconName: "Stethoscope"
  },
  {
    id: "newborn-care",
    title: "Newborn Care",
    description: "Specialized checkups for neonates, neonatal jaundice monitoring, counseling on breastfeeding, and early-stage development tracking.",
    iconName: "Baby"
  },
  {
    id: "vaccination-guidance",
    title: "Vaccination Guidance",
    description: "Expert immunization counseling and tracking strictly following IAP guidelines to shield your child from vaccine-preventable diseases.",
    iconName: "ShieldAlert"
  },
  {
    id: "growth-monitoring",
    title: "Growth & Development Tracking",
    description: "Regular evaluations of physical height, weight monitoring, developmental milestones, diet planning, and nutrition consulting.",
    iconName: "TrendingUp"
  },
  {
    id: "child-kidney-care",
    title: "Child Kidney Care",
    description: "Specialized care for urinary tract infections (UTIs), nephrotic syndrome, bedwetting, congenital kidney disorders, and pediatric hypertension.",
    iconName: "Activity"
  },
  {
    id: "fever-infection",
    title: "Fever & Infection Treatment",
    description: "Expert diagnosis and evidence-based management of pediatric fevers, seasonal infections, typhoid, dengue, and gastrointestinal issues.",
    iconName: "Thermometer"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    parentName: "Suresh Sharma",
    childName: "Aarav (4 yrs)",
    rating: 5,
    text: "Dr. Akash is remarkably polite and patient. My son Aarav had recurrent UTIs, and his dual specialization as a Child Kidney Specialist was a blessing for us here in Kathua. He explained the diagnosis clearly and suggested the right course of action.",
    date: "May 2026"
  },
  {
    id: "t2",
    parentName: "Priya Devi",
    childName: "Myra (Newborn)",
    rating: 5,
    text: "We searched for the best pediatrician in Kathua for our newborn's checkups and vaccination. Dr. Akash's training from AIIMS really shines. He guided us on feeding, tracking weight, and developmental milestones properly. Very comforting experience!",
    date: "April 2026"
  },
  {
    id: "t3",
    parentName: "Mohd. Irfan",
    childName: "Sameer (7 yrs)",
    rating: 5,
    text: "Dr. Akash is the most genuine child doctor we have met. He is extremely gentle, friendly with child, and doesn't prescribe unnecessary medicines. Our son was suffering from a prolonged fever and he treats it with absolute care. Highly recommended!",
    date: "May 2026"
  },
  {
    id: "t4",
    parentName: "Ranjana Sharma",
    childName: "Tanmay (9 yrs)",
    rating: 5,
    text: "Excellent doctor! Dr. Akash treated our child for nephrotic syndrome. Knowing he is from AIIMS and specializes in pediatric kidney issues gave us complete peace of mind. He was active in resolving our WhatsApp queries.",
    date: "March 2026"
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq1",
    question: "What are the timings for Dr. Akash's clinic?",
    answer: "The clinic holds OPD hours daily from 5:00 PM to 7:00 PM. We highly recommend booking an appointment in advance via our website's WhatsApp integration to ensure minimal waiting times for your child."
  },
  {
    id: "faq2",
    question: "Does Dr. Akash specialize in pediatric kidney diseases?",
    answer: "Yes, Dr. Akash Kumar is a highly qualified Pediatrician with a super-specialized interest and training in Pediatric Nephrology (Child Kidney Care) from AIIMS. He routinely manages pediatric UTIs, childhood nephrotic syndrome, bedwetting, and congenital kidney-urinary defects."
  },
  {
    id: "faq3",
    question: "Where is the clinic located in Kathua?",
    answer: "The clinic is located at Neeraj Medicos, opposite Mahatma Gandhi Hospital in Kathua. There is ample parking space nearby, and the location is easily accessible from all main transit routes."
  },
  {
    id: "faq4",
    question: "What age groups does Dr. Akash consult?",
    answer: "He provides dedicated medical services for all pediatric age groups, from newborns (neonates) up to adolescents and teenagers (0 to 18 years of age)."
  },
  {
    id: "faq5",
    question: "How does the WhatsApp Booking system work?",
    answer: "It's simple! Scroll down to the appointment booking section, enter basic details about your child, and click submit. The page will immediately prompt you to open WhatsApp with a beautiful, fully prefilled booking query formatted with all details. Just press send to notify our clinic desk!"
  }
];

// Reference the exact generated images paths with timestamps
export const doctorImgUrl = "/src/assets/images/dr_akash_profile_1780485527040.png";
export const clinicHeroBannerUrl = "/src/assets/images/clinic_hero_banner_1780485541401.png";
