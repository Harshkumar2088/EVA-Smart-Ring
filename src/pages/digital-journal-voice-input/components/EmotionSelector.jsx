import React from 'react';
import Icon from 'components/AppIcon';

const EmotionSelector = ({ emotions, selectedEmotion, setSelectedEmotion }) => {
  return (
    <div className="p-6 bg-surface rounded-organic">
      <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
        How are you feeling?
      </h3>
      <p className="text-sm text-text-secondary mb-6">
        Select an emotion that best describes your current state
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {emotions.map((emotion) => (
          <button
            key={emotion.name}
            onClick={() => setSelectedEmotion(emotion)}
            className={`flex items-center space-x-3 p-3 rounded-organic gentle-transition haptic-feedback ${
              selectedEmotion?.name === emotion.name
                ? 'bg-background border-2 shadow-soft-elevation-1'
                : 'bg-surface-hover hover:bg-background border-2 border-transparent'
            }`}
            style={{
              borderColor: selectedEmotion?.name === emotion.name ? emotion.color : 'transparent'
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: emotion.color + '20' }}
            >
              <Icon name={emotion.icon} size={16} color={emotion.color} />
            </div>
            <span className="font-body font-medium text-text-primary text-sm">
              {emotion.name}
            </span>
          </button>
        ))}
      </div>
      
      {selectedEmotion && (
        <div className="mt-4 p-3 bg-background rounded-organic">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} color="#68A085" />
            <span className="text-sm text-text-secondary">
              Selected: <span className="font-medium text-text-primary">{selectedEmotion.name}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionSelector;