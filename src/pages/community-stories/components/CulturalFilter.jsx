import React from 'react';
import Icon from 'components/AppIcon';

const CulturalFilter = ({ 
  culturalFilters, 
  categoryFilters, 
  selectedFilter, 
  selectedCategory, 
  onFilterChange, 
  onCategoryChange 
}) => {
  return (
    <section className="py-8 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cultural Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
            Filter by Cultural Heritage
          </h3>
          <div className="flex flex-wrap gap-3">
            {culturalFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-brand transition-whisper whisper-ripple ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-white shadow-gentle'
                    : 'bg-background text-text-secondary hover:text-text-primary hover:bg-primary/10'
                }`}
              >
                <Icon name={filter.icon} size={16} />
                <span className="text-sm font-medium">{filter.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedFilter === filter.id
                    ? 'bg-white/20 text-white' :'bg-primary/10 text-primary-700'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
            Filter by Story Type
          </h3>
          <div className="flex flex-wrap gap-3">
            {categoryFilters.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-brand transition-whisper whisper-ripple ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white shadow-gentle'
                    : 'bg-background text-text-secondary hover:text-text-primary hover:bg-secondary/10'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedFilter !== 'all' || selectedCategory !== 'all') && (
          <div className="mt-6 p-4 bg-cream/50 rounded-brand">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Filter" size={16} className="text-text-secondary" />
                <span className="text-sm font-medium text-text-secondary">Active Filters:</span>
                <div className="flex space-x-2">
                  {selectedFilter !== 'all' && (
                    <span className="px-2 py-1 bg-primary/20 text-primary-700 text-xs rounded-full">
                      {culturalFilters.find(f => f.id === selectedFilter)?.name}
                    </span>
                  )}
                  {selectedCategory !== 'all' && (
                    <span className="px-2 py-1 bg-secondary/20 text-secondary-700 text-xs rounded-full">
                      {categoryFilters.find(c => c.id === selectedCategory)?.name}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  onFilterChange('all');
                  onCategoryChange('all');
                }}
                className="text-sm text-text-secondary hover:text-text-primary transition-gentle"
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CulturalFilter;