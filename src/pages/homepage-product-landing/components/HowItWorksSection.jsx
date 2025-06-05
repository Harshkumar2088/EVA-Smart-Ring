import React from 'react';
import Icon from 'components/AppIcon';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "Smartphone",
      title: "Download & Setup",
      description: "Download the WellnessRing app and pair your ring in under 2 minutes. Our guided setup ensures optimal sensor calibration for your unique biometric patterns."
    },
    {
      id: 2,
      icon: "Activity",
      title: "Continuous Monitoring",
      description: "Wear your ring 24/7 as it silently tracks heart rate variability, skin temperature, and movement patterns to understand your emotional and physical state."
    },
    {
      id: 3,
      icon: "Brain",
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze your biometric data to identify emotional patterns, stress triggers, and wellness opportunities unique to your lifestyle."
    },
    {
      id: 4,
      icon: "TrendingUp",
      title: "Personalized Insights",
      description: "Receive daily insights, mood predictions, and personalized recommendations to improve your emotional intelligence and overall well-being."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-6">
            How WellnessRing Works
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Experience the future of emotional wellness with our simple 4-step process that transforms your daily routine into a journey of self-discovery and growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 text-center group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-text-inverse rounded-full font-heading font-bold text-lg mb-6 group-hover:scale-110 gentle-transition">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-organic flex items-center justify-center group-hover:shadow-soft-elevation-2 gentle-transition">
                  <Icon name={step.icon} size={32} color="#4A90A4" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-surface rounded-organic">
            <Icon name="Clock" size={20} color="var(--color-text-secondary)" />
            <span className="font-body text-text-secondary">Setup takes less than 5 minutes</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;