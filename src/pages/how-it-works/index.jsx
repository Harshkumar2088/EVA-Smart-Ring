import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import GentleMonitoring from './components/GentleMonitoring';
import EmpatheticJournaling from './components/EmpatheticJournaling';
import WhisperInsights from './components/WhisperInsights';
import TechnicalDetails from './components/TechnicalDetails';
import PrivacyOverlay from './components/PrivacyOverlay';

const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState('monitoring');
  const [culturalLens, setCulturalLens] = useState('universal');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const sections = [
    {
      id: 'monitoring',
      title: 'Gentle Monitoring',
      icon: 'Activity',
      description: 'Real-time biometric visualization with cultural context',
      color: 'primary'
    },
    {
      id: 'journaling',
      title: 'Empathetic Journaling',
      icon: 'MessageCircle',
      description: 'AI conversation with culturally-aware responses',
      color: 'secondary'
    },
    {
      id: 'insights',
      title: 'Whisper Insights',
      icon: 'Lightbulb',
      description: 'Personalized wellness recommendations',
      color: 'accent'
    }
  ];

  const culturalLenses = [
    { id: 'universal', name: 'Universal', icon: 'Globe', color: 'primary' },
    { id: 'eastern', name: 'Eastern', icon: 'Sun', color: 'amber' },
    { id: 'indigenous', name: 'Indigenous', icon: 'Leaf', color: 'sage' },
    { id: 'western', name: 'Western', icon: 'Mountain', color: 'secondary' }
  ];

  const demoStats = [
    { label: 'Cultural Adaptations', value: '127+', icon: 'Globe' },
    { label: 'Privacy Layers', value: '7', icon: 'Shield' },
    { label: 'Wellness Practices', value: '89', icon: 'Heart' },
    { label: 'AI Transparency', value: '100%', icon: 'Eye' }
  ];

  useEffect(() => {
    // Simulate offline capability demonstration
    const offlineTimer = setTimeout(() => {
      setIsOfflineMode(true);
      setTimeout(() => setIsOfflineMode(false), 3000);
    }, 10000);

    return () => clearTimeout(offlineTimer);
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    // Add gentle transition animation
    const container = document.getElementById('demo-container');
    if (container) {
      container.classList.add('breathing');
      setTimeout(() => {
        container.classList.remove('breathing');
      }, 600);
    }
  };

  const handleCulturalLensChange = (lensId) => {
    setCulturalLens(lensId);
    // Add cultural celebration animation
    const culturalIndicator = document.getElementById('cultural-indicator');
    if (culturalIndicator) {
      culturalIndicator.classList.add('cultural-celebration');
      setTimeout(() => {
        culturalIndicator.classList.remove('cultural-celebration');
      }, 800);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'monitoring':
        return <GentleMonitoring culturalLens={culturalLens} />;
      case 'journaling':
        return <EmpatheticJournaling culturalLens={culturalLens} />;
      case 'insights':
        return <WhisperInsights culturalLens={culturalLens} />;
      default:
        return <GentleMonitoring culturalLens={culturalLens} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Privacy Overlay */}
      <PrivacyOverlay isVisible={true} />

      {/* Offline Mode Indicator */}
      {isOfflineMode && (
        <div className="fixed top-20 lg:top-24 left-1/2 transform -translate-x-1/2 z-50 bg-success text-white px-6 py-3 rounded-brand shadow-gentle-lg breathing">
          <div className="flex items-center space-x-2">
            <Icon name="Wifi" size={20} />
            <span className="font-medium">Demo works offline - Privacy First!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="Sparkles" size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Interactive Demo Experience</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 breathing">
              How Whisper Ring
              <span className="block text-plum">Gently Guides You</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Experience the gentle power of culturally-aware AI wellness technology. 
              See how our empathetic companion adapts to your unique background and needs.
            </p>

            {/* Demo Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {demoStats.map((stat, index) => (
                <div key={index} className="bg-surface/80 backdrop-blur-gentle rounded-brand p-4 shadow-gentle whisper-ripple">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={stat.icon} size={24} className="text-primary-600" />
                  </div>
                  <div className="text-2xl font-heading font-semibold text-text-primary">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Lens Selector */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-3">
                <div 
                  id="cultural-indicator"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center breathing"
                >
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary">Cultural Lens</h3>
                  <p className="text-sm text-text-secondary">See how AI adapts to different cultural contexts</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {culturalLenses.map((lens) => (
                  <button
                    key={lens.id}
                    onClick={() => handleCulturalLensChange(lens.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-brand-sm transition-cultural whisper-ripple ${
                      culturalLens === lens.id
                        ? `bg-${lens.color}/20 text-${lens.color} shadow-gentle`
                        : 'bg-background text-text-secondary hover:text-text-primary hover:bg-primary/10'
                    }`}
                  >
                    <Icon name={lens.icon} size={16} />
                    <span className="font-medium text-sm">{lens.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`p-6 rounded-brand text-left transition-whisper whisper-ripple ${
                  activeSection === section.id
                    ? `bg-${section.color}/20 shadow-gentle-lg border-2 border-${section.color}/30`
                    : 'bg-surface/80 backdrop-blur-gentle shadow-gentle hover:shadow-gentle-lg'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-full bg-${section.color}/20 flex items-center justify-center`}>
                    <Icon 
                      name={section.icon} 
                      size={20} 
                      className={`text-${section.color} ${activeSection === section.id ? 'animate-empathy-pulse' : ''}`}
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary">{section.title}</h3>
                </div>
                <p className="text-sm text-text-secondary">{section.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Container */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div 
            id="demo-container"
            className="bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle-lg overflow-hidden"
          >
            {renderActiveSection()}
          </div>
        </div>
      </section>

      {/* Technical Details Toggle */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-background border-2 border-primary/20 text-primary-700 font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10 hover:shadow-gentle"
          >
            <Icon name={showTechnicalDetails ? 'EyeOff' : 'Eye'} size={20} />
            <span>{showTechnicalDetails ? 'Hide' : 'Peek Behind the Curtain'}</span>
          </button>
        </div>
      </section>

      {/* Technical Details */}
      {showTechnicalDetails && (
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <TechnicalDetails activeSection={activeSection} culturalLens={culturalLens} />
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-plum/10 to-accent/10 rounded-brand p-8 lg:p-12 shadow-gentle-lg">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-text-primary mb-6">
              Ready to Experience
              <span className="block text-plum">Gentle AI Wellness?</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands who are discovering a new way to approach wellness - 
              one that honors your culture, protects your privacy, and whispers wisdom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-plum text-white font-heading font-semibold rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105 breathing">
                Join the Whisper Community
              </button>
              
              <Link
                to="/privacy-sanctuary-memory-vault"
                className="inline-flex items-center space-x-2 px-6 py-3 text-primary-700 hover:text-primary-800 hover:bg-primary/10 rounded-brand-sm transition-gentle"
              >
                <Icon name="Shield" size={20} />
                <span>Explore Privacy First</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="mt-8 pt-8 border-t border-primary/10">
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/wellness-resource-center-cultural-education"
                  className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-gentle"
                >
                  <Icon name="Heart" size={16} />
                  <span className="text-sm">Wellness Resources</span>
                </Link>
                
                <Link
                  to="/community-stories-cultural-journeys"
                  className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-gentle"
                >
                  <Icon name="Users" size={16} />
                  <span className="text-sm">Community Stories</span>
                </Link>
                
                <Link
                  to="/developer-research-hub-innovation-roadmap"
                  className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-gentle"
                >
                  <Icon name="BookOpen" size={16} />
                  <span className="text-sm">Research Hub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;