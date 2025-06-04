import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import WellnessMetricsCard from './components/WellnessMetricsCard';
import EmotionTrendChart from './components/EmotionTrendChart';
import RingStatusCard from './components/RingStatusCard';
import QuickActionCard from './components/QuickActionCard';
import PersonalizedInsights from './components/PersonalizedInsights';
import AchievementBadges from './components/AchievementBadges';

const UserDashboardWellnessOverview = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName] = useState('Sarah');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const wellnessMetrics = [
    {
      id: 1,
      title: 'Daily Emotion',
      value: 'Calm',
      subValue: '78% positive',
      icon: 'Heart',
      color: 'primary',
      trend: '+12%',
      trendDirection: 'up'
    },
    {
      id: 2,
      title: 'Stress Level',
      value: 'Low',
      subValue: '2.3/10 avg',
      icon: 'Activity',
      color: 'secondary',
      trend: '-15%',
      trendDirection: 'down'
    },
    {
      id: 3,
      title: 'Mindfulness',
      value: '45 min',
      subValue: 'Today',
      icon: 'Brain',
      color: 'accent',
      trend: '+8 min',
      trendDirection: 'up'
    },
    {
      id: 4,
      title: 'Sleep Quality',
      value: '8.2/10',
      subValue: '7h 32m',
      icon: 'Moon',
      color: 'primary',
      trend: '+0.5',
      trendDirection: 'up'
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Quick Journal',
      description: 'Record your thoughts',
      icon: 'PenTool',
      color: 'primary',
      path: '/digital-journal-voice-input'
    },
    {
      id: 2,
      title: 'Voice Recording',
      description: 'Speak your mind',
      icon: 'Mic',
      color: 'secondary',
      path: '/digital-journal-voice-input'
    },
    {
      id: 3,
      title: 'View Insights',
      description: 'Analyze patterns',
      icon: 'TrendingUp',
      color: 'accent',
      path: '/emotion-insights-analytics'
    },
    {
      id: 4,
      title: 'Set Goals',
      description: 'Plan your wellness',
      icon: 'Target',
      color: 'primary',
      path: '/user-dashboard-wellness-overview'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'journal',
      title: 'Morning Reflection',
      time: '2 hours ago',
      icon: 'BookOpen',
      description: 'Completed daily journal entry'
    },
    {
      id: 2,
      type: 'meditation',
      title: 'Mindfulness Session',
      time: '4 hours ago',
      icon: 'Brain',
      description: '15 minutes guided meditation'
    },
    {
      id: 3,
      type: 'sync',
      title: 'Ring Data Sync',
      time: '6 hours ago',
      icon: 'RefreshCw',
      description: 'Latest wellness data updated'
    }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary mb-2">
                Welcome back, {userName}! 👋
              </h1>
              <p className="font-body text-text-secondary">
                {formatDate(currentTime)} • {formatTime(currentTime)}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-background rounded-organic border border-border-light">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="font-body text-sm text-text-secondary">Ring Connected</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600">
                <Icon name="Download" size={16} />
                <span className="font-body font-medium">Export Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Ring Status - Mobile Priority */}
        <div className="mb-6 lg:hidden">
          <RingStatusCard />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Wellness Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {wellnessMetrics.map((metric) => (
                <WellnessMetricsCard key={metric.id} metric={metric} />
              ))}
            </div>

            {/* Emotion Trend Chart */}
            <div className="bg-background border border-border-light rounded-organic-lg p-6 soft-elevation-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-semibold text-xl text-text-primary">
                  Weekly Emotion Trends
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface">
                    <Icon name="MoreHorizontal" size={18} />
                  </button>
                </div>
              </div>
              <EmotionTrendChart />
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <QuickActionCard key={action.id} action={action} />
              ))}
            </div>

            {/* Achievement Badges - Mobile */}
            <div className="lg:hidden">
              <AchievementBadges />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Ring Status - Desktop */}
            <div className="hidden lg:block">
              <RingStatusCard />
            </div>

            {/* Personalized Insights */}
            <PersonalizedInsights />

            {/* Recent Activity */}
            <div className="bg-background border border-border-light rounded-organic-lg p-6 soft-elevation-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-lg text-text-primary">
                  Recent Activity
                </h3>
                <Link
                  to="/digital-journal-voice-input"
                  className="text-primary hover:text-primary-600 gentle-transition text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-organic hover:bg-surface gentle-transition">
                    <div className={`w-8 h-8 rounded-organic flex items-center justify-center ${
                      activity.type === 'journal' ? 'bg-primary-100' :
                      activity.type === 'meditation'? 'bg-secondary-100' : 'bg-accent-100'
                    }`}>
                      <Icon 
                        name={activity.icon} 
                        size={16} 
                        color={
                          activity.type === 'journal' ? 'var(--color-primary)' :
                          activity.type === 'meditation' ? 'var(--color-secondary)' :
                          'var(--color-accent)'
                        }
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium text-text-primary text-sm">
                        {activity.title}
                      </p>
                      <p className="font-body text-text-secondary text-xs mb-1">
                        {activity.description}
                      </p>
                      <p className="font-body text-text-tertiary text-xs">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badges - Desktop */}
            <div className="hidden lg:block">
              <AchievementBadges />
            </div>

            {/* Quick Stats */}
            <div className="bg-background border border-border-light rounded-organic-lg p-6 soft-elevation-1">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
                This Week
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-text-secondary text-sm">Journal Entries</span>
                  <span className="font-body font-medium text-text-primary">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-text-secondary text-sm">Meditation Minutes</span>
                  <span className="font-body font-medium text-text-primary">180</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-text-secondary text-sm">Mood Entries</span>
                  <span className="font-body font-medium text-text-primary">28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-text-secondary text-sm">Goals Achieved</span>
                  <span className="font-body font-medium text-text-primary">3/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-primary to-secondary rounded-organic-lg p-6 lg:p-8 text-center">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-text-inverse mb-4">
            Ready to dive deeper into your wellness journey?
          </h2>
          <p className="font-body text-text-inverse opacity-90 mb-6 max-w-2xl mx-auto">
            Explore detailed insights, track your progress over time, and discover patterns in your emotional well-being.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/emotion-insights-analytics"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-text-inverse text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-50"
            >
              <Icon name="TrendingUp" size={18} />
              <span>View Detailed Analytics</span>
            </Link>
            <Link
              to="/digital-journal-voice-input"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 border border-text-inverse text-text-inverse rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-white hover:bg-opacity-10"
            >
              <Icon name="BookOpen" size={18} />
              <span>Start Journaling</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardWellnessOverview;