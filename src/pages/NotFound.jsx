import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-16 lg:pt-20">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Icon name="AlertTriangle" size={48} color="white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            404
          </h1>
          <h2 className="font-heading font-semibold text-xl lg:text-2xl text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="font-body text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage-product-landing"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-text-inverse rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-600"
          >
            <Icon name="Home" size={20} />
            <span>Back to Home</span>
          </Link>
          
          <Link
            to="/user-dashboard-wellness-overview"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-surface"
          >
            <Icon name="LayoutDashboard" size={20} />
            <span>Go to Dashboard</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default NotFound;