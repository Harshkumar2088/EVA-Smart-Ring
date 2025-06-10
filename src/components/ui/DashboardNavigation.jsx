import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const DashboardNavigation = () => {
  const location = useLocation();

  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // const handleSave = () => {
  //   // Simulate saving logic here
  //   console.log('Saved Email:', notificationEmail);
  //   setSaveMessage('Settings saved successfully ✔️');

  //   // Hide message after 3 seconds
  //   setTimeout(() => {
  //     setSaveMessage('');
  //   }, 3000);
  // };

  const dashboardItems = [
    {
      label: 'Overview',
      path: '/user-dashboard-wellness-overview',
      icon: 'LayoutDashboard',
      description: 'Wellness summary and insights',
    },
    {
      label: 'Journal',
      path: '/digital-journal-voice-input',
      icon: 'BookOpen',
      description: 'Voice and text journaling',
    },
    {
      label: 'Insights',
      path: '/emotion-insights-analytics',
      icon: 'TrendingUp',
      description: 'Emotion analytics and trends',
    },
  ];

  const isActivePath = (path) => location.pathname === path;

  const isDashboardRoute = dashboardItems.some((item) => location.pathname === item.path);

  const handleExport = () => {
    const data = [
      ['Name', 'Email', 'Date'],
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + data.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'dashboard_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isDashboardRoute) return null;

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
                    ? 'bg-primary text-text-inverse'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
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
                    ? 'bg-primary-100 text-primary-700 border border-primary-200'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon
                  name={item.icon}
                  size={18}
                  className={`${
                    isActivePath(item.path)
                      ? 'text-primary-600'
                      : 'text-text-tertiary group-hover:text-text-secondary'
                  } gentle-transition`}
                />
                <div className="flex flex-col">
                  <span className="font-body font-medium">{item.label}</span>
                  <span
                    className={`text-xs ${
                      isActivePath(item.path)
                        ? 'text-primary-600'
                        : 'text-text-tertiary group-hover:text-text-secondary'
                    } gentle-transition`}
                  >
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Dashboard Actions */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto relative">
            {/* Settings */}
            {/* <button
              onClick={() => setShowSettings(true)}
              className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
            >
              <Icon name="Settings" size={18} />
            </button> */}

            {/* Notifications */}
            <button
              onClick={() => setShowNotifications((prev) => !prev)}
              className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
            >
              <Icon name="Bell" size={18} />
            </button>

            {/* Export */}
            <button
              onClick={handleExport}
              className="flex items-center space-x-2 px-3 py-2 bg-secondary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-secondary-600"
            >
              <Icon name="Download" size={16} />
              <span className="font-body font-medium text-sm">Export</span>
            </button>

            {/* Notification Panel */}
            {showNotifications && (
              <div className="absolute top-12 right-0 bg-white border shadow-md rounded-lg w-64 p-4 z-50">
                <h3 className="font-semibold mb-2">Notifications</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>🔔 New insight report available</li>
                  <li>✅ Journal saved successfully</li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Notification Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              {/* <div>
                <label className="text-sm font-medium text-gray-700">Language</label>
                <select className="w-full border rounded px-3 py-2 mt-1">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div> */}
            </div>

            
            {/* <div className="mt-6 text-right">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-600"
              >
                Save & Close
              </button>
            </div> */}
            {/* Buttons */}
  <div className="mt-6 flex justify-end space-x-3">
    <button
      onClick={() => {
        onClick={handleSave}
      }}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-600"
    >
      Save
    </button>
    <button
      onClick={() => setShowSettings(false)}
      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
    >
      Close
    </button>
  </div>
</div>
          </div>
      )}
    </div>
  );
};

export default DashboardNavigation;
