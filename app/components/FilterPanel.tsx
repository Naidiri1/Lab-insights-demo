import type { RiskLevel } from '@/lib/data';

export default function FilterPanel({
  searchQuery,
  riskFilter,
  categoryFilter,
  categories,
  hasActiveFilters,
  onSearchChange,
  onRiskFilterChange,
  onCategoryFilterChange,
  onClearFilters
}: FilterPanelProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-slate-100 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Filters & Search</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            🔎 Search Tests
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all hover:border-slate-400"
          />
        </div>

        {/* Risk Level Filter */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            ⚡ Risk Level
          </label>
          <select
            value={riskFilter}
            onChange={(e) => onRiskFilterChange(e.target.value as RiskLevel | 'all')}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all hover:border-slate-400 cursor-pointer"
          >
            <option value="all">All Levels</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            📋 Category
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all hover:border-slate-400 cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex items-end">
            <button
              onClick={onClearFilters}
              disabled={!hasActiveFilters}
              className={`w-full px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                hasActiveFilters 
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-900 hover:to-black shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              ✕ Clear Filters
            </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-slate-600">Active filters:</span>
          {riskFilter !== 'all' && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Risk: {riskFilter}
            </span>
          )}
          {categoryFilter !== 'all' && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Category: {categoryFilter}
            </span>
          )}
          {searchQuery && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Search: "{searchQuery}"
            </span>
          )}
        </div>
      )}
    </div>
  );
}

