interface RiskCardProps {
  label: string;
  count: number;
  description: string;
  color: 'green' | 'yellow' | 'orange' | 'red';
}

export default function RiskCard({ label, count, description, color }: RiskCardProps) {
  const colorConfig = {
    green: {
      border: 'border-green-500',
      text: 'text-green-600',
      bg: 'bg-green-50',
      icon: '✓',
      iconBg: 'bg-green-100'
    },
    yellow: {
      border: 'border-yellow-500',
      text: 'text-yellow-600',
      bg: 'bg-yellow-50',
      icon: '⚠',
      iconBg: 'bg-yellow-100'
    },
    orange: {
      border: 'border-orange-500',
      text: 'text-orange-600',
      bg: 'bg-orange-50',
      icon: '⚡',
      iconBg: 'bg-orange-100'
    },
    red: {
      border: 'border-red-500',
      text: 'text-red-600',
      bg: 'bg-red-50',
      icon: '🔴',
      iconBg: 'bg-red-100'
    }
  };

  const config = colorConfig[color];

  return (
    <div className={`bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${config.border} group cursor-pointer`}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide">{label}</div>
        <div className={`w-8 h-8 rounded-lg ${config.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <span className="text-sm">{config.icon}</span>
        </div>
      </div>
      <div className={`text-3xl md:text-4xl font-bold ${config.text} mb-1`}>{count}</div>
      <div className="text-xs text-slate-500">{description}</div>
    </div>
  );
}

