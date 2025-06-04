import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const DataJourneyTimeline = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const journeyStages = [
    {
      id: 'collection',
      title: 'Data Collection',
      icon: 'Smartphone',
      status: 'active',
      description: 'Your wellness data is collected from your ring and app interactions',
      details: `When you wear your Whisper Ring or use our app, data is collected with your explicit consent. Every piece of information is immediately tagged with your privacy preferences and cultural settings.

We collect only what's necessary for your wellness journey:
• Biometric data from your ring (heart rate, sleep, stress)
• Journal entries and mood tracking
• Cultural wellness preferences
• App usage patterns for personalization

All collection happens locally on your device first, with encryption applied before any transmission.`,
      timestamp: 'Continuous',location: 'Your Device',security: 'Local encryption before transmission'
    },
    {
      id: 'encryption',title: 'Encryption & Processing',icon: 'Lock',status: 'active',description: 'Data is encrypted using military-grade security before processing',
      details: `Your data undergoes multiple layers of encryption:

1. Device-level encryption using your personal key
2. Transport encryption during transmission
3. Server-side encryption with AES-256
4. Cultural privacy layer based on your regional settings

Our AI processes encrypted data without ever seeing the raw information. This zero-knowledge architecture means even our systems can't access your personal details without your explicit permission.`,
      timestamp: 'Immediate',
      location: 'Secure Processing Centers',
      security: 'AES-256 + Zero-knowledge processing'
    },
    {
      id: 'analysis',
      title: 'AI Analysis',
      icon: 'Brain',
      status: 'active',
      description: 'Culturally-aware AI provides personalized wellness insights',
      details: `Our AI companion analyzes your encrypted data to provide personalized wellness insights:

• Pattern recognition in your wellness journey
• Cultural context integration for relevant advice
• Personalized recommendations based on your background
• Stress and mood trend analysis
• Sleep and activity optimization suggestions

The AI learns your preferences while maintaining complete privacy. All analysis happens in secure, isolated environments with no human access to your personal data.`,
      timestamp: 'Real-time',
      location: 'Encrypted AI Environment',
      security: 'Isolated processing with cultural privacy protocols'
    },
    {
      id: 'storage',
      title: 'Secure Storage',
      icon: 'Database',
      status: 'active',
      description: 'Encrypted data is stored in geographically distributed secure vaults',
      details: `Your data is stored across multiple secure locations:

• Geographically distributed data centers
• Each piece of data is fragmented and encrypted separately
• No single location contains your complete profile
• Regular security audits and penetration testing
• Compliance with regional data protection laws

Storage locations are chosen based on your cultural and legal preferences. You can specify which regions your data can be stored in, ensuring compliance with your personal and cultural values.`,
      timestamp: 'Ongoing',
      location: 'Global Secure Network',
      security: 'Distributed encryption with regional compliance'
    },
    {
      id: 'access',
      title: 'Controlled Access',
      icon: 'Key',
      status: 'active',
      description: 'You control who can access your data and when',
      details: `Complete control over your data access:

• Granular permissions for different data types
• Time-limited access grants
• Cultural sharing preferences (family, community, individual)
• Emergency access protocols you define
• Real-time access monitoring and alerts

You can share specific wellness insights with family members, healthcare providers, or wellness coaches while keeping other data completely private. All access is logged and transparent.`,
      timestamp: 'User-controlled',
      location: 'Your Privacy Dashboard',
      security: 'Multi-factor authentication with cultural considerations'
    },
    {
      id: 'deletion',
      title: 'Data Deletion',
      icon: 'Trash2',
      status: 'available',
      description: 'Complete data removal when you choose to delete',
      details: `When you decide to delete your data:

• Immediate removal from all active systems
• Secure deletion from backup systems within 30 days
• Cryptographic proof of deletion provided
• No data remnants in any system
• Cultural ceremony options for meaningful closure

Our deletion process is irreversible and complete. We provide you with cryptographic proof that your data has been permanently removed from all systems, respecting cultural practices around data lifecycle management.`,
      timestamp: 'User-initiated',
      location: 'All Systems',
      security: 'Cryptographically verified deletion'
    }
  ];

  const currentStage = journeyStages[selectedStage];

  return (
    <div className="space-y-8">
      {/* Timeline Header */}
      <div className="text-center">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Your Data Journey
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Follow your wellness data through every step of its lifecycle. 
          From collection to deletion, you maintain complete control and transparency.
        </p>
      </div>

      {/* Interactive Timeline */}
      <div className="bg-background rounded-brand p-8 shadow-gentle">
        {/* Timeline Navigation */}
        <div className="relative mb-8">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-primary/20"></div>
          <div 
            className="absolute top-6 left-0 h-0.5 bg-primary transition-all duration-1000"
            style={{ width: `${(selectedStage / (journeyStages.length - 1)) * 100}%` }}
          ></div>
          
          <div className="relative flex justify-between">
            {journeyStages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(index)}
                className={`flex flex-col items-center space-y-2 transition-whisper whisper-ripple ${
                  selectedStage === index ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-whisper ${
                  selectedStage === index
                    ? 'bg-primary text-white shadow-gentle-lg breathing'
                    : selectedStage > index
                    ? 'bg-success text-white' :'bg-surface text-text-secondary hover:bg-primary/10'
                }`}>
                  <Icon name={stage.icon} size={20} />
                </div>
                <span className={`text-sm font-medium transition-whisper ${
                  selectedStage === index ? 'text-primary-700' : 'text-text-secondary'
                }`}>
                  {stage.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stage Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stage Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                currentStage.status === 'active' ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-gradient-to-br from-surface to-cream'
              } breathing`}>
                <Icon name={currentStage.icon} size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-text-primary">
                  {currentStage.title}
                </h3>
                <p className="text-text-secondary">{currentStage.description}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-text-primary">
              <p className="whitespace-pre-line">{currentStage.details}</p>
            </div>
          </div>

          {/* Stage Metadata */}
          <div className="space-y-4">
            <div className="bg-surface rounded-brand p-4">
              <h4 className="font-heading font-semibold text-text-primary mb-3">
                Stage Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Status</span>
                  <span className={`text-sm font-medium ${
                    currentStage.status === 'active' ? 'text-success' : 'text-primary-600'
                  }`}>
                    {currentStage.status === 'active' ? 'Active' : 'Available'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Timing</span>
                  <span className="text-sm font-medium text-text-primary">
                    {currentStage.timestamp}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Location</span>
                  <span className="text-sm font-medium text-text-primary">
                    {currentStage.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-cream/50 rounded-brand p-4">
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                Security Measures
              </h4>
              <p className="text-sm text-text-secondary">
                {currentStage.security}
              </p>
            </div>

            {/* Live Status Indicator */}
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-brand p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-success rounded-full animate-empathy-pulse"></div>
                <span className="font-heading font-semibold text-text-primary text-sm">
                  Live Status
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                {currentStage.status === 'active' 
                  ? `This stage is currently processing your data securely.`
                  : `This stage is available when you need it.`
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Controls */}
      <div className="bg-surface/50 rounded-brand p-6">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Journey Controls
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center space-x-2 p-3 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="Play" size={18} className="text-primary-600" />
            <span className="text-sm font-medium text-text-primary">Start Tour</span>
          </button>
          
          <button className="flex items-center space-x-2 p-3 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="Download" size={18} className="text-secondary-600" />
            <span className="text-sm font-medium text-text-primary">Export Journey</span>
          </button>
          
          <button className="flex items-center space-x-2 p-3 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="Settings" size={18} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">Customize Path</span>
          </button>
          
          <button className="flex items-center space-x-2 p-3 bg-background rounded-brand transition-whisper whisper-ripple hover:shadow-gentle">
            <Icon name="HelpCircle" size={18} className="text-text-secondary" />
            <span className="text-sm font-medium text-text-primary">Get Help</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataJourneyTimeline;