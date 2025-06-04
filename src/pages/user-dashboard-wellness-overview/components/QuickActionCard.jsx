import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const QuickActionCard = ({ action }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'var(--color-primary)',
          hover: 'hover:bg-primary-200'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          icon: 'var(--color-secondary)',
          hover: 'hover:bg-secondary-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'var(--color-accent)',
          hover: 'hover:bg-accent-200'
        };
      default:
        return {
          bg: 'bg-primary-100',
          icon: 'var(--color-primary)',
          hover: 'hover:bg-primary-200'
        };
    }
  };

  const colors = getColorClasses(action.color);

  return (
    <Link
      to={action.path}
      className={`block bg-background border border-border-light rounded-organic-lg p-4 lg:p-6 soft-elevation-1 gentle-transition haptic-feedback hover:soft-elevation-2 ${colors.hover}`}
    >
      <div className="text-center space-y-3">
        <div className={`w-12 h-12 lg:w-16 lg:h-16 ${colors.bg} rounded-organic flex items-center justify-center mx-auto`}>
          <Icon name={action.icon} size={24} color={colors.icon} />
        </div>
        <div className="space-y-1">
          <h3 className="font-body font-semibold text-text-primary text-sm lg:text-base">
            {action.title}
          </h3>
          <p className="font-body text-text-secondary text-xs lg:text-sm">
            {action.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default QuickActionCard;