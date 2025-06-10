import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const RingStatusCard = () => {
  const [batteryLevel] = useState(78);
  const [lastSync, setLastSync] = useState(new Date(Date.now() - 300000)); // 5 minutes ago
  const [isConnected] = useState(true);
  const [dataFreshness] = useState('Real-time');

  useEffect(() => {
    const timer = setInterval(() => {
      setLastSync(new Date(Date.now() - 300000));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatLastSync = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const getBatteryColor = (level) => {
    if (level > 50) return 'text-secondary';
    if (level > 20) return 'text-warning';
    return 'text-error';
  };

  const getBatteryIcon = (level) => {
    if (level > 75) return 'Battery';
    if (level > 50) return 'Battery';
    if (level > 25) return 'Battery';
    return 'BatteryLow';
  };

  return (
    <div className="bg-background border border-border-light rounded-organic-lg p-6 soft-elevation-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-lg text-text-primary">
          SmartRing Status
        </h3>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-organic ${
          isConnected ? 'bg-secondary-100 text-secondary-700' : 'bg-error-100 text-error-700'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            isConnected ? 'bg-secondary animate-pulse' : 'bg-error'
          }`}></div>
          <span className="font-body text-xs font-medium">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Ring Visual */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                <Icon name="Zap" size={24} color="var(--color-primary)" />
              </div>
            </div>
            {isConnected && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="Wifi" size={12} color="white" />
              </div>
            )}
          </div>
        </div>

        {/* Status Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Icon name={getBatteryIcon(batteryLevel)} size={16} className={getBatteryColor(batteryLevel)} />
              <span className="font-body text-text-secondary text-sm">Battery</span>
            </div>
            <p className={`font-body font-semibold ${getBatteryColor(batteryLevel)}`}>
              {batteryLevel}%
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Icon name="RefreshCw" size={16} className="text-text-secondary" />
              <span className="font-body text-text-secondary text-sm">Last Sync</span>
            </div>
            <p className="font-body font-semibold text-text-primary">
              {formatLastSync(lastSync)}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Icon name="Database" size={16} className="text-text-secondary" />
              <span className="font-body text-text-secondary text-sm">Data</span>
            </div>
            <p className="font-body font-semibold text-text-primary">
              {dataFreshness}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Icon name="Signal" size={16} className="text-text-secondary" />
              <span className="font-body text-text-secondary text-sm">Signal</span>
            </div>
            <p className="font-body font-semibold text-secondary">
              Strong
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600">
            <Icon name="RefreshCw" size={16} />
            <span className="font-body font-medium text-sm">Sync Now</span>
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-border text-text-secondary rounded-organic gentle-transition haptic-feedback hover:bg-surface hover:text-text-primary">
            <Icon name="Settings" size={16} />
          </button>
        </div>

        {/* Ring Health Status */}
        <div className="bg-surface rounded-organic p-4 mt-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Heart" size={16} className="text-secondary" />
            <span className="font-body font-medium text-text-primary text-sm">Ring Health</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-body text-text-secondary text-xs">Overall Status</span>
            <span className="font-body font-semibold text-secondary text-sm">Excellent</span>
          </div>
          <div className="w-full bg-border-light rounded-full h-2 mt-2">
            <div className="bg-secondary h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingStatusCard;