import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Clinical Psychologist",
      location: "San Francisco, CA",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      quote: `WellnessRing has revolutionized how I understand my patients' emotional patterns. The data insights are incredibly accurate and have helped me provide more personalized treatment plans. It's like having a 24/7 emotional health monitor that actually works.`,
      highlight: "Helped 200+ patients improve emotional awareness"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Software Engineer",
      location: "Austin, TX",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      quote: `As someone who struggles with work-life balance, WellnessRing has been a game-changer. It alerts me when my stress levels spike and suggests breathing exercises. I've reduced my anxiety by 60% in just 3 months of use.`,
      highlight: "60% reduction in anxiety levels"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Yoga Instructor",
      location: "Miami, FL",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      quote: `I recommend WellnessRing to all my students. It perfectly complements mindfulness practices and provides objective data about emotional states. The cultural sensitivity in its insights makes it suitable for my diverse clientele.`,
      highlight: "Recommended to 500+ yoga students"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Executive Coach",
      location: "Seattle, WA",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      quote: `The emotional intelligence insights from WellnessRing have enhanced my coaching sessions tremendously. My clients can now track their progress objectively, leading to better outcomes and increased self-awareness.`,
      highlight: "Improved coaching outcomes by 40%"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Users" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "50+", label: "Countries" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-background to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-6">
            Trusted by Wellness Professionals
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Join thousands of users who have transformed their emotional intelligence and overall well-being with WellnessRing.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-body text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-background rounded-organic-lg p-8 lg:p-12 shadow-soft-elevation-2">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Quote */}
                <blockquote className="font-body text-lg lg:text-xl text-text-primary leading-relaxed mb-6 italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="#E8B86D" className="fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="mb-4">
                  <h4 className="font-heading font-semibold text-lg text-text-primary">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="font-body text-text-secondary">
                    {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                  </p>
                </div>

                {/* Highlight */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success-light text-success-dark rounded-full font-body font-medium text-sm">
                  <Icon name="CheckCircle" size={16} />
                  <span>{testimonials[activeTestimonial].highlight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-soft-elevation-2 flex items-center justify-center text-text-secondary hover:text-text-primary gentle-transition haptic-feedback"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-soft-elevation-2 flex items-center justify-center text-text-secondary hover:text-text-primary gentle-transition haptic-feedback"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full gentle-transition ${
                index === activeTestimonial ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-organic p-6 shadow-soft-elevation-1 hover:shadow-soft-elevation-2 gentle-transition">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-body font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="font-body text-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} color="#E8B86D" className="fill-current" />
                ))}
              </div>
              
              <blockquote className="font-body text-text-secondary text-sm leading-relaxed">
                "{testimonial.quote.substring(0, 120)}..."
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;