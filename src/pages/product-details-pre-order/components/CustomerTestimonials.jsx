import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CustomerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Anand Sharma',
      role: 'Wellness Coach',
      location: 'New Delhi',
      avatar: './assets/images/AnandSharma.png',
      rating: 5,
      date: '1 weeks ago',
      verified: true,
      content: `This app has become my safe space. The journaling feels like I'm actually being heard, and the companion's replies are warm and nonjudgmental. I love how the ring tracks my sleep and stress — the app then gently nudges me when I need rest. It feels deeply personal and intuitive.`,
      // helpful: 47,
      images: [
        'https://cdn.shopify.com/s/files/1/0015/6932/5091/files/smart-ring-advanced-health-monitoring-with-heart-rate-spo2-ip68-waterproof-long-lasting-battery-app-control-and-elegant-rose-gold-design-by-electroniksindia-481.webp',
        'https://s.alicdn.com/@sc04/kf/H65e3696306ca4407872df7940b4d93beE.jpg_720x720q50.jpg'
      ]
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      role: 'Software Engineer',
      location: 'Bangalore',
      avatar: './assets/images/RahulMehta.png',
      rating: 5,
      date: '7 days ago',
      verified: true,
      content: `I didn’t think an app could understand me like this. It connects my mental state with my sleep and heart rate, then gives me insights that make complete sense. The design is smooth, calming, and not overwhelming. I check in daily now — it’s like having a quiet companion in my pocket.`,
      // helpful: 32,
      images: ['https://ae01.alicdn.com/kf/Sd9d32933d890419f8b4c16980c9f91d8A.jpg_640x640q90.jpg']
    },
    {
      id: 3,
      name: 'Shreyas Iyer',
      role: 'Wellness Coach',
      location: 'Chennai',
      avatar: './assets/images/ShreyasIyer.png',
      rating: 4,
      date: '5 days ago',
      verified: true,
      content: `I used to struggle with consistency in journaling, but this app makes it feel effortless. It actually understands cultural nuances, and the responses are so comforting. My smart ring syncing with the app helps me see patterns between my emotions and sleep. It doesn’t feel robotic — it feels thoughtful.`,
      // helpful: 28,
      images: [
        'https://cdn.shopify.com/s/files/1/0015/6932/5091/files/smart-ring-advanced-health-monitoring-with-heart-rate-spo2-ip68-waterproof-long-lasting-battery-app-control-and-elegant-rose-gold-design-by-electroniksindia-481.webp','https://media.jaycar.com.au/product/images/QC3160_smart-ring-with-charging-case-large-black_157822.jpg'
      ]
    },
    {
      id: 4,
      name: 'Aman Joshi',
      role: 'Software Engineer',
      location: 'Mumbai',
      avatar: './assets/images/AmanJoshi.png',
      rating: 5,
      date: '1 week ago',
      verified: true,
      content: `The ring and app combo is brilliant. It tracks my heart rate and sleep without me doing anything, and the app uses that to gently guide me. When I’m feeling low, I get caring suggestions, not generic advice. It's respectful, private, and really smart. Easily one of my best purchases.`,
      // helpful: 19,
      images: ['https://s.alicdn.com/@sc04/kf/H65e3696306ca4407872df7940b4d93beE.jpg_720x720q50.jpg']
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
          <span className="text-sm text-text-secondary">4.8 out of 5 (19 reviews)</span>
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
        {/* <div className="lg:col-span-2">
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
        </div> */}

        {/* <div>
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
        </div> */}
      </div>
    </section>
  );
};

export default CustomerTestimonials;