interface SavingsCardProps {
  savings: number;
  savingsPercent: string;
  totalRegular: number;
  totalLabInsights: number;
  testCount: number;
  isFiltered: boolean;
}

export default function SavingsCard({
  savings,
  savingsPercent,
  totalRegular,
  totalLabInsights,
  testCount,
  isFiltered
}: SavingsCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 md:p-8 rounded-2xl shadow-xl mb-6 text-white overflow-hidden group">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-xl">💰</span>
          </div>
          <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Cost Savings Analysis</div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex-1">
            <div className="text-sm opacity-90 mb-2">Total Savings with Lab Insights</div>
            <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">${savings.toLocaleString()}</div>
            <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 inline-flex">
              <span className="text-green-300 font-semibold">{savingsPercent}%</span>
              <span className="opacity-90">average savings</span>
              <span className="opacity-75">•</span>
              <span className="opacity-90">{testCount} tests {isFiltered && '(filtered)'}</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:min-w-[200px]">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs opacity-75 uppercase tracking-wide">Regular</div>
              <div className="text-lg line-through opacity-75 font-medium">${totalRegular.toLocaleString()}</div>
            </div>
            <div className="h-px bg-white/20 my-2"></div>
            <div className="flex justify-between items-center">
              <div className="text-xs opacity-75 uppercase tracking-wide">Lab Insights</div>
              <div className="text-2xl font-bold">${totalLabInsights.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
