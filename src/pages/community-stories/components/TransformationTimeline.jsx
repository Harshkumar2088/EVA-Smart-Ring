import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const TransformationTimeline = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const timelineStories = [
    {
      name: "Maria Elena",
      culture: "Mexican Heritage",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      timeline: [
        { 
          month: 1, 
          event: "Started Whisper Ring", 
          mood: 3, 
          description: "Feeling disconnected from cultural roots while dealing with work stress",
          practice: "Basic stress tracking"
        },
        { 
          month: 2, 
          event: "AI suggested traditional practices", 
          mood: 4, 
          description: "Whisper Ring recognized cultural patterns and suggested grandmother\'s remedies",
          practice: "Herbal tea integration"
        },
        { 
          month: 3, 
          event: "Created home altar", 
          mood: 6, 
          description: "Set up sacred space for daily reflection and cultural connection",
          practice: "Daily altar meditation"
        },
        { 
          month: 4, 
          event: "Integrated limpias practice", 
          mood: 7, 
          description: "Added traditional cleansing rituals to wellness routine",
          practice: "Weekly spiritual cleansing"
        },
        { 
          month: 5, 
          event: "Shared with family", 
          mood: 8, 
          description: "Reconnected with family traditions and taught practices to children",
          practice: "Family wellness circles"
        },
        { 
          month: 6, 
          event: "Achieved cultural balance", 
          mood: 9, 
          description: "Found harmony between modern life and ancestral wisdom",
          practice: "Integrated daily practice"
        }
      ]
    },
    {
      name: "Kenji Tanaka",
      culture: "Japanese Heritage",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      timeline: [
        { 
          month: 1, 
          event: "Recognized burnout", 
          mood: 2, 
          description: "Severe work burnout in Tokyo tech industry",
          practice: "Stress monitoring only"
        },
        { 
          month: 2, 
          event: "First forest bathing", 
          mood: 4, 
          description: "AI suggested shinrin-yoku during lunch breaks",
          practice: "Weekly forest visits"
        },
        { 
          month: 3, 
          event: "Discovered ikigai", 
          mood: 6, 
          description: "Explored life purpose through traditional Japanese philosophy",
          practice: "Daily ikigai reflection"
        },
        { 
          month: 4, 
          event: "Kaizen wellness approach", 
          mood: 7, 
          description: "Applied continuous improvement to personal wellness",
          practice: "Micro-improvements daily"
        },
        { 
          month: 5, 
          event: "Team wellness sharing", 
          mood: 8, 
          description: "Introduced colleagues to Japanese wellness practices",
          practice: "Group forest bathing"
        },
        { 
          month: 6, 
          event: "Work-life harmony", 
          mood: 9, 
          description: "Achieved sustainable balance using traditional wisdom",
          practice: "Integrated lifestyle"
        }
      ]
    },
    {
      name: "Aiyana Blackhorse",
      culture: "Navajo Heritage",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      timeline: [
        { 
          month: 1, 
          event: "Cultural integration start", 
          mood: 5, 
          description: "Began exploring how AI could respect traditional ways",
          practice: "Traditional breathing"
        },
        { 
          month: 2, 
          event: "AI learned boundaries", 
          mood: 6, 
          description: "Technology adapted to respect sacred practices",
          practice: "Guided smudging"
        },
        { 
          month: 3, 
          event: "Hospital-tradition bridge", 
          mood: 7, 
          description: "Used traditional practices during nursing shifts",
          practice: "Workplace wellness"
        },
        { 
          month: 4, 
          event: "Colleague education", 
          mood: 8, 
          description: "Shared appropriate practices with healthcare team",
          practice: "Cultural bridge building"
        },
        { 
          month: 5, 
          event: "Community return", 
          mood: 9, 
          description: "Brought integrated approach back to reservation",
          practice: "Community health leadership"
        },
        { 
          month: 6, 
          event: "Wellness leadership", 
          mood: 10, 
          description: "Leading community wellness initiatives with technology",
          practice: "Traditional-modern integration"
        }
      ]
    }
  ];

  const currentStory = timelineStories[selectedStory];

  return (
    <section className="py-16 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-text-primary mb-4">
            Transformation Timelines
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Follow the gradual wellness improvements of our community members 
            as they integrate cultural practices with AI guidance.
          </p>
        </div>

        {/* Story Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 p-2 bg-background rounded-brand shadow-gentle">
            {timelineStories.map((story, index) => (
              <button
                key={index}
                onClick={() => setSelectedStory(index)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-brand-sm transition-whisper ${
                  selectedStory === index
                    ? 'bg-primary text-white shadow-gentle'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-sm font-medium">{story.name}</div>
                  <div className="text-xs opacity-80">{story.culture}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 rounded-full"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {currentStory.timeline.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-background rounded-brand shadow-gentle p-6 breathing">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary-700">
                          Month {event.month}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Icon name="Heart" size={16} className="text-accent" />
                          <span className="text-sm font-medium text-accent">
                            Mood: {event.mood}/10
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                        {event.event}
                      </h3>
                      
                      <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-xs">
                        <Icon name="Leaf" size={14} className="text-sage" />
                        <span className="text-sage font-medium">{event.practice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-gentle transition-whisper ${
                      event.mood <= 3 ? 'bg-error' :
                      event.mood <= 6 ? 'bg-warning' :
                      event.mood <= 8 ? 'bg-secondary' : 'bg-success'
                    }`}>
                      <span className="text-white font-semibold text-sm">
                        {event.mood}
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mood Progress Chart */}
          <div className="mt-16 bg-background rounded-brand shadow-gentle p-6">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6 text-center">
              Wellness Progress Over Time
            </h3>
            
            <div className="relative h-32">
              <svg className="w-full h-full" viewBox="0 0 600 120">
                {/* Grid Lines */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((line) => (
                  <line
                    key={line}
                    x1="50"
                    y1={120 - (line * 10)}
                    x2="550"
                    y2={120 - (line * 10)}
                    stroke="#E5E7EB"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                ))}
                
                {/* Progress Line */}
                <polyline
                  points={currentStory.timeline.map((event, index) => 
                    `${50 + (index * 100)},${120 - (event.mood * 10)}`
                  ).join(' ')}
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* Data Points */}
                {currentStory.timeline.map((event, index) => (
                  <circle
                    key={index}
                    cx={50 + (index * 100)}
                    cy={120 - (event.mood * 10)}
                    r="4"
                    fill="#9999FF"
                    stroke="white"
                    strokeWidth="2"
                  />
                ))}
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E6E6FA" />
                    <stop offset="50%" stopColor="#87CEEB" />
                    <stop offset="100%" stopColor="#FFB6C1" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Y-axis Labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-text-secondary py-2">
                <span>10</span>
                <span>5</span>
                <span>0</span>
              </div>
              
              {/* X-axis Labels */}
              <div className="absolute bottom-0 left-12 right-12 flex justify-between text-xs text-text-secondary">
                {currentStory.timeline.map((event, index) => (
                  <span key={index}>M{event.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationTimeline;