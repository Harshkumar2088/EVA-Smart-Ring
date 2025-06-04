import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ResearchPartnership = ({ partner }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-success/20 text-success';
      case 'Partnership':
        return 'bg-primary/20 text-primary-700';
      default:
        return 'bg-text-secondary/20 text-text-secondary';
    }
  };

  return (
    <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle transition-whisper hover:shadow-gentle-lg breathing">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-brand overflow-hidden flex-shrink-0">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-1 truncate">
            {partner.name}
          </h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-text-secondary">{partner.type}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(partner.status)}`}>
              {partner.status}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Focus Area</span>
          </div>
          <p className="text-sm text-text-secondary pl-6">{partner.focus}</p>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Icon name="Handshake" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-text-primary">Collaboration</span>
          </div>
          <p className="text-sm text-text-secondary pl-6">{partner.collaboration}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-primary/10">
          <div className="flex items-center space-x-1 text-sm text-text-secondary">
            <Icon name="BookOpen" size={14} />
            <span>{partner.publications} publications</span>
          </div>
          <button className="px-3 py-1 bg-plum text-white rounded-brand-sm text-sm transition-gentle hover:shadow-gentle">
            <Icon name="ExternalLink" size={12} className="inline mr-1" />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchPartnership;