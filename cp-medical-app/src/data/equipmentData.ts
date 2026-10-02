import type { EquipmentCategory, EquipmentProduct } from '../types';

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: 'icu-critical-care',
    name: 'ICU & Critical Care',
    tagline: 'Life-Support and Continuous Patient Monitoring Equipment',
    description: 'Critical life-support systems requiring zero-downtime reliability, precise sensor calibration, and periodic electrical safety checks.',
    image: 'images/cat_icu_realistic.jpg',
    color: 'from-blue-600 to-indigo-700',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    products: [
      'Patient Monitor',
      'Ventilator',
      'Defibrillator',
      'Syringe Pump',
      'Infusion Pump',
      'Suction Machine',
      'Oxygen Concentrator'
    ]
  },
  {
    id: 'ot-equipment',
    name: 'OT Equipment',
    tagline: 'Operating Theatre Surgical & Anaesthesia Technology',
    description: 'Surgical suites depend on accurate energy output, stable hydraulic/electronic tables, shadowless surgical lights, and precision gas delivery.',
    image: 'images/cat_ot_realistic.jpg',
    color: 'from-teal-600 to-emerald-700',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    products: [
      'OT Table',
      'OT Light',
      'Electrosurgical / Cautery Unit',
      'Anaesthesia Machine',
      'Surgical Equipment'
    ]
  },
  {
    id: 'laboratory-pathology',
    name: 'Laboratory & Pathology',
    tagline: 'Clinical Diagnostic Analyzers & Pathology Workstation Devices',
    description: 'Pathology labs require high optical precision, exact optical density readings, reliable fluidic pumping, and calibrated rotor speeds.',
    image: 'images/cat_lab_realistic.jpg',
    color: 'from-purple-600 to-indigo-800',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    products: [
      'Biochemistry Analyzer',
      'Hematology / CBC Analyzer',
      'Centrifuge',
      'Microscope',
      'Semi / Fully Automatic Analyzers'
    ]
  },
  {
    id: 'diagnostic-equipment',
    name: 'Diagnostic Equipment',
    tagline: 'Cardiology, Imaging & Biomedical Diagnostic Monitors',
    description: 'Diagnostic tools requiring accurate waveform capture, noise filtering, high-resolution display matrices, and probe integrity.',
    image: 'images/cat_diag_realistic.jpg',
    color: 'from-sky-600 to-blue-800',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    products: [
      'ECG Machine',
      'Ultrasound Support',
      'Diagnostic Monitors',
      'Other Biomedical Equipment'
    ]
  },
  {
    id: 'sterilization-equipment',
    name: 'Sterilization Equipment',
    tagline: 'Autoclaves, Steam Sterilizers & CSSD Infection Control',
    description: 'Infection prevention hardware relying on accurate temperature gauges, pressure vessel safety seals, timer valves, and steam heating elements.',
    image: 'images/cat_steril_realistic.jpg',
    color: 'from-amber-600 to-orange-700',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    products: [
      'Autoclave',
      'Sterilizer',
      'CSSD Equipment'
    ]
  }
];

export const ALL_EQUIPMENT_PRODUCTS: EquipmentProduct[] = [
  // ICU & Critical Care
  {
    id: 'patient-monitor',
    name: 'Patient Monitor (Multi-Para)',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/prod_patient_monitor.jpg',
    overview: 'Multi-parameter monitors tracking ECG, SpO2, NIBP, IBP, Temperature, Respiration, and EtCO2 across ICUs, HDUs, and post-op recovery.',
    typicalIssues: [
      'NIBP pump failure or slow cuff inflation / leakage',
      'SpO2 probe signal loss or intermittent reading error',
      'ECG baseline wander or severe 50Hz electrical noise',
      'Touchscreen digitizer or display backlight blankout',
      'Internal backup battery not holding charge'
    ],
    servicesAvailable: [
      'Breakdown Repair & Motherboard Servicing',
      'NIBP Air Pump & Solenoid Valve Replacement',
      'SpO2, ECG, Temp Parameter Module Repair',
      'Preventive Maintenance (PPM) & Safety Testing',
      'NIBP / SpO2 / ECG Calibration & Verification'
    ],
    preventiveMaintenance: 'Quarterly (Every 3 months): Filter cleaning, battery check, NIBP cuff pressure leak test, SpO2 sensor test, electrical safety check.',
    calibrationAvailability: true,
    calibrationDetails: 'NIBP pressure transducer calibration, ECG simulator test (60/120 BPM), SpO2 optical simulator verification, leakage current test.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: Power boards, NIBP pumps, SpO2 extension cables, Adult/Pediatric cuffs, ECG patient leads, Lithium battery packs.',
    criticality: 'Critical'
  },
  {
    id: 'ventilator',
    name: 'ICU / Transport Ventilator',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/prod_ventilator.jpg',
    overview: 'High-end invasive and non-invasive mechanical ventilators providing mandatory and supportive respiratory ventilation to critically ill patients.',
    typicalIssues: [
      'O2 sensor / FiO2 cell calibration error or depletion',
      'Expiratory flow sensor malfunction or moisture blockage',
      'Inspiratory / Expiratory valve sticking or pressure deviation',
      'Compressor motor error or turbine drive fault',
      'Tidal volume delivery mismatch or high airway pressure alarms'
    ],
    servicesAvailable: [
      'Comprehensive Pneumatic & Electronic Diagnostics',
      'Flow Sensor & FiO2 Oxygen Cell Replacement',
      'Proportional Valve Cleaning, Calibration & Overhaul',
      'Compressor / Blower Turbine Servicing',
      'Ventilator Performance Calibration & Flow Verification'
    ],
    preventiveMaintenance: 'Bi-Monthly / Quarterly: Airway filter replacement, O2 sensor calibration, valve seal inspection, pneumatic leak test, battery stress test.',
    calibrationAvailability: true,
    calibrationDetails: 'Tidal volume verification (100ml - 1000ml), FiO2 accuracy (21% - 100%), PEEP pressure accuracy, breath rate check with precision biomedical gas flow analyzer.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Ultrasonic flow sensors, O2 sensors, bacterial filters, silicone patient circuits, valve diaphragms, main control boards.',
    criticality: 'Critical'
  },
  {
    id: 'defibrillator',
    name: 'Defibrillator (Biphasic / AED)',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/prod_defibrillator.jpg',
    overview: 'Emergency biphasic defibrillators and automated external defibrillators with synchronized cardioversion, external pacing, and monitoring.',
    typicalIssues: [
      'High-voltage capacitor charging failure or slow charging',
      'Joule energy discharge mismatch or calibration loss',
      'Paddle switch / electrode cable damage or contact resistance',
      'ECG sync mode triggering failure during cardioversion',
      'Defibrillator battery dead or showing memory error'
    ],
    servicesAvailable: [
      'High Voltage Board & Charging Circuit Repair',
      'Defibrillator Joule Energy Calibration & Testing',
      'Paddle Cable & Connector Replacement',
      'Internal Battery Pack Replacement & Reconditioning',
      'Synchronized Cardioversion & Pacing Verification'
    ],
    preventiveMaintenance: 'Monthly / Quarterly: Self-test verification, 50J / 200J / 360J test discharge, battery charge cycle check, paddle surface inspection.',
    calibrationAvailability: true,
    calibrationDetails: 'Delivered energy test (Joules accuracy ±10%), charge time measurement, peak current verification using certified biomedical Defibrillator Analyzer.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: High voltage relays, paddle cables, recording thermal paper, lead sets, rechargeable battery modules.',
    criticality: 'Critical'
  },
  {
    id: 'syringe-pump',
    name: 'Syringe Infusion Pump',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/prod_syringe_pump.jpg',
    overview: 'Precision micro-infusion syringe pumps for accurate drug delivery in neonatal, pediatric, ICU, and oncology wards.',
    typicalIssues: [
      'Flow rate error or drug delivery volume deviation',
      'Occlusion pressure sensor false alarm or non-detection',
      'Syringe size auto-detection sensor error',
      'Lead screw mechanical jamming or stepper motor noise',
      'Plunger clamp sensor broken or worn out'
    ],
    servicesAvailable: [
      'Stepper Motor & Mechanical Lead Screw Alignment',
      'Flow Rate Accuracy Calibration & Validation',
      'Occlusion Pressure Transducer Calibration',
      'Keypad & Display Replacement',
      'Preventive Maintenance & Drop-Test Certification'
    ],
    preventiveMaintenance: 'Quarterly: Mechanical slide cleaning and lubrication, syringe clamp alignment, battery run-time verification, occlusion threshold test.',
    calibrationAvailability: true,
    calibrationDetails: 'Delivery accuracy check at 1ml/hr, 10ml/hr, 50ml/hr using gravimetric/biomedical infusion tester; occlusion alarm trigger test (Low/Med/High).',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Plunger sensors, optical encoders, lead screws, keypads, power adapters, Li-ion battery packs.',
    criticality: 'High'
  },
  {
    id: 'infusion-pump',
    name: 'Volumetric Infusion Pump',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/prod_infusion_pump.jpg',
    overview: 'Continuous IV infusion pumps for large volume intravenous fluids, blood products, and parenteral nutrition delivery.',
    typicalIssues: [
      'Air-in-line ultrasonic detector false alarm',
      'Peristaltic finger mechanism wear causing inaccurate flow',
      'Door sensor latch broken or misalignment alarm',
      'Flow rate drift over long infusions',
      'Drop sensor failure or battery drain'
    ],
    servicesAvailable: [
      'Peristaltic Motor Mechanism Overhaul',
      'Air-in-Line Ultrasonic Sensor Calibration',
      'Door Mechanism & Latch Assembly Repair',
      'Flow Rate Calibration with Medical Infusion Analyzer',
      'Preventive Maintenance & Electrical Safety Checks'
    ],
    preventiveMaintenance: 'Quarterly: Sensor cleaning, peristaltic finger inspection, door seal check, flow rate verification, battery backup test.',
    calibrationAvailability: true,
    calibrationDetails: 'Calibration of delivery rates at 25ml/h, 100ml/h, 500ml/h; air bubble sensitivity test (50µL - 250µL).',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Peristaltic fingers, ultrasonic sensors, drop counters, door latches, power supply boards.',
    criticality: 'High'
  },
  {
    id: 'suction-machine',
    name: 'Medical Suction Apparatus / Aspirator',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/cat_icu_realistic.jpg',
    overview: 'High-vacuum surgical and ICU suction machines for clearing airways, surgical fluids, and secretions.',
    typicalIssues: [
      'Loss of negative vacuum pressure or slow vacuum build-up',
      'Piston diaphragm tear or cylinder seal wear',
      'Overflow float valve blockage or fluid ingress into motor',
      'Vacuum regulator valve leakage or faulty gauge',
      'Motor overheating or high operating noise'
    ],
    servicesAvailable: [
      'Diaphragm & Piston Cylinder Replacement',
      'Vacuum Pump Motor Overhaul & Bearing Replacement',
      'Regulator Valve & Pressure Gauge Calibration',
      'Bacterial Filter & Overflow Safety Valve Replacement',
      'Preventive Maintenance & Electrical Grounding Check'
    ],
    preventiveMaintenance: 'Quarterly: Vacuum gauge check, jar silicone gasket seal replacement, filter replacement, motor vibration check.',
    calibrationAvailability: true,
    calibrationDetails: 'Maximum vacuum pressure verification (-0.02 to -0.09 MPa), regulator linearity test.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: Vacuum pumps, silicone tubing, overflow valves, vacuum gauges, foot switches, polycarbonate jars.',
    criticality: 'High'
  },
  {
    id: 'oxygen-concentrator',
    name: 'Oxygen Concentrator (5L / 10L)',
    category: 'ICU & Critical Care',
    categoryId: 'icu-critical-care',
    image: 'images/cat_icu_realistic.jpg',
    overview: 'Medical grade oxygen concentrators extracting pure oxygen using PSA zeolite sieve bed technology.',
    typicalIssues: [
      'Low oxygen purity output (<85% O2 alarm)',
      'Zeolite molecular sieve bed degradation / moisture contamination',
      'Four-way valve sticking or solenoid timing failure',
      'Compressor pressure drop or intake filter clogging',
      'Flowmeter control valve leakage'
    ],
    servicesAvailable: [
      'Zeolite Sieve Bed Replacement & Re-packing',
      'Compressor Cup Seal & Valve Plate Overhaul',
      'Solenoid Valve Assembly Cleaning & Testing',
      'Intake & HEPA Filter Replacement',
      'Ultrasonic Oxygen Purity & Flow Rate Calibration'
    ],
    preventiveMaintenance: 'Bi-Monthly / Quarterly: Gross particle & HEPA filter cleaning/replacement, sieve bed pressure check, cooling fan check.',
    calibrationAvailability: true,
    calibrationDetails: 'Oxygen purity verification across 1L to 10L flow settings using certified ultrasonic O2 analyzer (>93% ±3%).',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Zeolite molecular sieve columns, compressor seal kits, solenoid valves, O2 sensors, flowmeters, intake filters.',
    criticality: 'High'
  },

  // OT Equipment
  {
    id: 'ot-table',
    name: 'Operation Theatre Table (Hydraulic / Electro-Hydraulic)',
    category: 'OT Equipment',
    categoryId: 'ot-equipment',
    image: 'images/ot_equipment_suite.jpg',
    overview: 'Surgical operating tables supporting multi-position surgical procedures (Trendelenburg, lateral tilt, flex/reflex, height adjustment).',
    typicalIssues: [
      'Hydraulic oil leakage or loss of table height holding pressure',
      'Electro-hydraulic solenoid valve failure or uneven tilting',
      'Handheld remote controller / foot control cable broken',
      'Mechanical joint backlash or locking mechanism failure',
      'Main motor pump failure or electrical tripping'
    ],
    servicesAvailable: [
      'Hydraulic Cylinder & Seal Kit Replacement',
      'Electro-Hydraulic Solenoid Valve Cleaning & Repair',
      'Hand Controller & Foot Switch Rewiring / Replacement',
      'Brake Mechanism & Floor Lock Overhaul',
      'Preventive Maintenance, Oil Top-Up & Leveling'
    ],
    preventiveMaintenance: 'Quarterly / Semi-Annual: Hydraulic fluid level check & top-up, seal inspection, limit switch verification, emergency manual override check.',
    calibrationAvailability: true,
    calibrationDetails: 'Angle calibration for Trendelenburg / Reverse Trendelenburg, lateral tilt angle verification, weight load testing.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Hydraulic seals, pump motors, solenoid coils, hand pendant remotes, table top pads, power supplies.',
    criticality: 'High'
  },
  {
    id: 'ot-light',
    name: 'Surgical OT Light (LED / Halogen)',
    category: 'OT Equipment',
    categoryId: 'ot-equipment',
    image: 'images/ot_equipment_suite.jpg',
    overview: 'Ceiling and mobile shadowless surgical lighting systems providing high Lux intensity, color rendering (CRI), and depth illumination.',
    typicalIssues: [
      'LED module array failure or partial dome blackout',
      'Spring balance arm drifting or loose articulation joints',
      'Touchpad intensity / color temperature control failure',
      'Power supply driver burnt or flickering output',
      'Slip ring rotation contact noise or intermittent power'
    ],
    servicesAvailable: [
      'Constant-Current LED Driver Board Repair',
      'Spring Balance Arm Tension Adjustment & Bushing Replacement',
      'Slip Ring Continuous 360° Rotation Contact Servicing',
      'Intensity Control Panel & Dimming Circuit Repair',
      'Illuminance (Lux) & Color Temperature Verification'
    ],
    preventiveMaintenance: 'Semi-Annual: Spring arm balancing tension check, ceiling anchor bolt inspection, LED module thermal paste check, slip ring cleaning.',
    calibrationAvailability: true,
    calibrationDetails: 'Lux level measurement at 1-meter focal distance using calibrated digital photometer (up to 160,000 Lux), CRI verification.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: Medical grade LED drivers, sterilizable central handles, slip rings, spring arm tension kits, control keypads.',
    criticality: 'High'
  },
  {
    id: 'electrosurgical-unit',
    name: 'Electrosurgical / Cautery Unit (ESU)',
    category: 'OT Equipment',
    categoryId: 'ot-equipment',
    image: 'images/ot_equipment_suite.jpg',
    overview: 'High-frequency monopolar and bipolar surgical diathermy units for precision cutting, coagulation, and vessel sealing.',
    typicalIssues: [
      'HF RF power output drop or weak coagulation/cut effect',
      'REM (Return Electrode Monitoring) patient plate alarm error',
      'Foot switch or hand switch pencil activation failure',
      'RF power amplifier MOSFET burn-out',
      'High-frequency leakage current exceeding safety limits'
    ],
    servicesAvailable: [
      'RF Power Amplifier & Output Transformer Repair',
      'Patient Return Electrode (REM) Circuit Calibration',
      'Monopolar & Bipolar Foot Switch / Hand Control Servicing',
      'High-Frequency Power Output Calibration with ESU Analyzer',
      'HF Leakage Current & Electrical Safety Certification'
    ],
    preventiveMaintenance: 'Quarterly: HF power output check across Cut/Coag/Bipolar modes, REM safety trip test, foot pedal cable inspection, ventilation filter cleaning.',
    calibrationAvailability: true,
    calibrationDetails: 'Wattage output calibration (Pure Cut, Blend, Fulgurate, Bipolar) across load resistances (100Ω to 1000Ω) with calibrated Electrosurgical Analyzer.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: RF power transistors, REM sensors, footswitch pedals, silicone monopolar pencils, patient plate cables, output relays.',
    criticality: 'Critical'
  },
  {
    id: 'anaesthesia-machine',
    name: 'Anaesthesia Workstation Machine',
    category: 'OT Equipment',
    categoryId: 'ot-equipment',
    image: 'images/cat_ot_realistic.jpg',
    overview: 'Integrated anaesthesia delivery systems combining gas delivery, vaporizer manifolds, breathing circuits, patient ventilation, and scavenging.',
    typicalIssues: [
      'Internal pneumatic pipeline pressure drop or O2/N2O leak',
      'Vaporizer interlock malfunction or agent delivery error',
      'Bellows assembly leak or tidal volume mismatch',
      'Soda lime absorber canister seal leak or valve sticking',
      'Pneumatic flowmeter tube sticking or needle valve wear'
    ],
    servicesAvailable: [
      'High/Low Pressure Pneumatic System Leak Detection',
      'Anaesthesia Ventilator & Bellows Mechanism Overhaul',
      'Breathing System Absorber & Unidirectional Valve Servicing',
      'Rotameter Flow Tube & Needle Valve Cleaning',
      'Comprehensive Workstation Safety & Calibration Testing'
    ],
    preventiveMaintenance: 'Quarterly: Complete pneumatic leak check, bellows inspection, O2 flush test, hypoxic guard interlock check, vaporizer mount seal inspection.',
    calibrationAvailability: true,
    calibrationDetails: 'Flow accuracy check for O2, N2O & Air rotameters, ventilator parameter verification, airway pressure gauge calibration, nitrous cut-off safety test.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Silicone diaphragms, absorber O-rings, O2 flush valves, flow sensor kits, bellows, pressure regulating valves.',
    criticality: 'Critical'
  },
  {
    id: 'surgical-equipment',
    name: 'Surgical OT Equipment & Accessories',
    category: 'OT Equipment',
    categoryId: 'ot-equipment',
    image: 'images/cat_ot_realistic.jpg',
    overview: 'Surgical drill systems, endo-cameras, insufflators, tourniquets, and specialized OT auxiliary devices.',
    typicalIssues: [
      'Motor drive handpiece heating or torque loss',
      'Insufflator gas pressure regulation error or heating fault',
      'Light source LED/Xenon bulb degradation or ballast failure',
      'Camera head cable break or video artifact noise',
      'Pneumatic tourniquet pressure leak or valve fault'
    ],
    servicesAvailable: [
      'Surgical Micro-Motor & Handpiece Servicing',
      'Electronic Insufflator Flow & Pressure Calibration',
      'Surgical Endoscopy Light Source Repair',
      'Tourniquet Calibration & Bladder Seal Servicing',
      'Preventive Maintenance & Safety Verification'
    ],
    preventiveMaintenance: 'Quarterly: Handpiece torque test, insufflator pressure calibration, light guide cable optical transmission check, cable strain inspection.',
    calibrationAvailability: true,
    calibrationDetails: 'Insufflator cavity pressure calibration (0-30 mmHg), pneumatic tourniquet pressure gauge calibration (0-500 mmHg).',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Handpiece bearings, light guide cables, gas filter valves, foot control switches, power supply boards.',
    criticality: 'High'
  },

  // Laboratory & Pathology
  {
    id: 'biochemistry-analyzer',
    name: 'Biochemistry Analyzer (Semi / Fully Automatic)',
    category: 'Laboratory & Pathology',
    categoryId: 'laboratory-pathology',
    image: 'images/lab_analyzers.jpg',
    overview: 'Clinical chemistry analyzers testing enzymes, electrolytes, proteins, glucose, and metabolic panels in blood serum and urine.',
    typicalIssues: [
      'Photometer absorbance drift or halogen lamp degradation',
      'Peristaltic flowcell pump tubing wear or air aspiration',
      'Temperature incubator cuvette block temperature deviation (37°C)',
      'Pipetting probe clot blockage or liquid level sensor fault',
      'Filter wheel motor indexing error or optical filter fade'
    ],
    servicesAvailable: [
      'Photometer Optical Assembly Alignment & Lamp Calibration',
      'Flowcell Fluidics & Peristaltic Pump Overhaul',
      'Peltier Temperature Controller Calibration (37.0°C ±0.1°C)',
      'Liquid Level Sensing & Robotic Arm Alignment',
      'Biochemistry Quality Control Testing & Validation'
    ],
    preventiveMaintenance: 'Quarterly: Optical filter cleaning, pump tubing replacement, temperature calibration, aspiration volume check, wash station maintenance.',
    calibrationAvailability: true,
    calibrationDetails: 'Absorbance linearity test using optical standard filters (340nm to 670nm), 37°C incubator precision measurement, aspiration volume check.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: Halogen lamps (6V/10W, 12V/20W), quartz flowcells, silicone/viton tubing, optical filters, sampling probes, main control boards.',
    criticality: 'High'
  },
  {
    id: 'hematology-cbc-analyzer',
    name: 'Hematology / CBC Analyzer (3-Part / 5-Part)',
    category: 'Laboratory & Pathology',
    categoryId: 'laboratory-pathology',
    image: 'images/cat_lab_realistic.jpg',
    overview: 'Automated cell counters evaluating complete blood count (WBC, RBC, Platelets, Hemoglobin, Diff parameters) using impedance and laser scatter.',
    typicalIssues: [
      'Aperture ruby orifice protein clogging or baseline electrical noise',
      'Reagent syringe pump stepper motor jamming or volume error',
      'Pneumatic pinch valve leakage or reagent line air ingress',
      'HGB hemoglobin photometer LED / sensor drift',
      'High background count on Blank / Diluent test'
    ],
    servicesAvailable: [
      'Aperture Chamber Ultrasonic De-clotting & Voltage Alignment',
      'Precision Syringe Pump & Stepper Motor Overhaul',
      'Pneumatic Solenoid Valve Manifold Servicing',
      'HGB Optical Transducer Alignment & Calibration',
      'Comprehensive CBC Precision & Linearity Testing'
    ],
    preventiveMaintenance: 'Quarterly: Deep protein purge, aperture burn-circuit check, tubing replacement, vacuum pressure regulation, reagent filter cleaning.',
    calibrationAvailability: true,
    calibrationDetails: 'Calibrator running for WBC, RBC, HGB, PLT, MCV parameters; aperture current and threshold voltage calibration.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Aperture tubes, pinch valves, vacuum pumps, syringe plungers, HGB flow chambers, control PCBs.',
    criticality: 'High'
  },
  {
    id: 'centrifuge',
    name: 'Laboratory Centrifuge (Clinical / High Speed)',
    category: 'Laboratory & Pathology',
    categoryId: 'laboratory-pathology',
    image: 'images/cat_lab_realistic.jpg',
    overview: 'Clinical centrifuges for separating serum, plasma, blood cells, urine sediment, and laboratory specimens at controlled RPM / RCF.',
    typicalIssues: [
      'Rotor vibration or excessive motor bearing noise',
      'Lid safety interlock switch failure or refusal to open/close',
      'RPM speed sensor drift or speed display inaccuracy',
      'Carbon brush wear or brushless motor driver failure',
      'Timer circuit failure or sudden imbalance trip'
    ],
    servicesAvailable: [
      'Motor Bearing Replacement & Dynamic Balancing',
      'Optical Tachometer RPM Sensor Calibration',
      'Electronic Lid Interlock & Emergency Release Servicing',
      'Brushless BLDC Motor Driver Board Repair',
      'Preventive Maintenance & Rotor Inspection for Stress Fractures'
    ],
    preventiveMaintenance: 'Quarterly: Rotor stress crack inspection, lid latch safety test, motor mount damping check, tachometer speed check.',
    calibrationAvailability: true,
    calibrationDetails: 'RPM calibration from 500 RPM to 15,000 RPM using calibrated optical digital tachometer; timer accuracy verification.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: Motor bearings, carbon brushes, lid lock solenoids, gas struts, speed sensors, motor control boards.',
    criticality: 'Medium'
  },
  {
    id: 'microscope',
    name: 'Clinical & Binocular / Trinocular Microscope',
    category: 'Laboratory & Pathology',
    categoryId: 'laboratory-pathology',
    image: 'images/cat_lab_realistic.jpg',
    overview: 'High-magnification optical microscopes for histology, hematology smear evaluation, urine analysis, and pathology diagnostics.',
    typicalIssues: [
      'Coarse / Fine focus rack and pinion slipping or stiff movement',
      'Optical prism misalignment or fungus on objective lenses',
      'Mechanical stage X-Y control slack or drift',
      'LED / Halogen illuminator power supply or dimmer failure',
      'Abbe condenser diaphragm sticking or center misalignment'
    ],
    servicesAvailable: [
      'Complete Optical Cleaning & Anti-Fungal Treatment',
      'Coarse & Fine Focus Mechanism Overhaul & Re-greasing',
      'Prism & Eyepiece Binocular Head Alignment',
      'X-Y Mechanical Stage Realignment & Calibration',
      'Illuminator LED Conversion / Power Board Repair'
    ],
    preventiveMaintenance: 'Semi-Annual: Optical surface de-dusting, focus gear grease replacement, mechanical stage alignment, stage clip inspection.',
    calibrationAvailability: true,
    calibrationDetails: 'Stage micrometer scale calibration (for digital camera measurement systems), optical path parfocality verification.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: 4x/10x/40x/100x oil immersion objectives, eyepieces, Abbe condensers, stage gears, LED dimmer modules.',
    criticality: 'Medium'
  },
  {
    id: 'semi-auto-analyzer',
    name: 'Semi / Fully Automatic Analyzers',
    category: 'Laboratory & Pathology',
    categoryId: 'laboratory-pathology',
    image: 'images/lab_analyzers.jpg',
    overview: 'Clinical laboratory automation systems for electrolyte (ISE), coagulation, urine chemistry, and immunology testing.',
    typicalIssues: [
      'ISE electrode slope degradation (Na+, K+, Cl-, Ca++)',
      'Fluorescence / Nephelometry optical sensor drift',
      'Sample barcode reader failure or robotic carrousel stall',
      'Wash manifold clogging or liquid aspiration error',
      'Main controller motherboard communication error'
    ],
    servicesAvailable: [
      'ISE Electrode Conditioning, Slope Calibration & Repair',
      'Robotic Arm X-Y-Z Stepper Positioning Calibration',
      'Wash Manifold Needle Alignment & Ultrasonic Cleaning',
      'Optical Detector Assembly Repair & Alignment',
      'Preventive Maintenance & Daily/Monthly QC Setup'
    ],
    preventiveMaintenance: 'Monthly / Quarterly: ISE slope verification, tubing renewal, carousel lubrication, optical sensor alignment, baseline calibration.',
    calibrationAvailability: true,
    calibrationDetails: 'Standard multi-point calibrator validation, optical density verification, sample volume micro-pipetting accuracy.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Reagent valves, ISE tubing kits, micro-pumps, optical filters, peristaltic cartridges, power boards.',
    criticality: 'High'
  },

  // Diagnostic Equipment
  {
    id: 'ecg-machine',
    name: 'ECG Machine (3-Channel / 6-Channel / 12-Channel)',
    category: 'Diagnostic Equipment',
    categoryId: 'diagnostic-equipment',
    image: 'images/cat_diag_realistic.jpg',
    overview: 'Diagnostic electrocardiographs recording heart electrical signals across 12 standard leads with automatic interpretation.',
    typicalIssues: [
      'Lead off alarm or intermittent artifact on specific leads',
      'Thermal printer roller jamming or faint trace printing',
      'Severe 50Hz AC mains interference or baseline drift',
      'Patient cable connector pin breakage or high resistance',
      'Internal lithium battery not holding charge'
    ],
    servicesAvailable: [
      'Patient Cable & Connector Pin Servicing',
      'Thermal Printhead Alignment & Cleaning / Replacement',
      'Internal Preamplifier & ADC Board Repair',
      'ECG Waveform Amplitude & Frequency Calibration',
      'Preventive Maintenance & Electrical Safety Testing'
    ],
    preventiveMaintenance: 'Quarterly: Lead cable continuity test, thermal head cleaning, baseline stability test, internal battery capacity test.',
    calibrationAvailability: true,
    calibrationDetails: '1mV calibration pulse test (±5% accuracy), paper speed check (25mm/s, 50mm/s), heart rate accuracy with calibrated 12-lead ECG simulator.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: 10-lead patient cables (banana/clip), thermal printer heads, paper gears, chest electrodes, limb clamps, lithium battery packs.',
    criticality: 'High'
  },
  {
    id: 'ultrasound-support',
    name: 'Ultrasound System Support & Probe Servicing',
    category: 'Diagnostic Equipment',
    categoryId: 'diagnostic-equipment',
    image: 'images/cat_diag_realistic.jpg',
    overview: 'Color Doppler and 2D/3D diagnostic ultrasound imaging machines used across radiology, obstetrics, and cardiology.',
    typicalIssues: [
      'Transducer probe crystal dropout (vertical black lines in image)',
      'Probe acoustic lens delamination or strain relief rubber tearing',
      'Trackball sticking, sluggish response or button failure',
      'Power supply motherboard rebooting or overheating',
      'Doppler audio or color velocity artifact'
    ],
    servicesAvailable: [
      'Ultrasound Probe Lens Replacement & Cable Strain Repair',
      'Console Power Supply & Beamformer PCB Servicing',
      'Trackball Mechanism Cleaning & Optical Encoder Repair',
      'Cooling Fan Overhaul & Internal Dust Extraction',
      'Display Monitor Calibration & Safety Testing'
    ],
    preventiveMaintenance: 'Semi-Annual: Probe surface acoustic inspection, beamformer ventilation cleaning, trackball servicing, power rail voltage check.',
    calibrationAvailability: true,
    calibrationDetails: 'Image uniformity check with tissue-mimicking phantom, Doppler velocity scale verification, electrical leakage current test.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Trackballs, power supply modules, probe connector pins, cooling fans, monitor power boards.',
    criticality: 'High'
  },
  {
    id: 'diagnostic-monitors',
    name: 'Diagnostic Monitors & Medical Displays',
    category: 'Diagnostic Equipment',
    categoryId: 'diagnostic-equipment',
    image: 'images/cat_diag_realistic.jpg',
    overview: 'High-brightness medical grade displays used in radiology, endoscopy suites, OT surgical towers, and cath labs.',
    typicalIssues: [
      'Backlight inverter failure or uneven luminance',
      'Color calibration drift or gamma curve mismatch',
      'Video input signal loss (DVI, HDMI, SDI, Composite)',
      'Power supply capacitor failure or buzzing noise',
      'Front protective glass cracking or bezel damage'
    ],
    servicesAvailable: [
      'LED Backlight Array & Inverter Repair',
      'Medical Display Gamma / DICOM Part 14 Calibration',
      'Video Input Interface & Scaler Board Repair',
      'Internal SMPS Power Supply Reconditioning',
      'Preventive Maintenance & Optical Cleanliness Inspection'
    ],
    preventiveMaintenance: 'Semi-Annual: Luminance output measurement, dust removal from high-voltage inverter, signal connector inspection.',
    calibrationAvailability: true,
    calibrationDetails: 'DICOM Part 14 Grayscale Standard Display Function (GSDF) calibration, peak luminance (cd/m²) test.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Inverter boards, power supplies, video interface cards, LED driver strips.',
    criticality: 'Medium'
  },
  {
    id: 'other-biomedical-equipment',
    name: 'General Biomedical & Ward Equipment',
    category: 'Diagnostic Equipment',
    categoryId: 'diagnostic-equipment',
    image: 'images/biomedical_pcb_repair.jpg',
    overview: 'Auxiliary hospital devices including pulse oximeters, digital thermometers, vein finders, nebulizers, and hospital bed controllers.',
    typicalIssues: [
      'Battery degradation or charging socket breakage',
      'Compressor pressure drop in nebulizers',
      'Sensor cable wear or broken probe wires',
      'Electronic actuator motor failure in ICU motorized beds',
      'Power supply burn out from electrical surges'
    ],
    servicesAvailable: [
      'Circuit Board Repair & Component Replacement',
      'Battery Pack Rebuilding & Charger Repair',
      'Actuator Motor & Hand Control Pendant Servicing',
      'Preventive Maintenance & Electrical Safety Checks',
      'General Hospital Asset Servicing'
    ],
    preventiveMaintenance: 'Quarterly / Semi-Annual: Functional inspection, cable strain test, battery testing, enclosure safety check.',
    calibrationAvailability: true,
    calibrationDetails: 'Verification against manufacturer specifications.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Replacement probes, batteries, power adapters, actuators, hand pendants.',
    criticality: 'Medium'
  },

  // Sterilization Equipment
  {
    id: 'autoclave',
    name: 'Autoclave (Vertical / Horizontal / Tabletop Class B)',
    category: 'Sterilization Equipment',
    categoryId: 'sterilization-equipment',
    image: 'images/sterilization_cssd.jpg',
    overview: 'High-pressure saturated steam autoclaves for sterilizing surgical instruments, linen, glassware, and culture media.',
    typicalIssues: [
      'Chamber failing to reach operating temperature (121°C / 134°C) or pressure (15-30 PSI)',
      'Lid silicone gasket steam leakage or door lock safety interlock fault',
      'Immersion heating element burn-out or scale accumulation',
      'Pressure relief safety valve releasing early or sticking',
      'Class B vacuum pump failure during pre-vacuum cycle'
    ],
    servicesAvailable: [
      'Heavy-Duty Immersion Heating Element Replacement',
      'High-Temperature Silicone Door Gasket Replacement',
      'Safety Relief Valve & Steam Solenoid Servicing',
      'Microprocessor Temperature & Pressure Controller Calibration',
      'Vacuum Pump Overhaul for Class B Dental/Surgical Autoclaves'
    ],
    preventiveMaintenance: 'Monthly / Quarterly: Safety valve manual pop test, gasket inspection, boiler descaling, water level sensor cleaning, heating element insulation check.',
    calibrationAvailability: true,
    calibrationDetails: 'Temperature sensor calibration at 121.0°C and 134.0°C with certified data logger; chamber pressure gauge verification.',
    repairAvailability: true,
    sparePartsAvailability: 'In-Stock: Industrial heating elements, high-temp silicone gaskets, pressure switches, safety release valves, steam solenoid valves, water level probes.',
    criticality: 'High'
  },
  {
    id: 'sterilizer',
    name: 'Dry Heat / Flash Sterilizer',
    category: 'Sterilization Equipment',
    categoryId: 'sterilization-equipment',
    image: 'images/cat_steril_realistic.jpg',
    overview: 'Hot air ovens and flash sterilizers for heat-stable instruments, needles, surgical blades, and laboratory glassware.',
    typicalIssues: [
      'Thermostat failure leading to uncontrolled overheating or underheating',
      'Circulating fan motor failure causing uneven temperature distribution',
      'Door seal degradation leading to heat escape',
      'Heating element failure or timer mechanism jamming',
      'Temperature indicator display error'
    ],
    servicesAvailable: [
      'PID Temperature Controller Tuning & Sensor Replacement',
      'Heating Element Array Replacement & Insulation Inspection',
      'Air Circulation Fan Motor Servicing & Bearing Lubrication',
      'High-Temperature Door Gasket Fitting',
      'Temperature Uniformity Mapping & Calibration'
    ],
    preventiveMaintenance: 'Quarterly: Thermostat accuracy check, heating element resistance check, fan motor inspection, door latch tensioning.',
    calibrationAvailability: true,
    calibrationDetails: 'Calibration from 100°C to 200°C using calibrated RTD / Thermocouple probe.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Band/tubular heaters, PID controllers, PT100 sensors, circulation fans, high-temp wiring.',
    criticality: 'Medium'
  },
  {
    id: 'cssd-equipment',
    name: 'CSSD Hospital Sterilization Plant Equipment',
    category: 'Sterilization Equipment',
    categoryId: 'sterilization-equipment',
    image: 'images/sterilization_cssd.jpg',
    overview: 'Central Sterile Supply Department machinery including double-door horizontal autoclaves, ultrasonic instrument washers, and heat sealers.',
    typicalIssues: [
      'Pneumatic door gasket seal air pressure drop',
      'Steam generator boiler scaling or water pump failure',
      'Ultrasonic transducer failure or cavitation power drop',
      'Medical pouch heat sealer temperature fluctuation or cutter wear',
      'PLC touch screen cycle automation error'
    ],
    servicesAvailable: [
      'CSSD Boiler & High-Volume Steam Generator Maintenance',
      'Ultrasonic Washer Transducer & Generator Repair',
      'Rotary Pouch Heat Sealer Calibration & Heating Element Service',
      'Pneumatic Valve Manifold & Water Softener Integration',
      'Complete CSSD Maintenance & Validation Support'
    ],
    preventiveMaintenance: 'Monthly: Boiler blow-down, gasket lubrication, safety valve pop test, ultrasonic foil test, heat sealer seal integrity test.',
    calibrationAvailability: true,
    calibrationDetails: 'Sterilizer cycle temperature-pressure validation (Bowie-Dick test assistance), heat sealer temperature/speed calibration.',
    repairAvailability: true,
    sparePartsAvailability: 'Available: Boiler level sensors, high-pressure steam valves, ultrasonic transducers, sealing Teflon belts, heaters.',
    criticality: 'Critical'
  }
];
