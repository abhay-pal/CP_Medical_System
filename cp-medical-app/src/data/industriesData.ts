import { IndustryItem } from '../types';

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'multi-speciality-hospitals',
    name: 'Multi-Speciality Hospitals',
    tagline: 'Comprehensive biomedical department support for 50 to 500+ bed hospital facilities.',
    description: 'We act as your dedicated or supplemental biomedical engineering team, managing multi-department asset fleets across cardiology, neurology, nephrology, pediatrics, and surgical care with complete NABH compliance.',
    equipmentFocus: ['ICU Ventilators', 'Multi-bed Patient Monitoring Systems', 'Anaesthesia Workstations', 'OT Suites', 'CSSD Plants'],
    serviceNeeds: ['Comprehensive CMC Contracts', '24/7 Breakdown Dispatch', 'PPM Schedules', 'Annual Calibration Audits'],
    icon: 'Building2'
  },
  {
    id: 'small-hospitals',
    name: 'Small Hospitals (15-50 Beds)',
    tagline: 'Cost-effective, reliable biomedical care without maintaining a full in-house engineering payroll.',
    description: 'Medium and small hospitals get full biomedical engineering expertise on-demand and through affordable annual maintenance plans, ensuring continuous clinical safety and zero unexpected capital drain.',
    equipmentFocus: ['Patient Monitors', 'Syringe Pumps', 'ECG Machines', 'OT Electrosurgical Units', 'Autoclaves'],
    serviceNeeds: ['Affordable AMC Packages', 'On-Call Breakdown Servicing', 'Routine Preventive Maintenance'],
    icon: 'Hospital'
  },
  {
    id: 'nursing-homes',
    name: 'Nursing Homes & Maternity Centres',
    tagline: 'Dependable monitoring and surgical support for patient care and maternity operations.',
    description: 'We keep critical monitoring, suction apparatus, baby warmers, phototherapy units, and maternity OT equipment running smoothly with prompt local technician visits.',
    equipmentFocus: ['Foetal Monitors', 'Patient Monitors', 'Phototherapy Units', 'Suction Apparatus', 'OT Lights & Tables'],
    serviceNeeds: ['Regular PPM Visits', 'Rapid Spare Parts Replacement', 'Equipment Safety Verification'],
    icon: 'HeartHandshake'
  },
  {
    id: 'clinics',
    name: 'Specialist Clinics & Polyclinics',
    tagline: 'Precision equipment servicing for cardiology, ENT, dental, and general outpatient clinics.',
    description: 'Outpatient practitioners require rapid diagnostic turnaround. We service tabletop autoclaves, diagnostic ECGs, ultrasonic scalers, ENT workstations, and patient vitals monitors.',
    equipmentFocus: ['12-Lead ECG Machines', 'Tabletop Class B Autoclaves', 'Vital Sign Monitors', 'Nebulizers', 'Suction Units'],
    serviceNeeds: ['Fast Calibration', 'Probe/Cable Replacement', 'Preventive Inspection'],
    icon: 'Stethoscope'
  },
  {
    id: 'diagnostic-centres',
    name: 'Diagnostic & Imaging Centres',
    tagline: 'Signal clarity and electrical safety testing for diagnostic imaging and cardiology devices.',
    description: 'Diagnostic accuracy is everything. We provide probe maintenance, trackball servicing, power module repairs, and ECG/display calibration to keep imaging results razor sharp.',
    equipmentFocus: ['Ultrasound Machines', 'Ultrasound Probes', '12-Channel ECG Systems', 'Diagnostic Medical Monitors', 'TMT Systems'],
    serviceNeeds: ['Probe Lens Servicing', 'DICOM Calibration', 'Power Supply Servicing'],
    icon: 'Activity'
  },
  {
    id: 'pathology-labs',
    name: 'Pathology & Clinical Labs',
    tagline: 'Optical alignment, fluidics repair, and temperature calibration for biochemistry & hematology.',
    description: 'We service automated hematology cell counters, semi-auto clinical chemistry analyzers, centrifuges, and microscopes to ensure precise optical density, flowcell pressure, and reliable test results.',
    equipmentFocus: ['Biochemistry Analyzers', 'Hematology 3-Part/5-Part Analyzers', 'Clinical Centrifuges', 'Binocular Microscopes', 'Electrolyte ISE Analyzers'],
    serviceNeeds: ['Photometer Lamp Calibration', 'Fluidic Pump Tubing Overhaul', 'Aperture Tube Cleaning', 'Incubator Temperature Validation'],
    icon: 'FlaskConical'
  },
  {
    id: 'icu-facilities',
    name: 'ICU & Critical Care Facilities',
    tagline: 'Life-critical support with rapid emergency response for intensive care environments.',
    description: 'Intensive Care Units cannot afford even a single hour of ventilator or patient monitor failure. We provide priority emergency dispatch and quarterly PPM checks for uninterrupted life support.',
    equipmentFocus: ['Invasive Ventilators', 'Defibrillators', 'Multi-Para Monitors', 'Syringe Infusion Pumps', 'Central Monitoring Stations'],
    serviceNeeds: ['Emergency Priority Response', 'Oxygen Sensor & Flow Sensor Calibration', 'Occlusion Pressure Testing'],
    icon: 'ShieldAlert'
  },
  {
    id: 'operation-theatres',
    name: 'Operation Theatre (OT) Complexes',
    tagline: 'Uninterrupted surgical energy, lighting, and anaesthesia delivery systems.',
    description: 'Surgical safety depends on precise electrocautery RF wattage, shadowless illumination, reliable hydraulic table stability, and gas delivery safety.',
    equipmentFocus: ['Anaesthesia Workstations', 'Electrosurgical Cautery Units', 'OT Tables', 'Shadowless Surgical Lights', 'Surgical Suction'],
    serviceNeeds: ['Electrosurgical HF Wattage Calibration', 'Anaesthesia Vaporizer & Leak Checks', 'Hydraulic System Maintenance'],
    icon: 'Scissors'
  },
  {
    id: 'healthcare-institutions',
    name: 'Healthcare Institutions & Medical Colleges',
    tagline: 'Campus-wide biomedical asset management, calibration audits, and technical training.',
    description: 'Large institutional healthcare complexes, research hospitals, and teaching institutions benefit from standardized biomedical maintenance workflows, asset coding, and multi-department service tracking.',
    equipmentFocus: ['Full Hospital Asset Fleets', 'Laboratory Equipment', 'Surgical Theatres', 'Emergency Departments'],
    serviceNeeds: ['Annual Multi-Equipment CMC', 'Centralized Service Documentation', 'Institutional Biomedical Safety Audits'],
    icon: 'GraduationCap'
  }
];
