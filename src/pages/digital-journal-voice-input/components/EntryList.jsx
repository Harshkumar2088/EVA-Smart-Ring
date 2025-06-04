import React from 'react';
import Icon from 'components/AppIcon';

const EntryList = ({ entries, onEntryClick }) => {
  const formatDate = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'positive': return '#68A085';
      case 'neutral': return '#7B9E87';
      case 'challenging': return '#D69E2E';
      default: return '#A0AEC0';
    }
  };

  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-surface rounded-full flex items-center justify-center">
          <Icon name="BookOpen" size={24} color="#A0AEC0" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
          No entries found
        </h3>
        <p className="text-text-secondary">
          Try adjusting your search or filters, or create your first journal entry.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          onClick={() => onEntryClick(entry)}
          className="bg-background rounded-organic shadow-soft-elevation-1 p-6 gentle-transition haptic-feedback hover:shadow-soft-elevation-2 cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: entry.emotion.color + '20' }}
              >
                <Icon name={entry.emotion.icon} size={20} color={entry.emotion.color} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-text-primary">
                  {entry.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <span>{formatDate(entry.date)}</span>
                  <span>•</span>
                  <span>{entry.wordCount} words</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getMoodColor(entry.mood) }}
                    ></div>
                    <span className="capitalize">{entry.mood}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="p-2 text-text-tertiary hover:text-text-secondary gentle-transition haptic-feedback rounded-organic hover:bg-surface">
              <Icon name="MoreHorizontal" size={18} />
            </button>
          </div>

          <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {entry.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span
                className="px-2 py-1 text-xs font-medium rounded-organic"
                style={{ 
                  backgroundColor: entry.emotion.color + '20',
                  color: entry.emotion.color
                }}
              >
                {entry.emotion.name}
              </span>
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-surface text-text-secondary rounded-organic"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-1 text-text-tertiary hover:text-text-secondary gentle-transition haptic-feedback">
                <Icon name="Share2" size={14} />
              </button>
              <button className="p-1 text-text-tertiary hover:text-text-secondary gentle-transition haptic-feedback">
                <Icon name="Bookmark" size={14} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntryList;