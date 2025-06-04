import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CommunityContributions = () => {
  const [selectedContribution, setSelectedContribution] = useState(null);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const communityContributions = [
    {
      id: 1,
      title: "Morning Tea Meditation from My Grandmother",
      contributor: "Sarah Chen",
      culture: "Chinese",
      location: "San Francisco, CA",
      type: "Family Tradition",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=250&fit=crop",
      description: `My grandmother taught me this beautiful morning ritual that combines tea preparation with mindfulness meditation. It's been passed down through four generations in our family.

The practice involves mindfully preparing tea while setting intentions for the day, honoring our ancestors, and creating a moment of peace before the day begins.`,
      practice: `1. Begin by selecting your tea mindfully - my grandmother always said the tea chooses you
2. As you heat the water, take three deep breaths and think of your ancestors
3. While the tea steeps, hold the cup in both hands and set your intention for the day
4. Drink the first sip in silence, honoring the earth that grew the tea
5. Share gratitude for the wisdom passed down through generations`,
      benefits: ["Starts the day with mindfulness", "Connects with ancestral wisdom", "Creates peaceful morning routine"],
      tags: ["Tea ceremony", "Morning ritual", "Ancestral wisdom", "Mindfulness"],
      likes: 127,
      comments: 23,
      dateShared: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      title: "Ubuntu Circle for Workplace Stress",
      contributor: "Kwame Asante",
      culture: "Ghanaian",
      location: "London, UK",
      type: "Modern Adaptation",
      image: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=400&h=250&fit=crop",
      description: `I adapted the traditional Ubuntu philosophy to create healing circles in my workplace. When our team was struggling with stress and disconnection, we started weekly Ubuntu circles.

Ubuntu means 'I am because we are' - recognizing our interconnectedness. These circles have transformed our workplace culture and helped us support each other through difficult times.`,
      practice: `1. Gather in a circle during lunch break or after work
2. Begin with the Ubuntu greeting: "I see you, I hear you, I value you"
3. Each person shares one challenge and one gratitude
4. The circle responds with "We see you" after each sharing 5. End by standing together and saying "We are one"`,
      benefits: ["Builds team connection", "Reduces workplace stress", "Creates supportive community"],
      tags: ["Ubuntu", "Workplace wellness", "Community healing", "Team building"],
      likes: 89,
      comments: 15,
      dateShared: "1 month ago",
      verified: true
    },
    {
      id: 3,
      title: "Forest Bathing in Urban Parks",
      contributor: "Yuki Nakamura",
      culture: "Japanese",
      location: "Tokyo, Japan",
      type: "Urban Adaptation",
      image: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?w=400&h=250&fit=crop",
      description: `Living in Tokyo, I couldn't always access forests for traditional Shinrin-yoku. I developed a way to practice forest bathing in small urban parks and even with a single tree.

This adaptation maintains the essence of forest bathing while making it accessible to city dwellers who need nature connection but have limited access to forests.`,
      practice: `1. Find any green space - even a single tree works
2. Spend 5 minutes just observing without your phone
3. Touch the bark or leaves mindfully
4. Practice "soft gaze" - looking without focusing
5. Take 10 deep breaths, imagining you're breathing with the plants`,
      benefits: ["Accessible nature connection", "Reduces urban stress", "Improves focus and calm"],
      tags: ["Shinrin-yoku", "Urban wellness", "Nature connection", "City living"],
      likes: 156,
      comments: 31,
      dateShared: "3 days ago",
      verified: true
    },
    {
      id: 4,
      title: "Smudging Ceremony for New Beginnings",
      contributor: "Maria Gonzalez",
      culture: "Mexican Indigenous",
      location: "Phoenix, AZ",
      type: "Sacred Practice",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      description: `This is a traditional cleansing ceremony my abuela taught me, using sage and copal to clear negative energy and welcome new beginnings. I practice this during major life transitions.

It's important to approach this practice with respect and understanding of its sacred nature. This is not just about burning herbs - it's about intention, gratitude, and spiritual connection.`,
      practice: `1. Set clear intention for what you want to release and welcome
2. Light the sage or copal with respect and gratitude
3. Use a feather or your hand to guide the smoke around your body
4. Speak your intentions aloud or silently
5. Thank the plant spirits and your ancestors for their guidance`,
      benefits: ["Spiritual cleansing", "Marks transitions", "Connects with ancestral wisdom"],
      tags: ["Smudging", "Sacred ceremony", "Indigenous practice", "Spiritual cleansing"],
      likes: 203,
      comments: 45,
      dateShared: "1 week ago",
      verified: true
    }
  ];

  const handleContributionSelect = (contribution) => {
    setSelectedContribution(selectedContribution?.id === contribution.id ? null : contribution);
  };

  const getCultureColor = (culture) => {
    switch (culture.toLowerCase()) {
      case 'chinese': return 'amber';
      case 'ghanaian': return 'accent';
      case 'japanese': return 'sage';
      case 'mexican indigenous': return 'plum';
      default: return 'primary';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
            Community Contributions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Real wellness practices shared by our community members from around the world. 
            Each contribution is verified and honors the cultural tradition it represents.
          </p>
          
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper breathing"
          >
            Share Your Practice
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {communityContributions.map((contribution) => (
            <article
              key={contribution.id}
              className={`bg-surface/50 rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg cursor-pointer ${
                selectedContribution?.id === contribution.id ? 'ring-2 ring-primary/30' : ''
              }`}
              onClick={() => handleContributionSelect(contribution)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={contribution.image}
                  alt={contribution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-${getCultureColor(contribution.culture)}/90 text-white text-sm font-medium rounded-brand-sm`}>
                    {contribution.culture}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-background/90 text-text-primary text-sm font-medium rounded-brand-sm">
                    {contribution.type}
                  </span>
                </div>
                {contribution.verified && (
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-sage/90 text-white text-xs rounded-brand-sm">
                      <Icon name="CheckCircle" size={12} />
                      <span>Verified</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                      {contribution.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="User" size={14} />
                        <span>{contribution.contributor}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{contribution.location}</span>
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-text-secondary">
                    {contribution.dateShared}
                  </span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-4">
                  {contribution.description}
                </p>

                {selectedContribution?.id === contribution.id && (
                  <div className="space-y-6 border-t border-primary/10 pt-6">
                    {/* Practice Steps */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="List" size={16} />
                        <span>How to Practice</span>
                      </h4>
                      <div className="bg-cream/50 rounded-brand p-4">
                        <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                          {contribution.practice}
                        </p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Heart" size={16} />
                        <span>Benefits</span>
                      </h4>
                      <ul className="space-y-2">
                        {contribution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2 text-text-secondary text-sm">
                            <Icon name="CheckCircle" size={12} className="text-sage flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Tag" size={16} />
                        <span>Tags</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {contribution.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-primary/10 text-primary-700 text-xs rounded-brand-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-primary/10">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-accent transition-gentle">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{contribution.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-gentle">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{contribution.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-secondary transition-gentle">
                      <Icon name="Share" size={16} />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  
                  <div className="text-sm text-text-secondary">
                    {selectedContribution?.id === contribution.id ? 'Collapse' : 'Expand'}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Submission Guidelines */}
        <div className="mt-16 bg-cream/50 rounded-brand p-8">
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6 text-center">
            Sharing Guidelines
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-sage" />
              </div>
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                Respect & Honor
              </h4>
              <p className="text-text-secondary text-sm">
                Share practices with deep respect for their cultural origins and sacred nature.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                Authentic Experience
              </h4>
              <p className="text-text-secondary text-sm">
                Only share practices you have personally experienced and understand deeply.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                Community Benefit
              </h4>
              <p className="text-text-secondary text-sm">
                Focus on practices that can genuinely help others in their wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Wisdom Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl font-accent text-text-primary italic mb-4">
            "When we share our healing wisdom, we heal not just ourselves, but the world"
          </blockquote>
          <cite className="text-sm text-text-secondary">
            — Community Wisdom
          </cite>
        </div>
      </div>
    </section>
  );
};

export default CommunityContributions;