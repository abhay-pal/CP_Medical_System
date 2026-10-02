export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  scopeOfWork: string[];
  equipmentCovered: string[];
  turnaround: string;
  isPopular?: boolean;
}

export interface EquipmentProduct {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  overview: string;
  typicalIssues: string[];
  servicesAvailable: string[];
  preventiveMaintenance: string;
  calibrationAvailability: boolean;
  calibrationDetails: string;
  repairAvailability: boolean;
  sparePartsAvailability: string;
  criticality: 'High' | 'Critical' | 'Medium';
}

export interface EquipmentCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  badgeColor: string;
  products: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  equipmentFocus: string[];
  serviceNeeds: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  keyDeliverable: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Repair & Services' | 'AMC / CMC' | 'Calibration' | 'Spare Parts & On-Site';
}

export interface ServiceRequest {
  id: string;
  createdAt: string;
  fullName: string;
  organizationName: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  city: string;
  address?: string;
  serviceType: string;
  equipmentCategory: string;
  equipmentName: string;
  brand?: string;
  modelNumber?: string;
  serialNumber?: string;
  problemDescription: string;
  urgency: 'Normal' | 'Priority' | 'Urgent';
  preferredDate?: string;
  multipleEquipment: boolean;
  status: 'New' | 'Assigned' | 'In Progress' | 'Completed' | 'Under Review';
  assignedEngineer?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
