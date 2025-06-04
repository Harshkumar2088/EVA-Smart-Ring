import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CustomerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Wellness Coach',
      location: 'San Francisco, CA',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      content: `The WellnessRing Pro has completely transformed how I understand my emotional patterns. As a wellness coach, I've tried many devices, but this one stands out for its accuracy and insights. The real-time emotion detection helps me guide my clients better and manage my own stress levels throughout the day.

The battery life is exceptional - I only charge it once a week, and the sleep tracking has revealed patterns I never knew existed. The companion app is intuitive and the AI insights are genuinely helpful, not just generic advice.`,
      helpful: 47,
      images: [
        'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=200&fit=crop','https://images.unsplash.com/photo-1544117519-31a4b719223d?w=200&h=200&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',role: 'Software Engineer',location: 'Austin, TX',avatar: 'https://randomuser.me/api/portraits/men/45.jpg',rating: 5,date: '1 month ago',
      verified: true,
      content: `I was skeptical about emotional tracking technology, but the WellnessRing Pro has proven me wrong. The stress detection is incredibly accurate - it often alerts me to rising stress levels before I'm consciously aware of them. The meditation guidance feature has become part of my daily routine. The ring vibrates gently when it detects I need a breathing break, and the guided exercises are perfectly timed. It's like having a personal wellness coach on my finger.`,
      helpful: 32,
      images: []
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',role: 'Clinical Psychologist',location: 'Boston, MA',avatar: 'https://randomuser.me/api/portraits/women/28.jpg',rating: 4,date: '3 weeks ago',
      verified: true,
      content: `From a clinical perspective, the WellnessRing Pro offers valuable insights into physiological markers of emotional states. I've recommended it to several patients dealing with anxiety and stress management.

The data visualization in the app is comprehensive yet easy to understand. My patients appreciate being able to track their progress objectively. The only minor issue is that it takes a few days to calibrate to individual patterns, but once it does, the accuracy is impressive.`,
      helpful: 28,
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop'
      ]
    },
    {
      id: 4,
      name: 'James Park',
      role: 'Fitness Enthusiast',
      location: 'Seattle, WA',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
      rating: 5,
      date: '1 week ago',
      verified: true,
      content: `I've been using fitness trackers for years, but the WellnessRing Pro adds a whole new dimension to health monitoring. The heart rate variability tracking during workouts helps me optimize my training intensity.

What surprised me most is how it tracks recovery and suggests when I should take rest days. The sleep analysis is incredibly detailed, showing how my emotional state affects sleep quality. It's become an essential part of my fitness routine.`,
      helpful: 19,
      images: []
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary">
          Customer Reviews
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                className="text-accent fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-text-secondary">4.8 out of 5 (1,247 reviews)</span>
        </div>
      </div>

      {/* Featured Review */}
      <div className="bg-background border border-border-light rounded-organic-lg p-6 lg:p-8 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <Image
              src={currentReview.avatar}
              alt={currentReview.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-body font-semibold text-text-primary">{currentReview.name}</h3>
                {currentReview.verified && (
                  <div className="flex items-center space-x-1 bg-success-light text-success-dark px-2 py-0.5 rounded-organic text-xs">
                    <Icon name="CheckCircle" size={12} />
                    <span>Verified Purchase</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-text-secondary">{currentReview.role} • {currentReview.location}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={i < currentReview.rating ? 'text-accent fill-current' : 'text-text-tertiary'}
                    />
                  ))}
                </div>
                <span className="text-xs text-text-secondary">{currentReview.date}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 flex items-center justify-center border border-border rounded-organic text-text-secondary hover:text-text-primary hover:border-primary-300 gentle-transition haptic-feedback"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 flex items-center justify-center border border-border rounded-organic text-text-secondary hover:text-text-primary hover:border-primary-300 gentle-transition haptic-feedback"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-text-secondary mb-4">
          <p className="mb-4">{currentReview.content}</p>
        </div>

        {currentReview.images.length > 0 && (
          <div className="flex space-x-3 mb-4">
            {currentReview.images.map((image, index) => (
              <div key={index} className="w-20 h-20 rounded-organic overflow-hidden">
                <Image
                  src={image}
                  alt={`Review image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border-light">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-text-primary gentle-transition">
              <Icon name="ThumbsUp" size={14} />
              <span>Helpful ({currentReview.helpful})</span>
            </button>
            <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-text-primary gentle-transition">
              <Icon name="MessageCircle" size={14} />
              <span>Reply</span>
            </button>
          </div>
          <span className="text-xs text-text-tertiary">
            {currentTestimonial + 1} of {testimonials.length}
          </span>
        </div>
      </div>

      {/* Review Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="font-body font-semibold text-text-primary mb-4">Rating Breakdown</h3>
          <div className="space-y-3">
            {[
              { stars: 5, count: 892, percentage: 72 },
              { stars: 4, count: 234, percentage: 19 },
              { stars: 3, count: 87, percentage: 7 },
              { stars: 2, count: 23, percentage: 2 },
              { stars: 1, count: 11, percentage: 1 }
            ].map((rating) => (
              <div key={rating.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-16">
                  <span className="text-sm text-text-secondary">{rating.stars}</span>
                  <Icon name="Star" size={12} className="text-accent fill-current" />
                </div>
                <div className="flex-1 bg-surface rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full gentle-transition"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-text-secondary w-12 text-right">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-body font-semibold text-text-primary mb-4">Most Mentioned</h3>
          <div className="space-y-2">
            {[
              { feature: 'Battery Life', mentions: 156 },
              { feature: 'Accuracy', mentions: 134 },
              { feature: 'Comfort', mentions: 98 },
              { feature: 'App Quality', mentions: 87 },
              { feature: 'Design', mentions: 76 }
            ].map((item) => (
              <div key={item.feature} className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">{item.feature}</span>
                <span className="text-text-primary font-medium">{item.mentions}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;