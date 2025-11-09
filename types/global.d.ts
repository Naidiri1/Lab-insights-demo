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
  labInsightsCost: number;
  flagged: boolean;
  recommendation: string;
}

interface FilterPanelProps {
  searchQuery: string;
  riskFilter: RiskLevel | 'all';
  categoryFilter: string;
  categories: string[];
  hasActiveFilters: boolean;
  onSearchChange: (value: string) => void;
  onRiskFilterChange: (value: RiskLevel | 'all') => void;
  onCategoryFilterChange: (value: string) => void;
  onClearFilters: () => void;
}

interface SavingsCardProps {
  savings: number;
  savingsPercent: string;
  totalRegular: number;
  totalLabInsights: number;
  testCount: number;
  isFiltered: boolean;
}

interface RiskDistributionChartProps {
  riskCounts: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
}

interface CategoryChartData {
  name: string;
  count: number;
  avgCost: number;
}

interface CategoryBarChartProps {
  data: CategoryChartData[];
}
