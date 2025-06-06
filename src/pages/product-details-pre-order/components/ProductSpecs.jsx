import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ProductSpecs = ({ specifications, features }) => {
  const [activeTab, setActiveTab] = useState('specs');

  const tabs = [
    { id: 'specs', label: 'Specifications', icon: 'Settings' },
    { id: 'features', label: 'Features', icon: 'Star' },
    { id: 'compatibility', label: 'Compatibility', icon: 'Smartphone' }
  ];

  const compatibilityData = [
    // {
    //   platform: 'iOS',
    //   version: '14.0 or later',
    //   devices: 'iPhone 8 and newer',
    //   features: ['Full app functionality', 'Real-time sync', 'Voice commands', 'Health app integration'],
    //   icon: 'Smartphone'
    // },
    {
      platform: 'Android',
      version: '8.0 (API level 26) or later',
      devices: 'Most Android devices',
      features: ['Full app functionality', 'Real-time sync', 'Google Fit integration', 'Wear OS support'],
      icon: 'Smartphone'
    },
    {
      platform: 'Web Dashboard',
      version: 'Modern browsers',
      devices: 'Desktop & Tablet',
      features: ['Data visualization', 'Export reports', 'Advanced analytics', 'Team sharing'],
      icon: 'Monitor'
    }
  ];

  return (
    <section id="specifications">
      <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary mb-6">
        Technical Details
      </h2>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-surface rounded-organic p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-organic gentle-transition haptic-feedback flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-background text-primary shadow-soft-elevation-1'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span className="font-body font-medium text-sm lg:text-base">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-background rounded-organic-lg border border-border-light p-6 lg:p-8">
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex items-start justify-between py-3 border-b border-border-light last:border-b-0">
                <span className="font-body font-medium text-text-secondary flex-shrink-0 w-1/2">{key}</span>
                <span className="font-body text-text-primary text-right">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-surface rounded-organic">
                <Icon name="Check" size={18} className="text-success mt-0.5 flex-shrink-0" />
                <span className="font-body text-text-primary">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'compatibility' && (
          <div className="space-y-6">
            {compatibilityData.map((platform, index) => (
              <div key={index} className="border border-border-light rounded-organic p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-organic flex items-center justify-center">
                    <Icon name={platform.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-text-primary">{platform.platform}</h3>
                    <p className="text-sm text-text-secondary">{platform.version}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mb-4">{platform.devices}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sizing Guide */}
      <div id="sizing-guide" className="mt-12 bg-surface rounded-organic-lg p-6 lg:p-8">
        <h3 className="font-heading font-bold text-xl text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Ruler" size={20} className="text-primary" />
          <span>Ring Sizing Guide</span>
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-body font-semibold text-text-primary mb-4">How to Measure</h4>
            <ol className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start space-x-2">
                <span className="bg-primary text-text-inverse rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                <span>Wrap a string or paper strip around your finger</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-primary text-text-inverse rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                <span>Mark where the string overlaps</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-primary text-text-inverse rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                <span>Measure the length with a ruler</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="bg-primary text-text-inverse rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">4</span>
                <span>Compare with our size chart below</span>
              </li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-body font-semibold text-text-primary mb-4">Size Chart</h4>
            <div className="space-y-2">
              {[
                { size: 'S', circumference: '52mm', diameter: '16.5mm', us: '6-7' },
                { size: 'M', circumference: '57mm', diameter: '18.1mm', us: '8-9' },
                { size: 'L', circumference: '62mm', diameter: '19.8mm', us: '10-11' },
                { size: 'XL', circumference: '67mm', diameter: '21.3mm', us: '12-13' }
              ].map((size) => (
                <div key={size.size} className="grid grid-cols-4 gap-4 py-2 border-b border-border-light last:border-b-0 text-sm">
                  <span className="font-medium text-text-primary">{size.size}</span>
                  <span className="text-text-secondary">{size.circumference}</span>
                  <span className="text-text-secondary">{size.diameter}</span>
                  <span className="text-text-secondary">US {size.us}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;