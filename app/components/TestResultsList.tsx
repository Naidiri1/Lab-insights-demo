import TestResultCard from './TestResultCard';

interface TestResultsListProps {
  tests: LabTest[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export default function TestResultsList({ tests, hasActiveFilters, onClearFilters }: TestResultsListProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧪</span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Lab Results {hasActiveFilters && <span className="text-blue-600">({tests.length})</span>}
          </h2>
        </div>
      </div>
      
      {tests.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">No tests match your filters</p>
          <button
            onClick={onClearFilters}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {tests.map(test => (
            <TestResultCard key={test.id} test={test} />
          ))}
        </div>
      )}
    </div>
  );
}

