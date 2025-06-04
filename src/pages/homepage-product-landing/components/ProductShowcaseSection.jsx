import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProductShowcaseSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = [
    {
      src: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "WellnessRing Front View"
    },
    {
      src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "WellnessRing Side View"
    },
    {
      src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "WellnessRing App Interface"
    }
  ];

  const keyFeatures = [
    {
      icon: "Battery",
      title: "7-Day Battery Life",
      description: "Extended battery life with wireless charging capability"
    },
    {
      icon: "Droplets",
      title: "Waterproof Design",
      description: "Swim, shower, and exercise without worry - IPX8 rated"
    },
    {
      icon: "Smartphone",
      title: "Smart Connectivity",
      description: "Seamless sync with iOS and Android devices"
    },
    {
      icon: "Shield",
      title: "Medical Grade",
      description: "FDA-approved sensors with clinical accuracy"
    },
    {
      icon: "Palette",
      title: "Multiple Colors",
      description: "Available in 5 elegant colors to match your style"
    },
    {
      icon: "Zap",
      title: "Real-time Alerts",
      description: "Instant notifications for stress and wellness insights"
    }
  ];

  const specifications = [
    { label: "Material", value: "Titanium & Medical Silicone" },
    { label: "Weight", value: "4.2g" },
    { label: "Sizes", value: "6, 7, 8, 9, 10, 11, 12" },
    { label: "Sensors", value: "PPG, Temperature, Accelerometer" },
    { label: "Connectivity", value: "Bluetooth 5.0" },
    { label: "Warranty", value: "2 Years" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-6">
            Meet WellnessRing Pro
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Engineered with precision and designed for comfort, WellnessRing Pro combines cutting-edge technology with elegant aesthetics to deliver unparalleled wellness insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Images */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-organic-lg p-8 mb-6">
              <Image
                src={productImages[activeImageIndex].src}
                alt={productImages[activeImageIndex].alt}
                className="w-full h-96 object-cover rounded-organic"
              />
              
              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-3 h-3 rounded-full gentle-transition ${
                      index === activeImageIndex ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative rounded-organic overflow-hidden gentle-transition haptic-feedback ${
                    index === activeImageIndex ? 'ring-2 ring-primary' : 'hover:opacity-80'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-heading font-bold text-3xl text-text-primary">$299</span>
                <span className="font-body text-text-secondary line-through">$399</span>
                <span className="px-3 py-1 bg-accent text-text-inverse rounded-full font-body font-medium text-sm">
                  25% Off
                </span>
              </div>
              <p className="font-body text-text-secondary mb-6">
                Pre-order now and save $100. Limited time offer for early adopters.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-organic hover:bg-surface-hover gentle-transition">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={feature.icon} size={16} color="#4A90A4" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary text-sm">{feature.title}</h4>
                    <p className="font-body text-text-secondary text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/product-details-pre-order"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-text-inverse rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-primary-600 shadow-soft-elevation-2"
              >
                <Icon name="ShoppingCart" size={20} />
                <span>Pre-Order Now</span>
              </Link>
              
              <button className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 border border-border text-text-primary rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-surface">
                <Icon name="Heart" size={20} />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="RotateCcw" size={16} />
                <span>30-day returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-surface rounded-organic-lg p-8">
          <h3 className="font-heading font-semibold text-xl text-text-primary mb-6 text-center">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-border-light last:border-b-0">
                <span className="font-body text-text-secondary">{spec.label}</span>
                <span className="font-body font-medium text-text-primary">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;