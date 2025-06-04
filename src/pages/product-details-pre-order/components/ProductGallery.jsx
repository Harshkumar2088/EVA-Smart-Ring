import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProductGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const productImages = [
    {
      id: 1,
      url: 'https://i5.walmartimages.com/seo/Smart-Ring-Fitness-Ring-Smart-Rings-for-Men-Women-IP68-Tracking-Ring-with-Pedometer-Calories-Sleep-Smart-Ring-Android-IOS-Warehouse-Clearance_1be6cea6-0938-4648-b546-ea9ee9070a00.109137bf67b4e68c0fc33a558a1892d5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF=crop',
      alt: 'WellnessRing Pro - Front View',
      type: 'main'
    },
    {
      id: 2,
      url: 'https://image.made-in-china.com/226f3j00KrVCgEvqCmca/Fashion-Multi-Functions-Sports-Rose-Gold-Silver-Black-Golden-NFC-Smart-Ring-with-Bluetooth-for-Ios-and-Android-Phone.webp',
      alt: 'Ring Pro - Side Profile',
      type: 'detail'
    },
    {
      id: 3,
      url: 'https://image.made-in-china.com/226f3j00sulMzgenfmcE/Fashion-Multi-Functions-Sports-Rose-Gold-Silver-Black-Golden-NFC-Smart-Ring-with-Bluetooth-for-Ios-and-Android-Phone.webp',
      alt: 'WellnessRing Pro - Charging Dock',
      type: 'accessory'
    },
    {
      id: 4,
      url: 'https://www.colmi.info/cdn/shop/files/COLMI_R09_Smart_ring_Advanced_Multi-Sensor_Technology_1.jpg?v=1732861875&width=1500',
      alt: 'WellnessRing Pro - App Interface',
      type: 'app'
    },
    {
      id: 5,
      url: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-2007-2000,pr-true,f-auto,q-80/cms/product_variant/d2172301-8a32-400a-aeb7-4f9ee9ab1d8c/boAt-SmartRing-Active-w-Health-Monitor-Magnetic-Charging-Case-Crest-App-Size-11-Radiant-Silver-.jpg',
      alt: 'WellnessRing Pro - Lifestyle Shot',
      type: 'lifestyle'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-square bg-surface rounded-organic-lg overflow-hidden group">
        <Image
          src={productImages[currentImageIndex].url}
          alt={productImages[currentImageIndex].alt}
          className={`w-full h-full object-cover gentle-transition cursor-zoom-in ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          onClick={toggleZoom}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center gentle-transition haptic-feedback opacity-0 group-hover:opacity-100"
        >
          <Icon name="ChevronLeft" size={20} className="text-text-primary" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center gentle-transition haptic-feedback opacity-0 group-hover:opacity-100"
        >
          <Icon name="ChevronRight" size={20} className="text-text-primary" />
        </button>

        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-background bg-opacity-80 px-3 py-1 rounded-organic text-sm text-text-secondary opacity-0 group-hover:opacity-100 gentle-transition">
          <Icon name="ZoomIn" size={16} className="inline mr-1" />
          Click to zoom
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-background bg-opacity-80 px-3 py-1 rounded-organic text-sm text-text-secondary">
          {currentImageIndex + 1} / {productImages.length}
        </div>

        {/* 360° View Badge */}
        <div className="absolute top-4 left-4 bg-primary text-text-inverse px-3 py-1 rounded-organic text-sm font-medium flex items-center space-x-1">
          <Icon name="RotateCw" size={14} />
          <span>360° View</span>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-2 lg:gap-3">
        {productImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentImageIndex(index)}
            className={`aspect-square rounded-organic overflow-hidden border-2 gentle-transition haptic-feedback ${
              currentImageIndex === index
                ? 'border-primary' :'border-border hover:border-primary-300'
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Type Indicators */}
      <div className="flex flex-wrap gap-2">
        {[
          { type: 'main', label: 'Product', icon: 'Package' },
          { type: 'detail', label: 'Details', icon: 'Eye' },
          { type: 'accessory', label: 'Accessories', icon: 'Plus' },
          { type: 'app', label: 'App', icon: 'Smartphone' },
          { type: 'lifestyle', label: 'Lifestyle', icon: 'User' }
        ].map((category) => (
          <button
            key={category.type}
            onClick={() => {
              const index = productImages.findIndex(img => img.type === category.type);
              if (index !== -1) setCurrentImageIndex(index);
            }}
            className={`flex items-center space-x-1 px-3 py-1 rounded-organic text-xs font-medium gentle-transition haptic-feedback ${
              productImages[currentImageIndex].type === category.type
                ? 'bg-primary text-text-inverse' :'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-hover'
            }`}
          >
            <Icon name={category.icon} size={12} />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile Swipe Indicators */}
      <div className="lg:hidden flex justify-center space-x-2 mt-4">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full gentle-transition ${
              currentImageIndex === index ? 'bg-primary' : 'bg-text-tertiary'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;