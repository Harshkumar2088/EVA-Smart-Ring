import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const culturalTerms = [
    "mindfulness meditation", "traditional healing", "community circles", 
    "indigenous practices", "eastern philosophy", "african traditions",
    "breathing techniques", "energy healing", "herbal medicine",
    "spiritual wellness", "cultural ceremonies", "ancestral wisdom"
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const filtered = culturalTerms.filter(term => 
        term.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleVoiceSearch = () => {
    setIsVoiceActive(true);
    // Simulate voice search
    setTimeout(() => {
      setIsVoiceActive(false);
      setSearchQuery("mindfulness meditation");
    }, 2000);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-text-secondary" />
        </div>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search cultural wellness practices, techniques, or topics..."
          className="w-full pl-12 pr-24 py-4 bg-background border border-primary/20 rounded-brand text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-gentle"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="p-1 text-text-secondary hover:text-text-primary transition-gentle"
              aria-label="Clear search"
            >
              <Icon name="X" size={16} />
            </button>
          )}
          
          <button
            onClick={handleVoiceSearch}
            className={`p-2 rounded-brand-sm transition-gentle whisper-ripple ${
              isVoiceActive 
                ? 'bg-accent text-white animate-empathy-pulse' :'text-text-secondary hover:text-text-primary hover:bg-surface'
            }`}
            aria-label="Voice search"
          >
            <Icon name="Mic" size={16} />
          </button>
        </div>
      </div>

      {/* Search Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-primary/20 rounded-brand shadow-gentle-lg z-10">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(suggestion);
                setSuggestions([]);
              }}
              className="w-full px-4 py-3 text-left text-text-secondary hover:text-text-primary hover:bg-surface transition-gentle border-b border-primary/10 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <Icon name="Search" size={16} className="text-text-secondary/60" />
                <span>{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Voice Search Indicator */}
      {isVoiceActive && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-accent/10 border border-accent/30 rounded-brand p-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Icon name="Mic" size={20} className="animate-empathy-pulse" />
            <span className="font-medium">Listening for cultural wellness terms...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;