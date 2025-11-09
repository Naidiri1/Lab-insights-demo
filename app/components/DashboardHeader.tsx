export default function DashboardHeader() {
  return (
    <header className="mb-8 relative">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">🔬</span>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Lab Insights Dashboard (Demo)
          </h1>
          <p className="text-sm text-slate-500 font-medium">Demo Lab Insights Healthcare</p>
        </div>
      </div>
      <p className="text-slate-600 text-base md:text-lg pl-0 md:pl-15">
        Real-time lab results monitoring and risk stratification for proactive care management
      </p>
      <p className="text-slate-600 text-sm pl-0 md:pl-15 mt-1">
        Demo project showcasing diagnostic intelligence and lab benefit management concepts
      </p>
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </header>
  );
}
