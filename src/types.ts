export interface DoctorInfo {
  name: string;
  qualification: string;
  specialization: string;
  consultant: string;
  clinicName: string;
  address: string;
  opdTiming: string;
  contactNumber: string;
  whatsappNumber: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // To match lucide-react icon names
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childName?: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  parentName: string;
  childName: string;
  childAge: string;
  mobileNumber: string;
  problem: string;
  preferredDate: string;
}
