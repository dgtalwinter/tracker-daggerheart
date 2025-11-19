import React, { useState, useEffect, useMemo } from 'react';
import { Character, ViewState, DetailTab, Card, CardType, ClassData } from './types';
import { PipTracker } from './components/PipTracker';
import { CLASS_DATA, getPresetCardsForClass, getAllAncestryCards, getAllCommunityCards } from './reference_data';
import { DOMAIN_CARDS_DATA } from './domain_cards'; // Import raw domain data
import { 
  Sword, 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  Plus, 
  Minus,
  ChevronLeft, 
  Save, 
  Trash2, 
  User, 
  Settings, 
  CheckCircle2,
  ChevronRight,
  LayoutGrid,
  Files,
  X,
  Image as ImageIcon,
  Archive,
  ArrowRightLeft,
  Info,
  Book,
  Library,
  Users,
  Pencil,
  Eye,
  Filter,
  Copy
} from 'lucide-react';

const STORAGE_KEY = 'daggerheart_characters';
const LIBRARY_STORAGE_KEY = 'daggerheart_library_cards';
const CUSTOM_CLASSES_KEY = 'daggerheart_custom_classes';
const CUSTOM_DOMAINS_KEY = 'daggerheart_custom_domains';

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
  armor: { current: 0, max: 0 },
  hand: [],
  vault: []
};

const DEFAULT_DOMAINS = [
  "Arcana", "Blade", "Bone", "Codex", "Grace", "Midnight", "Sage", "Splendor", "Valor"
];

// Helper for unique IDs
const generateId = () => Date.now().toString() + Math.random().toString(36).substring(2, 9);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false); // Guard to prevent overwriting storage on init
  const [view, setView] = useState<ViewState>(ViewState.LIST);
  const [activeTab, setActiveTab] = useState<DetailTab>(DetailTab.STATS);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [libraryCards, setLibraryCards] = useState<Card[]>([]);
  const [customClasses, setCustomClasses] = useState<Record<string, ClassData>>({});
  const [customDomains, setCustomDomains] = useState<string[]>([]);
  const [libraryTab, setLibraryTab] = useState<'CARDS' | 'CLASSES' | 'DOMAINS'>('CARDS');

  const [activeCharId, setActiveCharId] = useState<string | null>(null);
  const [newCharName, setNewCharName] = useState('');
  const [newCharClass, setNewCharClass] = useState('');
  const [isEditingValues, setIsEditingValues] = useState(false);

  // Card Management State
  const [showCardModal, setShowCardModal] = useState(false);
  const [activeCardFilter, setActiveCardFilter] = useState<'ALL' | 'DOMAIN' | 'SUBCLASS' | 'ANCESTRY' | 'COMMUNITY'>('ALL');
  const [showVault, setShowVault] = useState(false);
  const [showAddClassModal, setShowAddClassModal] = useState(false); // For Multiclassing
  const [newCard, setNewCard] = useState<Partial<Card>>({ type: CardType.DOMAIN });
  const [previewCard, setPreviewCard] = useState<Card | null>(null); // For intermediate preview step
  const [cardCategoryInput, setCardCategoryInput] = useState(''); // Holds Domain name or Class name input
  const [subclassTier, setSubclassTier] = useState(''); // Holds Foundation/Specialization/Mastery
  const [editingCardId, setEditingCardId] = useState<string | null>(null); // Track if we are editing a library card
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null); // For card delete
  const [confirmDeleteCharId, setConfirmDeleteCharId] = useState<string | null>(null); // For character delete
  
  // Library View State
  const [showSystemCards, setShowSystemCards] = useState(false);
  const [librarySearch, setLibrarySearch] = useState('');

  // CMS State
  const [newDomainName, setNewDomainName] = useState('');
  const [newClassData, setNewClassData] = useState<Partial<ClassData> & { name: string }>({ 
    name: '', 
    starting_stats: { evasion: 10, hp: 6 },
    domains: [],
    features: { class_features_description: '', class_hope_feature_description: '' }
  });

  const mergedClassData = { ...CLASS_DATA, ...customClasses };
  const mergedDomains = [...DEFAULT_DOMAINS, ...customDomains].sort();

  // Load data
  useEffect(() => {
    // Characters
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const sanitized = Array.isArray(parsed) 
          ? parsed.map((c: any) => ({ 
              ...DEFAULT_CHAR, 
              ...c,
              hand: c.hand || [],
              vault: c.vault || [],
              additionalClasses: c.additionalClasses || []
            })) 
          : [];
        setCharacters(sanitized);
      } catch (e) {
        console.error("Failed to load characters", e);
      }
    }

    // Library
    const storedLib = localStorage.getItem(LIBRARY_STORAGE_KEY);
    if (storedLib) try { setLibraryCards(JSON.parse(storedLib)); } catch (e) {}

    // Custom Classes
    const storedClasses = localStorage.getItem(CUSTOM_CLASSES_KEY);
    if (storedClasses) try { setCustomClasses(JSON.parse(storedClasses)); } catch(e) {}

    // Custom Domains
    const storedDomains = localStorage.getItem(CUSTOM_DOMAINS_KEY);
    if (storedDomains) try { setCustomDomains(JSON.parse(storedDomains)); } catch(e) {}
    
    setIsLoaded(true); // Mark as loaded so we can start saving changes
  }, []);

  // Save data - Only when isLoaded is true to prevent overwriting with empty array on startup
  useEffect(() => {
    if (isLoaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  }, [characters, isLoaded]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(libraryCards));
  }, [libraryCards, isLoaded]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem(CUSTOM_CLASSES_KEY, JSON.stringify(customClasses));
  }, [customClasses, isLoaded]);
  
  useEffect(() => {
    if (isLoaded) localStorage.setItem(CUSTOM_DOMAINS_KEY, JSON.stringify(customDomains));
  }, [customDomains, isLoaded]);

  const handleCreate = () => {
    if (!newCharName.trim() || !newCharClass) return;
    
    const classData = mergedClassData[newCharClass.toUpperCase().trim()];
    
    const newChar: Character = {
      ...DEFAULT_CHAR,
      id: generateId(),
      name: newCharName,
      class: newCharClass,
      evasion: classData?.starting_stats?.evasion || 10,
      hp: { current: classData?.starting_stats?.hp || 6, max: classData?.starting_stats?.hp || 6 },
    };

    setCharacters([...characters, newChar]);
    setNewCharName('');
    setNewCharClass('');
    setView(ViewState.LIST);
  };

  const handleAddClassToCharacter = (className: string) => {
    if (activeCharId) {
      updateActiveCharacter(char => {
        const currentExtras = char.additionalClasses || [];
        if (currentExtras.includes(className) || char.class === className) return char;
        return {
          ...char,
          additionalClasses: [...currentExtras, className]
        };
      });
      setShowAddClassModal(false);
      setIsEditingValues(false);
    }
  }

  const executeDeleteChar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCharacters(prev => prev.filter(c => c.id !== id));
    setConfirmDeleteCharId(null);
    if (activeCharId === id) {
      setActiveCharId(null);
      setView(ViewState.LIST);
    }
  };

  const handleCreateDomain = () => {
    if (!newDomainName.trim()) return;
    if (mergedDomains.includes(newDomainName.trim())) {
      alert('Domain already exists');
      return;
    }
    setCustomDomains([...customDomains, newDomainName.trim()]);
    setNewDomainName('');
  };

  const handleCreateClass = () => {
    if (!newClassData.name) return;
    const upperName = newClassData.name.toUpperCase().trim();
    
    if (mergedClassData[upperName]) {
      alert('Class name already exists');
      return;
    }

    const newClass: ClassData = {
      name: upperName,
      starting_stats: newClassData.starting_stats || { evasion: 10, hp: 6 },
      domains: newClassData.domains || [],
      features: {
        class_features_description: newClassData.features?.class_features_description || 'Custom Class Features',
        class_hope_feature_description: newClassData.features?.class_hope_feature_description || 'Custom Hope Feature'
      },
      subclasses: {} // User can add subclass cards manually later via Card Creator
    };

    setCustomClasses({ ...customClasses, [upperName]: newClass });
    setNewClassData({ name: '', starting_stats: { evasion: 10, hp: 6 }, domains: [], features: { class_features_description: '', class_hope_feature_description: '' } });
    alert('Class Created!');
  };

  const getActiveCharacter = () => characters.find(c => c.id === activeCharId);

  const updateActiveCharacter = (updater: (char: Character) => Character) => {
    if (!activeCharId) return;
    setCharacters(prev => prev.map(c => c.id === activeCharId ? updater(c) : c));
  };

  // --- Card Logic ---

  const handleSaveCard = (target: 'character' | 'library') => {
    if (!newCard.name || !newCard.type) return;
    
    // Process Category Input (Domain or Class) into Tags
    let finalTags = newCard.tags || [];
    
    if (cardCategoryInput.trim()) {
      // Remove old domain/class tags if any to prevent duplicates/conflicts
      // This is a simplistic approach, ideally we'd identify which tag is the category
      if (!finalTags.includes(cardCategoryInput.trim())) {
        finalTags = [...finalTags, cardCategoryInput.trim()];
      }
    }

    // Add Subclass Tier tag if selected
    if (newCard.type === CardType.SUBCLASS && subclassTier) {
      if (!finalTags.includes(subclassTier)) {
        finalTags = [...finalTags, subclassTier];
      }
    }

    const cardData: Card = {
      id: editingCardId || generateId(),
      name: newCard.name,
      type: newCard.type,
      description: newCard.description || '',
      imageUrl: newCard.imageUrl,
      level: newCard.level,
      stressCost: newCard.stressCost,
      tags: finalTags
    };

    if (target === 'character') {
      updateActiveCharacter(char => ({
        ...char,
        hand: [...char.hand, cardData]
      }));
      setShowCardModal(false);
    } else {
      // Library Logic
      if (editingCardId && libraryCards.some(c => c.id === editingCardId)) {
        // Update existing custom card
        setLibraryCards(prev => prev.map(c => c.id === editingCardId ? cardData : c));
        setEditingCardId(null);
        alert("Card updated!");
      } else {
        // Create new card (or clone from system)
        setLibraryCards([...libraryCards, { ...cardData, id: generateId() }]); // Ensure new ID if cloning
        alert("Card saved to Library!");
      }
      
      // Reset Form
      setNewCard({ type: CardType.DOMAIN });
      setCardCategoryInput('');
      setSubclassTier('');
      setEditingCardId(null);
    }
  };

  const startEditingLibraryCard = (card: Card) => {
    // If it's a system card (not in libraryCards), we treat it as a "Clone" operation
    // If it IS in libraryCards, we edit it directly.
    const isSystemCard = !libraryCards.some(c => c.id === card.id);

    if (isSystemCard) {
        setEditingCardId(null); // New ID will be generated on save
    } else {
        setEditingCardId(card.id);
    }

    setNewCard({ ...card });
    
    // Try to extract category input from tags for UI consistency
    const relevantTag = card.tags?.find(t => mergedDomains.includes(t) || Object.keys(mergedClassData).includes(t));
    if (relevantTag) setCardCategoryInput(relevantTag);
    else setCardCategoryInput('');

    const tierTag = card.tags?.find(t => ['Foundation', 'Specialization', 'Mastery'].includes(t));
    if (tierTag) setSubclassTier(tierTag);
    else setSubclassTier('');

    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectForPreview = (card: Card) => {
    setPreviewCard(card);
  };

  const confirmAddPreviewCard = () => {
    if (!previewCard || !activeCharId) return;
    
    // Create a copy with a UNIQUE ID to prevent key collisions in Hand/Vault
    const cardToAdd = { ...previewCard, id: generateId() };

    updateActiveCharacter(char => ({
      ...char,
      hand: [...char.hand, cardToAdd]
    }));
    
    setPreviewCard(null);
    setShowCardModal(false);
  };

  const moveCardToVault = (cardId: string) => {
    updateActiveCharacter(char => {
      const card = char.hand.find(c => c.id === cardId);
      if (!card) return char;
      return {
        ...char,
        hand: char.hand.filter(c => c.id !== cardId),
        vault: [...char.vault, card]
      };
    });
  };

  const moveCardToHand = (cardId: string) => {
    updateActiveCharacter(char => {
      const card = char.vault.find(c => c.id === cardId);
      if (!card) return char;
      return {
        ...char,
        vault: char.vault.filter(c => c.id !== cardId),
        hand: [...char.hand, card]
      };
    });
  };

  const deleteCard = (cardId: string, fromVault: boolean = false) => {
    // Deleted window.confirm in favor of in-UI confirmation state
    updateActiveCharacter(char => ({
      ...char,
      hand: fromVault ? char.hand : char.hand.filter(c => c.id !== cardId),
      vault: fromVault ? char.vault.filter(c => c.id !== cardId) : char.vault
    }));
  };
  
  const deleteLibraryCard = (cardId: string) => {
    setLibraryCards(prev => prev.filter(c => c.id !== cardId));
    if (editingCardId === cardId) {
      setEditingCardId(null);
      setNewCard({ type: CardType.DOMAIN });
    }
  };

  // --- Data Gathering ---
  
  const getSystemCards = () => {
    // Generate all system cards flat list
    const ancestries = getAllAncestryCards();
    const communities = getAllCommunityCards();
    let domains: Card[] = [];
    
    DOMAIN_CARDS_DATA.forEach((dc, i) => {
         domains.push({
            id: `sys-domain-${dc.domain}-${i}`,
            name: dc.name,
            type: CardType.DOMAIN,
            description: dc.feature_text,
            level: dc.level,
            stressCost: dc.recall_cost,
            tags: [dc.domain, dc.type]
         });
    });

    // Subclasses are trickier as they are nested in classes, but we can extract them
    let subclasses: Card[] = [];
    Object.values(CLASS_DATA).forEach(cData => {
        subclasses = [...subclasses, ...getPresetCardsForClass(cData.name)];
    });
    // Filter out duplicate domains that getPresetCardsForClass might add, we just want the features
    subclasses = subclasses.filter(c => c.type === CardType.SUBCLASS);

    return [...ancestries, ...communities, ...domains, ...subclasses];
  };

  // --- Render Helpers ---

  const renderCardItem = (card: Card, location: 'hand' | 'vault' | 'library' | 'preview') => {
    const isSystemCard = location === 'library' && !libraryCards.some(c => c.id === card.id);
    
    return (
    <div key={card.id} className={`bg-slate-800 rounded-lg border ${editingCardId === card.id ? 'border-indigo-500 ring-2 ring-indigo-500/50' : 'border-slate-700'} overflow-hidden shadow-lg flex flex-col relative group ${location === 'preview' ? 'w-full' : 'min-w-[280px] max-w-[320px] md:min-w-[300px] shrink-0 snap-center'}`}>
      {card.imageUrl ? (
        <div className="h-40 bg-slate-900 relative overflow-hidden">
            <img src={card.imageUrl} alt={card.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
        </div>
      ) : (
        <div className={`h-2 bg-gradient-to-r ${
          card.type === CardType.DOMAIN ? 'from-indigo-500 to-purple-600' : 
          card.type === CardType.SUBCLASS ? 'from-amber-500 to-orange-600' :
          card.type === CardType.ANCESTRY ? 'from-emerald-500 to-teal-600' :
          card.type === CardType.COMMUNITY ? 'from-pink-500 to-rose-600' :
          'from-slate-500 to-slate-700'
        }`} />
      )}

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-600 rounded px-1.5 py-0.5 w-fit">
                {card.type}
              </span>
             <h3 className="text-lg font-bold text-slate-100 leading-tight">{card.name}</h3>
          </div>
          
          <div className="flex items-center gap-2 shrink-0 ml-2">
            {card.stressCost !== undefined && (
              <div className="flex items-center gap-1 bg-purple-900/50 px-2 py-1 rounded border border-purple-500/30 text-purple-300 text-xs font-bold whitespace-nowrap">
                <Brain size={12} /> {card.stressCost}
              </div>
            )}
            {card.level ? (
              <div className="bg-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono border border-slate-600 whitespace-nowrap font-bold">
                Lvl {card.level}
              </div>
            ) : null}
          </div>
        </div>
        
        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap mb-4">
          {card.description}
        </p>

        {card.tags && card.tags.length > 0 && (
           <div className="flex flex-wrap gap-1 mb-3 mt-auto">
              {card.tags.map((tag, i) => (
                <span key={i} className="text-[10px] bg-slate-700/50 text-slate-400 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
           </div>
        )}

        {location !== 'preview' && (
          <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center gap-2">
            {location === 'hand' && (
               card.type === CardType.DOMAIN ? (
                 <button onClick={() => moveCardToVault(card.id)} className="flex-1 py-2 px-3 bg-slate-700 hover:bg-slate-600 rounded text-xs font-bold text-slate-300 flex items-center justify-center gap-2">
                   <Archive size={14} /> TO VAULT
                 </button>
               ) : <div className="flex-1"></div>
            )}
            
            {location === 'vault' && (
              <button onClick={() => moveCardToHand(card.id)} className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-500 rounded text-xs font-bold text-white flex items-center justify-center gap-2">
                <ArrowRightLeft size={14} /> EQUIP
              </button>
            )}

            {location === 'library' && (
              <button 
                onClick={() => startEditingLibraryCard(card)} 
                className={`flex-1 py-2 px-3 rounded text-xs font-bold text-white flex items-center justify-center gap-2 ${isSystemCard ? 'bg-slate-600 hover:bg-slate-500' : 'bg-indigo-600 hover:bg-indigo-500'}`}
              >
                {isSystemCard ? <><Copy size={14} /> CLONE & EDIT</> : <><Pencil size={14} /> EDIT</>}
              </button>
            )}
            
            {/* Only show delete for non-system cards */}
            {!isSystemCard && (
                confirmDeleteId === card.id ? (
                    <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        if (location === 'library') {
                        deleteLibraryCard(card.id);
                        } else {
                        deleteCard(card.id, location === 'vault');
                        }
                        setConfirmDeleteId(null);
                    }} 
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-bold transition-all animate-in zoom-in duration-200"
                    >
                    CONFIRM
                    </button>
                ) : (
                    <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setConfirmDeleteId(card.id);
                        // Timeout to reset if not confirmed
                        setTimeout(() => setConfirmDeleteId(current => current === card.id ? null : current), 3000);
                    }} 
                    className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded transition-colors"
                    >
                    <Trash2 size={16} />
                    </button>
                )
            )}
          </div>
        )}
      </div>
    </div>
  )};

  const renderCardCreatorForm = (target: 'character' | 'library') => (
    <div className="space-y-4 border-t border-slate-800 pt-4">
        <div className="flex justify-between items-center mb-2">
           <h4 className="text-xs font-bold text-slate-500 uppercase">
             {target === 'character' 
               ? 'Create Custom Card' 
               : (editingCardId ? 'Editing Card' : 'Add New Card to Library')}
           </h4>
           {editingCardId && (
             <button 
               onClick={() => {
                 setEditingCardId(null);
                 setNewCard({ type: CardType.DOMAIN });
                 setCardCategoryInput('');
                 setSubclassTier('');
               }}
               className="text-xs text-red-400 hover:underline"
             >
               Cancel Edit
             </button>
           )}
        </div>
        
        <input
        type="text"
        placeholder="Card Name"
        value={newCard.name || ''}
        onChange={e => setNewCard({...newCard, name: e.target.value})}
        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-indigo-500 outline-none"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Card Type</label>
          <select 
            value={newCard.type}
            onChange={e => {
              setNewCard({...newCard, type: e.target.value as CardType});
              setCardCategoryInput(''); // Reset category input on type change
              setSubclassTier(''); // Reset tier
            }}
            className="bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none w-full"
          >
            {Object.values(CardType).map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        
        {/* Dynamic Category Input based on Type */}
        {newCard.type === CardType.DOMAIN && (
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500">Domain</label>
            <input 
              list="domains-list"
              type="text" 
              placeholder="Select or type Domain..."
              value={cardCategoryInput}
              onChange={(e) => setCardCategoryInput(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none w-full"
            />
            <datalist id="domains-list">
              {mergedDomains.map(d => <option key={d} value={d} />)}
            </datalist>
          </div>
        )}

        {newCard.type === CardType.SUBCLASS && (
          <>
             <div className="flex flex-col gap-1">
               <label className="text-xs text-slate-500">Class</label>
               <input 
                 list="classes-list"
                 type="text" 
                 placeholder="Select or type Class..."
                 value={cardCategoryInput}
                 onChange={(e) => setCardCategoryInput(e.target.value)}
                 className="bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none w-full"
               />
               <datalist id="classes-list">
                 {Object.keys(mergedClassData).map(c => <option key={c} value={c} />)}
               </datalist>
             </div>

             <div className="flex flex-col gap-1">
               <label className="text-xs text-slate-500">Subclass Tier</label>
               <select
                 value={subclassTier}
                 onChange={(e) => {
                   const tier = e.target.value;
                   setSubclassTier(tier);
                   let level = 1;
                   if (tier === 'Specialization') level = 5;
                   if (tier === 'Mastery') level = 8;
                   setNewCard({...newCard, level});
                 }}
                 className="bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none w-full"
               >
                 <option value="">Select Tier...</option>
                 <option value="Foundation">Foundation (Level 1)</option>
                 <option value="Specialization">Specialization (Level 5)</option>
                 <option value="Mastery">Mastery (Level 8)</option>
               </select>
             </div>
           </>
        )}

        {newCard.type === CardType.DOMAIN && (
            <>
              <div className="flex flex-col gap-1">
                 <label className="text-xs text-slate-500">Level</label>
                  <input 
                  type="number" placeholder="1"
                  value={newCard.level || ''}
                  className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none"
                  onChange={e => setNewCard({...newCard, level: parseInt(e.target.value)})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-500">Stress Cost</label>
                <input 
                  type="number" placeholder="0"
                  value={newCard.stressCost || ''}
                  className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none"
                  onChange={e => setNewCard({...newCard, stressCost: parseInt(e.target.value)})}
                />
              </div>
            </>
        )}
      </div>

      <textarea
        placeholder="Description / Effects"
        value={newCard.description || ''}
        onChange={e => setNewCard({...newCard, description: e.target.value})}
        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white h-24 focus:border-indigo-500 outline-none resize-none"
      />

      <div className="relative">
        <ImageIcon className="absolute left-3 top-3 text-slate-500" size={16} />
        <input
          type="text"
          placeholder="Image URL (e.g. https://...)"
          value={newCard.imageUrl || ''}
          onChange={e => setNewCard({...newCard, imageUrl: e.target.value})}
          className="w-full bg-slate-950 border border-slate-700 rounded p-3 pl-10 text-white focus:border-indigo-500 outline-none text-sm font-mono"
        />
        <p className="text-[10px] text-slate-500 mt-1 pl-1">Paste a direct link to an image.</p>
      </div>
      
      <button 
        onClick={() => handleSaveCard(target)}
        disabled={!newCard.name}
        className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-500 transition-colors"
      >
        {target === 'character' ? 'Add to Character' : (editingCardId ? (libraryCards.some(c => c.id === editingCardId) ? 'Update Card' : 'Save Copy to Library') : 'Save to Library')}
      </button>
    </div>
  );

  const renderList = () => (
    <div className="p-4 pb-24 max-w-md mx-auto relative min-h-screen">
      <header className="mb-8 mt-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 tracking-tight">DaggerHeart</h1>
          <p className="text-slate-400">Character Tracker</p>
        </div>
        <button 
          onClick={() => { setView(ViewState.LIBRARY); setActiveCardFilter('ALL'); }}
          className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-indigo-400 border border-slate-700"
          title="Content Library"
        >
          <Library size={24} />
        </button>
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
                setActiveTab(DetailTab.STATS);
                setIsEditingValues(false);
              }}
              className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm hover:border-indigo-500 transition-all cursor-pointer relative group active:scale-[0.98]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-slate-100">{char.name}</h2>
                  <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
                    {char.class}
                    {char.additionalClasses && char.additionalClasses.length > 0 && (
                      <span className="text-slate-500"> / {char.additionalClasses.join(' / ')}</span>
                    )}
                  </p>
                </div>
                
                {confirmDeleteCharId === char.id ? (
                    <button 
                      onClick={(e) => executeDeleteChar(char.id, e)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-all animate-in zoom-in duration-200 z-10 shadow-lg"
                    >
                      CONFIRM
                    </button>
                ) : (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmDeleteCharId(char.id);
                        setTimeout(() => setConfirmDeleteCharId(curr => curr === char.id ? null : curr), 3000);
                      }}
                      className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-700 rounded-full transition-colors z-10"
                    >
                      <Trash2 size={18} />
                    </button>
                )}
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

  const renderLibrary = () => {
    // Filter system cards if enabled
    const systemCards = showSystemCards ? getSystemCards() : [];
    
    // Filter logic
    const allVisibleCards = [...libraryCards, ...systemCards].filter(c => {
        const searchLower = librarySearch.toLowerCase();
        const matchesSearch = c.name.toLowerCase().includes(searchLower) ||
        c.tags?.some(t => t.toLowerCase().includes(searchLower)) ||
        c.type.toLowerCase().includes(searchLower);

        let matchesFilter = true;
        if (activeCardFilter !== 'ALL') {
             // SUBCLASS strict check because 'SUBCLASS' string doesn't exist in CardType which matches filter key
             if (activeCardFilter === 'SUBCLASS') matchesFilter = c.type === CardType.SUBCLASS;
             else matchesFilter = c.type === activeCardFilter;
        }
        
        return matchesSearch && matchesFilter;
    });

    return (
    <div className="p-4 max-w-lg mx-auto min-h-screen flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setView(ViewState.LIST)} className="text-slate-400 hover:text-white">
          <ChevronLeft size={28} />
        </button>
        <h2 className="text-2xl font-bold text-white">Content Library</h2>
      </div>
      
      {/* Library Tabs */}
      <div className="flex border-b border-slate-800 mb-6">
        <button 
          onClick={() => setLibraryTab('CARDS')} 
          className={`flex-1 py-2 text-sm font-bold ${libraryTab === 'CARDS' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-500'}`}
        >
          Cards
        </button>
        <button 
          onClick={() => setLibraryTab('CLASSES')} 
          className={`flex-1 py-2 text-sm font-bold ${libraryTab === 'CLASSES' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-500'}`}
        >
          Classes
        </button>
        <button 
          onClick={() => setLibraryTab('DOMAINS')} 
          className={`flex-1 py-2 text-sm font-bold ${libraryTab === 'DOMAINS' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-500'}`}
        >
          Domains
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        
        {/* --- CARDS TAB --- */}
        {libraryTab === 'CARDS' && (
          <>
            <div className={`mb-8 transition-all duration-300 ${editingCardId ? 'ring-2 ring-indigo-500/30 rounded-xl' : ''}`}>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                {renderCardCreatorForm('library')}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-300">Library Cards</h3>
                    
                    <button 
                        onClick={() => setShowSystemCards(!showSystemCards)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${showSystemCards ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                    >
                        {showSystemCards ? 'Showing All Cards' : 'My Custom Cards Only'}
                    </button>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {['ALL', 'DOMAIN', 'SUBCLASS', 'ANCESTRY', 'COMMUNITY'].map(filter => (
                        <button
                        key={filter}
                        onClick={() => setActiveCardFilter(filter as any)}
                        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${activeCardFilter === filter ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
                        >
                        {filter}
                        </button>
                    ))}
                </div>
                
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search cards..." 
                        value={librarySearch}
                        onChange={(e) => setLibrarySearch(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-3 pr-10 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                    {librarySearch && (
                        <button onClick={() => setLibrarySearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                            <X size={14} />
                        </button>
                    )}
                </div>
            </div>

            {allVisibleCards.length === 0 ? (
              <div className="text-slate-500 italic text-center p-8">
                  {librarySearch ? 'No cards found matching search.' : (showSystemCards ? 'No cards found.' : 'No custom cards yet. Enable "Showing All Cards" to see system cards.')}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {allVisibleCards.map(c => renderCardItem(c, 'library'))}
              </div>
            )}
          </>
        )}

        {/* --- DOMAINS TAB --- */}
        {libraryTab === 'DOMAINS' && (
          <div className="space-y-6">
             <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
               <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Create Domain</h4>
               <div className="flex gap-2">
                 <input 
                   type="text" 
                   placeholder="Domain Name" 
                   value={newDomainName} 
                   onChange={(e) => setNewDomainName(e.target.value)}
                   className="flex-1 bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none"
                 />
                 <button onClick={handleCreateDomain} className="bg-indigo-600 text-white px-4 rounded font-bold">Add</button>
               </div>
             </div>
             <div>
               <h3 className="text-lg font-bold text-slate-300 mb-4">Available Domains</h3>
               <div className="flex flex-wrap gap-2">
                 {mergedDomains.map(d => (
                   <span key={d} className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-slate-300 text-sm">
                     {d}
                   </span>
                 ))}
               </div>
             </div>
          </div>
        )}

        {/* --- CLASSES TAB --- */}
        {libraryTab === 'CLASSES' && (
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase">Create Class</h4>
              
              <input 
                 type="text" 
                 placeholder="Class Name" 
                 value={newClassData.name} 
                 onChange={(e) => setNewClassData({...newClassData, name: e.target.value})}
                 className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none"
               />
               
               <div className="flex gap-4">
                 <div className="flex-1">
                   <label className="text-xs text-slate-500 block mb-1">Start Evasion</label>
                   <input 
                     type="number" 
                     value={newClassData.starting_stats?.evasion}
                     onChange={(e) => setNewClassData({...newClassData, starting_stats: { ...newClassData.starting_stats!, evasion: parseInt(e.target.value) }})}
                     className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none"
                   />
                 </div>
                 <div className="flex-1">
                   <label className="text-xs text-slate-500 block mb-1">Start HP</label>
                   <input 
                     type="number" 
                     value={newClassData.starting_stats?.hp}
                     onChange={(e) => setNewClassData({...newClassData, starting_stats: { ...newClassData.starting_stats!, hp: parseInt(e.target.value) }})}
                     className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none"
                   />
                 </div>
               </div>

               <div>
                 <label className="text-xs text-slate-500 block mb-2">Select Domains</label>
                 <div className="flex flex-wrap gap-2">
                   {mergedDomains.map(d => (
                     <button
                        key={d}
                        onClick={() => {
                           const current = newClassData.domains || [];
                           if(current.includes(d)) setNewClassData({...newClassData, domains: current.filter(x => x !== d)});
                           else setNewClassData({...newClassData, domains: [...current, d]});
                        }}
                        className={`px-3 py-1 rounded-full text-xs border transition-colors ${newClassData.domains?.includes(d) ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 border-slate-700 text-slate-400'}`}
                     >
                       {d}
                     </button>
                   ))}
                 </div>
               </div>

               <textarea 
                  placeholder="Class Features Description..."
                  value={newClassData.features?.class_features_description}
                  onChange={(e) => setNewClassData({...newClassData, features: { ...newClassData.features!, class_features_description: e.target.value }})}
                  className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white outline-none h-24"
               />

               <button onClick={handleCreateClass} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">Create Class</button>
            </div>

            <div>
               <h3 className="text-lg font-bold text-slate-300 mb-4">Available Classes</h3>
               <div className="grid grid-cols-2 gap-2">
                  {Object.keys(mergedClassData).map(c => (
                     <div key={c} className="bg-slate-800 p-3 rounded border border-slate-700">
                        <div className="font-bold text-white text-sm">{c}</div>
                        <div className="text-xs text-slate-500 mt-1">{mergedClassData[c].domains?.join(', ')}</div>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );};

  const renderCreate = () => (
    <div className="p-4 max-w-md mx-auto min-h-screen flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setView(ViewState.LIST)} className="text-slate-400 hover:text-white">
          <ChevronLeft size={28} />
        </button>
        <h2 className="text-2xl font-bold text-white">New Character</h2>
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Character Name</label>
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
          <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Select Class</label>
          <div className="grid grid-cols-2 gap-3">
            {Object.keys(mergedClassData).map(className => (
              <button
                key={className}
                onClick={() => setNewCharClass(className)}
                className={`
                  p-4 rounded-xl border text-left transition-all
                  ${newCharClass === className 
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-900/50 scale-[1.02]' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-500/50 hover:text-slate-200'
                  }
                `}
              >
                <div className="font-bold text-sm">{className}</div>
                <div className="text-[10px] opacity-60 mt-1">
                  {mergedClassData[className].domains?.join(' / ') || 'Unknown'}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleCreate}
        disabled={!newCharName.trim() || !newCharClass}
        className="w-full bg-indigo-600 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl mt-6 flex items-center justify-center gap-2 shadow-xl"
      >
        <Save size={20} />
        Create Character
      </button>
    </div>
  );

  const renderDetail = () => {
    const char = getActiveCharacter();
    if (!char) return null;

    const domainsInHand = char.hand.filter(c => c.type === CardType.DOMAIN);
    const othersInHand = char.hand.filter(c => c.type !== CardType.DOMAIN);
    
    // --- PRESET CALCULATION ---
    const groups: Record<string, Card[]> = { 'Features & Subclasses': [] };
    
    const allClassesToLoad = [char.class, ...(char.additionalClasses || [])];
    let combinedPresets: Card[] = [];

    // Aggregate presets for all classes (Primary + Multiclass)
    allClassesToLoad.forEach(c => {
      const presets = getPresetCardsForClass(c, customClasses);
      combinedPresets = [...combinedPresets, ...presets];
    });
    
    // Add Ancestry Cards (Available to everyone)
    const ancestryCards = getAllAncestryCards();

    // Add Community Cards (Available to everyone)
    const communityCards = getAllCommunityCards();

    // Combine with Library
    const allAvailableCards = [...combinedPresets, ...ancestryCards, ...communityCards, ...libraryCards];
    
    // Filter cards based on activeCardFilter
    const filteredCards = allAvailableCards.filter(card => {
        if (activeCardFilter === 'ALL') return true;
        if (activeCardFilter === 'ANCESTRY') return card.type === CardType.ANCESTRY;
        if (activeCardFilter === 'COMMUNITY') return card.type === CardType.COMMUNITY;
        if (activeCardFilter === 'SUBCLASS') return card.type === CardType.SUBCLASS || card.tags?.includes('Class Feature');
        if (activeCardFilter === 'DOMAIN') return card.type === CardType.DOMAIN;
        return true;
    });

    filteredCards.forEach(card => {
      if (card.type === CardType.ANCESTRY) {
         if (!groups['Ancestries']) groups['Ancestries'] = [];
         groups['Ancestries'].push(card);
      } else if (card.type === CardType.COMMUNITY) {
         if (!groups['Communities']) groups['Communities'] = [];
         groups['Communities'].push(card);
      } else if (card.type === CardType.SUBCLASS || card.tags?.includes('Class Feature')) {
        groups['Features & Subclasses'].push(card);
      } else if (card.level) {
        const lvlKey = `Level ${card.level}`;
        if (!groups[lvlKey]) groups[lvlKey] = [];
        groups[lvlKey].push(card);
      } else {
        if (!groups['Misc']) groups['Misc'] = [];
        groups['Misc'].push(card);
      }
    });

    const sortedGroups = Object.entries(groups).sort((a, b) => {
      if (a[0] === 'Features & Subclasses') return -1;
      if (b[0] === 'Features & Subclasses') return 1;
      if (a[0] === 'Ancestries') return -1; // Ancestries near top
      if (b[0] === 'Ancestries') return 1;
      if (a[0] === 'Communities') return -1; // Communities near top
      if (b[0] === 'Communities') return 1;
      
      const lvlA = parseInt(a[0].replace(/\D/g, '')) || 99;
      const lvlB = parseInt(b[0].replace(/\D/g, '')) || 99;
      return lvlA - lvlB;
    });

    return (
      <div className="pb-24 max-w-lg mx-auto flex flex-col h-screen">
        {/* Header */}
        <div className="flex-none bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 p-4 z-40 flex justify-between items-center">
          <button onClick={() => setView(ViewState.LIST)} className="text-slate-400 hover:text-white p-2 -ml-2">
            <ChevronLeft size={28} />
          </button>
          <div className="text-center">
            <h2 className="text-lg font-bold text-white leading-tight">{char.name}</h2>
            <p className="text-xs text-indigo-400 font-medium uppercase flex items-center justify-center gap-1">
               {char.class}
               {char.additionalClasses?.map(ac => <span key={ac} className="text-slate-500">/ {ac}</span>)}
            </p>
          </div>
          
          <div className="flex items-center relative">
             {isEditingValues && (
               <button onClick={() => setShowAddClassModal(true)} className="mr-2 p-2 bg-slate-800 rounded-full text-xs text-indigo-400 font-bold border border-indigo-500/50">
                 + CLASS
               </button>
             )}
             <button 
              onClick={() => setIsEditingValues(!isEditingValues)}
              className={`p-2 rounded-full transition-colors ${isEditingValues ? 'text-indigo-400 bg-indigo-400/10' : 'text-slate-400 hover:text-white'}`}
            >
              {isEditingValues ? <CheckCircle2 size={24} /> : <Settings size={24} />}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex-none flex border-b border-slate-800">
          <button 
            onClick={() => setActiveTab(DetailTab.STATS)}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${activeTab === DetailTab.STATS ? 'text-indigo-400 border-b-2 border-indigo-400 bg-slate-900' : 'text-slate-500 bg-slate-900/50 hover:text-slate-300'}`}
          >
            <LayoutGrid size={16} /> Stats
          </button>
          <button 
            onClick={() => setActiveTab(DetailTab.CARDS)}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${activeTab === DetailTab.CARDS ? 'text-indigo-400 border-b-2 border-indigo-400 bg-slate-900' : 'text-slate-500 bg-slate-900/50 hover:text-slate-300'}`}
          >
            <Files size={16} /> Cards
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === DetailTab.STATS ? (
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

              {/* Armor */}
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
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {/* Hand Section */}
              <div>
                <div className="flex justify-between items-end mb-3 px-1">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">In Hand</h3>
                  <div className="text-xs text-slate-500">
                    {domainsInHand.length}/5 Domains
                  </div>
                </div>

                {char.hand.length === 0 ? (
                   <div className="border border-dashed border-slate-700 rounded-xl p-8 text-center bg-slate-900/50">
                      <Files className="mx-auto text-slate-600 mb-2" />
                      <p className="text-slate-500 text-sm">Your hand is empty.</p>
                      <button onClick={() => { setShowCardModal(true); setActiveCardFilter('ALL'); }} className="mt-4 text-indigo-400 font-medium text-sm hover:text-indigo-300">
                        Add Cards
                      </button>
                   </div>
                ) : (
                  <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x">
                     {othersInHand.map(c => renderCardItem(c, 'hand'))}
                     {domainsInHand.map(c => renderCardItem(c, 'hand'))}
                     
                     <button 
                        onClick={() => { setShowCardModal(true); setActiveCardFilter('ALL'); }}
                        className="min-w-[100px] bg-slate-800/50 border border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-indigo-400 transition-colors shrink-0 snap-center"
                     >
                       <Plus size={24} className="mb-2" />
                       <span className="text-xs font-bold uppercase">Add Card</span>
                     </button>
                  </div>
                )}
              </div>

              {/* Vault Section Access */}
              <button 
                onClick={() => setShowVault(true)}
                className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-between hover:bg-slate-750 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400 group-hover:text-purple-300">
                    <Archive size={20} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-200">Card Vault</div>
                    <div className="text-xs text-slate-500">{char.vault.length} cards stored</div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-500 group-hover:text-slate-300" />
              </button>

            </div>
          )}
        </div>

        {/* --- MODALS --- */}
        
        {/* Multiclass Modal */}
        {showAddClassModal && (
           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-slate-900 w-full max-w-md rounded-xl border border-slate-700 flex flex-col max-h-[80vh]">
                 <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-white">Add Multiclass</h3>
                    <button onClick={() => setShowAddClassModal(false)} className="text-slate-400"><X size={24}/></button>
                 </div>
                 <div className="p-4 overflow-y-auto grid grid-cols-1 gap-2">
                    {Object.keys(mergedClassData).filter(c => c !== char.class && !char.additionalClasses?.includes(c)).map(c => (
                       <button 
                         key={c}
                         onClick={() => handleAddClassToCharacter(c)}
                         className="p-3 bg-slate-800 hover:bg-indigo-900/50 border border-slate-700 hover:border-indigo-500 rounded-lg text-left"
                       >
                          <div className="font-bold text-slate-200">{c}</div>
                          <div className="text-xs text-slate-500">{mergedClassData[c].domains.join(' / ')}</div>
                       </button>
                    ))}
                    {Object.keys(mergedClassData).filter(c => c !== char.class && !char.additionalClasses?.includes(c)).length === 0 && (
                      <div className="text-slate-500 text-center py-4">No other classes available.</div>
                    )}
                 </div>
              </div>
           </div>
        )}

        {/* Add Card Modal */}
        {showCardModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
            <div className="bg-slate-900 w-full max-w-lg rounded-xl border border-slate-700 max-h-[90vh] flex flex-col overflow-hidden">
              <div className="p-4 border-b border-slate-700 flex flex-col gap-3 bg-slate-800">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-white">
                      {previewCard ? 'Preview Card' : 'Add Card'}
                   </h3>
                   <button onClick={() => {
                       setShowCardModal(false);
                       setPreviewCard(null);
                   }} className="text-slate-400 hover:text-white"><X size={24} /></button>
                </div>

                {!previewCard && (
                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                        {['ALL', 'DOMAIN', 'SUBCLASS', 'ANCESTRY', 'COMMUNITY'].map(filter => (
                            <button
                            key={filter}
                            onClick={() => setActiveCardFilter(filter as any)}
                            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${activeCardFilter === filter ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
                            >
                            {filter}
                            </button>
                        ))}
                    </div>
                )}
              </div>
              
              <div className="p-4 overflow-y-auto space-y-6">
                
                {/* --- PREVIEW MODE --- */}
                {previewCard ? (
                    <div className="space-y-6 animate-in fade-in duration-200">
                        {renderCardItem(previewCard, 'preview')}
                        
                        <div className="flex gap-3">
                             <button 
                                onClick={() => setPreviewCard(null)}
                                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-bold text-slate-300"
                             >
                                Back to List
                             </button>
                             <button 
                                onClick={confirmAddPreviewCard}
                                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold text-white shadow-lg shadow-indigo-900/20"
                             >
                                Add to Character
                             </button>
                        </div>
                    </div>
                ) : (
                /* --- LIST MODE --- */
                    <>
                        {sortedGroups.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-indigo-400 uppercase mb-4 flex items-center gap-2 sticky top-0 bg-slate-900 py-2 z-10">
                            <Info size={12} /> Available Cards
                            </h4>
                            
                            <div className="space-y-4">
                            {sortedGroups.map(([group, cards]) => (
                                <div key={group}>
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2 border-b border-slate-800 pb-1">
                                    {group}
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    {cards.map(pc => (
                                    <button 
                                        key={pc.id}
                                        onClick={() => selectForPreview(pc)}
                                        className="flex items-start gap-3 p-3 rounded border border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-indigo-500 text-left transition-colors"
                                    >
                                        <div className={`w-1 h-full self-stretch rounded-full ${
                                            pc.type === CardType.DOMAIN ? 'bg-purple-500' : 
                                            pc.type === CardType.ANCESTRY ? 'bg-emerald-500' : 
                                            pc.type === CardType.COMMUNITY ? 'bg-pink-500' : 
                                            'bg-amber-500'
                                        }`}></div>
                                        <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-slate-200 text-sm">{pc.name}</span>
                                            {pc.tags?.filter(t => t !== 'Level ' + pc.level).map(t => (
                                            <span key={t} className="text-[10px] text-slate-500 bg-slate-900 px-1 rounded uppercase">{t}</span>
                                            ))}
                                        </div>
                                        <div className="text-xs text-slate-500 line-clamp-2 mt-0.5">{pc.description}</div>
                                        </div>
                                    </button>
                                    ))}
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        )}

                        {renderCardCreatorForm('character')}
                    </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Vault Modal */}
        {showVault && (
           <div className="fixed inset-0 bg-slate-950 z-50 flex flex-col animate-in slide-in-from-bottom-10 duration-200">
             <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><Archive size={20}/></div>
                 <div>
                   <h2 className="font-bold text-xl text-white">Vault</h2>
                   <p className="text-xs text-slate-400">Storage for extra Domain cards</p>
                 </div>
               </div>
               <button onClick={() => setShowVault(false)} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white">
                 <X size={24} />
               </button>
             </div>

             <div className="flex-1 overflow-y-auto p-4">
                {char.vault.length === 0 ? (
                  <div className="text-center py-20 text-slate-500">
                    <Archive size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Vault is empty</p>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {char.vault.map(c => renderCardItem(c, 'vault'))}
                  </div>
                )}
             </div>
           </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {view === ViewState.LIST && renderList()}
      {view === ViewState.CREATE && renderCreate()}
      {view === ViewState.DETAIL && renderDetail()}
      {view === ViewState.LIBRARY && renderLibrary()}
    </div>
  );
}
