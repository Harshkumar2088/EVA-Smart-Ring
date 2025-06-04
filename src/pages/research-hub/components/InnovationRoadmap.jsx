import React from 'react';
import Icon from 'components/AppIcon';

const InnovationRoadmap = ({ roadmapItems }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'in-progress':
        return 'Clock';
      case 'planned':
        return 'Calendar';
      default:
        return 'Circle';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'in-progress':
        return 'text-warning';
      case 'planned':
        return 'text-primary';
      default:
        return 'text-text-secondary';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success/20';
      case 'in-progress':
        return 'bg-warning/20';
      case 'planned':
        return 'bg-primary/20';
      default:
        return 'bg-text-secondary/20';
    }
  };

  return (
    <div className="space-y-8">
      {roadmapItems.map((quarter, index) => (
        <div key={quarter.quarter} className="relative">
          {/* Timeline Line */}
          {index < roadmapItems.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-full bg-primary/20"></div>
          )}
          
          <div className="flex items-start space-x-6">
            {/* Timeline Dot */}
            <div className={`w-12 h-12 rounded-full ${getStatusBg(quarter.status)} flex items-center justify-center flex-shrink-0 breathing`}>
              <Icon 
                name={getStatusIcon(quarter.status)} 
                size={24} 
                className={getStatusColor(quarter.status)} 
              />
            </div>

            {/* Content */}
            <div className="flex-1 bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  {quarter.quarter}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusBg(quarter.status)} ${getStatusColor(quarter.status)}`}>
                  {quarter.status.replace('-', ' ')}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quarter.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 p-3 bg-background/50 rounded-brand-sm">
                    <Icon 
                      name={quarter.status === 'completed' ? 'Check' : quarter.status === 'in-progress' ? 'Loader' : 'Circle'} 
                      size={16} 
                      className={`mt-0.5 flex-shrink-0 ${getStatusColor(quarter.status)}`} 
                    />
                    <span className="text-sm text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InnovationRoadmap;