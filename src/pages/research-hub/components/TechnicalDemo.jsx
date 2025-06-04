import React from 'react';
import Icon from 'components/AppIcon';

const TechnicalDemo = ({ demo, onSelect }) => {
  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner':
        return 'bg-success/20 text-success';
      case 'Intermediate':
        return 'bg-warning/20 text-warning';
      case 'Advanced':
        return 'bg-error/20 text-error';
      default:
        return 'bg-text-secondary/20 text-text-secondary';
    }
  };

  const getDemoIcon = (type) => {
    switch (type) {
      case 'Interactive':
        return 'Play';
      case 'Visualization':
        return 'BarChart3';
      case 'Algorithm':
        return 'Cpu';
      default:
        return 'Code';
    }
  };

  return (
    <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle transition-whisper hover:shadow-gentle-lg cursor-pointer whisper-ripple"
         onClick={() => onSelect(demo)}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-brand flex items-center justify-center">
          <Icon name={getDemoIcon(demo.type)} size={24} className="text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(demo.complexity)}`}>
          {demo.complexity}
        </span>
      </div>

      <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
        {demo.title}
      </h3>
      
      <p className="text-text-secondary text-sm mb-4">
        {demo.description}
      </p>

      <div className="space-y-3">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Code" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2 pl-6">
            {demo.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-primary/10 text-primary-700 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-primary/10">
          <span className="text-sm text-text-secondary capitalize">{demo.type} Demo</span>
          <button className="px-4 py-2 bg-plum text-white rounded-brand-sm text-sm transition-gentle hover:shadow-gentle">
            <Icon name="Play" size={14} className="inline mr-1" />
            Launch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDemo;