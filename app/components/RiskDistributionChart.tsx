import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';



export default function RiskDistributionChart({ riskCounts }: RiskDistributionChartProps) {
  const riskChartData = [
    { name: 'Low Risk', value: riskCounts.low, color: '#22c55e' },
    { name: 'Medium Risk', value: riskCounts.medium, color: '#eab308' },
    { name: 'High Risk', value: riskCounts.high, color: '#f97316' },
    { name: 'Critical', value: riskCounts.critical, color: '#ef4444' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Risk Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={riskChartData}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label={({ percent }:any) => percent > 0 ? `${(percent * 100).toFixed(0)}%` : ''}
          >
            {riskChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => `${value} tests`}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-sm">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

