import React from 'react';
import Icon from 'components/AppIcon';

const SearchFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  filterMood, 
  setFilterMood, 
  filterDate, 
  setFilterDate 
}) => {
  return (
    <div className="bg-surface rounded-organic p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Icon 
            name="Search" 
            size={20} 
            color="#A0AEC0" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2" 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your journal entries..."
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
          />
        </div>

        {/* Mood Filter */}
        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={18} color="#7B9E87" />
          <select
            value={filterMood}
            onChange={(e) => setFilterMood(e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
          >
            <option value="all">All Moods</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="challenging">Challenging</option>
          </select>
        </div>

        {/* Date Filter */}
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={18} color="#4A90A4" />
          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>

        {/* Clear Filters */}
        {(searchQuery || filterMood !== 'all' || filterDate !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterMood('all');
              setFilterDate('all');
            }}
            className="flex items-center space-x-2 px-3 py-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-organic gentle-transition haptic-feedback"
          >
            <Icon name="X" size={16} />
            <span className="text-sm">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;