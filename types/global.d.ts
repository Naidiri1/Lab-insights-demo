interface LabTest {
  id: string;
  patientId: string;
  testName: string;
  category: string;
  date: string;
  value: number | null;
  unit: string;
  normalRange: string;
  riskLevel: RiskLevel;
  cost: number;
  avalonCost: number;
  flagged: boolean;
  recommendation: string;
}