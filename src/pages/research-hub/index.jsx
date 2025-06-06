import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import ResearchPartnership from './components/ResearchPartnership';
import TechnicalDemo from './components/TechnicalDemo';
import InnovationRoadmap from './components/InnovationRoadmap';
import DataVisualization from './components/DataVisualization';

const DeveloperResearchHub = () => {
  const [activeTab, setActiveTab] = useState('research');
  const [selectedDemo, setSelectedDemo] = useState(null);

  const heroStats = [
    { label: "Research Partners", value: "15+", icon: "Users" },
    { label: "Published Studies", value: "8", icon: "BookOpen" },
    { label: "Open Source Projects", value: "12", icon: "Github" },
    { label: "Developer Community", value: "2.5K+", icon: "Code" }
  ];

  const researchPartners = [
    {
      id: 1,
      name: "Stanford Cultural Wellness Lab",
      type: "University",
      focus: "Cultural AI Ethics",
      collaboration: "Joint research on cultural bias detection in wellness AI",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center",
      status: "Active",
      publications: 3
    },
    {
      id: 2,
      name: "MIT Empathetic Computing Group",
      type: "Research Institute",
      focus: "Emotional Intelligence",
      collaboration: "Development of empathy measurement algorithms",
      logo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=center",
      status: "Active",
      publications: 2
    },
    {
      id: 3,
      name: "Indigenous Wellness Council",
      type: "Cultural Organization",
      focus: "Traditional Practices",
      collaboration: "Integration of indigenous wellness methodologies",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop&crop=center",
      status: "Partnership",
      publications: 1
    }
  ];

  const peerReviewedStudies = [
    {
      id: 1,
      title: "Cultural Adaptation in AI-Driven Wellness Platforms: A Cross-Cultural Study",
      journal: "Journal of Digital Health",
      year: 2024,
      authors: "Chen, L., Rodriguez, M., Patel, S.",
      abstract: `This study examines how AI wellness platforms can be culturally adapted to serve diverse populations effectively. Through analysis of 2,847 users across 15 cultural backgrounds, we demonstrate significant improvements in user engagement and wellness outcomes when AI systems incorporate cultural intelligence frameworks.

The research reveals that culturally-aware AI systems show 73% higher user retention and 45% better wellness goal achievement compared to one-size-fits-all approaches.`,
      citations: 127,
      downloadUrl: "#",
      tags: ["Cultural AI", "Wellness Technology", "User Experience"]
    },
    {
      id: 2,
      title: "Privacy-Preserving Emotional Intelligence in Wearable Wellness Devices",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2024,
      authors: "Kim, J., Thompson, A., Nakamura, T.",
      abstract: `We present a novel approach to implementing emotional intelligence in wearable devices while maintaining strict privacy standards. Our federated learning framework enables personalized wellness insights without compromising user data privacy.

Results show that our privacy-first approach maintains 94% of the accuracy of centralized models while ensuring complete data sovereignty for users.`,
      citations: 89,
      downloadUrl: "#",
      tags: ["Privacy Technology", "Federated Learning", "Emotional AI"]
    }
  ];

  const technicalDemos = [
    {
      id: 1,
      title: "Cultural Adaptation Algorithm",
      description: "Real-time demonstration of how our AI adapts responses based on cultural context",
      type: "Interactive",
      complexity: "Advanced",
      technologies: ["TensorFlow", "Cultural ML", "NLP"],
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Privacy-First Data Processing",
      description: "Visualization of our zero-knowledge data processing pipeline",
      type: "Visualization",
      complexity: "Intermediate",
      technologies: ["Encryption", "Federated Learning", "Edge Computing"],
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Empathy Measurement Engine",
      description: "How we quantify and respond to emotional states with cultural sensitivity",
      type: "Algorithm",
      complexity: "Advanced",
      technologies: ["Emotion AI", "Cultural Psychology", "Biometrics"],
      demoUrl: "#"
    }
  ];

  const openSourceProjects = [
    {
      id: 1,
      name: "CulturalML",
      description: "Open-source library for building culturally-aware machine learning models",
      language: "Python",
      stars: 1247,
      forks: 189,
      contributors: 23,
      lastUpdate: "2 days ago",
      license: "MIT"
    },
    {
      id: 2,
      name: "PrivacyFirst-Wellness",
      description: "Privacy-preserving wellness data processing toolkit",
      language: "JavaScript",
      stars: 892,
      forks: 134,
      contributors: 18,
      lastUpdate: "1 week ago",
      license: "Apache 2.0"
    },
    {
      id: 3,
      name: "EmpathyEngine",
      description: "Emotional intelligence framework for wellness applications",
      language: "TypeScript",
      stars: 654,
      forks: 87,
      contributors: 12,
      lastUpdate: "3 days ago",
      license: "MIT"
    }
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2024",
      status: "completed",
      items: [
        "Cultural bias detection framework",
        "Privacy-first architecture v2.0",
        "Indigenous wellness integration"
      ]
    },
    {
      quarter: "Q2 2024",
      status: "in-progress",
      items: [
        "Advanced empathy algorithms",
        "Multi-language cultural adaptation",
        "Community feedback integration"
      ]
    },
    {
      quarter: "Q3 2024",
      status: "planned",
      items: [
        "Real-time cultural context switching",
        "Enhanced privacy controls",
        "Developer API platform"
      ]
    },
    {
      quarter: "Q4 2024",
      status: "planned",
      items: [
        "Global cultural wellness database",
        "Advanced biometric integration",
        "Community-driven feature development"
      ]
    }
  ];

  const tabs = [
    { id: 'research', label: 'Research & Partnerships', icon: 'Users' },
    { id: 'technical', label: 'Technical Demos', icon: 'Code' },
    { id: 'roadmap', label: 'Innovation Roadmap', icon: 'Map' },
    // { id: 'opensource', label: 'Open Source', icon: 'Github' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-plum/10 text-plum px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Innovation Hub</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 breathing">
              Developer & Research Hub
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Advancing the science of cultural wellness AI through open research, 
              collaborative development, and transparent innovation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105">
                <Icon name="Download" size={20} className="inline mr-2" />
                Download Research Papers
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary-700 font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10">
                <Icon name="Github" size={20} className="inline mr-2" />
                Explore Open Source
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 text-center shadow-gentle breathing">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-heading font-semibold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 lg:top-20 bg-background/95 backdrop-blur-gentle border-b border-primary/10 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-brand-sm transition-whisper whisper-ripple whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-primary-700 shadow-gentle'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Research & Partnerships Tab */}
        {activeTab === 'research' && (
          <div className="space-y-12">
            {/* Research Partnerships */}
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Research Partnerships
              </h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {researchPartners.map((partner) => (
                  <ResearchPartnership key={partner.id} partner={partner} />
                ))}
              </div>
            </section>

            {/* Peer-Reviewed Studies */}
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Peer-Reviewed Studies
              </h2>
              <div className="space-y-6">
                {peerReviewedStudies.map((study) => (
                  <div key={study.id} className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                          {study.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
                          <span className="flex items-center space-x-1">
                            <Icon name="BookOpen" size={16} />
                            <span>{study.journal}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Calendar" size={16} />
                            <span>{study.year}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Quote" size={16} />
                            <span>{study.citations} citations</span>
                          </span>
                        </div>
                        <p className="text-text-secondary mb-4">
                          <strong>Authors:</strong> {study.authors}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-plum text-white rounded-brand-sm transition-gentle hover:shadow-gentle">
                          <Icon name="Download" size={16} className="inline mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                    
                    <div className="prose prose-sm max-w-none text-text-secondary mb-4">
                      <p>{study.abstract}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/10 text-primary-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Technical Demos Tab */}
        {activeTab === 'technical' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Interactive Technical Demonstrations
              </h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {technicalDemos.map((demo) => (
                  <TechnicalDemo key={demo.id} demo={demo} onSelect={setSelectedDemo} />
                ))}
              </div>
            </section>

            {/* Data Visualization */}
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Research Data Visualizations
              </h2>
              <DataVisualization />
            </section>

            {/* API Documentation Preview */}
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                API Documentation Preview
              </h2>
              <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-semibold text-text-primary">
                    Cultural Wellness API
                  </h3>
                  <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">
                    Beta Available
                  </span>
                </div>
                
                <div className="bg-text-primary rounded-brand p-4 mb-4 overflow-x-auto">
                  <pre className="text-sm text-green-400">
{`// Cultural Context Adaptation
const response = await whisperRing.adapt({
  userId: "user_123",
  culturalContext: "eastern_mindfulness",
  wellnessGoal: "stress_reduction",
  preferences: {
    communicationStyle: "gentle",
    culturalSensitivity: "high"
  }
});

// Privacy-First Data Processing
const insights = await whisperRing.analyze({
  biometricData: encryptedData,
  processingMode: "edge_only",
  retentionPolicy: "user_controlled"
});`}
                  </pre>
                </div>
                
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-plum text-white rounded-brand-sm transition-gentle hover:shadow-gentle">
                    <Icon name="Code" size={16} className="inline mr-1" />
                    Full Documentation
                  </button>
                  <button className="px-4 py-2 border border-primary text-primary-700 rounded-brand-sm transition-gentle hover:bg-primary/10">
                    <Icon name="Key" size={16} className="inline mr-1" />
                    Request API Key
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Innovation Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Innovation Roadmap
              </h2>
              <InnovationRoadmap roadmapItems={roadmapItems} />
            </section>

            {/* Community Requests */}
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Community-Requested Features
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                    Most Requested
                  </h3>
                  <div className="space-y-4">
                    {[
                      { feature: "Voice-based cultural adaptation", votes: 247, status: "In Development" },
                      { feature: "Family wellness tracking", votes: 189, status: "Planned Q3" },
                      { feature: "Traditional medicine integration", votes: 156, status: "Research Phase" },
                      { feature: "Offline privacy mode", votes: 134, status: "Planned Q4" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-brand-sm">
                        <div>
                          <div className="font-medium text-text-primary">{item.feature}</div>
                          <div className="text-sm text-text-secondary">{item.votes} community votes</div>
                        </div>
                        <span className="px-3 py-1 bg-primary/20 text-primary-700 rounded-full text-sm">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                    Submit Your Ideas
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Help shape the future of cultural wellness technology by sharing your ideas and voting on community proposals.
                  </p>
                  <button className="w-full px-4 py-3 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper">
                    <Icon name="Lightbulb" size={20} className="inline mr-2" />
                    Join Developer Community
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Open Source Tab */}
        {activeTab === 'opensource' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Open Source Contributions
              </h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {openSourceProjects.map((project) => (
                  <div key={project.id} className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle transition-whisper hover:shadow-gentle-lg">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-heading font-semibold text-text-primary">
                        {project.name}
                      </h3>
                      <span className="px-2 py-1 bg-primary/20 text-primary-700 rounded text-sm">
                        {project.language}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                      <span className="flex items-center space-x-1">
                        <Icon name="Star" size={16} />
                        <span>{project.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="GitFork" size={16} />
                        <span>{project.forks}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Users" size={16} />
                        <span>{project.contributors}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        Updated {project.lastUpdate}
                      </span>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-plum text-white rounded-brand-sm text-sm transition-gentle hover:shadow-gentle">
                          <Icon name="Github" size={14} className="inline mr-1" />
                          View
                        </button>
                        <button className="px-3 py-1 border border-primary text-primary-700 rounded-brand-sm text-sm transition-gentle hover:bg-primary/10">
                          <Icon name="Download" size={14} className="inline mr-1" />
                          Clone
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contribution Guidelines */}
            <section>
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8">
                Contribution Guidelines
              </h2>
              <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-8 shadow-gentle">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                      Getting Started
                    </h3>
                    <ul className="space-y-3 text-text-secondary">
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span>Read our Cultural Sensitivity Guidelines</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span>Review Privacy-First Development Principles</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span>Join our Developer Discord Community</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span>Submit your first pull request</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                      Core Values
                    </h3>
                    <ul className="space-y-3 text-text-secondary">
                      <li className="flex items-start space-x-2">
                        <Icon name="Heart" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span>Cultural respect and inclusivity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Shield" size={16} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Privacy by design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Users" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>Community-driven development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Zap" size={16} className="text-warning mt-1 flex-shrink-0" />
                        <span>Ethical AI practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-text-primary mb-6">
            Join the Innovation Community
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Collaborate with researchers, developers, and wellness experts to build 
            the future of culturally-aware wellness technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community-stories-cultural-journeys"
              className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105"
            >
              <Icon name="Users" size={20} className="inline mr-2" />
              Join Community
            </Link>
            <Link
  to="/contact-email"
  className="px-8 py-4 border-2 border-primary text-primary-700 font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10"
>
  <Icon name="Mail" size={20} className="inline mr-2" />
  Email Us
</Link>


            <Link
              to="/privacy-sanctuary-memory-vault"
              className="px-8 py-4 border-2 border-primary text-primary-700 font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10"
            >
              <Icon name="Shield" size={20} className="inline mr-2" />
              Privacy First
            </Link>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperResearchHub;