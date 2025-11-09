import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface CategoryChartData {
  name: string;
  count: number;
  avgCost: number;
}

interface CategoryBarChartProps {
  data: CategoryChartData[];
}

export default function CategoryBarChart({ data }: CategoryBarChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📊</span>
        <h3 className="text-xl font-bold text-slate-900">Tests by Category</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={12} />
          <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
          <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="count" fill="#3b82f6" name="Test Count" />
          <Bar yAxisId="right" dataKey="avgCost" fill="#10b981" name="Avg Cost ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

