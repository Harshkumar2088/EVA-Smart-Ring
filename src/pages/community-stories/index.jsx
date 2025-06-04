import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import StoryCard from './components/StoryCard';
import CulturalFilter from './components/CulturalFilter';
import StorySubmission from './components/StorySubmission';
import TransformationTimeline from './components/TransformationTimeline';
import CulturalChampions from './components/CulturalChampions';

const CommunityStories = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredStories, setFilteredStories] = useState([]);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const culturalFilters = [
    { id: 'all', name: 'All Cultures', icon: 'Globe', count: 127 },
    { id: 'eastern', name: 'Eastern Traditions', icon: 'Sun', count: 42 },
    { id: 'western', name: 'Western Approaches', icon: 'Mountain', count: 38 },
    { id: 'indigenous', name: 'Indigenous Wisdom', icon: 'Leaf', count: 28 },
    { id: 'african', name: 'African Heritage', icon: 'Heart', count: 19 }
  ];

  const categoryFilters = [
    { id: 'all', name: 'All Stories', icon: 'BookOpen' },
    { id: 'transformation', name: 'Transformations', icon: 'TrendingUp' },
    { id: 'cultural-bridge', name: 'Cultural Bridges', icon: 'Bridge' },
    { id: 'wellness-journey', name: 'Wellness Journeys', icon: 'MapPin' },
    { id: 'community-impact', name: 'Community Impact', icon: 'Users' }
  ];

  const communityStories = [
    {
      id: 1,
      name: "Maria Elena Rodriguez",
      age: 34,
      location: "Mexico City, Mexico",
      culture: "eastern",
      category: "transformation",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      title: "Finding Balance Through Ancient Wisdom",
      excerpt: "How Whisper Ring helped me reconnect with my grandmother\'s healing traditions while managing modern anxiety.",
      story: `Growing up in Mexico City, I was always caught between two worlds - the fast-paced modern life and my grandmother's traditional healing wisdom. When anxiety started affecting my work as a software engineer, I felt lost.

Whisper Ring changed everything. The AI didn't just track my stress levels; it recognized patterns in my cultural background and gently suggested incorporating traditional Mexican healing practices like 'limpias' (spiritual cleansings) and herbal teas my grandmother used to make.

The most beautiful moment was when the AI suggested I create a small altar space in my apartment - something I'd forgotten from my childhood. It wasn't prescriptive; it was like having a wise friend who understood both my heritage and my modern struggles.

Now, six months later, I practice a blend of mindfulness meditation and traditional Mexican wellness rituals. My anxiety has decreased by 70%, and I feel more connected to my roots than ever before.`,
      tags: ["Anxiety Management", "Cultural Heritage", "Traditional Healing", "Work-Life Balance"],
      transformationMetrics: {
        anxietyReduction: "70%",
        sleepImprovement: "85%",
        culturalConnection: "95%",
        overallWellness: "88%"
      },
      videoUrl: "https://example.com/maria-story",
      culturalPractices: ["Limpias", "Herbal Medicine", "Altar Creation", "Mindful Breathing"],
      aiInsights: [
        "Recognized cultural patterns in stress responses",
        "Suggested culturally-appropriate coping mechanisms",
        "Integrated traditional practices with modern wellness",
        "Provided gentle guidance without cultural appropriation"
      ],
      timelineEvents: [
        { month: 1, event: "Started using Whisper Ring", mood: 3 },
        { month: 2, event: "First cultural practice suggestion", mood: 4 },
        { month: 3, event: "Created home altar space", mood: 6 },
        { month: 4, event: "Integrated daily herbal teas", mood: 7 },
        { month: 5, event: "Shared practices with family", mood: 8 },
        { month: 6, event: "Achieved sustainable balance", mood: 9 }
      ]
    },
    {
      id: 2,
      name: "Kenji Tanaka",
      age: 28,
      location: "Tokyo, Japan",
      culture: "eastern",
      category: "cultural-bridge",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=400&fit=crop",
      title: "Bridging Tradition and Innovation",
      excerpt: "A tech worker\'s journey to integrate ancient Japanese wellness practices with modern biometric tracking.",
      story: `As a product manager at a tech startup in Tokyo, I was burning out fast. The irony wasn't lost on me - I was building wellness apps while neglecting my own health. Traditional Japanese concepts like 'ikigai' felt distant from my Silicon Valley-inspired work culture.Whisper Ring became my bridge between worlds. Instead of imposing Western wellness concepts, it helped me rediscover Japanese practices I'd grown up with but forgotten. The AI recognized my cultural background and suggested starting with simple 'shinrin-yoku' (forest bathing) sessions during lunch breaks.

What amazed me was how the technology enhanced rather than replaced traditional wisdom. The biometric data showed me how forest bathing actually lowered my cortisol levels, validating what my ancestors knew intuitively.

The AI also helped me understand 'kaizen' - continuous improvement - in a personal wellness context. Instead of dramatic changes, it suggested tiny daily improvements that aligned with Japanese philosophy.

Today, I practice a hybrid approach: morning meditation with biometric feedback, afternoon forest bathing tracked by the ring, and evening reflection guided by AI insights rooted in Japanese wisdom. My team has noticed the change, and I've started sharing these practices with colleagues.`,
      tags: ["Burnout Recovery", "Forest Bathing", "Ikigai", "Kaizen", "Work Culture"],
      transformationMetrics: {
        stressReduction: "65%",
        workSatisfaction: "90%",
        culturalConnection: "92%",
        teamProductivity: "78%"
      },
      videoUrl: "https://example.com/kenji-story",
      culturalPractices: ["Shinrin-yoku", "Ikigai Reflection", "Kaizen Methodology", "Mindful Tea Ceremony"],
      aiInsights: [
        "Identified burnout patterns specific to Japanese work culture",
        "Suggested culturally-resonant wellness practices",
        "Provided scientific validation for traditional methods",
        "Helped integrate practices into modern work environment"
      ],
      timelineEvents: [
        { month: 1, event: "Recognized burnout symptoms", mood: 2 },
        { month: 2, event: "First forest bathing session", mood: 4 },
        { month: 3, event: "Discovered ikigai connection", mood: 6 },
        { month: 4, event: "Implemented kaizen wellness", mood: 7 },
        { month: 5, event: "Shared with team", mood: 8 },
        { month: 6, event: "Achieved work-life harmony", mood: 9 }
      ]
    },
    {
      id: 3,
      name: "Aiyana Blackhorse",
      age: 31,
      location: "Navajo Nation, Arizona",
      culture: "indigenous",
      category: "wellness-journey",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      title: "Honoring Ancestral Wisdom in Digital Age",
      excerpt: "How AI technology learned to respect and enhance traditional Navajo healing practices without appropriation.",
      story: `Growing up on the Navajo Nation, I learned that wellness isn't just about the individual - it's about harmony with family, community, and the natural world. When I moved to Phoenix for nursing school, I felt disconnected from these teachings.

Whisper Ring surprised me. Instead of trying to replace our traditional ways, it asked questions about my cultural practices and learned from them. The AI recognized that my wellness was tied to my connection with nature, family, and spiritual practices.

The breakthrough came when the AI suggested incorporating traditional Navajo breathing techniques during stressful moments at the hospital. It didn't appropriate our practices - it simply reminded me to use the wisdom I already carried.

The ring helped me track how traditional practices affected my wellbeing. Smudging ceremonies, time spent with elders, and connection to the land all showed measurable improvements in my stress levels and sleep quality.

Most importantly, Whisper Ring helped me share appropriate aspects of our wellness wisdom with my non-Native colleagues, creating bridges of understanding while respecting sacred boundaries.

Now I'm back on the reservation, working as a community health nurse and using Whisper Ring to help bridge traditional healing with modern healthcare. The technology serves our community's values rather than imposing foreign concepts.`,
      tags: ["Traditional Healing", "Cultural Preservation", "Community Health", "Sacred Practices"],
      transformationMetrics: {
        culturalConnection: "98%",
        communityImpact: "85%",
        spiritualWellness: "92%",
        professionalGrowth: "88%"
      },
      videoUrl: "https://example.com/aiyana-story",
      culturalPractices: ["Smudging Ceremonies", "Elder Teachings", "Land Connection", "Traditional Breathing"],
      aiInsights: [
        "Learned to respect sacred boundaries",
        "Enhanced traditional practices with gentle tracking",
        "Facilitated appropriate cultural sharing",
        "Supported community health initiatives"
      ],
      timelineEvents: [
        { month: 1, event: "Started cultural integration", mood: 5 },
        { month: 2, event: "AI learned traditional practices", mood: 6 },
        { month: 3, event: "Bridged hospital and tradition", mood: 7 },
        { month: 4, event: "Shared with colleagues", mood: 8 },
        { month: 5, event: "Returned to community", mood: 9 },
        { month: 6, event: "Leading community wellness", mood: 10 }
      ]
    },
    {
      id: 4,
      name: "Amara Okafor",
      age: 29,
      location: "Lagos, Nigeria",
      culture: "african",
      category: "community-impact",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      title: "Ubuntu Philosophy Meets AI Wellness",
      excerpt: "Building community wellness networks through technology that understands African concepts of collective wellbeing.",
      story: `In Yoruba culture, we have a saying: 'Eniyan ni aso mi' - people are my clothing. This means our wellbeing is inseparable from our community's wellbeing. When I started using Whisper Ring, I wondered how Western technology could understand this African philosophy.The AI surprised me by recognizing that my wellness patterns were deeply connected to my family and community relationships. Instead of focusing solely on individual metrics, it began tracking how community gatherings, family calls, and cultural celebrations affected my overall health.The breakthrough came when Whisper Ring helped me organize wellness circles in my neighborhood. The AI suggested that my stress levels were lowest when I was helping others, aligning perfectly with Ubuntu philosophy - 'I am because we are.'The technology helped us create a community wellness network where neighbors support each other's health goals. We track collective wellness metrics and celebrate community achievements together. What's beautiful is how the AI learned to suggest culturally appropriate wellness practices - from traditional drumming circles that boost everyone's mood to community gardening projects that provide both physical activity and social connection.

Now our neighborhood has become a model for community-centered wellness. We've reduced collective stress levels by 60% and created stronger social bonds. The technology serves our African values of collective responsibility and mutual support.`,
      tags: ["Ubuntu Philosophy", "Community Wellness", "Collective Health", "Cultural Values"],
      transformationMetrics: {
        communityEngagement: "94%",
        collectiveWellness: "87%",
        socialConnection: "96%",
        culturalPride: "93%"
      },
      videoUrl: "https://example.com/amara-story",
      culturalPractices: ["Ubuntu Circles", "Community Drumming", "Collective Gardening", "Elder Wisdom Sharing"],
      aiInsights: [
        "Recognized collective wellness patterns",
        "Suggested community-centered activities",
        "Tracked social connection impact on health",
        "Facilitated neighborhood wellness networks"
      ],
      timelineEvents: [
        { month: 1, event: "Discovered community patterns", mood: 6 },
        { month: 2, event: "Organized first wellness circle", mood: 7 },
        { month: 3, event: "Created neighborhood network", mood: 8 },
        { month: 4, event: "Launched community garden", mood: 8 },
        { month: 5, event: "Achieved collective goals", mood: 9 },
        { month: 6, event: "Became community model", mood: 10 }
      ]
    }
  ];

  const culturalChampions = [
    {
      id: 1,
      name: "Dr. Elena Vasquez",
      title: "Cultural Wellness Advocate",
      culture: "Latino Heritage",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      impact: "Helped 200+ families integrate traditional healing",
      quote: "Whisper Ring doesn\'t replace our traditions - it honors and enhances them."
    },
    {
      id: 2,
      name: "Master Chen Wei",
      title: "Traditional Medicine Practitioner",
      culture: "Chinese Medicine",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      impact: "Bridged ancient wisdom with modern wellness",
      quote: "Technology that learns from 5000 years of healing wisdom."
    },
    {
      id: 3,
      name: "Sarah Windwalker",
      title: "Indigenous Health Leader",
      culture: "Native American",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      impact: "Protected sacred practices while embracing innovation",
      quote: "Respectful technology that walks in harmony with our ways."
    }
  ];

  useEffect(() => {
    let filtered = communityStories;
    
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(story => story.culture === selectedFilter);
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(story => story.category === selectedCategory);
    }
    
    setFilteredStories(filtered);
  }, [selectedFilter, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Icon name="Heart" size={20} className="text-accent" />
              <span className="text-sm font-medium text-accent">Community Stories</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-semibold text-text-primary mb-6 breathing">
              Cultural Wellness
              <span className="block text-primary-700">Journeys</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Real stories from our global community showcasing how Whisper Ring honors and enhances 
              diverse cultural approaches to wellness and healing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowSubmissionForm(true)}
                className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105"
              >
                Share Your Story
              </button>
              <Link
                to="/wellness-resource-center-cultural-education"
                className="px-8 py-4 border-2 border-primary text-primary-700 font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10"
              >
                Explore Cultural Wellness
              </Link>
            </div>
          </div>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle">
              <div className="text-3xl font-heading font-semibold text-primary-700 mb-2">127</div>
              <div className="text-sm text-text-secondary">Stories Shared</div>
            </div>
            <div className="text-center p-6 bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle">
              <div className="text-3xl font-heading font-semibold text-secondary-700 mb-2">45</div>
              <div className="text-sm text-text-secondary">Cultures Represented</div>
            </div>
            <div className="text-center p-6 bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle">
              <div className="text-3xl font-heading font-semibold text-accent mb-2">89%</div>
              <div className="text-sm text-text-secondary">Wellness Improvement</div>
            </div>
            <div className="text-center p-6 bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle">
              <div className="text-3xl font-heading font-semibold text-plum mb-2">12K</div>
              <div className="text-sm text-text-secondary">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Filters */}
      <CulturalFilter
        culturalFilters={culturalFilters}
        categoryFilters={categoryFilters}
        selectedFilter={selectedFilter}
        selectedCategory={selectedCategory}
        onFilterChange={setSelectedFilter}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-text-primary mb-4">
              Journey Highlights
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Discover how our community members have transformed their wellness through 
              culturally-aware AI guidance and traditional wisdom.
            </p>
          </div>
          
          <div className="grid gap-8">
            {filteredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-text-secondary/50 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                No Stories Found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to discover more cultural wellness journeys.
              </p>
              <button 
                onClick={() => {
                  setSelectedFilter('all');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-primary text-white font-medium rounded-brand transition-gentle hover:bg-primary-600"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cultural Champions */}
      <CulturalChampions champions={culturalChampions} />

      {/* Transformation Timeline */}
      <TransformationTimeline />

      {/* Story Submission Modal */}
      {showSubmissionForm && (
        <StorySubmission onClose={() => setShowSubmissionForm(false)} />
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-text-primary mb-6">
            Ready to Start Your Cultural Wellness Journey?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Join our community of wellness seekers who honor their heritage while embracing innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/homepage-ai-wellness-platform"
              className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105"
            >
              Join Whisper Ring
            </Link>
            <Link
              to="/how-it-works-ai-companion-demo"
              className="px-8 py-4 border-2 border-primary text-primary-700 font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:bg-primary/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityStories;