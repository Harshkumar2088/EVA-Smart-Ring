import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CulturalIntelligenceSection = () => {
  const features = [
    {
      icon: "Globe",
      title: "Global Wellness Insights",
      description: "Understand how cultural backgrounds influence emotional patterns and wellness practices across different communities."
    },
    {
      icon: "Users",
      title: "Community Connection",
      description: "Connect with like-minded individuals from diverse backgrounds who share similar wellness goals and emotional intelligence journeys."
    },
    {
      icon: "BookOpen",
      title: "Cultural Learning",
      description: "Access curated content about emotional intelligence practices from various cultures and traditions worldwide."
    },
    {
      icon: "Heart",
      title: "Inclusive Wellness",
      description: "Our AI adapts to cultural nuances in emotional expression, ensuring personalized insights that respect your cultural identity."
    }
  ];

  const testimonials = [
    // {
    //   id: 1,
    //   name: "Maria Rodriguez",
    //   location: "Barcelona, Spain",
    //   avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    //   quote: "WellnessRing helped me understand how my Mediterranean lifestyle affects my emotional patterns. The cultural insights are incredibly valuable."
    // },
    // {
    //   id: 2,
    //   name: "Kenji Tanaka",
    //   location: "Tokyo, Japan",
    //   avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    //   quote: "The ring respects Japanese concepts of emotional harmony while providing modern insights. It\'s perfectly balanced for my lifestyle."
    // },
    // {
    //   id: 3,
    //   name: "Amara Okafor",
    //   location: "Lagos, Nigeria",
    //   avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    //   quote: "Finally, a wellness device that understands African emotional expressions and community-centered well-being approaches."
    // }
  ];

  return (
    <section className="py-20 lg:py-20 bg-gradient-to-br from-secondary-50 via-background to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-body font-medium text-sm mb-6">
            <Icon name="Globe" size={16} />
            <span>Cultural Intelligence</span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-6">
            Wellness That Understands Your Culture
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            WellnessRing embraces the diversity of human emotional expression, providing culturally-aware insights that honor your background while promoting universal wellness principles.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-organic flex items-center justify-center group-hover:shadow-soft-elevation-2 gentle-transition haptic-feedback">
                <Icon name={feature.icon} size={32} color="#7B9E87" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        

        {/* Testimonials */}
        {/* <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-organic-lg p-6 shadow-soft-elevation-1 hover:shadow-soft-elevation-2 gentle-transition">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-body font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="font-body text-text-secondary text-sm">{testimonial.location}</p>
                </div>
              </div>
              <blockquote className="font-body text-text-secondary italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} color="#E8B86D" className="fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-background rounded-organic shadow-soft-elevation-1">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial) => (
                <Image
                  key={testimonial.id}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
          </div>
        </div> */}
      </div>
            {/* <span className="font-body text-text-secondary">Join 10,000+ users from 50+ countries</span> */}
    </section>
  );
};

export default CulturalIntelligenceSection;