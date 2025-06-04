import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: "Zap",
      title: "Early Access",
      description: "Be the first to know about new features and updates"
    },
    {
      icon: "Gift",
      title: "Exclusive Offers",
      description: "Special discounts and promotions for subscribers"
    },
    {
      icon: "BookOpen",
      title: "Wellness Tips",
      description: "Weekly insights on emotional intelligence and wellness"
    },
    {
      icon: "Users",
      title: "Community",
      description: "Join our community of wellness enthusiasts"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-success-light to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-success rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={40} color="white" />
          </div>
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">
            Welcome to the WellnessRing Community!
          </h2>
          <p className="font-body text-lg text-text-secondary mb-8">
            Thank you for subscribing! You'll receive your first wellness insight within 24 hours.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-surface"
          >
            <Icon name="ArrowLeft" size={16} />
            <span>Subscribe Another Email</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-body font-medium text-sm">
                <Icon name="Mail" size={16} />
                <span>Stay Connected</span>
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-6">
              Join Our Wellness Community
            </h2>
            
            <p className="font-body text-lg text-text-secondary mb-8">
              Get exclusive insights, early access to new features, and personalized wellness tips delivered to your inbox. Join over 10,000 wellness enthusiasts on their emotional intelligence journey.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition font-body"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Icon name="Loader2" size={20} className="animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="X" size={16} />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} />
                <span>Privacy protected</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background rounded-organic p-6 shadow-soft-elevation-1 hover:shadow-soft-elevation-2 gentle-transition text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-organic flex items-center justify-center">
                  <Icon name={benefit.icon} size={24} color="#4A90A4" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-background rounded-organic shadow-soft-elevation-1">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-background flex items-center justify-center"
                >
                  <Icon name="User" size={14} color="white" />
                </div>
              ))}
            </div>
            <span className="font-body text-text-secondary">
              Join 10,000+ subscribers getting weekly wellness insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;