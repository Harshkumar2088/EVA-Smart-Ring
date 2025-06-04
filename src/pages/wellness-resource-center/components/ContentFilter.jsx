import React from 'react';
import Icon from 'components/AppIcon';

const ContentFilter = ({ selectedCulture, setSelectedCulture, selectedGoal, setSelectedGoal }) => {
  const cultures = [
    { id: 'all', name: 'All Cultures', icon: 'Globe', color: 'primary' },
    { id: 'universal', name: 'Universal', icon: 'Heart', color: 'primary' },
    { id: 'eastern', name: 'Eastern Traditions', icon: 'Sun', color: 'amber' },
    { id: 'indigenous', name: 'Indigenous Practices', icon: 'Leaf', color: 'sage' },
    { id: 'african', name: 'African Traditions', icon: 'Users', color: 'accent' },
    { id: 'western', name: 'Western Approaches', icon: 'Brain', color: 'secondary' }
  ];

  const wellnessGoals = [
    { id: 'all', name: 'All Goals', icon: 'Target' },
    { id: 'stress-relief', name: 'Stress Relief', icon: 'Zap' },
    { id: 'mindfulness', name: 'Mindfulness', icon: 'Eye' },
    { id: 'community', name: 'Community Connection', icon: 'Users' },
    { id: 'spiritual', name: 'Spiritual Growth', icon: 'Sparkles' },
    { id: 'healing', name: 'Healing & Recovery', icon: 'Heart' },
    { id: 'balance', name: 'Life Balance', icon: 'Scale' }
  ];

  return (
    <div className="space-y-6">
      {/* Cultural Background Filter */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Globe" size={20} />
          <span>Cultural Background</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {cultures.map((culture) => (
            <button
              key={culture.id}
              onClick={() => setSelectedCulture(culture.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-brand font-medium transition-whisper whisper-ripple ${
                selectedCulture === culture.id
                  ? `bg-${culture.color}/20 text-${culture.color} shadow-gentle`
                  : 'bg-surface/80 text-text-secondary hover:text-text-primary hover:bg-primary/10'
              }`}
            >
              <Icon name={culture.icon} size={16} />
              <span className="text-sm">{culture.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Wellness Goals Filter */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Target" size={20} />
          <span>Wellness Goals</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {wellnessGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-brand font-medium transition-whisper whisper-ripple ${
                selectedGoal === goal.id
                  ? 'bg-plum/20 text-plum shadow-gentle'
                  : 'bg-surface/80 text-text-secondary hover:text-text-primary hover:bg-primary/10'
              }`}
            >
              <Icon name={goal.icon} size={16} />
              <span className="text-sm">{goal.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedCulture !== 'all' || selectedGoal !== 'all') && (
        <div className="bg-primary/10 rounded-brand p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={16} className="text-primary-700" />
              <span className="text-sm font-medium text-primary-700">Active Filters:</span>
            </div>
            <button
              onClick={() => {
                setSelectedCulture('all');
                setSelectedGoal('all');
              }}
              className="text-sm text-primary-700 hover:text-primary-800 font-medium transition-gentle"
            >
              Clear All
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedCulture !== 'all' && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/20 text-primary-700 text-sm rounded-brand-sm">
                <span>{cultures.find(c => c.id === selectedCulture)?.name}</span>
                <button
                  onClick={() => setSelectedCulture('all')}
                  className="hover:text-primary-800 transition-gentle"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
            
            {selectedGoal !== 'all' && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-plum/20 text-plum text-sm rounded-brand-sm">
                <span>{wellnessGoals.find(g => g.id === selectedGoal)?.name}</span>
                <button
                  onClick={() => setSelectedGoal('all')}
                  className="hover:text-plum/80 transition-gentle"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentFilter;