export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';


export const labTests: LabTest[] = [
  {
    id: '1',
    patientId: 'P-1001',
    testName: 'Hemoglobin A1C',
    category: 'Diabetes Screening',
    date: '2025-11-05',
    value: 8.2,
    unit: '%',
    normalRange: '4.0-5.6%',
    riskLevel: 'critical',
    cost: 50,
    labInsightsCost: 35,
    flagged: true,
    recommendation: 'Immediate follow-up required - diabetes management'
  },
  {
    id: '2',
    patientId: 'P-1002',
    testName: 'Total Cholesterol',
    category: 'Lipid Panel',
    date: '2025-11-03',
    value: 245,
    unit: 'mg/dL',
    normalRange: '<200 mg/dL',
    riskLevel: 'high',
    cost: 65,
    labInsightsCost: 42,
    flagged: true,
    recommendation: 'Lifestyle changes recommended, retest in 3 months'
  },
  {
    id: '3',
    patientId: 'P-1003',
    testName: 'Complete Blood Count (CBC)',
    category: 'Blood Work',
    date: '2025-11-01',
    value: null,
    unit: '',
    normalRange: 'Within normal limits',
    riskLevel: 'low',
    cost: 45,
    labInsightsCost: 32,
    flagged: false,
    recommendation: 'Normal - routine monitoring'
  },
  {
    id: '4',
    patientId: 'P-1004',
    testName: 'Vitamin D',
    category: 'Nutritional',
    date: '2025-10-28',
    value: 18,
    unit: 'ng/mL',
    normalRange: '30-100 ng/mL',
    riskLevel: 'medium',
    cost: 55,
    labInsightsCost: 38,
    flagged: true,
    recommendation: 'Deficiency detected - supplementation advised'
  },
  {
    id: '5',
    patientId: 'P-1005',
    testName: 'Thyroid Stimulating Hormone (TSH)',
    category: 'Thyroid Function',
    date: '2025-10-25',
    value: 0.3,
    unit: 'mIU/L',
    normalRange: '0.4-4.0 mIU/L',
    riskLevel: 'high',
    cost: 48,
    labInsightsCost: 33,
    flagged: true,
    recommendation: 'Hyperthyroidism suspected - endocrinology referral'
  },
  {
    id: '6',
    patientId: 'P-1006',
    testName: 'Basic Metabolic Panel',
    category: 'Blood Work',
    date: '2025-10-20',
    value: null,
    unit: '',
    normalRange: 'Within normal limits',
    riskLevel: 'low',
    cost: 42,
    labInsightsCost: 28,
    flagged: false,
    recommendation: 'Normal - continue routine screening'
  },
  {
    id: '7',
    patientId: 'P-1007',
    testName: 'Prostate-Specific Antigen (PSA)',
    category: 'Cancer Screening',
    date: '2025-10-15',
    value: 8.5,
    unit: 'ng/mL',
    normalRange: '<4.0 ng/mL',
    riskLevel: 'critical',
    cost: 70,
    labInsightsCost: 48,
    flagged: true,
    recommendation: 'Urgent - urology consultation required'
  },
  {
    id: '8',
    patientId: 'P-1008',
    testName: 'Urinalysis',
    category: 'Urine Tests',
    date: '2025-10-10',
    value: null,
    unit: '',
    normalRange: 'Within normal limits',
    riskLevel: 'low',
    cost: 25,
    labInsightsCost: 18,
    flagged: false,
    recommendation: 'Normal - no action needed'
  },
  {
    id: '9',
    patientId: 'P-1009',
    testName: 'Liver Function Panel',
    category: 'Blood Work',
    date: '2025-10-08',
    value: null,
    unit: '',
    normalRange: 'Within normal limits',
    riskLevel: 'low',
    cost: 52,
    labInsightsCost: 36,
    flagged: false,
    recommendation: 'Normal liver function'
  },
  {
    id: '10',
    patientId: 'P-1010',
    testName: 'C-Reactive Protein (CRP)',
    category: 'Inflammation Markers',
    date: '2025-10-05',
    value: 12.5,
    unit: 'mg/L',
    normalRange: '<3.0 mg/L',
    riskLevel: 'high',
    cost: 38,
    labInsightsCost: 26,
    flagged: true,
    recommendation: 'Elevated inflammation - investigate cause'
  },
  {
    id: '11',
    patientId: 'P-1011',
    testName: 'Fasting Glucose',
    category: 'Diabetes Screening',
    date: '2025-10-01',
    value: 118,
    unit: 'mg/dL',
    normalRange: '70-100 mg/dL',
    riskLevel: 'medium',
    cost: 28,
    labInsightsCost: 19,
    flagged: true,
    recommendation: 'Prediabetic range - lifestyle intervention'
  },
  {
    id: '12',
    patientId: 'P-1012',
    testName: 'Iron Panel',
    category: 'Blood Work',
    date: '2025-09-28',
    value: null,
    unit: '',
    normalRange: 'Within normal limits',
    riskLevel: 'low',
    cost: 44,
    labInsightsCost: 30,
    flagged: false,
    recommendation: 'Normal iron levels'
  }
];

// Helper functions
export const getRiskCounts = (tests: LabTest[]) => {
  return {
    low: tests.filter(t => t.riskLevel === 'low').length,
    medium: tests.filter(t => t.riskLevel === 'medium').length,
    high: tests.filter(t => t.riskLevel === 'high').length,
    critical: tests.filter(t => t.riskLevel === 'critical').length,
  };
};

export const calculateSavings = (tests: LabTest[]) => {
  const totalRegular = tests.reduce((sum, test) => sum + test.cost, 0);
  const totalLabInsights = tests.reduce((sum, test) => sum + test.labInsightsCost, 0);
  return {
    totalRegular,
    totalLabInsights,
    savings: totalRegular - totalLabInsights,
    savingsPercent: ((totalRegular - totalLabInsights) / totalRegular * 100).toFixed(1)
  };
};

export const getCategories = (tests: LabTest[]) => {
  return [...new Set(tests.map(t => t.category))];
};