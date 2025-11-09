import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';



export default function RiskDistributionChart({ riskCounts }: RiskDistributionChartProps) {
  const riskChartData = [
    { name: 'Low Risk', value: riskCounts.low, color: '#22c55e' },
    { name: 'Medium Risk', value: riskCounts.medium, color: '#eab308' },
    { name: 'High Risk', value: riskCounts.high, color: '#f97316' },
    { name: 'Critical', value: riskCounts.critical, color: '#ef4444' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📈</span>
        <h3 className="text-xl font-bold text-slate-900">Risk Distribution</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={riskChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent}: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {riskChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

