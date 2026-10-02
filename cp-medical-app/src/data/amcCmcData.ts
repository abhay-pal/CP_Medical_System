export interface ContractFeature {
  feature: string;
  category: string;
  amc: boolean | string;
  cmc: boolean | string;
  description: string;
}

export const AMC_CMC_COMPARISON: ContractFeature[] = [
  {
    feature: 'Preventive Maintenance (PPM)',
    category: 'Routine Care',
    amc: 'Included (4-6 visits/yr)',
    cmc: 'Included (4-6 visits/yr)',
    description: 'Scheduled multi-point inspection, internal cleaning, lubrication, and basic alignment.'
  },
  {
    feature: 'Breakdown Support Visits',
    category: 'Emergency Service',
    amc: 'Unlimited Breakdown Calls',
    cmc: 'Unlimited Breakdown Calls',
    description: 'Rapid on-site engineer dispatch whenever an unexpected breakdown occurs.'
  },
  {
    feature: 'Engineer Labour & Service Charges',
    category: 'Labour Coverage',
    amc: '100% Covered (Zero Labour Fee)',
    cmc: '100% Covered (Zero Labour Fee)',
    description: 'No labour or diagnostic service fees for any scheduled or breakdown visits.'
  },
  {
    feature: 'Spare Parts & Electronic PCBs',
    category: 'Parts Coverage',
    amc: 'Chargeable at discounted rates',
    cmc: '100% Fully Covered (Zero extra cost)',
    description: 'Under CMC, critical electronic boards, power supplies, motors, and assemblies are fully covered.'
  },
  {
    feature: 'Calibration & Safety Testing',
    category: 'Compliance',
    amc: 'Included / Discounted',
    cmc: 'Fully Included (Annual Certification)',
    description: 'Performance testing with biomedical simulators and formal calibration certification.'
  },
  {
    feature: 'Documentation & Service Log Books',
    category: 'Compliance',
    amc: 'Included (NABH/NABL ready)',
    cmc: 'Included (NABH/NABL ready)',
    description: 'Digital and physical service reports for equipment history audit compliance.'
  },
  {
    feature: 'Emergency Response Priority',
    category: 'SLA',
    amc: 'Priority Support (Within 2-4 hrs local)',
    cmc: 'VIP Immediate Priority (Fastest Dispatch)',
    description: 'Dedicated priority queue for critical hospital departments (ICU/OT).'
  },
  {
    feature: 'Technical Telephonic & Video Desk',
    category: 'Support',
    amc: '24×7 Access',
    cmc: '24×7 Access + Dedicated Biomedical Engineer',
    description: 'Direct access to senior biomedical engineers for instant error code interpretation.'
  },
  {
    feature: 'Consumables & Probes (SpO2, Cuffs, Cables)',
    category: 'Consumables',
    amc: 'Chargeable at wholesale rate',
    cmc: 'Chargeable at preferential rate / Optional Add-on',
    description: 'Patient-connected consumables are provided at discounted supply rates.'
  }
];

export const CONTRACT_BENEFITS = [
  {
    title: 'Zero Unexpected Budget Surprises',
    description: 'Predictable annual maintenance budgeting with no hidden engineer visitation fees.',
    icon: 'Calculator'
  },
  {
    title: 'NABH & NABL Audit Ready',
    description: 'Full maintenance logs, PPM stickers, and electrical safety test records prepared continuously.',
    icon: 'FileCheck2'
  },
  {
    title: 'Maximum Hospital Equipment Uptime',
    description: 'Scheduled preventive servicing reduces emergency equipment breakdown by over 85%.',
    icon: 'TrendingUp'
  },
  {
    title: 'Extended Equipment Life Cycle',
    description: 'Professional biomedical care prolongs sensitive hospital asset lifespan by 3 to 5 additional years.',
    icon: 'Clock'
  }
];
