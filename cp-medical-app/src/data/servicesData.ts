import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'breakdown-repair',
    name: 'Breakdown Repair',
    shortDesc: 'Emergency troubleshooting and component-level repair of medical equipment.',
    fullDesc: 'When critical medical equipment breaks down unexpectedly, patient care is compromised. Our biomedical engineering team provides fast, component-level fault isolation, board repair, sensor replacement, and emergency restoration of hospital devices.',
    iconName: 'Wrench',
    benefits: [
      'Rapid root-cause fault identification',
      'Minimizes hospital device downtime',
      'Component-level board & power supply troubleshooting',
      'Post-repair stress testing & electrical safety checks'
    ],
    scopeOfWork: [
      'Emergency on-call diagnosis',
      'Defective module/PCB replacement or repair',
      'Internal circuitry inspection & signal verification',
      'Operational recalibration and functionality sign-off'
    ],
    equipmentCovered: [
      'Patient Monitors', 'Ventilators', 'Defibrillators', 'Syringe & Infusion Pumps',
      'ECG Machines', 'Biochemistry Analyzers', 'Electrosurgical Units', 'Autoclaves'
    ],
    turnaround: 'Rapid On-Call / Priority Support',
    isPopular: true,
  },
  {
    id: 'preventive-maintenance',
    name: 'Preventive Maintenance (PPM)',
    shortDesc: 'Scheduled maintenance to reduce equipment failures and extend operational lifespan.',
    fullDesc: 'Periodic planned preventive maintenance is the most effective way to eliminate sudden breakdowns. We execute strict OEM-compliant checklists, deep internal cleaning, mechanical lubrication, sensor validation, and electrical grounding tests.',
    iconName: 'Settings',
    benefits: [
      'Prevents 85%+ of sudden equipment breakdowns',
      'Extends asset lifespan significantly',
      'Maintains equipment accuracy for clinical diagnostic decisions',
      'Fulfills NABH / NABL maintenance audit criteria'
    ],
    scopeOfWork: [
      'Visual & mechanical chassis inspection',
      'Internal dust removal and pneumatic airway cleaning',
      'Battery health, capacitor & power supply checks',
      'Lubrication of moving mechanical assemblies',
      'Preventive Maintenance (PPM) service sticker and log update'
    ],
    equipmentCovered: [
      'ICU Ventilators', 'Anaesthesia Workstations', 'Centrifuges', 'Microscopes',
      'OT Tables & OT Lights', 'Sterilizers', 'Diagnostic Monitors'
    ],
    turnaround: 'Scheduled Periodic Visits (Monthly/Quarterly)',
    isPopular: true,
  },
  {
    id: 'corrective-maintenance',
    name: 'Corrective Maintenance',
    shortDesc: 'Systematic diagnosis and correction of recurring or intermittent equipment faults.',
    fullDesc: 'For medical devices demonstrating erratic readings, intermittent alarms, power glitches, or calibration drift, we perform thorough diagnostic diagnostics to permanently correct the root issue without recurring failures.',
    iconName: 'Hammer',
    benefits: [
      'Eliminates intermittent false alarms & sensor drift',
      'Restores factory-standard accuracy & response times',
      'Cost-effective alternative to complete unit replacement',
      'Standardized warranty on repaired modules'
    ],
    scopeOfWork: [
      'Waveform & signal analysis under simulated patient load',
      'Firmware/software error verification and reset',
      'Replacement of degraded electronic components',
      'Full load endurance burn-in test'
    ],
    equipmentCovered: [
      'Multi-para Patient Monitors', 'Electrosurgical Cautery Generators',
      'Hematology Analyzers', 'Suction Units', 'Ultrasound Systems'
    ],
    turnaround: '24 to 48 Hours depending on fault complexity',
  },
  {
    id: 'installation-commissioning',
    name: 'Installation & Commissioning',
    shortDesc: 'Professional installation, electrical verification and clinical setup of medical devices.',
    fullDesc: 'Proper installation is essential for equipment longevity and patient safety. Our engineers handle unboxing, physical mounting, electrical phase matching, grounding verification, plumbing/gas line hookups, and initial system commissioning.',
    iconName: 'Cpu',
    benefits: [
      'Compliant hospital electrical & environmental setup',
      'Eliminates installation-induced early component failure',
      'Operator briefing and clinical workflow alignment',
      'Complete commissioning sign-off certificate'
    ],
    scopeOfWork: [
      'Site readiness & power quality check (UPS/Earthing)',
      'Physical installation and ergonomic positioning',
      'Calibration check against standard reference simulators',
      'Clinical staff orientation for basic controls & alarm handling'
    ],
    equipmentCovered: [
      'OT Suites & Surgical Lights', 'Anaesthesia Machines', 'Biochemistry Analyzers',
      'CSSD Autoclaves', 'ICU Multi-Bed Monitoring Networks'
    ],
    turnaround: 'Scheduled with hospital timeline',
  },
  {
    id: 'calibration-performance-testing',
    name: 'Calibration & Performance Testing',
    shortDesc: 'Testing and calibration for reliable, accurate and legally compliant equipment output.',
    fullDesc: 'Medical devices must deliver exact pressures, voltages, energy levels, and diagnostic measurements. We use calibrated biomedical testing instruments to verify parameters and align them back to certified clinical tolerances.',
    iconName: 'Target',
    benefits: [
      'Ensures clinical diagnostic accuracy for patient safety',
      'Traceable calibration documentation for NABH/NABL accreditation',
      'Identifies output deviation before it harms a patient',
      'Includes detailed parameter deviation certificate'
    ],
    scopeOfWork: [
      'Defibrillator joule discharge & synchronization test',
      'Ventilator tidal volume, FiO2 & PEEP pressure verification',
      'Syringe/Infusion pump flow rate & occlusion pressure calibration',
      'Electrosurgical HF power output & leakage current verification',
      'ECG machine amplitude, timing & filter validation'
    ],
    equipmentCovered: [
      'Defibrillators', 'Ventilators', 'Syringe Pumps', 'Infusion Pumps',
      'ECG Machines', 'Electrosurgical Units', 'Biochemistry Analyzers'
    ],
    turnaround: 'On-site same day testing & report generation',
    isPopular: true,
  },
  {
    id: 'service-report-documentation',
    name: 'Service Report & Documentation',
    shortDesc: 'Comprehensive maintenance history, test records and regulatory audit compliance.',
    fullDesc: 'Every service, repair, calibration, or inspection visit is accompanied by an itemized biomedical service report detailing initial faults, parts replaced, calibration readings, and engineer remarks for hospital audits.',
    iconName: 'FileText',
    benefits: [
      'Complete asset equipment history file for each machine',
      'Ready documentation for hospital accreditation audits (NABH/ISO)',
      'Transparent tracking of spares and service costs',
      'Clear preventive maintenance scheduling logs'
    ],
    scopeOfWork: [
      'Digital & physical service reports with unique tracking ID',
      'Pre-service vs. Post-service performance parameters',
      'Parts consumption and serial number logs',
      'Engineer sign-off and Hospital In-Charge verification'
    ],
    equipmentCovered: [
      'All Biomedical Assets across ICU, OT, Lab, Diagnostic & CSSD'
    ],
    turnaround: 'Instant digital & hardcopy generation upon service completion',
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    shortDesc: 'Dedicated biomedical technical guidance, remote diagnostics and operational assistance.',
    fullDesc: 'Biomedical systems often trigger alarms or error codes that hospital staff need immediate help interpreting. Our support desk assists nurses, technicians, and doctors over phone or video to troubleshoot non-hardware issues swiftly.',
    iconName: 'Headphones',
    benefits: [
      'Immediate guidance for critical alarm codes',
      'Reduces unnecessary equipment downtime',
      'Direct contact with trained biomedical engineers',
      'Assistance with consumable replacement & settings configuration'
    ],
    scopeOfWork: [
      'Direct telephonic support on 7417846881',
      'WhatsApp photo/video error code interpretation',
      'Sensor calibration troubleshooting guidance',
      'Escalation to immediate on-site engineer dispatch when required'
    ],
    equipmentCovered: [
      'All Hospital & Clinical Equipment'
    ],
    turnaround: 'Immediate Response',
  },
  {
    id: 'spare-parts-replacement',
    name: 'Spare Parts Replacement',
    shortDesc: 'Supply and replacement of high-grade, reliable biomedical boards, sensors & consumables.',
    fullDesc: 'We source and install genuine replacement spare parts including power supplies, display panels, motherboard ICs, flow sensors, SpO2 probes, NIBP cuffs, ECG cables, oxygen sensors, and surgical electrodes.',
    iconName: 'Layers',
    benefits: [
      'Tested compatibility with OEM specifications',
      'Guaranteed reliability for critical hospital environments',
      'Direct replacement service by skilled engineers',
      'Warranty on replaced functional parts'
    ],
    scopeOfWork: [
      'Faulty part identification & tolerance testing',
      'Procurement of exact OEM/compatible replacement modules',
      'Precision soldering / harness replacement',
      'Post-replacement calibration and load testing'
    ],
    equipmentCovered: [
      'Patient Monitors', 'Ventilators', 'Defibrillators', 'Analyzers',
      'Autoclaves', 'OT Equipment', 'ECG Machines'
    ],
    turnaround: 'Stock items immediate; special parts 24-48 hrs',
  },
  {
    id: 'on-site-service',
    name: 'On-Site Service',
    shortDesc: 'Doorstep biomedical engineering support directly at hospitals, clinics & pathology labs.',
    fullDesc: 'Heavy or wall-mounted hospital equipment cannot easily be transported. Our mobile biomedical engineers travel with specialized test equipment directly to your facility in Muzaffarnagar and surrounding regions.',
    iconName: 'Truck',
    benefits: [
      'No risk of damage during equipment transport',
      'Minimal disruption to hospital department operations',
      'Direct consultation with hospital department heads',
      'Testing under real clinical power and environmental conditions'
    ],
    scopeOfWork: [
      'Mobile tool & analyzer dispatch to hospital location',
      'In-situ testing in ICU, OT, or Lab setting',
      'Immediate repair and test verification on patient beds / labs',
      'Same-day service completion whenever feasible'
    ],
    equipmentCovered: [
      'ICU Ward Equipment', 'Operating Room Equipment', 'Pathology Analyzers',
      'Autoclave Boilers', 'Dialysis & CSSD Units'
    ],
    turnaround: 'Same day / within hours for local hospital locations',
    isPopular: true,
  },
  {
    id: 'inspection-safety-testing',
    name: 'Equipment Inspection & Safety Testing',
    shortDesc: 'Comprehensive electrical safety checks, leakage current tests & physical audit.',
    fullDesc: 'Prevent electrical shock hazards and ensure patient safety with regular electrical safety analysis (ESA) per biomedical standards. We check chassis leakage current, patient lead leakage, earth continuity, and enclosure integrity.',
    iconName: 'ShieldCheck',
    benefits: [
      'Protects patients and clinical staff from micro-shocks',
      'Verifies compliance with biomedical electrical safety norms',
      'Detects frayed internal wiring and ground isolation failures',
      'Provides Safety Clearance Certificate'
    ],
    scopeOfWork: [
      'Earth wire resistance measurement',
      'Enclosure and patient lead leakage current testing',
      'Insulation resistance evaluation',
      'Mechanical integrity, casing, and cable strain-relief check'
    ],
    equipmentCovered: [
      'All Mains-Powered & Patient-Connected Medical Equipment'
    ],
    turnaround: 'Quick on-site safety audit and sticker application',
  },
];
