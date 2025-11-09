'use client';

import { useState, useMemo } from 'react';
import { labTests, getRiskCounts, calculateSavings, getCategories, type RiskLevel } from '@/lib/data';
import DashboardHeader from './DashboardHeader';
import FilterPanel from './FilterPanel';
import RiskCard from './RiskCard';
import SavingsCard from './SavingsCard';
import RiskDistributionChart from './RiskDistributionChart';
import CategoryBarChart from './CategoryBarChart';
import TestResultsList from './TestResultsList';

export default function Dashboard() {
  // State for filters
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter logic
  const filteredTests = useMemo(() => {
    return labTests.filter(test => {
      const matchesRisk = riskFilter === 'all' || test.riskLevel === riskFilter;
      const matchesCategory = categoryFilter === 'all' || test.category === categoryFilter;
      const matchesSearch = test.testName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           test.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesRisk && matchesCategory && matchesSearch;
    });
  }, [riskFilter, categoryFilter, searchQuery]);

  const riskCounts = getRiskCounts(filteredTests);
  const savings = calculateSavings(filteredTests);
  const categories = getCategories(labTests);

  // Clear all filters
  const clearFilters = () => {
    setRiskFilter('all');
    setCategoryFilter('all');
    setSearchQuery('');
  };

  // Chart data for category chart
  const categoryChartData = categories.map(catg => {
    const testsInCategory = filteredTests.filter(t => t.category === catg);
    return {
      name: catg,
      count: testsInCategory.length,
      avgCost: Math.round(testsInCategory.reduce((sum, t) => sum + t.labInsightsCost, 0) / testsInCategory.length)
    };
  });

  const hasActiveFilters = riskFilter !== 'all' || categoryFilter !== 'all' || searchQuery !== '';

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardHeader />

      <FilterPanel
        searchQuery={searchQuery}
        riskFilter={riskFilter}
        categoryFilter={categoryFilter}
        categories={categories}
        hasActiveFilters={hasActiveFilters}
        onSearchChange={setSearchQuery}
        onRiskFilterChange={setRiskFilter}
        onCategoryFilterChange={setCategoryFilter}
        onClearFilters={clearFilters}
      />

      {/* Risk Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        <RiskCard
          label="Low Risk"
          count={riskCounts.low}
          description="Normal results"
          color="green"
        />
        <RiskCard
          label="Medium Risk"
          count={riskCounts.medium}
          description="Monitor closely"
          color="yellow"
        />
        <RiskCard
          label="High Risk"
          count={riskCounts.high}
          description="Follow-up needed"
          color="orange"
        />
        <RiskCard
          label="Critical"
          count={riskCounts.critical}
          description="Urgent action"
          color="red"
        />
      </div>

      <SavingsCard
        savings={savings.savings}
        savingsPercent={savings.savingsPercent}
        totalRegular={savings.totalRegular}
        totalLabInsights={savings.totalLabInsights}
        testCount={filteredTests.length}
        isFiltered={hasActiveFilters}
      />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <RiskDistributionChart riskCounts={riskCounts} />
        <CategoryBarChart data={categoryChartData} />
      </div>

      <TestResultsList
        tests={filteredTests}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-slate-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-sm">🔬</span>
            </div>
            <span className="text-lg font-bold text-slate-900">Lab Insights</span>
          </div>
          <p className="text-sm text-slate-500">Proactive Care Through Real-Time Lab Analytics</p>
          <p className="text-xs text-slate-400 mt-2">© 2025 Lab Insights Healthcare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}