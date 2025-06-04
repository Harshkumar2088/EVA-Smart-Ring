import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const MemoryVaultVisualizer = ({ culturalRegion }) => {
  const [selectedDataType, setSelectedDataType] = useState('wellness');
  const [vaultView, setVaultView] = useState('overview');
  const [animationState, setAnimationState] = useState('idle');

  const dataTypes = [
    {
      id: 'wellness',
      name: 'Wellness Data',
      icon: 'Heart',
      color: 'from-accent to-plum',
      description: 'Mood tracking, meditation sessions, cultural wellness practices',
      protectionLevel: 'Maximum',
      encryptionType: 'AES-256 + Cultural Privacy Layer',
      examples: ['Daily mood entries', 'Meditation duration', 'Cultural wellness rituals', 'Sleep patterns']
    },
    {
      id: 'biometric',
      name: 'Biometric Data',
      icon: 'Activity',
      color: 'from-success to-sage',
      description: 'Heart rate, sleep patterns, stress indicators from your ring',
      protectionLevel: 'Maximum',
      encryptionType: 'End-to-End Encrypted',
      examples: ['Heart rate variability', 'Sleep stages', 'Stress indicators', 'Activity levels']
    },
    {
      id: 'journal',
      name: 'Journal Entries',
      icon: 'BookOpen',
      color: 'from-primary to-secondary',
      description: 'Personal reflections, cultural insights, wellness journey notes',
      protectionLevel: 'Ultra-Secure',
      encryptionType: 'Zero-Knowledge Architecture',
      examples: ['Daily reflections', 'Cultural insights', 'Wellness goals', 'Personal thoughts']
    },
    {
      id: 'preferences',
      name: 'Cultural Preferences',
      icon: 'Globe',
      color: 'from-amber to-warning',
      description: 'Cultural background, wellness traditions, language preferences',
      protectionLevel: 'Culturally Protected',
      encryptionType: 'Regional Compliance + Cultural Sensitivity',
      examples: ['Cultural background', 'Wellness traditions', 'Language settings', 'Regional preferences']
    }
  ];

  const vaultLayers = [
    {
      name: 'User Interface Layer',
      description: 'What you see and interact with',
      security: 'Encrypted transmission',
      color: 'bg-primary/20'
    },
    {
      name: 'Application Layer',
      description: 'Processing and AI analysis',
      security: 'Zero-knowledge processing',
      color: 'bg-secondary/20'
    },
    {
      name: 'Encryption Layer',
      description: 'Data transformation and protection',
      security: 'AES-256 encryption',
      color: 'bg-accent/20'
    },
    {
      name: 'Storage Layer',
      description: 'Secure data persistence',
      security: 'Distributed encrypted storage',
      color: 'bg-success/20'
    },
    {
      name: 'Cultural Privacy Layer',
      description: 'Regional compliance and cultural respect',
      security: 'Cultural sensitivity protocols',
      color: 'bg-amber/20'
    }
  ];

  const selectedData = dataTypes.find(type => type.id === selectedDataType);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => prev === 'idle' ? 'processing' : 'idle');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDataTypeSelect = (typeId) => {
    setSelectedDataType(typeId);
    setAnimationState('processing');
    setTimeout(() => setAnimationState('idle'), 1000);
  };

  return (
    <div className="space-y-8">
      {/* 3D Vault Visualization */}
      <div className="bg-gradient-to-br from-cream/50 to-background rounded-brand p-8 shadow-gentle">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
            Interactive Memory Vault
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore how your data is protected through multiple layers of security. 
            Click on different data types to see their specific protection mechanisms.
          </p>
        </div>

        {/* Vault Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* 3D Vault Representation */}
          <div className="relative h-96 bg-gradient-to-br from-surface to-cream rounded-brand overflow-hidden">
            {/* Vault Layers */}
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2">
              {vaultLayers.map((layer, index) => (
                <div
                  key={index}
                  className={`w-full max-w-sm h-12 ${layer.color} rounded-brand-sm border border-white/20 flex items-center justify-center transition-whisper ${
                    animationState === 'processing' ? 'animate-empathy-pulse' : ''
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateX(${index * 5}deg) translateZ(${index * 10}px)`,
                    zIndex: vaultLayers.length - index
                  }}
                >
                  <span className="text-sm font-medium text-text-primary">
                    {layer.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Data Flow Animation */}
            <div className="absolute top-4 right-4">
              <div className={`w-4 h-4 bg-primary rounded-full ${animationState === 'processing' ? 'animate-empathy-pulse' : 'breathing'}`}></div>
            </div>

            {/* Security Indicators */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <div className="flex items-center space-x-1 text-success">
                <Icon name="Shield" size={16} />
                <span className="text-xs font-medium">Encrypted</span>
              </div>
              <div className="flex items-center space-x-1 text-primary-600">
                <Icon name="Lock" size={16} />
                <span className="text-xs font-medium">Secured</span>
              </div>
              <div className="flex items-center space-x-1 text-secondary-600">
                <Icon name="Eye" size={16} />
                <span className="text-xs font-medium">Transparent</span>
              </div>
            </div>
          </div>

          {/* Data Type Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {dataTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleDataTypeSelect(type.id)}
                className={`p-4 rounded-brand transition-whisper whisper-ripple ${
                  selectedDataType === type.id
                    ? 'bg-background shadow-gentle-lg border-2 border-primary/30'
                    : 'bg-surface hover:bg-background hover:shadow-gentle'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mx-auto mb-3 ${
                  selectedDataType === type.id ? 'breathing' : ''
                }`}>
                  <Icon name={type.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary text-sm mb-1">
                  {type.name}
                </h3>
                <p className="text-xs text-text-secondary">
                  {type.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Data Type Details */}
      {selectedData && (
        <div className="bg-background rounded-brand p-8 shadow-gentle">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Protection Details */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedData.color} rounded-full flex items-center justify-center breathing`}>
                  <Icon name={selectedData.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-text-primary">
                    {selectedData.name}
                  </h3>
                  <p className="text-text-secondary">{selectedData.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface rounded-brand-sm">
                  <span className="font-medium text-text-primary">Protection Level</span>
                  <span className="text-success font-semibold">{selectedData.protectionLevel}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-surface rounded-brand-sm">
                  <span className="font-medium text-text-primary">Encryption Type</span>
                  <span className="text-primary-600 font-semibold text-sm">{selectedData.encryptionType}</span>
                </div>

                <div className="p-4 bg-cream/50 rounded-brand-sm">
                  <h4 className="font-heading font-semibold text-text-primary mb-2">
                    Cultural Privacy Considerations
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {culturalRegion === 'eastern' && 'Respects Eastern privacy values with family-oriented data sharing controls and ancestral wisdom integration.'}
                    {culturalRegion === 'indigenous' && 'Honors Indigenous data sovereignty principles with community-controlled sharing and traditional knowledge protection.'}
                    {culturalRegion === 'universal' && 'Adapts to global privacy standards while respecting individual cultural preferences and regional requirements.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Data Examples */}
            <div>
              <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
                What's Protected
              </h4>
              <div className="space-y-3">
                {selectedData.examples.map((example, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-surface rounded-brand-sm transition-whisper hover:bg-background"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-primary">{example}</span>
                    <div className="ml-auto">
                      <Icon name="Lock" size={16} className="text-success" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Real-time Status */}
              <div className="mt-6 p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-brand">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-empathy-pulse"></div>
                  <span className="font-heading font-semibold text-text-primary">Live Status</span>
                </div>
                <p className="text-sm text-text-secondary">
                  All {selectedData.name.toLowerCase()} is currently encrypted and secure. 
                  Last security check: {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vault Controls */}
      <div className="bg-surface/50 rounded-brand p-6">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Vault Controls
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="Download" size={20} className="text-primary-600" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Export Data</div>
              <div className="text-sm text-text-secondary">Download your vault contents</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="Settings" size={20} className="text-secondary-600" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Privacy Settings</div>
              <div className="text-sm text-text-secondary">Customize protection levels</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="Trash2" size={20} className="text-error" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Delete Data</div>
              <div className="text-sm text-text-secondary">Permanent data removal</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryVaultVisualizer;