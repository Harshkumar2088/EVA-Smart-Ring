import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const CulturalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const culturalEvents = [
    {
      id: 1,
      title: "World Meditation Day",
      date: "January 3",
      month: 0,
      culture: "Universal",
      type: "Global Observance",
      description: `A day dedicated to the practice of meditation across all cultures and traditions. Communities worldwide come together to share different meditation techniques, from Buddhist mindfulness to Indigenous grounding practices.

This observance celebrates the universal human need for inner peace and the diverse ways cultures have developed to achieve mental clarity and spiritual connection.`,
      practices: ["Guided meditation sessions", "Cultural meditation workshops", "Community peace circles"],
      color: "primary",
      icon: "Brain"
    },
    {
      id: 2,
      title: "Chinese New Year Wellness Traditions",
      date: "February 10-16",
      month: 1,
      culture: "Eastern",
      type: "Cultural Festival",
      description: `The Chinese New Year brings ancient wellness practices focused on renewal, balance, and family harmony. Traditional practices include Qi Gong exercises, herbal medicine preparations, and family meditation rituals.

This celebration emphasizes the connection between physical health, mental wellbeing, and spiritual renewal as communities prepare for the new lunar year.`,
      practices: ["Qi Gong morning exercises", "Traditional tea ceremonies", "Family blessing rituals"],
      color: "amber",
      icon: "Sun"
    },
    {
      id: 3,
      title: "Indigenous Healing Circle Month",
      date: "March 1-31",
      month: 2,
      culture: "Indigenous",
      type: "Cultural Awareness",
      description: `March is dedicated to honoring Indigenous healing practices and traditional medicine. Communities learn about the sacred relationship between nature, community, and individual wellness.

This month-long observance includes teachings about plant medicine, storytelling as healing, and the importance of community support in mental health.`,
      practices: ["Talking circles", "Plant medicine education", "Traditional storytelling"],
      color: "sage",
      icon: "Leaf"
    },
    {
      id: 4,
      title: "World Health Day - Cultural Perspectives",
      date: "April 7",
      month: 3,
      culture: "Universal",
      type: "Global Observance",
      description: `World Health Day with a focus on how different cultures define and pursue health and wellness. This day celebrates the diversity of healing traditions and their contributions to global health understanding.

Communities share their unique approaches to wellness, from Ayurvedic practices to African traditional medicine, creating a global tapestry of healing wisdom.`,
      practices: ["Cultural health fairs", "Traditional healing demonstrations", "Wellness practice exchanges"],
      color: "secondary",
      icon: "Heart"
    },
    {
      id: 5,
      title: "Mental Health Awareness Month",
      date: "May 1-31",
      month: 4,
      culture: "Universal",
      type: "Awareness Campaign",
      description: `May is dedicated to raising awareness about mental health across all cultures. This month emphasizes culturally-sensitive approaches to mental wellness and the importance of community support.

Special focus is given to how different cultures understand and address mental health, breaking down stigmas and promoting inclusive wellness practices.`,
      practices: ["Community mental health workshops", "Cultural therapy approaches", "Peer support circles"],
      color: "accent",
      icon: "Brain"
    },
    {
      id: 6,
      title: "Summer Solstice Wellness Celebrations",
      date: "June 21",
      month: 5,
      culture: "Universal",
      type: "Seasonal Observance",
      description: `The summer solstice is celebrated across cultures as a time of peak energy and renewal. Different traditions offer unique ways to harness this natural energy for personal and community wellness.

From Nordic midnight sun rituals to Native American sun dances, this day honors the life-giving power of the sun and its role in human wellbeing.`,
      practices: ["Sunrise meditation", "Solar energy healing", "Community outdoor activities"],
      color: "amber",
      icon: "Sun"
    }
  ];

  const filteredEvents = culturalEvents.filter(event => event.month === selectedMonth);

  const getCultureColor = (culture) => {
    switch (culture.toLowerCase()) {
      case 'eastern': return 'amber';
      case 'indigenous': return 'sage';
      case 'african': return 'accent';
      default: return 'primary';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Cultural Wellness Calendar
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Discover global wellness traditions, cultural holidays, and seasonal practices 
          that honor diverse approaches to health and healing throughout the year.
        </p>
      </div>

      {/* Month Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(index)}
            className={`px-4 py-2 rounded-brand font-medium transition-whisper whisper-ripple ${
              selectedMonth === index
                ? 'bg-primary/20 text-primary-700 shadow-gentle'
                : 'bg-surface/80 text-text-secondary hover:text-text-primary hover:bg-primary/10'
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Calendar Events */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className={`bg-background rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg cursor-pointer ${
              selectedEvent?.id === event.id ? 'ring-2 ring-primary/30' : ''
            }`}
            onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
          >
            <div className={`h-2 bg-gradient-to-r from-${event.color} to-${event.color}/60`}></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-${event.color}/20 flex items-center justify-center`}>
                    <Icon name={event.icon} size={24} className={`text-${event.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mt-1">
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{event.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Globe" size={14} />
                        <span>{event.culture}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <span className={`px-3 py-1 bg-${getCultureColor(event.culture)}/20 text-${getCultureColor(event.culture)} text-sm font-medium rounded-brand-sm`}>
                  {event.type}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                {event.description}
              </p>

              {selectedEvent?.id === event.id && (
                <div className="space-y-4 border-t border-primary/10 pt-4">
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary mb-2 flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} />
                      <span>Traditional Practices</span>
                    </h4>
                    <ul className="space-y-2">
                      {event.practices.map((practice, index) => (
                        <li key={index} className="flex items-center space-x-2 text-text-secondary">
                          <Icon name="Dot" size={12} className="text-primary" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary-700 rounded-brand-sm font-medium transition-gentle hover:bg-primary/20">
                      <Icon name="BookOpen" size={16} />
                      <span>Learn More</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-surface text-text-secondary rounded-brand-sm font-medium transition-gentle hover:bg-primary/10 hover:text-text-primary">
                      <Icon name="Calendar" size={16} />
                      <span>Add to Calendar</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-text-secondary">
                  Click to {selectedEvent?.id === event.id ? 'collapse' : 'expand'} details
                </div>
                <Icon 
                  name={selectedEvent?.id === event.id ? 'ChevronUp' : 'ChevronDown'} 
                  size={16} 
                  className="text-text-secondary" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface flex items-center justify-center">
            <Icon name="Calendar" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
            No Events This Month
          </h3>
          <p className="text-text-secondary">
            Check other months to discover cultural wellness celebrations and observances.
          </p>
        </div>
      )}

      {/* Cultural Wisdom Quote */}
      <div className="bg-cream/50 rounded-brand p-6 text-center">
        <blockquote className="text-lg font-accent text-text-primary italic mb-2">
          "Every culture holds keys to wellness that can benefit all humanity"
        </blockquote>
        <cite className="text-sm text-text-secondary">
          — Cultural Wellness Philosophy
        </cite>
      </div>
    </div>
  );
};

export default CulturalCalendar;