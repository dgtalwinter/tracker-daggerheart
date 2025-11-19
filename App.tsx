import React, { useState, useEffect } from 'react';
import { Character, ViewState } from './types';
import { PipTracker } from './components/PipTracker';
import { 
  Sword, 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  Plus, 
  ChevronLeft, 
  Save, 
  Trash2, 
  User, 
  Settings, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const STORAGE_KEY = 'daggerheart_characters';

const DEFAULT_CHAR: Character = {
  id: '',
  name: '',
  class: '',
  evasion: 0,
  threshold1: 0,
  threshold2: 0,
  hp: { current: 0, max: 0 },
  stress: { current: 0, max: 0 },
  hope: { current: 0, max: 0 },
  armor: { current: 0, max: 0 }
};

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.LIST);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeCharId, setActiveCharId] = useState<string | null>(null);
  const [newCharName, setNewCharName] = useState('');
  const [newCharClass, setNewCharClass] = useState('');
  const [isEditingValues, setIsEditingValues] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Sanitize data to include new fields for old characters
        const sanitized = Array.isArray(parsed) 
          ? parsed.map((c: Partial<Character>) => ({ ...DEFAULT_CHAR, ...c })) 
          : [];
        setCharacters(sanitized);
      } catch (e) {
        console.error("Failed to load characters", e);
      }
    }
  }, []);

  // Save to local storage whenever characters change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  }, [characters]);

  const handleCreate = () => {
    if (!newCharName.trim()) return;
    
    const newChar: Character = {
      ...DEFAULT_CHAR,
      id: Date.now().toString(),
      name: newCharName,
      class: newCharClass,
    };

    setCharacters([...characters, newChar]);
    setNewCharName('');
    setNewCharClass('');
    setView(ViewState.LIST);
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this character?")) {
      setCharacters(characters.filter(c => c.id !== id));
      if (activeCharId === id) {
        setActiveCharId(null);
        setView(ViewState.LIST);
      }
    }
  };

  const getActiveCharacter = () => characters.find(c => c.id === activeCharId);

  const updateActiveCharacter = (updater: (char: Character) => Character) => {
    if (!activeCharId) return;
    setCharacters(prev => prev.map(c => c.id === activeCharId ? updater(c) : c));
  };

  // Renders
  const renderList = () => (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <header className="mb-8 mt-4">
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight">DaggerHeart</h1>
        <p className="text-slate-400">Character Tracker</p>
      </header>

      <div className="grid gap-4">
        {characters.length === 0 ? (
          <div className="text-center py-12 bg-slate-800/50 rounded-2xl border border-slate-700 border-dashed">
            <div className="inline-block p-4 bg-slate-800 rounded-full mb-4">
              <Sword className="text-slate-500" size={32} />
            </div>
            <p className="text-slate-400">No characters created yet.</p>
          </div>
        ) : (
          characters.map(char => (
            <div 
              key={char.id}
              onClick={() => {
                setActiveCharId(char.id);
                setView(ViewState.DETAIL);
                setIsEditingValues(false); // Reset edit mode on enter
              }}
              className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm hover:border-indigo-500 transition-all cursor-pointer relative group active:scale-[0.98]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-slate-100">{char.name}</h2>
                  <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider">{char.class || 'Unknown Class'}</p>
                </div>
                <button 
                  onClick={(e) => handleDelete(char.id, e)}
                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-700 rounded-full transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              <div className="mt-4 flex gap-2">
                <div className="flex-1 bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-xs text-slate-500 uppercase">HP</div>
                  <div className="text-red-400 font-mono">{char.hp.current}/{char.hp.max}</div>
                </div>
                <div className="flex-1 bg-slate-900/50 rounded p-2 text-center">
                  <div className="text-xs text-slate-500 uppercase">Hope</div>
                  <div className="text-amber-400 font-mono">{char.hope.current}/{char.hope.max}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => setView(ViewState.CREATE)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full shadow-lg shadow-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all z-50"
      >
        <Plus size={32} />
      </button>
    </div>
  );

  const renderCreate = () => (
    <div className="p-4 max-w-md mx-auto min-h-screen flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setView(ViewState.LIST)} className="text-slate-400 hover:text-white">
          <ChevronLeft size={28} />
        </button>
        <h2 className="text-2xl font-bold text-white">New Character</h2>
      </div>

      <div className="flex-1 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Character Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              value={newCharName}
              onChange={(e) => setNewCharName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="e.g. Vex'ahlia"
              autoFocus
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Class</label>
          <div className="relative">
            <Sword className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              value={newCharClass}
              onChange={(e) => setNewCharClass(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="e.g. Ranger"
            />
          </div>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-slate-400 text-sm">
          <p>Stats will be initialized to 0. You can set Maximum values in the character sheet after creation.</p>
        </div>
      </div>

      <button
        onClick={handleCreate}
        disabled={!newCharName.trim()}
        className="w-full bg-indigo-600 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-4 rounded-xl mt-6 flex items-center justify-center gap-2"
      >
        <Save size={20} />
        Create Character
      </button>
    </div>
  );

  const renderDetail = () => {
    const char = getActiveCharacter();
    if (!char) return null;

    return (
      <div className="pb-24 max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 p-4 z-40 flex justify-between items-center">
          <button onClick={() => setView(ViewState.LIST)} className="text-slate-400 hover:text-white p-2 -ml-2">
            <ChevronLeft size={28} />
          </button>
          <div className="text-center">
            <h2 className="text-lg font-bold text-white leading-tight">{char.name}</h2>
            <p className="text-xs text-indigo-400 font-medium uppercase">{char.class}</p>
          </div>
          <button 
            onClick={() => setIsEditingValues(!isEditingValues)}
            className={`p-2 rounded-full transition-colors ${isEditingValues ? 'text-indigo-400 bg-indigo-400/10' : 'text-slate-400 hover:text-white'}`}
          >
            {isEditingValues ? <CheckCircle2 size={24} /> : <Settings size={24} />}
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Evasion Block */}
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Shield size={24} />
              </div>
              <span className="text-lg font-bold text-slate-200 uppercase tracking-wide">Evasion</span>
            </div>
            {isEditingValues ? (
               <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  className="w-20 bg-slate-900 border border-slate-600 rounded px-2 py-1 text-center text-xl font-mono text-white focus:border-emerald-500 focus:outline-none"
                  value={char.evasion}
                  onChange={(e) => updateActiveCharacter(c => ({ ...c, evasion: parseInt(e.target.value) || 0 }))}
                />
               </div>
            ) : (
              <div className="text-4xl font-black text-emerald-400 font-mono">
                {char.evasion}
              </div>
            )}
          </div>

          {/* Damage Thresholds */}
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between gap-1 text-xs sm:text-sm font-bold text-slate-400 select-none uppercase tracking-tight text-center">
              <span className="whitespace-nowrap">DAÑO MENOR</span>
              
              {isEditingValues ? (
                <input 
                  type="number" 
                  value={char.threshold1} 
                  onChange={(e) => updateActiveCharacter(c => ({ ...c, threshold1: parseInt(e.target.value) || 0 }))}
                  className="w-12 bg-slate-900 border border-slate-600 rounded p-1 text-center text-white focus:border-indigo-500 focus:outline-none font-mono"
                />
              ) : (
                <span className="text-white text-lg px-1">{char.threshold1}</span>
              )}

              <ChevronRight size={16} className="text-slate-600 flex-shrink-0" />

              <span className="whitespace-nowrap">DAÑO MAYOR</span>

              {isEditingValues ? (
                <input 
                  type="number" 
                  value={char.threshold2} 
                  onChange={(e) => updateActiveCharacter(c => ({ ...c, threshold2: parseInt(e.target.value) || 0 }))}
                  className="w-12 bg-slate-900 border border-slate-600 rounded p-1 text-center text-white focus:border-indigo-500 focus:outline-none font-mono"
                />
              ) : (
                <span className="text-white text-lg px-1">{char.threshold2}</span>
              )}

              <ChevronRight size={16} className="text-slate-600 flex-shrink-0" />

              <span className="whitespace-nowrap">DAÑO SEVERO</span>
            </div>
          </div>

          {/* Armor - Moved above Health */}
          <PipTracker
            label="Armor"
            icon={<Shield size={20} className="fill-current" />}
            current={char.armor.current}
            max={char.armor.max}
            colorClass="bg-blue-400"
            isEditing={isEditingValues}
            onChange={(val) => updateActiveCharacter(c => ({ ...c, armor: { ...c.armor, current: val } }))}
            onMaxChange={(val) => updateActiveCharacter(c => ({ ...c, armor: { ...c.armor, max: val } }))}
          />

          {/* HP */}
          <PipTracker
            label="Health"
            icon={<Heart size={20} className="fill-current" />}
            current={char.hp.current}
            max={char.hp.max}
            colorClass="bg-red-500"
            isEditing={isEditingValues}
            onChange={(val) => updateActiveCharacter(c => ({ ...c, hp: { ...c.hp, current: val } }))}
            onMaxChange={(val) => updateActiveCharacter(c => ({ ...c, hp: { ...c.hp, max: val } }))}
          />

          {/* Stress */}
          <PipTracker
            label="Stress"
            icon={<Brain size={20} className="fill-current" />}
            current={char.stress.current}
            max={char.stress.max}
            colorClass="bg-purple-500"
            isEditing={isEditingValues}
            onChange={(val) => updateActiveCharacter(c => ({ ...c, stress: { ...c.stress, current: val } }))}
            onMaxChange={(val) => updateActiveCharacter(c => ({ ...c, stress: { ...c.stress, max: val } }))}
          />

           {/* Hope */}
           <PipTracker
            label="Hope"
            icon={<Zap size={20} className="fill-current" />}
            current={char.hope.current}
            max={char.hope.max}
            colorClass="bg-amber-400"
            isEditing={isEditingValues}
            onChange={(val) => updateActiveCharacter(c => ({ ...c, hope: { ...c.hope, current: val } }))}
            onMaxChange={(val) => updateActiveCharacter(c => ({ ...c, hope: { ...c.hope, max: val } }))}
          />

          {isEditingValues && (
            <div className="mt-8 p-4 bg-indigo-900/20 border border-indigo-500/30 rounded-lg text-center text-indigo-200 text-sm animate-pulse">
              Editing Max Values. Click the Checkmark icon in top right to save and return to Play mode.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {view === ViewState.LIST && renderList()}
      {view === ViewState.CREATE && renderCreate()}
      {view === ViewState.DETAIL && renderDetail()}
    </div>
  );
}