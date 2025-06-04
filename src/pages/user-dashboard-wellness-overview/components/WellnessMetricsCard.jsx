import React from 'react';
import Icon from 'components/AppIcon';

const WellnessMetricsCard = ({ metric }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'var(--color-primary)',
          trend: metric.trendDirection === 'up' ? 'text-secondary' : 'text-error'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          icon: 'var(--color-secondary)',
          trend: metric.trendDirection === 'up' ? 'text-secondary' : 'text-error'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'var(--color-accent)',
          trend: metric.trendDirection === 'up' ? 'text-secondary' : 'text-error'
        };
      default:
        return {
          bg: 'bg-primary-100',
          icon: 'var(--color-primary)',
          trend: metric.trendDirection === 'up' ? 'text-secondary' : 'text-error'
        };
    }
  };

  const colors = getColorClasses(metric.color);

  return (
    <div className="bg-background border border-border-light rounded-organic-lg p-4 lg:p-6 soft-elevation-1 gentle-transition haptic-feedback hover:soft-elevation-2">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 lg:w-12 lg:h-12 ${colors.bg} rounded-organic flex items-center justify-center`}>
          <Icon name={metric.icon} size={20} color={colors.icon} />
        </div>
        <div className="flex items-center space-x-1">
          <Icon 
            name={metric.trendDirection === 'up' ? 'TrendingUp' : 'TrendingDown'} 
            size={14} 
            className={colors.trend}
          />
          <span className={`text-xs font-medium ${colors.trend}`}>
            {metric.trend}
          </span>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-body font-medium text-text-secondary text-sm">
          {metric.title}
        </h3>
        <p className="font-heading font-bold text-lg lg:text-xl text-text-primary">
          {metric.value}
        </p>
        <p className="font-body text-text-tertiary text-xs">
          {metric.subValue}
        </p>
      </div>
    </div>
  );
};

export default WellnessMetricsCard;