import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const PrivacyOverlay = ({ isVisible }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [privacyLevel, setPrivacyLevel] = useState('maximum');

  const privacyLevels = [
    {
      id: 'maximum',
      name: 'Maximum Privacy',
      description: 'All data processed locally, no external connections',
      icon: 'ShieldCheck',
      color: 'success'
    },
    {
      id: 'balanced',
      name: 'Balanced',
      description: 'Anonymous insights sharing for AI improvement',
      icon: 'Shield',
      color: 'warning'
    },
    {
      id: 'community',
      name: 'Community Insights',
      description: 'Contribute to cultural wellness research (anonymized)',
      icon: 'Users',
      color: 'primary'
    }
  ];

  const dataTypes = [
    {
      name: 'Biometric Data',
      status: 'local',
      description: 'Heart rate, stress levels, activity - never leaves your device',
      icon: 'Activity'
    },
    {
      name: 'Journal Entries',
      status: 'encrypted',
      description: 'End-to-end encrypted, stored locally with your key',
      icon: 'MessageCircle'
    },
    {
      name: 'Cultural Preferences',
      status: 'anonymous',
      description: 'Anonymized patterns help improve cultural AI responses',
      icon: 'Globe'
    },
    {
      name: 'Usage Analytics',
      status: 'optional',
      description: 'Basic app usage to improve experience (opt-in only)',
      icon: 'BarChart3'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'local': return 'success';
      case 'encrypted': return 'primary';
      case 'anonymous': return 'warning';
      case 'optional': return 'secondary';
      default: return 'text-secondary';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 lg:top-24 right-4 z-40 max-w-sm">
      <div className="bg-background/95 backdrop-blur-gentle rounded-brand shadow-gentle-lg border border-primary/20 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={20} className="text-primary-600" />
            <h3 className="font-heading font-semibold text-text-primary">Privacy Active</h3>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-1 rounded-brand-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-gentle"
          >
            <Icon name={showDetails ? 'ChevronUp' : 'ChevronDown'} size={16} />
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-3">
          Demo running in maximum privacy mode. All processing happens locally.
        </p>

        {showDetails && (
          <div className="space-y-4">
            {/* Privacy Level Selector */}
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">Privacy Level</h4>
              <div className="space-y-2">
                {privacyLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setPrivacyLevel(level.id)}
                    className={`w-full flex items-center space-x-2 p-2 rounded-brand-sm text-left transition-gentle ${
                      privacyLevel === level.id
                        ? `bg-${level.color}/20 border border-${level.color}/30`
                        : 'bg-surface hover:bg-surface/80'
                    }`}
                  >
                    <Icon name={level.icon} size={16} className={`text-${level.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-text-primary">{level.name}</div>
                      <div className="text-xs text-text-secondary truncate">{level.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Data Types */}
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">Data Handling</h4>
              <div className="space-y-2">
                {dataTypes.map((dataType, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-surface/50 rounded-brand-sm">
                    <Icon name={dataType.icon} size={14} className="text-text-secondary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-text-primary">{dataType.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full bg-${getStatusColor(dataType.status)}/20 text-${getStatusColor(dataType.status)}`}>
                          {dataType.status}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary mt-1">{dataType.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-primary/20 text-primary-700 rounded-brand-sm text-sm font-medium transition-gentle hover:bg-primary/30">
                View Full Policy
              </button>
              <button className="flex-1 px-3 py-2 bg-surface text-text-secondary rounded-brand-sm text-sm font-medium transition-gentle hover:bg-surface/80">
                Export Data
              </button>
            </div>
          </div>
        )}

        {/* Privacy Indicator */}
        <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-surface">
          <div className="w-2 h-2 rounded-full bg-success animate-empathy-pulse"></div>
          <span className="text-xs text-text-secondary">All data secure & local</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyOverlay;