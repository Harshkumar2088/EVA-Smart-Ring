import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import MemoryVaultVisualizer from './components/MemoryVaultVisualizer';
import DataJourneyTimeline from './components/DataJourneyTimeline';
import CulturalPrivacySection from './components/CulturalPrivacySection';
import TransparencyReports from './components/TransparencyReports';
import PrivacyPreferenceCenter from './components/PrivacyPreferenceCenter';
import DataDeletionSimulator from './components/DataDeletionSimulator';
import EncryptionVisualizer from './components/EncryptionVisualizer';

const PrivacySanctuary = () => {
  const [activeSection, setActiveSection] = useState('vault');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [culturalRegion, setCulturalRegion] = useState('universal');

  const navigationSections = [
    { id: 'vault', name: 'Memory Vault', icon: 'Shield', description: 'Interactive 3D data visualization' },
    { id: 'journey', name: 'Data Journey', icon: 'Route', description: 'Complete lifecycle transparency' },
    // { id: 'cultural', name: 'Cultural Privacy', icon: 'Globe', description: 'Regional privacy respect' },
    { id: 'reports', name: 'Transparency Reports', icon: 'FileText', description: 'Real-time security audits' },
    { id: 'preferences', name: 'Preference Center', icon: 'Settings', description: 'Granular data control' },
    { id: 'deletion', name: 'Deletion Simulator', icon: 'Trash2', description: 'Experience data removal' },
    { id: 'encryption', name: 'Encryption Strength', icon: 'Lock', description: 'Security visualization' }
  ];

  const complianceBadges = [
    // { name: 'GDPR Compliant', icon: 'CheckCircle', color: 'text-success' },
    // { name: 'CCPA Certified', icon: 'Shield', color: 'text-primary-600' },
    // { name: 'SOC 2 Type II', icon: 'Award', color: 'text-secondary-600' },
    // { name: 'ISO 27001', icon: 'Star', color: 'text-amber' },
    // { name: 'HIPAA Ready', icon: 'Heart', color: 'text-accent' }
  ];

  const downloadableGuides = [
    // { 
    //   title: 'Privacy Guide - English', 
    //   description: 'Comprehensive privacy documentation',
    //   language: 'English',
    //   size: '2.4 MB',
    //   icon: 'Download'
    // },
    // { 
    //   title: 'Privacy Guide - Español', 
    //   description: 'Documentación completa de privacidad',
    //   language: 'Spanish',
    //   size: '2.6 MB',
    //   icon: 'Download'
    // },
    // { 
    //   title: 'Privacy Guide - 中文', 
    //   description: '全面的隐私文档',
    //   language: 'Chinese',
    //   size: '2.8 MB',
    //   icon: 'Download'
    // },
    // { 
    //   title: 'Privacy Guide - العربية', 
    //   description: 'وثائق الخصوصية الشاملة',
    //   language: 'Arabic',
    //   size: '2.5 MB',
    //   icon: 'Download'
    // }
  ];

  const securityCertifications = [
    {
      name: 'Veracode Security Audit',
      status: 'Passed',
      date: '2024-01-15',
      score: '98/100',
      description: 'Third-party security code analysis'
    },
    {
      name: 'Penetration Testing',
      status: 'Passed',
      date: '2024-01-10',
      score: 'No Critical Issues',
      description: 'External security assessment'
    },
    {
      name: 'Data Encryption Audit',
      status: 'Certified',
      date: '2024-01-08',
      score: 'AES-256',
      description: 'Encryption strength verification'
    }
  ];

  useEffect(() => {
    // Voice navigation setup
    if (isVoiceEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`Welcome to the Privacy Sanctuary. You are currently viewing the ${navigationSections.find(s => s.id === activeSection)?.name} section.`);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [activeSection, isVoiceEnabled]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to section
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleVoiceNavigation = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (!isVoiceEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Voice navigation enabled. Use the navigation menu to explore different sections.');
      window.speechSynthesis.speak(utterance);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'vault':
        return <MemoryVaultVisualizer culturalRegion={culturalRegion} />;
      case 'journey':
        return <DataJourneyTimeline />;
      case 'cultural':
        return <CulturalPrivacySection culturalRegion={culturalRegion} setCulturalRegion={setCulturalRegion} />;
      case 'reports':
        return <TransparencyReports certifications={securityCertifications} />;
      case 'preferences':
        return <PrivacyPreferenceCenter />;
      case 'deletion':
        return <DataDeletionSimulator />;
      case 'encryption':
        return <EncryptionVisualizer />;
      default:
        return <MemoryVaultVisualizer culturalRegion={culturalRegion} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-background to-primary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center breathing">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <div className="w-4 h-4 bg-accent rounded-full animate-empathy-pulse"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-semibold text-text-primary mb-6">
              Privacy Sanctuary
              <span className="block text-2xl lg:text-3xl text-primary-600 mt-2">
                Your Memory Vault
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Experience complete transparency in how your wellness data is protected, stored, and controlled. 
              Our Memory Vault gives you unprecedented visibility into your digital privacy.
            </p>

            {/* Voice Navigation Toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={toggleVoiceNavigation}
                className={`flex items-center space-x-2 px-6 py-3 rounded-brand transition-whisper whisper-ripple ${
                  isVoiceEnabled 
                    ? 'bg-primary text-white shadow-gentle' 
                    : 'bg-surface text-text-secondary hover:bg-primary/10'
                }`}
              >
                <Icon name={isVoiceEnabled ? 'VolumeX' : 'Volume2'} size={20} />
                <span className="font-medium">
                  {isVoiceEnabled ? 'Disable' : 'Enable'} Voice Navigation
                </span>
              </button>
              
              <div className="text-sm text-text-secondary">
                Navigate with voice commands for enhanced accessibility
              </div>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {complianceBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-background/80 backdrop-blur-gentle rounded-brand shadow-gentle transition-whisper hover:shadow-gentle-lg"
              >
                <Icon name={badge.icon} size={16} className={badge.color} />
                <span className="text-sm font-medium text-text-primary">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-gentle border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-2 lg:space-x-4">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-3 rounded-brand transition-whisper whisper-ripple ${
                  activeSection === section.id
                    ? 'bg-primary/20 text-primary-700 shadow-gentle'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={section.icon} size={18} />
                <div className="text-left">
                  <div className="font-medium text-sm">{section.name}</div>
                  <div className="text-xs opacity-80 hidden lg:block">{section.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id={`section-${activeSection}`} className="transition-whisper">
            {renderActiveSection()}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      {/* <section className="py-16 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
              Privacy Documentation
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Download comprehensive privacy guides in your preferred language. 
              All documents are available offline for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-background rounded-brand p-6 shadow-gentle transition-whisper hover:shadow-gentle-lg whisper-ripple"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon name={guide.icon} size={24} className="text-primary-600" />
                  <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded-brand-sm">
                    {guide.size}
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  {guide.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary-600 font-medium">
                    {guide.language}
                  </span>
                  <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-gentle">
                    <Icon name="Download" size={16} />
                    <span className="text-sm font-medium">Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trust & Security Footer */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
              Built on Trust, Secured by Design
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Your privacy isn't just a feature—it's the foundation of everything we build. 
              Experience technology that respects your cultural values and personal boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-sage mx-auto rounded-full flex items-center justify-center mb-4 breathing">
                <Icon name="UserCheck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                User-Controlled
              </h3>
              <p className="text-text-secondary">
                You decide what data to share, when to share it, and how long to keep it. 
                Complete control in your hands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary mx-auto rounded-full flex items-center justify-center mb-4 breathing">
                <Icon name="Globe" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                Culturally Aware
              </h3>
              <p className="text-text-secondary">
                Privacy expectations vary by culture. Our system adapts to respect 
                regional values and legal requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-plum mx-auto rounded-full flex items-center justify-center mb-4 breathing">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                Real-Time Transparency
              </h3>
              <p className="text-text-secondary">
                Live updates on data usage, security status, and privacy controls. 
                No hidden processes or unclear policies.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-background/80 backdrop-blur-gentle rounded-brand p-8 shadow-gentle max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                Ready to Experience True Privacy?
              </h3>
              <p className="text-text-secondary mb-6">
                Join thousands who've discovered wellness technology that truly respects their privacy and cultural values.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/homepage-ai-wellness-platform"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105"
                >
                  <Icon name="ArrowLeft" size={20} />
                  <span>Back to Home</span>
                </Link>

                <a
        href="mailto:mdoffice@dkgrouplabs.com"
        className="flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-100"
      >
        <Icon name="Mail" size={18} />
        <span>Email Us</span>
      </a>                
                {/* <Link
                  to="/how-it-works-ai-companion-demo"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105"
                >
                  <span>See How It Works</span>
                  <Icon name="ArrowRight" size={20} />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacySanctuary;