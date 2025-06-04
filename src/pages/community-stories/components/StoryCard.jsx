import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const StoryCard = ({ story, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', name: 'Story', icon: 'BookOpen' },
    { id: 'insights', name: 'AI Insights', icon: 'Brain' },
    { id: 'practices', name: 'Cultural Practices', icon: 'Heart' },
    { id: 'metrics', name: 'Transformation', icon: 'TrendingUp' }
  ];

  return (
    <div className={`bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle overflow-hidden transition-whisper hover:shadow-gentle-lg ${
      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    } lg:flex`}>
      {/* Story Image */}
      <div className="lg:w-1/2 relative overflow-hidden">
        <Image
          src={story.coverImage}
          alt={`${story.name}'s wellness journey`}
          className="w-full h-64 lg:h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Cultural Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {story.culture.charAt(0).toUpperCase() + story.culture.slice(1)} Heritage
          </div>
        </div>
        
        {/* Video Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-whisper hover:bg-white/30 hover:scale-110">
            <Icon name="Play" size={24} className="text-white ml-1" />
          </button>
        </div>
      </div>

      {/* Story Content */}
      <div className="lg:w-1/2 p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-6">
          <Image
            src={story.avatar}
            alt={story.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">
              {story.name}
            </h3>
            <p className="text-sm text-text-secondary mb-2">
              {story.age} years old • {story.location}
            </p>
            <div className="flex flex-wrap gap-2">
              {story.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Story Title */}
        <h4 className="text-2xl font-heading font-semibold text-text-primary mb-3">
          {story.title}
        </h4>
        
        <p className="text-text-secondary mb-6 leading-relaxed">
          {story.excerpt}
        </p>

        {/* Tabs */}
        <div className="border-b border-primary/10 mb-6">
          <div className="flex space-x-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-1 border-b-2 transition-gentle whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary text-primary-700' :'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span className="text-sm font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {activeTab === 'story' && (
            <div>
              <div className={`text-text-secondary leading-relaxed ${
                isExpanded ? '' : 'line-clamp-6'
              }`}>
                <p>{story.story}</p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-primary-700 hover:text-primary-800 font-medium text-sm transition-gentle"
              >
                {isExpanded ? 'Read Less' : 'Read Full Story'}
              </button>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-4">
              <h5 className="font-heading font-semibold text-text-primary mb-3">
                How AI Enhanced This Journey
              </h5>
              {story.aiInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary text-sm">{insight}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'practices' && (
            <div className="space-y-4">
              <h5 className="font-heading font-semibold text-text-primary mb-3">
                Cultural Practices Integrated
              </h5>
              <div className="grid grid-cols-2 gap-3">
                {story.culturalPractices.map((practice, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-3 bg-cream/50 rounded-brand-sm"
                  >
                    <Icon name="Leaf" size={16} className="text-sage flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <h5 className="font-heading font-semibold text-text-primary mb-3">
                Transformation Metrics
              </h5>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(story.transformationMetrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-primary/10 rounded-brand-sm">
                    <div className="text-2xl font-heading font-semibold text-primary-700 mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-text-secondary capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-primary/10">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-primary/10 text-primary-700 rounded-brand transition-gentle hover:bg-primary/20">
            <Icon name="Heart" size={16} />
            <span className="text-sm font-medium">Inspire Others</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-secondary/10 text-secondary-700 rounded-brand transition-gentle hover:bg-secondary/20">
            <Icon name="Share2" size={16} />
            <span className="text-sm font-medium">Share Story</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;