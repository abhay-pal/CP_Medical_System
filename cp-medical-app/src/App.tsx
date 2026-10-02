import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileQuickBar } from './components/layout/MobileQuickBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { HeroSection } from './components/home/HeroSection';
import { QuickServiceStrip } from './components/home/QuickServiceStrip';
import { SloganStrip } from './components/home/SloganStrip';
import { WhyChooseUsSection } from './components/whyus/WhyChooseUsSection';
import { ServicesSection } from './components/services/ServicesSection';
import { EquipmentSection } from './components/equipment/EquipmentSection';
import { AmcCmcSection } from './components/amc/AmcCmcSection';
import { CalibrationSection } from './components/calibration/CalibrationSection';
import { SparePartsSection } from './components/spareparts/SparePartsSection';
import { ProcessSection } from './components/process/ProcessSection';
import { IndustriesSection } from './components/industries/IndustriesSection';
import { AboutSection } from './components/about/AboutSection';
import { ServiceRequestForm } from './components/enquiry/ServiceRequestForm';
import { PhotoGallery } from './components/gallery/PhotoGallery';
import { FaqSection } from './components/faq/FaqSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';

import { RequestTrackerModal } from './components/tracking/RequestTrackerModal';
import { AdminDashboardModal } from './components/admin/AdminDashboardModal';
import { LegalModal } from './components/legal/LegalModal';

import { ServiceRequest } from './types';
import { COMPANY_INFO } from './data/companyData';

// Initial realistic starter sample requests for the tracker and admin system
const INITIAL_REQUESTS: ServiceRequest[] = [
  {
    id: 'CPMS-2026-00124',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    fullName: 'Dr. Anand Verma',
    organizationName: 'Anand Multi-Speciality Hospital',
    phone: '9897123456',
    whatsapp: '9897123456',
    email: 'admin@anandhospital.com',
    city: 'Muzaffarnagar',
    address: 'Near Civil Lines, Muzaffarnagar',
    serviceType: 'Breakdown Repair',
    equipmentCategory: 'ICU & Critical Care',
    equipmentName: 'ICU Ventilator',
    brand: 'Mindray',
    modelNumber: 'SV300',
    serialNumber: 'SN-902341',
    problemDescription: 'FiO2 sensor calibration alarm recurring; tidal volume delivery mismatch on volume mode.',
    urgency: 'Urgent',
    multipleEquipment: false,
    status: 'In Progress',
    assignedEngineer: 'Er. Vikul Pal',
  },
  {
    id: 'CPMS-2026-00125',
    createdAt: new Date(Date.now() - 3600000 * 20).toISOString(),
    fullName: 'Mr. Satish Kumar (Biomedical In-Charge)',
    organizationName: 'City Diagnostic & Heart Centre',
    phone: '9837564738',
    whatsapp: '9837564738',
    email: 'satish@citydiagnostic.in',
    city: 'Meerut',
    address: 'Saket Road, Meerut',
    serviceType: 'Preventive Maintenance (PM)',
    equipmentCategory: 'Diagnostic Equipment',
    equipmentName: '12-Channel ECG Machine',
    brand: 'BPL',
    modelNumber: 'Cardiart 9108',
    serialNumber: 'SN-44391',
    problemDescription: 'Routine quarterly preventive maintenance, lead cable continuity check, thermal printer cleaning.',
    urgency: 'Normal',
    multipleEquipment: true,
    status: 'Assigned',
    assignedEngineer: 'Er. Vikul Pal',
  },
  {
    id: 'CPMS-2026-00126',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    fullName: 'Dr. Neha Garg',
    organizationName: 'Sanjeevani Pathology Laboratory',
    phone: '9760234190',
    whatsapp: '9760234190',
    email: 'sanjeevanilabs@gmail.com',
    city: 'Saharanpur',
    address: 'Court Road, Saharanpur',
    serviceType: 'Calibration & Performance Testing',
    equipmentCategory: 'Laboratory & Pathology',
    equipmentName: 'Biochemistry Analyzer',
    brand: 'Erba Mannheim',
    modelNumber: 'Chem 7',
    serialNumber: 'SN-11029',
    problemDescription: 'Photometer optical filter alignment and flowcell temperature calibration test report required for NABL audit.',
    urgency: 'Priority',
    multipleEquipment: false,
    status: 'Completed',
    assignedEngineer: 'Er. Vikul Pal',
  },
];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [requests, setRequests] = useState<ServiceRequest[]>(() => {
    const saved = localStorage.getItem('cpms_requests');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_REQUESTS;
      }
    }
    return INITIAL_REQUESTS;
  });

  // Prefill state for service request form
  const [prefillService, setPrefillService] = useState('');
  const [prefillEquipment, setPrefillEquipment] = useState('');
  const [prefillCategory, setPrefillCategory] = useState('');

  // Modals state
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [trackerSearchId, setTrackerSearchId] = useState('');
  const [adminOpen, setAdminOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Save requests to localStorage on change
  useEffect(() => {
    localStorage.setItem('cpms_requests', JSON.stringify(requests));
  }, [requests]);

  // Section observer to update active navbar link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'services',
        'equipment',
        'amc-cmc',
        'calibration',
        'spare-parts',
        'process',
        'industries',
        'about',
        'enquiry',
        'gallery',
        'faq',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestServiceFromAnywhere = (
    serviceName?: string,
    equipmentName?: string,
    categoryName?: string
  ) => {
    if (serviceName) setPrefillService(serviceName);
    if (equipmentName) setPrefillEquipment(equipmentName);
    if (categoryName) setPrefillCategory(categoryName);
    scrollToSection('enquiry');
  };

  const handleSaveRequest = (newRequest: ServiceRequest) => {
    setRequests((prev) => [newRequest, ...prev]);
  };

  const handleUpdateRequestStatus = (
    id: string,
    newStatus: ServiceRequest['status'],
    engineer?: string
  ) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: newStatus,
              assignedEngineer: engineer || r.assignedEngineer || 'Er. Vikul Pal',
            }
          : r
      )
    );
  };

  const handleDeleteRequest = (id: string) => {
    if (window.confirm(`Are you sure you want to delete ticket ${id}?`)) {
      setRequests((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleTrackId = (id: string) => {
    setTrackerSearchId(id);
    setTrackerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#0A3871] selection:text-white">
      
      {/* Sticky Premium Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onRequestService={() => handleRequestServiceFromAnywhere()}
        onOpenTracker={() => {
          setTrackerSearchId('');
          setTrackerOpen(true);
        }}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <div id="home">
          <HeroSection
            onRequestService={() => handleRequestServiceFromAnywhere()}
            onExploreEquipment={() => scrollToSection('equipment')}
            onExploreServices={() => scrollToSection('services')}
          />
        </div>

        {/* 2. Quick Service Strip */}
        <QuickServiceStrip
          onSelectService={(serviceCat) => {
            if (serviceCat === 'amc-cmc') scrollToSection('amc-cmc');
            else if (serviceCat === 'calibration') scrollToSection('calibration');
            else scrollToSection('services');
          }}
        />

        {/* 3. Authentic Slogan & Philosophy Strip */}
        <SloganStrip />

        {/* 4. Why Choose Us / Facilities Section */}
        <WhyChooseUsSection
          onRequestService={() => handleRequestServiceFromAnywhere()}
        />

        {/* 5. Complete Services Section (10 Services) */}
        <ServicesSection
          onRequestService={(srvName) =>
            handleRequestServiceFromAnywhere(srvName)
          }
        />

        {/* 6. Equipment We Service (5 Categories + Search & Filter) */}
        <EquipmentSection
          onRequestService={(eqName, cat) =>
            handleRequestServiceFromAnywhere(undefined, eqName, cat)
          }
        />

        {/* 7. AMC / CMC Contracts Section */}
        <AmcCmcSection
          onDirectEnquiry={(data) => {
            setPrefillService(`${data.contractType} Proposal`);
            setPrefillEquipment(`Fleet (${data.equipmentCount} units)`);
            scrollToSection('enquiry');
          }}
        />

        {/* 8. Calibration & Performance Testing */}
        <CalibrationSection
          onRequestCalibration={() =>
            handleRequestServiceFromAnywhere('Calibration & Performance Testing')
          }
        />

        {/* 9. Spare Parts & Replacement */}
        <SparePartsSection
          onRequestSpareParts={(partCategory) =>
            handleRequestServiceFromAnywhere(
              'Spare Parts Replacement',
              partCategory ? `Spare: ${partCategory}` : undefined
            )
          }
        />

        {/* 10. How Service Works (8-Step Workflow) */}
        <ProcessSection
          onRequestService={() => handleRequestServiceFromAnywhere()}
        />

        {/* 11. Industries We Serve (9 Sectors) */}
        <IndustriesSection
          onSelectIndustry={(indName) =>
            handleRequestServiceFromAnywhere(undefined, `Facility: ${indName}`)
          }
        />

        {/* 12. About Us & Leadership Profile */}
        <AboutSection
          onRequestService={() => handleRequestServiceFromAnywhere()}
        />

        {/* 13. Online Service Request Form & Ticketing */}
        <ServiceRequestForm
          initialService={prefillService}
          initialEquipment={prefillEquipment}
          initialCategory={prefillCategory}
          onSaveRequest={handleSaveRequest}
          onTrackId={handleTrackId}
        />

        {/* 14. Biomedical Photo Gallery with Lightbox */}
        <PhotoGallery />

        {/* 15. FAQ Accordion Section */}
        <FaqSection
          onRequestService={() => handleRequestServiceFromAnywhere()}
        />

        {/* 16. Client Feedback / Testimonial UI */}
        <TestimonialsSection />

        {/* 17. Contact Us & Location */}
        <ContactSection
          onRequestService={() => handleRequestServiceFromAnywhere()}
        />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onRequestService={() => handleRequestServiceFromAnywhere()}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Mobile Bottom Quick-Action Bar (Call | WhatsApp | Request Service) */}
      <MobileQuickBar
        onRequestService={() => handleRequestServiceFromAnywhere()}
      />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Real-Time Request Tracker Modal */}
      <RequestTrackerModal
        isOpen={trackerOpen}
        onClose={() => setTrackerOpen(false)}
        requests={requests}
        defaultSearchId={trackerSearchId}
        onRequestService={() => handleRequestServiceFromAnywhere()}
      />

      {/* Future-Ready Service Management Admin Portal Modal */}
      <AdminDashboardModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        requests={requests}
        onUpdateRequestStatus={handleUpdateRequestStatus}
        onDeleteRequest={handleDeleteRequest}
      />

      {/* Legal / Policy Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
};

export default App;
