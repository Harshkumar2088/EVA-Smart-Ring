import React, { useState, useEffect } from 'react';

import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import CulturalIntelligenceSection from './components/CulturalIntelligenceSection';
import ProductShowcaseSection from './components/ProductShowcaseSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const HomepageProductLanding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center breathing-animation">
            <Icon name="Heart" size={32} color="white" />
          </div>
          <p className="font-body text-text-secondary">Loading your wellness journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      <HeroSection />
      <HowItWorksSection />
      <CulturalIntelligenceSection />
      <ProductShowcaseSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomepageProductLanding;