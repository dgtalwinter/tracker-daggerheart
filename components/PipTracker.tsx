import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface PipTrackerProps {
  label: string;
  icon: React.ReactNode;
  current: number;
  max: number;
  colorClass: string;
  onChange: (newCurrent: number) => void;
  isEditing: boolean;
  onMaxChange?: (newMax: number) => void;
}

export const PipTracker: React.FC<PipTrackerProps> = ({
  label,
  icon,
  current,
  max,
  colorClass,
  onChange,
  isEditing,
  onMaxChange
}) => {
  // Generate array for pips
  const pips = Array.from({ length: max }, (_, i) => i < current);

  return (
    <div className="bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-200 font-bold text-lg uppercase tracking-wider">
          <span className={`${colorClass} p-1.5 rounded-md bg-opacity-20 text-white`}>{icon}</span>
          {label}
        </div>
        <div className="text-2xl font-mono font-bold text-slate-100">
          {current} <span className="text-slate-500 text-lg">/ {max}</span>
        </div>
      </div>

      {/* Visual Pips */}
      <div className="flex flex-wrap gap-1.5 mb-4 min-h-[24px]">
        {pips.map((filled, index) => (
          <div
            key={index}
            onClick={() => !isEditing && onChange(index + 1 === current && filled ? index : index + 1)}
            className={`
              w-6 h-6 rounded-full border-2 transition-all duration-200 cursor-pointer
              ${filled ? `${colorClass} border-transparent shadow-[0_0_10px_rgba(0,0,0,0.3)]` : 'border-slate-600 bg-slate-900'}
              hover:opacity-80
            `}
          />
        ))}
        {max === 0 && <span className="text-slate-500 italic text-sm">No max value set</span>}
      </div>

      {/* Controls */}
      {isEditing ? (
        <div className="flex items-center gap-4 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
          <label className="text-sm text-slate-400 font-medium whitespace-nowrap">Max Value:</label>
          <input
            type="number"
            value={max}
            onChange={(e) => onMaxChange && onMaxChange(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full bg-slate-900 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 text-center font-mono text-lg"
          />
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => onChange(Math.max(0, current - 1))}
            className="flex-1 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-slate-200 py-3 rounded-lg flex items-center justify-center transition-colors"
          >
            <Minus size={24} />
          </button>
          <button
            onClick={() => onChange(Math.min(max, current + 1))}
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-400 text-white py-3 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-900/20 transition-colors"
          >
            <Plus size={24} />
          </button>
        </div>
      )}
    </div>
  );
};
