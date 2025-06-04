import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import SearchBar from './components/SearchBar';
import ContentFilter from './components/ContentFilter';
import CulturalCalendar from './components/CulturalCalendar';
import PracticeGuides from './components/PracticeGuides';
import ExpertProfiles from './components/ExpertProfiles';
import CommunityContributions from './components/CommunityContributions';

const WellnessResourceCenter = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCulture, setSelectedCulture] = useState('all');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const sections = [
    { id: 'all', name: 'All Resources', icon: 'Grid3X3', color: 'primary' },
    { id: 'practices', name: 'Cultural Practices', icon: 'Heart', color: 'amber' },
    { id: 'technology', name: 'Technology & Wellness', icon: 'Sparkles', color: 'secondary' },
    { id: 'mental-health', name: 'Mental Health', icon: 'Brain', color: 'sage' },
    { id: 'calendar', name: 'Wellness Calendar', icon: 'Calendar', color: 'plum' },
    { id: 'guides', name: 'Practice Guides', icon: 'BookOpen', color: 'accent' }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Mindfulness Across Cultures: A Global Perspective",
      category: "Cultural Practices",
      culture: "Universal",
      author: "Dr. Maya Patel",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      description: `Explore how mindfulness practices vary across different cultures, from Buddhist meditation to Indigenous grounding techniques. This comprehensive guide examines the common threads and unique approaches to present-moment awareness found in traditions worldwide.

Learn how technology can respectfully support these ancient practices while preserving their cultural integrity and spiritual essence.`,
      tags: ["Mindfulness", "Cultural Diversity", "Meditation", "Global Practices"],
      difficulty: "Beginner",
      culturalOrigin: "Multiple Traditions"
    },
    {
      id: 2,
      title: "AI and Traditional Healing: Bridging Ancient Wisdom",
      category: "Technology & Wellness",
      culture: "Indigenous",
      author: "Dr. James Crow Feather",
      readTime: "15 min read",
      image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?w=400&h=250&fit=crop",
      description: `Discover how artificial intelligence can respectfully integrate with traditional healing practices without disrupting their sacred nature. This article explores ethical frameworks for technology adoption in Indigenous wellness traditions.

Case studies demonstrate successful collaborations between AI developers and traditional healers, creating tools that honor ancestral wisdom while providing modern accessibility.`,
      tags: ["AI Ethics", "Traditional Healing", "Indigenous Wisdom", "Technology Integration"],
      difficulty: "Intermediate",
      culturalOrigin: "Indigenous Traditions"
    },
    {
      id: 3,
      title: "Community Healing Circles in the Digital Age",
      category: "Mental Health",
      culture: "African",
      author: "Dr. Amara Okafor",
      readTime: "10 min read",
      image: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=400&h=250&fit=crop",
      description: `Learn how traditional African healing circles are adapting to digital platforms while maintaining their essential community-centered approach to mental wellness. This guide provides practical frameworks for creating virtual healing spaces.

Explore the role of storytelling, collective wisdom, and intergenerational knowledge sharing in modern mental health support systems.`,
      tags: ["Community Healing", "Digital Wellness", "African Traditions", "Mental Health"],
      difficulty: "Beginner",
      culturalOrigin: "African Traditions"
    }
  ];

  const wellnessStats = [
    { label: "Cultural Practices", value: "150+", icon: "Heart" },
    { label: "Expert Contributors", value: "75", icon: "Users" },
    { label: "Languages Available", value: "12", icon: "Globe" },
    { label: "Community Contributions", value: "500+", icon: "MessageCircle" }
  ];

  useEffect(() => {
    // Check for offline mode
    const handleOnline = () => setIsOfflineMode(false);
    const handleOffline = () => setIsOfflineMode(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const filteredResources = featuredResources.filter(resource => {
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCulture = selectedCulture === 'all' || 
      resource.culture.toLowerCase() === selectedCulture.toLowerCase();
    
    const matchesSection = activeSection === 'all' || 
      resource.category.toLowerCase().includes(activeSection.toLowerCase());

    return matchesSearch && matchesCulture && matchesSection;
  });

  return (
    <div className="min-h-screen bg-cream/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-cream/50 to-secondary/20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage to-amber breathing flex items-center justify-center">
                <Icon name="BookOpen" size={32} className="text-white" />
              </div>
              <div className="w-4 h-4 bg-accent rounded-full animate-empathy-pulse"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 breathing">
              Wellness Resource Center
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 font-accent">
              Cultural Education & Healing Wisdom
            </p>
            
            <div className="bg-background/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle-lg">
              <p className="text-lg text-text-primary leading-relaxed">
                Discover the intersection of ancient wisdom and modern wellness technology. 
                Our comprehensive resource center honors cultural diversity while providing 
                evidence-based guidance for your wellness journey.
              </p>
            </div>

            {/* Offline Mode Indicator */}
            {isOfflineMode && (
              <div className="mt-6 bg-amber/20 border border-amber/30 rounded-brand p-4">
                <div className="flex items-center justify-center space-x-2 text-amber-700">
                  <Icon name="Wifi" size={20} />
                  <span className="font-medium">Offline Mode Active - Cached content available</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessStats.map((stat, index) => (
              <div key={index} className="text-center bg-surface/80 rounded-brand p-6 shadow-gentle whisper-ripple">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center breathing">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-heading font-semibold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <ContentFilter
            selectedCulture={selectedCulture}
            setSelectedCulture={setSelectedCulture}
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
        </div>
      </section>

      {/* Section Navigation */}
      <section className="py-8 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-brand font-medium transition-whisper whisper-ripple ${
                  activeSection === section.id
                    ? `bg-${section.color}/20 text-${section.color} shadow-gentle`
                    : 'bg-surface/80 text-text-secondary hover:text-text-primary hover:bg-primary/10'
                }`}
              >
                <Icon name={section.icon} size={20} />
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection === 'all' && (
            <div className="space-y-16">
              {/* Featured Resources */}
              <div>
                <h2 className="text-3xl font-heading font-semibold text-text-primary mb-8 text-center">
                  Featured Resources
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  {filteredResources.map((resource) => (
                    <article key={resource.id} className="bg-background rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-brand-sm">
                            {resource.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-accent/90 text-white text-sm font-medium rounded-brand-sm">
                            {resource.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4 text-sm text-text-secondary">
                          <div className="flex items-center space-x-1">
                            <Icon name="User" size={16} />
                            <span>{resource.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={16} />
                            <span>{resource.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                          {resource.title}
                        </h3>
                        
                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-brand-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-text-secondary">
                            <Icon name="Globe" size={16} className="inline mr-1" />
                            {resource.culturalOrigin}
                          </div>
                          <button className="flex items-center space-x-1 text-primary-700 hover:text-primary-800 font-medium transition-gentle">
                            <span>Read More</span>
                            <Icon name="ArrowRight" size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Quick Access Tools */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber/20 to-sage/20 rounded-brand p-8 shadow-gentle">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon name="Calendar" size={32} className="text-amber" />
                    <h3 className="text-2xl font-heading font-semibold text-text-primary">
                      Cultural Wellness Calendar
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-6">
                    Discover global wellness traditions, cultural holidays, and seasonal practices 
                    from around the world.
                  </p>
                  <button 
                    onClick={() => setActiveSection('calendar')}
                    className="flex items-center space-x-2 px-6 py-3 bg-amber text-white font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper"
                  >
                    <span>Explore Calendar</span>
                    <Icon name="ArrowRight" size={20} />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-plum/20 to-accent/20 rounded-brand p-8 shadow-gentle">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon name="BookOpen" size={32} className="text-plum" />
                    <h3 className="text-2xl font-heading font-semibold text-text-primary">
                      Practice Guides
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-6">
                    Step-by-step instructions for cultural wellness techniques, 
                    meditation practices, and healing rituals.
                  </p>
                  <button 
                    onClick={() => setActiveSection('guides')}
                    className="flex items-center space-x-2 px-6 py-3 bg-plum text-white font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper"
                  >
                    <span>Browse Guides</span>
                    <Icon name="ArrowRight" size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'calendar' && <CulturalCalendar />}
          {activeSection === 'guides' && <PracticeGuides />}
          {activeSection === 'practices' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-semibold text-text-primary text-center">
                Cultural Wellness Practices
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {filteredResources.filter(r => r.category === 'Cultural Practices').map((resource) => (
                  <article key={resource.id} className="bg-background rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-text-secondary mb-4">
                        {resource.description}
                      </p>
                      <button className="text-primary-700 hover:text-primary-800 font-medium transition-gentle">
                        Learn More →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {(activeSection === 'technology' || activeSection === 'mental-health') && (
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-semibold text-text-primary text-center">
                {activeSection === 'technology' ? 'Technology & Wellness' : 'Mental Health Awareness'}
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredResources.filter(r => 
                  activeSection === 'technology' ? r.category.includes('Technology') 
                    : r.category.includes('Mental Health')
                ).map((resource) => (
                  <article key={resource.id} className="bg-background rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 h-48 lg:h-auto overflow-hidden">
                        <Image
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                          {resource.title}
                        </h3>
                        <p className="text-text-secondary mb-4">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">{resource.readTime}</span>
                          <button className="text-primary-700 hover:text-primary-800 font-medium transition-gentle">
                            Read Article →
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Expert Profiles Section */}
      <ExpertProfiles />

      {/* Community Contributions */}
      <CommunityContributions />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-cream/30 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background/80 backdrop-blur-gentle rounded-brand p-8 shadow-gentle-lg">
            <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
              Join Our Wellness Community
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Connect with like-minded individuals on their wellness journeys. 
              Share your cultural practices and learn from others around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/community-stories-cultural-journeys"
                className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper breathing"
              >
                Explore Community Stories
              </Link>
              <button className="px-8 py-4 border-2 border-primary text-primary-700 font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10">
                Contribute Your Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessResourceCenter;