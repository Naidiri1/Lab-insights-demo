'use client';

import { labTests, getRiskCounts, calculateSavings } from '@/lib/data';

export default function Dashboard() {
  const riskCounts = getRiskCounts(labTests);
  const savings = calculateSavings(labTests);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Lab Insights Dashboard
        </h1>
        <p className="text-slate-600">
          Real-time lab results monitoring and risk stratification for proactive care management
        </p>
      </header>

      {/* Risk Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <div className="text-xs md:text-sm text-slate-600 mb-1">Low Risk</div>
          <div className="text-2xl md:text-3xl font-bold text-green-600">{riskCounts.low}</div>
          <div className="text-xs text-slate-500 mt-1">Normal results</div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <div className="text-xs md:text-sm text-slate-600 mb-1">Medium Risk</div>
          <div className="text-2xl md:text-3xl font-bold text-yellow-600">{riskCounts.medium}</div>
          <div className="text-xs text-slate-500 mt-1">Monitor closely</div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
          <div className="text-xs md:text-sm text-slate-600 mb-1">High Risk</div>
          <div className="text-2xl md:text-3xl font-bold text-orange-600">{riskCounts.high}</div>
          <div className="text-xs text-slate-500 mt-1">Follow-up needed</div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <div className="text-xs md:text-sm text-slate-600 mb-1">Critical</div>
          <div className="text-2xl md:text-3xl font-bold text-red-600">{riskCounts.critical}</div>
          <div className="text-xs text-slate-500 mt-1">Urgent action</div>
        </div>
      </div>

      {/* Savings Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg shadow-md mb-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm opacity-90 mb-1">Total Cost Savings with Avalon</div>
            <div className="text-3xl md:text-4xl font-bold">${savings.savings}</div>
            <div className="text-sm opacity-90 mt-1">
              {savings.savingsPercent}% average savings • {labTests.length} tests processed
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-xs opacity-75">Regular Cost</div>
            <div className="text-lg line-through opacity-75">${savings.totalRegular}</div>
            <div className="text-xs opacity-75 mt-2">Avalon Cost</div>
            <div className="text-2xl font-semibold">${savings.totalAvalon}</div>
          </div>
        </div>
      </div>

      {/* Test Results List */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Recent Lab Results</h2>
        
        <div className="space-y-3">
          {labTests.map(test => (
            <div 
              key={test.id} 
              className={`border-l-4 p-4 rounded-r-lg transition-all hover:shadow-md ${
                test.riskLevel === 'low' ? 'border-green-500 bg-green-50/50' :
                test.riskLevel === 'medium' ? 'border-yellow-500 bg-yellow-50/50' :
                test.riskLevel === 'high' ? 'border-orange-500 bg-orange-50/50' :
                'border-red-500 bg-red-50/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-base md:text-lg text-slate-900">
                      {test.testName}
                    </h3>
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${
                      test.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                      test.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      test.riskLevel === 'high' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {test.riskLevel.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{test.category}</p>
                  {test.value && (
                    <p className="text-sm font-medium text-slate-700 mt-2">
                      Result: {test.value} {test.unit} <span className="text-slate-500">(Normal: {test.normalRange})</span>
                    </p>
                  )}
                  <p className="text-sm text-slate-700 mt-2 italic">{test.recommendation}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4 mt-3 text-xs md:text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  📅 {new Date(test.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  💰 Avalon: ${test.avalonCost} <span className="line-through text-slate-400">${test.cost}</span>
                </span>
                <span className="flex items-center gap-1">
                  💾 Patient: {test.patientId}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-slate-500">
        <p>Avalon Lab Insights • Proactive Care Through Real-Time Lab Analytics</p>
      </footer>
    </div>
  );
}