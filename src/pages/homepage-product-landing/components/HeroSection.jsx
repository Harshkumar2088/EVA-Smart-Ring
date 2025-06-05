import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-background to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-body font-medium text-sm">
                <Icon name="Sparkles" size={16} />
                <span>Revolutionary Wellness Technology</span>
              </span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight">
              Turn Emotional Intelligence into
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                 Superpower for Mental wellness
              </span>
            </h1>
            
            <p className="font-body text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the power of emotional awareness with WellnessRing - the smart ring that tracks your emotional patterns, provides personalized insights, and guides you toward better mental wellness.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/product-details-pre-order"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-primary-600 shadow-soft-elevation-2"
              >
                <Icon name="ShoppingCart" size={20} />
                <span>Pre-Order Now</span>
              </Link>
              
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-primary text-primary rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-primary hover:text-text-inverse">
                <Icon name="Play" size={20} />
                <span>Watch Demo</span>
              </button>
            </div> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-2xl text-text-primary">10K+</div>
                <div className="font-body text-sm text-text-secondary">Early Adopters</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-2xl text-text-primary">95%</div>
                <div className="font-body text-sm text-text-secondary">Satisfaction Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-2xl text-text-primary">24/7</div>
                <div className="font-body text-sm text-text-secondary">Monitoring</div>
              </div>
            </div> */}
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10 max-w-lg mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20 scale-110"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-soft-elevation-3">
                  <Image
                    src="https://i5.walmartimages.com/seo/Smart-Ring-Fitness-Ring-Smart-Rings-for-Men-Women-IP68-Tracking-Ring-with-Pedometer-Calories-Sleep-Smart-Ring-Android-IOS-Warehouse-Clearance_1be6cea6-0938-4648-b546-ea9ee9070a00.109137bf67b4e68c0fc33a558a1892d5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                    alt="WellnessRing Smart Ring"
                    className="w-full h-auto rounded-2xl"
                  />
                  
                  {/* Floating Elements */}
                  {/* <div className="absolute -top-4 -right-4 bg-accent text-text-inverse px-4 py-2 rounded-full font-body font-semibold text-sm shadow-soft-elevation-2">
                    $299
                  </div> */}
                  
                  {/* <div className="absolute -bottom-4 -left-4 bg-success text-text-inverse px-4 py-2 rounded-full font-body font-medium text-sm shadow-soft-elevation-2 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} /> */}
                    {/* <span>FDA Approved</span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {/* <div className="absolute top-10 -left-6 bg-background rounded-organic p-4 shadow-soft-elevation-2 max-w-xs hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={20} color="#4A90A4" />
                </div>
                <div>
                  <div className="font-body font-semibold text-text-primary text-sm">Heart Rate</div>
                  <div className="font-body text-text-secondary text-xs">72 BPM</div>
                </div>
              </div>
            </div> */}

            {/* <div className="absolute bottom-10 -right-6 bg-background rounded-organic p-4 shadow-soft-elevation-2 max-w-xs hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Icon name="Brain" size={20} color="#7B9E87" />
                </div>
                <div>
                  <div className="font-body font-semibold text-text-primary text-sm">Stress Level</div>
                  <div className="font-body text-text-secondary text-xs">Low</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} color="var(--color-text-secondary)" />
      </div> */}
    </section>
  );
};

export default HeroSection;