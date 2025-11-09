interface TestResultCardProps {
  test: LabTest;
}

export default function TestResultCard({ test }: TestResultCardProps) {
  const riskStyles: Record<'low' | 'medium' | 'high' | 'critical', { border: string; bg: string; badge: string }> = {
    low: {
      border: 'border-green-500',
      bg: 'bg-green-50/50',
      badge: 'bg-green-100 text-green-800'
    },
    medium: {
      border: 'border-yellow-500',
      bg: 'bg-yellow-50/50',
      badge: 'bg-yellow-100 text-yellow-800'
    },
    high: {
      border: 'border-orange-500',
      bg: 'bg-orange-50/50',
      badge: 'bg-orange-100 text-orange-800'
    },
    critical: {
      border: 'border-red-500',
      bg: 'bg-red-50/50',
      badge: 'bg-red-100 text-red-800'
    }
  };

  const style = riskStyles[test.riskLevel];

  return (
    <div
      className={`border-l-4 p-4 rounded-r-xl transition-all hover:shadow-lg hover:scale-[1.01] ${style.border} ${style.bg}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-base md:text-lg text-slate-900">
              {test.testName}
            </h3>
            <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${style.badge}`}>
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
          💰 Lab Insights: ${test.labInsightsCost} <span className="line-through text-slate-400">${test.cost}</span>
        </span>
        <span className="flex items-center gap-1">
          💾 Patient: {test.patientId}
        </span>
      </div>
    </div>
  );
}

