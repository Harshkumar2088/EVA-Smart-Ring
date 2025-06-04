import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const PrivacyPreferenceCenter = () => {
  const [preferences, setPreferences] = useState({
    dataCollection: {
      biometric: true,
      wellness: true,
      usage: false,
      location: false
    },
    sharing: {
      family: false,
      healthcare: false,
      research: false,
      community: false
    },
    retention: {
      wellness: '1-year',
      biometric: '6-months',
      journal: 'indefinite',
      usage: '3-months'
    },
    cultural: {
      region: 'universal',
      familySharing: false,
      communityInsights: false,
      elderAccess: false
    },
    notifications: {
      dataAccess: true,
      sharing: true,
      deletion: true,
      security: true
    }
  });

  const [activeSection, setActiveSection] = useState('collection');

  const sections = [
    {
      id: 'collection',
      name: 'Data Collection',
      icon: 'Database',
      description: 'Control what data is collected from your devices and interactions'
    },
    {
      id: 'sharing',
      name: 'Data Sharing',
      icon: 'Share2',
      description: 'Manage who can access your wellness data and insights'
    },
    {
      id: 'retention',
      name: 'Data Retention',
      icon: 'Clock',
      description: 'Set how long different types of data are kept'
    },
    {
      id: 'cultural',
      name: 'Cultural Settings',
      icon: 'Globe',
      description: 'Configure cultural privacy preferences and community sharing'
    },
    {
      id: 'notifications',
      name: 'Privacy Alerts',
      icon: 'Bell',
      description: 'Choose when to be notified about data activities'
    }
  ];

  const updatePreference = (section, key, value) => {
    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const renderDataCollection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-text-primary">
        Data Collection Preferences
      </h3>
      <p className="text-text-secondary">
        Choose what types of data you're comfortable sharing with Whisper Ring. 
        You can change these settings at any time.
      </p>

      <div className="space-y-4">
        {[
          {
            key: 'biometric',
            name: 'Biometric Data',
            description: 'Heart rate, sleep patterns, stress indicators from your ring',
            essential: true
          },
          {
            key: 'wellness',
            name: 'Wellness Tracking',
            description: 'Mood entries, meditation sessions, wellness goals',
            essential: true
          },
          {
            key: 'usage',
            name: 'App Usage Analytics',
            description: 'How you use the app to improve user experience',
            essential: false
          },
          {
            key: 'location',
            name: 'Location Data',
            description: 'General location for cultural wellness recommendations',
            essential: false
          }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-background rounded-brand shadow-gentle">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-heading font-semibold text-text-primary">{item.name}</h4>
                {item.essential && (
                  <span className="text-xs bg-primary/20 text-primary-600 px-2 py-1 rounded-brand-sm">
                    Essential
                  </span>
                )}
              </div>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
            <div className="ml-4">
              <button
                onClick={() => updatePreference('dataCollection', item.key, !preferences.dataCollection[item.key])}
                disabled={item.essential}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.dataCollection[item.key] ? 'bg-primary' : 'bg-surface'
                } ${item.essential ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.dataCollection[item.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDataSharing = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-text-primary">
        Data Sharing Controls
      </h3>
      <p className="text-text-secondary">
        Control who can access your wellness data and what level of information they can see.
      </p>

      <div className="space-y-4">
        {[
          {
            key: 'family',
            name: 'Family Members',
            description: 'Share wellness insights with designated family members',
            icon: 'Users'
          },
          {
            key: 'healthcare',
            name: 'Healthcare Providers',
            description: 'Allow healthcare professionals to access relevant data',
            icon: 'Heart'
          },
          {
            key: 'research',
            name: 'Anonymous Research',
            description: 'Contribute anonymized data to wellness research',
            icon: 'BookOpen'
          },
          {
            key: 'community',
            name: 'Community Insights',
            description: 'Share aggregated insights with your cultural community',
            icon: 'Globe'
          }
        ].map((item) => (
          <div key={item.key} className="p-4 bg-background rounded-brand shadow-gentle">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Icon name={item.icon} size={20} className="text-primary-600" />
                <h4 className="font-heading font-semibold text-text-primary">{item.name}</h4>
              </div>
              <button
                onClick={() => updatePreference('sharing', item.key, !preferences.sharing[item.key])}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.sharing[item.key] ? 'bg-primary' : 'bg-surface'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.sharing[item.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-text-secondary">{item.description}</p>
            
            {preferences.sharing[item.key] && (
              <div className="mt-3 p-3 bg-surface rounded-brand-sm">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Settings" size={14} className="text-secondary-600" />
                  <span className="text-text-secondary">Configure sharing details</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDataRetention = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-text-primary">
        Data Retention Settings
      </h3>
      <p className="text-text-secondary">
        Set how long different types of data are stored. Shorter retention periods enhance privacy.
      </p>

      <div className="space-y-4">
        {[
          {
            key: 'wellness',
            name: 'Wellness Data',
            description: 'Mood tracking, meditation sessions, wellness goals',
            options: ['3-months', '6-months', '1-year', '2-years', 'indefinite']
          },
          {
            key: 'biometric',
            name: 'Biometric Data',
            description: 'Heart rate, sleep patterns, stress indicators',
            options: ['1-month', '3-months', '6-months', '1-year']
          },
          {
            key: 'journal',
            name: 'Journal Entries',
            description: 'Personal reflections and cultural insights',
            options: ['6-months', '1-year', '2-years', '5-years', 'indefinite']
          },
          {
            key: 'usage',
            name: 'Usage Analytics',
            description: 'App usage patterns and preferences',
            options: ['1-month', '3-months', '6-months', '1-year']
          }
        ].map((item) => (
          <div key={item.key} className="p-4 bg-background rounded-brand shadow-gentle">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-heading font-semibold text-text-primary mb-1">{item.name}</h4>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
              <select
                value={preferences.retention[item.key]}
                onChange={(e) => updatePreference('retention', item.key, e.target.value)}
                className="px-3 py-2 bg-surface border border-primary/20 rounded-brand-sm text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {item.options.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-text-secondary">
              <Icon name="Clock" size={12} />
              <span>
                Current setting: {preferences.retention[item.key].charAt(0).toUpperCase() + preferences.retention[item.key].slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCulturalSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-text-primary">
        Cultural Privacy Settings
      </h3>
      <p className="text-text-secondary">
        Configure privacy settings that respect your cultural values and community expectations.
      </p>

      <div className="space-y-4">
        <div className="p-4 bg-background rounded-brand shadow-gentle">
          <h4 className="font-heading font-semibold text-text-primary mb-3">Cultural Region</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'universal', name: 'Universal', description: 'Global privacy standards' },
              { value: 'eastern', name: 'Eastern', description: 'Family-oriented privacy' },
              { value: 'indigenous', name: 'Indigenous', description: 'Community sovereignty' }
            ].map((region) => (
              <button
                key={region.value}
                onClick={() => updatePreference('cultural', 'region', region.value)}
                className={`p-3 rounded-brand text-left transition-whisper ${
                  preferences.cultural.region === region.value
                    ? 'bg-primary/20 border-2 border-primary/30' :'bg-surface hover:bg-cream/50'
                }`}
              >
                <div className="font-medium text-text-primary">{region.name}</div>
                <div className="text-sm text-text-secondary">{region.description}</div>
              </button>
            ))}
          </div>
        </div>

        {[
          {
            key: 'familySharing',
            name: 'Family Sharing Protocols',
            description: 'Enable culturally appropriate family data sharing',
            icon: 'Users'
          },
          {
            key: 'communityInsights',
            name: 'Community Wellness Insights',
            description: 'Contribute to community wellness understanding',
            icon: 'Globe'
          },
          {
            key: 'elderAccess',
            name: 'Elder Access Rights',
            description: 'Allow designated elders to access wellness data',
            icon: 'Heart'
          }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-background rounded-brand shadow-gentle">
            <div className="flex items-center space-x-3">
              <Icon name={item.icon} size={20} className="text-primary-600" />
              <div>
                <h4 className="font-heading font-semibold text-text-primary">{item.name}</h4>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            </div>
            <button
              onClick={() => updatePreference('cultural', item.key, !preferences.cultural[item.key])}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                preferences.cultural[item.key] ? 'bg-primary' : 'bg-surface'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.cultural[item.key] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-text-primary">
        Privacy Notification Preferences
      </h3>
      <p className="text-text-secondary">
        Choose when you want to be notified about data activities and privacy events.
      </p>

      <div className="space-y-4">
        {[
          {
            key: 'dataAccess',
            name: 'Data Access Alerts',
            description: 'Notify when someone accesses your data',
            icon: 'Eye'
          },
          {
            key: 'sharing',
            name: 'Sharing Notifications',
            description: 'Alert when data is shared with third parties',
            icon: 'Share2'
          },
          {
            key: 'deletion',
            name: 'Deletion Confirmations',
            description: 'Confirm when data is permanently deleted',
            icon: 'Trash2'
          },
          {
            key: 'security',
            name: 'Security Updates',
            description: 'Important security and privacy updates',
            icon: 'Shield'
          }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-background rounded-brand shadow-gentle">
            <div className="flex items-center space-x-3">
              <Icon name={item.icon} size={20} className="text-primary-600" />
              <div>
                <h4 className="font-heading font-semibold text-text-primary">{item.name}</h4>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            </div>
            <button
              onClick={() => updatePreference('notifications', item.key, !preferences.notifications[item.key])}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                preferences.notifications[item.key] ? 'bg-primary' : 'bg-surface'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'collection':
        return renderDataCollection();
      case 'sharing':
        return renderDataSharing();
      case 'retention':
        return renderDataRetention();
      case 'cultural':
        return renderCulturalSettings();
      case 'notifications':
        return renderNotifications();
      default:
        return renderDataCollection();
    }
  };

  return (
    <div className="space-y-8">
      {/* Section Navigation */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Privacy Preference Center
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
          Experience the granular control you'll have over your wellness data. 
          Every setting can be customized to match your privacy comfort level.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-brand transition-whisper whisper-ripple ${
                activeSection === section.id
                  ? 'bg-primary text-white shadow-gentle'
                  : 'bg-surface text-text-secondary hover:bg-background hover:text-text-primary'
              }`}
            >
              <Icon name={section.icon} size={18} />
              <span className="font-medium text-sm">{section.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Content */}
      <div className="bg-surface/50 rounded-brand p-8">
        {renderActiveSection()}
      </div>

      {/* Save Preferences */}
      <div className="bg-background rounded-brand p-6 shadow-gentle">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              Save Your Preferences
            </h3>
            <p className="text-sm text-text-secondary">
              Your privacy settings will be applied immediately and can be changed at any time.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-6 py-3 bg-surface text-text-secondary rounded-brand transition-whisper hover:bg-cream/50">
              Reset to Defaults
            </button>
            <button className="px-6 py-3 bg-primary text-white rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPreferenceCenter;