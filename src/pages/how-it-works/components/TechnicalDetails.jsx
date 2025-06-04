import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const TechnicalDetails = ({ activeSection, culturalLens }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const technicalSpecs = {
    monitoring: {
      title: "Gentle Monitoring Technical Architecture",
      icon: "Activity",
      color: "primary",
      details: [
        {
          category: "Data Processing",
          description: "Edge computing ensures all biometric data processing happens locally on your device",
          specs: [
            "Real-time signal processing using WebAssembly for performance",
            "Machine learning models run entirely client-side",
            "No biometric data transmission to external servers",
            "Encrypted local storage with user-controlled retention"
          ]
        },
        {
          category: "Cultural Adaptation Engine",
          description: "AI models trained on diverse cultural wellness approaches",
          specs: [
            "127+ cultural wellness frameworks integrated",
            "Contextual response generation based on cultural preferences",
            "Traditional medicine principles encoded in recommendation algorithms",
            "Continuous learning from anonymized, aggregated patterns"
          ]
        },
        {
          category: "Privacy Architecture",
          description: "Zero-knowledge architecture with end-to-end encryption",
          specs: [
            "AES-256 encryption for all local data storage",
            "Differential privacy for any aggregated insights",
            "User-controlled data retention and deletion",
            "Open-source privacy audit trail"
          ]
        }
      ]
    },
    journaling: {
      title: "Empathetic Journaling AI Framework",
      icon: "MessageCircle",
      color: "secondary",
      details: [
        {
          category: "Natural Language Processing",
          description: "Advanced NLP with cultural context understanding",
          specs: [
            "Transformer-based models fine-tuned for empathetic responses",
            "Cultural sentiment analysis for appropriate tone matching",
            "Multi-language support with cultural nuance preservation",
            "Emotional intelligence scoring and response calibration"
          ]
        },
        {
          category: "Cultural Response Generation",
          description: "Dynamic response adaptation based on cultural frameworks",
          specs: [
            "Eastern philosophy integration (Taoism, Buddhism, Ayurveda)",
            "Indigenous wisdom traditions (connection, community, nature)",
            "Western therapeutic approaches (CBT, mindfulness, solution-focused)",
            "Real-time cultural context switching and tone adaptation"
          ]
        },
        {
          category: "Conversation Security",
          description: "Military-grade security for sensitive conversations",
          specs: [
            "End-to-end encryption for all conversation data",
            "Ephemeral messaging with configurable retention",
            "Local conversation history with user-controlled backup",
            "Zero-log policy for conversation content"
          ]
        }
      ]
    },
    insights: {
      title: "Whisper Insights Intelligence System",
      icon: "Lightbulb",
      color: "accent",
      details: [
        {
          category: "Recommendation Engine",
          description: "Personalized wellness recommendations using federated learning",
          specs: [
            "Federated learning for privacy-preserving model improvement",
            "Multi-modal data fusion (biometric, behavioral, contextual)",
            "Cultural preference weighting in recommendation algorithms",
            "Temporal pattern recognition for lifestyle optimization"
          ]
        },
        {
          category: "Cultural Intelligence",
          description: "Deep cultural understanding for relevant recommendations",
          specs: [
            "Traditional medicine knowledge graphs",
            "Cultural wellness practice databases",
            "Seasonal and ceremonial calendar integration",
            "Community-specific wellness pattern recognition"
          ]
        },
        {
          category: "Explainable AI",
          description: "Transparent AI decision-making with cultural context",
          specs: [
            "Decision tree visualization for recommendation reasoning",
            "Cultural factor weighting transparency",
            "User-adjustable AI confidence thresholds",
            "Bias detection and mitigation reporting"
          ]
        }
      ]
    }
  };

  const aiPrinciples = [
    {
      title: "Cultural Humility",
      description: "AI acknowledges the limits of its cultural understanding and defers to user expertise",
      icon: "Heart"
    },
    {
      title: "Privacy by Design",
      description: "Every system component prioritizes user privacy from the ground up",
      icon: "Shield"
    },
    {
      title: "Transparent Intelligence",
      description: "Users can always understand why the AI made specific recommendations",
      icon: "Eye"
    },
    {
      title: "Empathetic Computing",
      description: "Technology designed to support human emotional wellbeing, not replace human connection",
      icon: "Users"
    }
  ];

  const currentSpecs = technicalSpecs[activeSection];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="space-y-8">
      {/* Current Section Technical Details */}
      <div className="bg-background rounded-brand p-6 lg:p-8 shadow-gentle">
        <div className="flex items-center space-x-3 mb-6">
          <div className={`w-12 h-12 rounded-full bg-${currentSpecs.color}/20 flex items-center justify-center`}>
            <Icon name={currentSpecs.icon} size={24} className={`text-${currentSpecs.color}`} />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-text-primary">
            {currentSpecs.title}
          </h2>
        </div>

        <div className="space-y-6">
          {currentSpecs.details.map((detail, index) => (
            <div key={index} className="border border-surface rounded-brand overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-4 bg-surface/50 hover:bg-surface transition-gentle"
              >
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-text-primary">{detail.category}</h3>
                  <p className="text-sm text-text-secondary mt-1">{detail.description}</p>
                </div>
                <Icon 
                  name={expandedSection === index ? 'ChevronUp' : 'ChevronDown'} 
                  size={20} 
                  className="text-text-secondary"
                />
              </button>
              
              {expandedSection === index && (
                <div className="p-4 bg-background border-t border-surface">
                  <ul className="space-y-3">
                    {detail.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${currentSpecs.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-text-primary">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AI Principles */}
      <div className="bg-background rounded-brand p-6 lg:p-8 shadow-gentle">
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
          Core AI Principles
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiPrinciples.map((principle, index) => (
            <div key={index} className="p-4 bg-surface/50 rounded-brand border border-surface">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={principle.icon} size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Adaptation Matrix */}
      <div className="bg-background rounded-brand p-6 lg:p-8 shadow-gentle">
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
          Cultural Adaptation Matrix
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface">
                <th className="text-left p-3 font-heading font-semibold text-text-primary">Cultural Lens</th>
                <th className="text-left p-3 font-heading font-semibold text-text-primary">Communication Style</th>
                <th className="text-left p-3 font-heading font-semibold text-text-primary">Wellness Focus</th>
                <th className="text-left p-3 font-heading font-semibold text-text-primary">Recommendation Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b border-surface ${culturalLens === 'universal' ? 'bg-primary/5' : ''}`}>
                <td className="p-3 font-medium text-text-primary">Universal</td>
                <td className="p-3 text-text-secondary">Supportive and understanding</td>
                <td className="p-3 text-text-secondary">Holistic balance</td>
                <td className="p-3 text-text-secondary">Evidence-based with empathy</td>
              </tr>
              <tr className={`border-b border-surface ${culturalLens === 'eastern' ? 'bg-amber/5' : ''}`}>
                <td className="p-3 font-medium text-text-primary">Eastern</td>
                <td className="p-3 text-text-secondary">Wise and harmonious</td>
                <td className="p-3 text-text-secondary">Energy flow and balance</td>
                <td className="p-3 text-text-secondary">Traditional wisdom integration</td>
              </tr>
              <tr className={`border-b border-surface ${culturalLens === 'indigenous' ? 'bg-sage/5' : ''}`}>
                <td className="p-3 font-medium text-text-primary">Indigenous</td>
                <td className="p-3 text-text-secondary">Respectful and connected</td>
                <td className="p-3 text-text-secondary">Community and nature connection</td>
                <td className="p-3 text-text-secondary">Ancestral wisdom and ceremony</td>
              </tr>
              <tr className={`${culturalLens === 'western' ? 'bg-secondary/5' : ''}`}>
                <td className="p-3 font-medium text-text-primary">Western</td>
                <td className="p-3 text-text-secondary">Practical and solution-focused</td>
                <td className="p-3 text-text-secondary">Optimization and metrics</td>
                <td className="p-3 text-text-secondary">Data-driven with personalization</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Security & Privacy Technical Details */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-brand p-6 lg:p-8 border border-primary/10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name="Shield" size={24} className="text-primary-600" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-text-primary">
            Security & Privacy Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-3">Data Protection</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">End-to-end encryption (AES-256)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">Zero-knowledge architecture</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">Local data processing only</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">User-controlled data retention</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-3">AI Ethics</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">Bias detection and mitigation</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">Explainable AI decisions</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">Cultural sensitivity validation</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">Continuous ethical auditing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;