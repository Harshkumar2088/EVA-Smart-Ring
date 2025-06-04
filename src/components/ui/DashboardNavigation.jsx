import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const DashboardNavigation = () => {
  const location = useLocation();

  const dashboardItems = [
    {
      label: 'Overview',
      path: '/user-dashboard-wellness-overview',
      icon: 'LayoutDashboard',
      description: 'Wellness summary and insights'
    },
    {
      label: 'Journal',
      path: '/digital-journal-voice-input',
      icon: 'BookOpen',
      description: 'Voice and text journaling'
    },
    {
      label: 'Insights',
      path: '/emotion-insights-analytics',
      icon: 'TrendingUp',
      description: 'Emotion analytics and trends'
    }
  ];

  const isActivePath = (path) => location.pathname === path;

  const isDashboardRoute = dashboardItems.some(item => location.pathname === item.path);

  if (!isDashboardRoute) {
    return null;
  }

  return (
    <div className="sticky top-16 lg:top-20 z-50 bg-background border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between lg:justify-start lg:space-x-8 py-3">
          {/* Mobile: Horizontal scrollable tabs */}
          <div className="flex lg:hidden overflow-x-auto space-x-4 w-full">
            {dashboardItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-organic gentle-transition haptic-feedback whitespace-nowrap ${
                  isActivePath(item.path)
                    ? 'bg-primary text-text-inverse' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="font-body font-medium text-sm">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop: Full width tabs */}
          <div className="hidden lg:flex items-center space-x-8 w-full">
            {dashboardItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-organic gentle-transition haptic-feedback group ${
                  isActivePath(item.path)
                    ? 'bg-primary-100 text-primary-700 border border-primary-200' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={18} 
                  className={`${
                    isActivePath(item.path) 
                      ? 'text-primary-600' :'text-text-tertiary group-hover:text-text-secondary'
                  } gentle-transition`}
                />
                <div className="flex flex-col">
                  <span className="font-body font-medium">{item.label}</span>
                  <span className={`text-xs ${
                    isActivePath(item.path) 
                      ? 'text-primary-600' :'text-text-tertiary group-hover:text-text-secondary'
                  } gentle-transition`}>
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Dashboard Actions */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto">
            <button className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface">
              <Icon name="Settings" size={18} />
            </button>
            <button className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface">
              <Icon name="Bell" size={18} />
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 bg-secondary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-secondary-600">
              <Icon name="Download" size={16} />
              <span className="font-body font-medium text-sm">Export</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavigation;