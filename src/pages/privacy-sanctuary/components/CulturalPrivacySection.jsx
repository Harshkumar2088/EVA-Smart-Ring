import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const CulturalPrivacySection = ({ culturalRegion, setCulturalRegion }) => {
  const [selectedExample, setSelectedExample] = useState(0);

  const culturalRegions = [
    {
      id: 'universal',
      name: 'Universal Privacy',
      icon: 'Globe',
      color: 'from-primary to-secondary',
      description: 'Global privacy standards with individual customization',
      principles: [
        'Individual data ownership and control',
        'Transparent data processing and usage',
        'Right to data portability and deletion',
        'Minimal data collection practices',
        'User-centric privacy by design'
      ],
      examples: [
        {
          scenario: 'Personal Wellness Data',
          approach: 'Individual controls with granular permissions for sharing wellness insights with chosen healthcare providers or family members.',
          implementation: 'User-defined access levels, time-limited sharing, and complete audit trails of all data access.'
        },
        {
          scenario: 'AI Learning Preferences',
          approach: 'Opt-in machine learning with clear explanations of how personal data improves AI recommendations.',
          implementation: 'Transparent AI decision-making with user ability to review and modify learning parameters.'
        }
      ],
      compliance: ['GDPR', 'CCPA', 'PIPEDA', 'LGPD']
    },
    {
      id: 'eastern',
      name: 'Eastern Privacy Values',
      icon: 'Sun',
      color: 'from-amber to-warning',
      description: 'Harmony-focused privacy respecting family and community connections',
      principles: [
        'Family-oriented data sharing with elder respect',
        'Community wellness insights while maintaining individual privacy',
        'Ancestral wisdom integration with modern privacy',
        'Collective well-being balanced with personal boundaries',
        'Hierarchical consent models respecting cultural structures'
      ],
      examples: [
        {
          scenario: 'Family Wellness Sharing',
          approach: 'Culturally appropriate sharing of wellness insights with family members, respecting elder authority and family hierarchy.',
          implementation: 'Family circle permissions with elder oversight options and culturally sensitive sharing protocols.'
        },
        {
          scenario: 'Community Health Insights',
          approach: 'Anonymous contribution to community wellness patterns while maintaining individual privacy and family honor.',
          implementation: 'Community aggregated insights with family reputation protection and cultural sensitivity filters.'
        }
      ],
      compliance: ['China Cybersecurity Law', 'Japan APPI', 'Korea PIPA', 'Singapore PDPA']
    },
    {
      id: 'indigenous',
      name: 'Indigenous Data Sovereignty',
      icon: 'Leaf',
      color: 'from-sage to-success',
      description: 'Community-controlled data governance honoring traditional knowledge',
      principles: [
        'Community ownership of collective wellness data',
        'Traditional knowledge protection and respect',
        'Intergenerational data stewardship',
        'Land-based wellness data sovereignty',
        'Cultural protocol integration in data handling'
      ],
      examples: [
        {
          scenario: 'Traditional Wellness Practices',
          approach: 'Community-controlled sharing of traditional wellness knowledge with protection against appropriation.',
          implementation: 'Community governance boards overseeing traditional knowledge sharing with cultural protocol enforcement.'
        },
        {
          scenario: 'Land-Based Wellness Data',
          approach: 'Territorial data sovereignty ensuring wellness data connected to traditional lands remains under community control.',
          implementation: 'Geographic data sovereignty with community-controlled access and traditional territory recognition.'
        }
      ],
      compliance: ['UNDRIP', 'CARE Principles', 'OCAP Principles', 'Tribal Data Sovereignty']
    }
  ];

  const currentRegion = culturalRegions.find(region => region.id === culturalRegion);
  const currentExample = currentRegion.examples[selectedExample];

  return (
    <div className="space-y-8">
      {/* Cultural Region Selector */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Cultural Privacy Considerations
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
          Privacy isn't one-size-fits-all. Our system adapts to respect different cultural values, 
          legal requirements, and community expectations around data sharing and wellness.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {culturalRegions.map((region) => (
            <button
              key={region.id}
              onClick={() => setCulturalRegion(region.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-brand transition-cultural whisper-ripple ${
                culturalRegion === region.id
                  ? 'bg-background shadow-gentle-lg border-2 border-primary/30'
                  : 'bg-surface hover:bg-background hover:shadow-gentle'
              }`}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${region.color} rounded-full flex items-center justify-center ${
                culturalRegion === region.id ? 'breathing' : ''
              }`}>
                <Icon name={region.icon} size={20} className="text-white" />
              </div>
              <div className="text-left">
                <div className="font-heading font-semibold text-text-primary">
                  {region.name}
                </div>
                <div className="text-sm text-text-secondary">
                  {region.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Region Details */}
      <div className="bg-background rounded-brand p-8 shadow-gentle">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Privacy Principles */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentRegion.color} rounded-full flex items-center justify-center breathing`}>
                <Icon name={currentRegion.icon} size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-text-primary">
                  {currentRegion.name}
                </h3>
                <p className="text-text-secondary">{currentRegion.description}</p>
              </div>
            </div>

            <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Core Privacy Principles
            </h4>
            <div className="space-y-3">
              {currentRegion.principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-surface rounded-brand-sm"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-primary">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Compliance Standards
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {currentRegion.compliance.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-cream/50 rounded-brand-sm"
                >
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm font-medium text-text-primary">{standard}</span>
                </div>
              ))}
            </div>

            {/* Cultural Adaptation Features */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-brand p-4">
              <h5 className="font-heading font-semibold text-text-primary mb-2">
                Cultural Adaptations
              </h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={14} className="text-primary-600" />
                  <span className="text-sm text-text-secondary">Community-aware sharing controls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={14} className="text-secondary-600" />
                  <span className="text-sm text-text-secondary">Regional legal compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={14} className="text-accent" />
                  <span className="text-sm text-text-secondary">Cultural wellness integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Examples */}
      <div className="bg-surface/50 rounded-brand p-8">
        <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
          Real-World Applications
        </h3>

        {/* Example Selector */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {currentRegion.examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setSelectedExample(index)}
              className={`flex-1 p-4 rounded-brand transition-whisper whisper-ripple text-left ${
                selectedExample === index
                  ? 'bg-background shadow-gentle border-2 border-primary/30'
                  : 'bg-background/50 hover:bg-background hover:shadow-gentle'
              }`}
            >
              <h4 className="font-heading font-semibold text-text-primary mb-1">
                {example.scenario}
              </h4>
              <p className="text-sm text-text-secondary">
                {example.approach}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Example Details */}
        <div className="bg-background rounded-brand p-6">
          <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
            {currentExample.scenario}
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-heading font-semibold text-text-primary mb-2">
                Cultural Approach
              </h5>
              <p className="text-text-secondary mb-4">
                {currentExample.approach}
              </p>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-text-primary mb-2">
                Technical Implementation
              </h5>
              <p className="text-text-secondary">
                {currentExample.implementation}
              </p>
            </div>
          </div>

          {/* Implementation Status */}
          <div className="mt-6 p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-brand">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-success rounded-full animate-empathy-pulse"></div>
              <span className="font-heading font-semibold text-text-primary">
                Implementation Status
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              This cultural privacy approach is actively implemented in our system, 
              ensuring your wellness data is handled according to your cultural values and expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Privacy Controls */}
      <div className="bg-background rounded-brand p-6 shadow-gentle">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Your Cultural Privacy Controls
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-surface rounded-brand transition-whisper whisper-ripple hover:bg-cream/50">
            <Icon name="Settings" size={20} className="text-primary-600" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Cultural Settings</div>
              <div className="text-sm text-text-secondary">Customize cultural preferences</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-surface rounded-brand transition-whisper whisper-ripple hover:bg-cream/50">
            <Icon name="Users" size={20} className="text-secondary-600" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Community Controls</div>
              <div className="text-sm text-text-secondary">Manage community sharing</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-surface rounded-brand transition-whisper whisper-ripple hover:bg-cream/50">
            <Icon name="FileText" size={20} className="text-accent" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Privacy Guide</div>
              <div className="text-sm text-text-secondary">Download cultural guide</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CulturalPrivacySection;