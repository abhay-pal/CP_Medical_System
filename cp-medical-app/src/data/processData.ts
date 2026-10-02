import { ProcessStep } from '../types';

export const SERVICE_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Raise Service Request',
    description: 'Submit an online request, call 7417846881, or send photos/video via WhatsApp detailing the equipment and problem.',
    keyDeliverable: 'Instant Service Ticket & Unique Request ID (CPMS-2026-XXXXX)',
    icon: 'FileText'
  },
  {
    step: '02',
    number: '02',
    title: 'Our Team Contacts You',
    description: 'A biomedical engineering specialist reviews your equipment details, error codes, and symptoms within minutes to plan the exact intervention.',
    keyDeliverable: 'Initial Technical Review & Engineer Assignment',
    icon: 'PhoneCall'
  },
  {
    step: '03',
    number: '03',
    title: 'Issue Assessment & Spares Prep',
    description: 'We identify likely component failures, prepare calibrated test instruments, and carry required replacement boards/sensors.',
    keyDeliverable: 'Pre-visit Technical Readiness & Spares Staging',
    icon: 'Search'
  },
  {
    step: '04',
    number: '04',
    title: 'Engineer Visit & On-Site Diagnosis',
    description: 'Our qualified biomedical engineer arrives at your hospital or lab to perform systematic diagnostic isolation at component and circuit level.',
    keyDeliverable: 'Complete Fault Diagnostic & Transparent Action Plan',
    icon: 'MapPin'
  },
  {
    step: '05',
    number: '05',
    title: 'Repair / Maintenance / Calibration',
    description: 'We execute component replacement, circuit board soldering, pneumatic cleaning, mechanical tuning, or parameter calibration using specialized tools.',
    keyDeliverable: 'Precision Biomedical Engineering Intervention',
    icon: 'Wrench'
  },
  {
    step: '06',
    number: '06',
    title: 'Rigorous Testing & Safety Verification',
    description: 'The machine undergoes simulated patient load testing, output energy/flow verification, and electrical safety analysis before release.',
    keyDeliverable: 'Simulated Load & Electrical Safety Clearance',
    icon: 'ShieldCheck'
  },
  {
    step: '07',
    number: '07',
    title: 'Detailed Service Report & Sign-off',
    description: 'An itemized digital service report with pre/post readings, replaced parts, and next scheduled PPM date is provided for hospital records.',
    keyDeliverable: 'NABH/NABL-Ready Official Service Certificate',
    icon: 'FileCheck'
  },
  {
    step: '08',
    number: '08',
    title: 'Support & Post-Service Follow-up',
    description: 'Our technical desk checks in post-service to ensure flawless clinical operation, with ongoing warranty and on-call assistance.',
    keyDeliverable: 'Continuous Technical Support & Service Warranty',
    icon: 'HeartHandshake'
  }
];
