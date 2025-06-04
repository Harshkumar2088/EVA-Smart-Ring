import React, { useState, useMemo } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Icon from 'components/AppIcon';

// Mock data for emotion insights
const emotionTimelineData = [
  { date: '2024-01-01', happiness: 7, stress: 3, anxiety: 2, energy: 8, focus: 6 },
  { date: '2024-01-02', happiness: 6, stress: 4, anxiety: 3, energy: 7, focus: 5 },
  { date: '2024-01-03', happiness: 8, stress: 2, anxiety: 1, energy: 9, focus: 8 },
  { date: '2024-01-04', happiness: 5, stress: 6, anxiety: 5, energy: 4, focus: 3 },
  { date: '2024-01-05', happiness: 7, stress: 3, anxiety: 2, energy: 8, focus: 7 },
  { date: '2024-01-06', happiness: 9, stress: 1, anxiety: 1, energy: 9, focus: 9 },
  { date: '2024-01-07', happiness: 6, stress: 4, anxiety: 3, energy: 6, focus: 5 },
  { date: '2024-01-08', happiness: 8, stress: 2, anxiety: 2, energy: 8, focus: 8 },
  { date: '2024-01-09', happiness: 7, stress: 3, anxiety: 2, energy: 7, focus: 6 },
  { date: '2024-01-10', happiness: 9, stress: 1, anxiety: 1, energy: 9, focus: 9 },
  { date: '2024-01-11', happiness: 5, stress: 5, anxiety: 4, energy: 5, focus: 4 },
  { date: '2024-01-12', happiness: 8, stress: 2, anxiety: 1, energy: 8, focus: 8 },
  { date: '2024-01-13', happiness: 7, stress: 3, anxiety: 2, energy: 7, focus: 7 },
  { date: '2024-01-14', happiness: 6, stress: 4, anxiety: 3, energy: 6, focus: 5 }
];

const sleepCorrelationData = [
  { hours: 5, happiness: 4, stress: 7, energy: 3 },
  { hours: 6, happiness: 5, stress: 6, energy: 4 },
  { hours: 7, happiness: 7, stress: 4, energy: 7 },
  { hours: 8, happiness: 8, stress: 2, energy: 8 },
  { hours: 9, happiness: 7, stress: 3, energy: 7 },
  { hours: 10, happiness: 6, stress: 4, energy: 6 }
];

const emotionDistributionData = [
  { name: 'Happiness', value: 35, color: '#4ADE80' },
  { name: 'Calm', value: 25, color: '#60A5FA' },
  { name: 'Focused', value: 20, color: '#A78BFA' },
  { name: 'Stressed', value: 12, color: '#FB7185' },
  { name: 'Anxious', value: 8, color: '#FBBF24' }
];

const mindfulnessProgressData = [
  { week: 'Week 1', sessions: 3, duration: 45, consistency: 43 },
  { week: 'Week 2', sessions: 5, duration: 75, consistency: 71 },
  { week: 'Week 3', sessions: 6, duration: 90, consistency: 86 },
  { week: 'Week 4', sessions: 7, duration: 105, consistency: 100 },
  { week: 'Week 5', sessions: 6, duration: 90, consistency: 86 },
  { week: 'Week 6', sessions: 8, duration: 120, consistency: 114 }
];

const activityCorrelationData = [
  { activity: 'Exercise', happiness: 8.5, stress: 2.1, energy: 9.2 },
  { activity: 'Meditation', happiness: 7.8, stress: 1.5, energy: 6.8 },
  { activity: 'Work', happiness: 5.2, stress: 6.8, energy: 4.5 },
  { activity: 'Social', happiness: 8.9, stress: 2.8, energy: 7.5 },
  { activity: 'Reading', happiness: 7.2, stress: 2.0, energy: 5.8 },
  { activity: 'Screen Time', happiness: 4.8, stress: 5.5, energy: 3.2 }
];

const insightCards = [
  {
    id: 1,
    type: 'achievement',
    icon: 'TrendingUp',
    title: 'Stress Reduction Success',
    description: 'Your stress levels have decreased by 35% over the past month through consistent mindfulness practice.',
    recommendation: 'Continue your current meditation routine and consider extending sessions by 5 minutes.',
    color: 'success'
  },
  {
    id: 2,
    type: 'pattern',
    icon: 'Moon',
    title: 'Sleep-Mood Connection',
    description: 'Your happiness scores are 40% higher on days when you get 7-8 hours of sleep.',
    recommendation: 'Aim for consistent 7-8 hour sleep schedule to optimize emotional well-being.',
    color: 'primary'
  },
  {
    id: 3,
    type: 'opportunity',
    icon: 'Activity',
    title: 'Exercise Impact',
    description: 'Exercise sessions correlate with your highest energy and happiness ratings.',
    recommendation: 'Schedule 3-4 workout sessions per week to maintain optimal emotional balance.',
    color: 'accent'
  },
  {
    id: 4,
    type: 'alert',
    icon: 'AlertTriangle',
    title: 'Afternoon Energy Dips',
    description: 'Consistent energy drops between 2-4 PM may indicate need for schedule adjustments.',
    recommendation: 'Try a 10-minute walk or breathing exercise during afternoon hours.',
    color: 'warning'
  }
];

const EmotionInsightsAnalytics = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [activeChart, setActiveChart] = useState('timeline');

  const timeRangeOptions = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metricOptions = [
    { value: 'all', label: 'All Metrics' },
    { value: 'happiness', label: 'Happiness' },
    { value: 'stress', label: 'Stress' },
    { value: 'anxiety', label: 'Anxiety' },
    { value: 'energy', label: 'Energy' },
    { value: 'focus', label: 'Focus' }
  ];

  const chartOptions = [
    { value: 'timeline', label: 'Timeline', icon: 'TrendingUp' },
    { value: 'correlation', label: 'Correlations', icon: 'GitBranch' },
    { value: 'distribution', label: 'Distribution', icon: 'PieChart' },
    { value: 'progress', label: 'Progress', icon: 'BarChart3' }
  ];

  const filteredData = useMemo(() => {
    if (selectedMetric === 'all') return emotionTimelineData;
    return emotionTimelineData.map(item => ({
      date: item.date,
      [selectedMetric]: item[selectedMetric]
    }));
  }, [selectedMetric]);

  const getInsightCardColor = (color) => {
    const colors = {
      success: 'bg-success-light border-success text-success-dark',
      primary: 'bg-primary-100 border-primary text-primary-700',
      accent: 'bg-accent-100 border-accent text-accent-700',
      warning: 'bg-warning-light border-warning text-warning-dark'
    };
    return colors[color] || colors.primary;
  };

  const renderChart = () => {
    switch (activeChart) {
      case 'timeline':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-text-secondary)"
                fontSize={12}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis stroke="var(--color-text-secondary)" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              {selectedMetric === 'all' ? (
                <>
                  <Line type="monotone" dataKey="happiness" stroke="#4ADE80" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="stress" stroke="#FB7185" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="anxiety" stroke="#FBBF24" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="energy" stroke="#60A5FA" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="focus" stroke="#A78BFA" strokeWidth={2} dot={{ r: 4 }} />
                </>
              ) : (
                <Line type="monotone" dataKey={selectedMetric} stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 5 }} />
              )}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'correlation':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-heading font-semibold text-lg text-text-primary mb-4">Sleep vs Emotions</h4>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={sleepCorrelationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="hours" stroke="var(--color-text-secondary)" fontSize={12} />
                  <YAxis stroke="var(--color-text-secondary)" fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="happiness" stackId="1" stroke="#4ADE80" fill="#4ADE80" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="energy" stackId="1" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg text-text-primary mb-4">Activity Impact</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={activityCorrelationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="activity" stroke="var(--color-text-secondary)" fontSize={12} />
                  <YAxis stroke="var(--color-text-secondary)" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="happiness" fill="#4ADE80" />
                  <Bar dataKey="energy" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'distribution':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={emotionDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {emotionDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'progress':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={mindfulnessProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="week" stroke="var(--color-text-secondary)" fontSize={12} />
              <YAxis stroke="var(--color-text-secondary)" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="sessions" fill="#4A90A4" name="Sessions" />
              <Bar dataKey="duration" fill="#7B9E87" name="Duration (min)" />
            </BarChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-2">
                Emotion Insights & Analytics
              </h1>
              <p className="font-body text-text-secondary text-lg">
                Transform your wellness data into actionable intelligence for emotional growth
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 lg:mt-0">
              <button className="flex items-center space-x-2 px-4 py-2 bg-secondary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-secondary-600">
                <Icon name="Download" size={18} />
                <span className="font-body font-medium">Export Data</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-border text-text-primary rounded-organic gentle-transition haptic-feedback hover:bg-surface">
                <Icon name="Share2" size={18} />
                <span className="font-body font-medium">Share</span>
              </button>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={18} className="text-text-secondary" />
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
              >
                {timeRangeOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={18} className="text-text-secondary" />
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-2 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
              >
                {metricOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Chart Type Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {chartOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setActiveChart(option.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-organic gentle-transition haptic-feedback ${
                  activeChart === option.value
                    ? 'bg-primary text-text-inverse' :'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span className="font-body font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Chart Section */}
        <div className="bg-white rounded-organic-lg shadow-soft-elevation-1 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-semibold text-xl text-text-primary">
              {chartOptions.find(opt => opt.value === activeChart)?.label} Analysis
            </h2>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Info" size={16} />
              <span className="font-body text-sm">Real-time sync with your WellnessRing</span>
            </div>
          </div>
          {renderChart()}
        </div>

        {/* Key Insights Grid */}
        <div className="mb-8">
          <h2 className="font-heading font-semibold text-2xl text-text-primary mb-6">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightCards.map(insight => (
              <div
                key={insight.id}
                className={`p-6 rounded-organic-lg border-2 gentle-transition haptic-feedback hover:shadow-soft-elevation-2 ${getInsightCardColor(insight.color)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-organic flex items-center justify-center bg-white bg-opacity-20">
                      <Icon name={insight.icon} size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">{insight.title}</h3>
                    <p className="font-body mb-4 opacity-90">{insight.description}</p>
                    <div className="bg-white bg-opacity-20 rounded-organic p-3">
                      <p className="font-body text-sm font-medium">
                        <Icon name="Lightbulb" size={16} className="inline mr-2" />
                        {insight.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-organic-lg shadow-soft-elevation-1 p-6 text-center">
            <div className="w-12 h-12 bg-success-light rounded-organic flex items-center justify-center mx-auto mb-3">
              <Icon name="Smile" size={24} color="var(--color-success)" />
            </div>
            <div className="font-heading font-bold text-2xl text-text-primary mb-1">7.8</div>
            <div className="font-body text-sm text-text-secondary">Avg Happiness</div>
          </div>
          <div className="bg-white rounded-organic-lg shadow-soft-elevation-1 p-6 text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-organic flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={24} color="var(--color-primary)" />
            </div>
            <div className="font-heading font-bold text-2xl text-text-primary mb-1">6.9</div>
            <div className="font-body text-sm text-text-secondary">Avg Energy</div>
          </div>
          <div className="bg-white rounded-organic-lg shadow-soft-elevation-1 p-6 text-center">
            <div className="w-12 h-12 bg-warning-light rounded-organic flex items-center justify-center mx-auto mb-3">
              <Icon name="AlertCircle" size={24} color="var(--color-warning)" />
            </div>
            <div className="font-heading font-bold text-2xl text-text-primary mb-1">2.8</div>
            <div className="font-body text-sm text-text-secondary">Avg Stress</div>
          </div>
          <div className="bg-white rounded-organic-lg shadow-soft-elevation-1 p-6 text-center">
            <div className="w-12 h-12 bg-secondary-100 rounded-organic flex items-center justify-center mx-auto mb-3">
              <Icon name="Target" size={24} color="var(--color-secondary)" />
            </div>
            <div className="font-heading font-bold text-2xl text-text-primary mb-1">7.2</div>
            <div className="font-body text-sm text-text-secondary">Avg Focus</div>
          </div>
        </div>

        {/* Correlation Matrix */}
        <div className="bg-white rounded-organic-lg shadow-soft-elevation-1 p-6">
          <h2 className="font-heading font-semibold text-xl text-text-primary mb-6">Correlation Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-body font-medium text-text-secondary py-3 px-4">Factor</th>
                  <th className="text-center font-body font-medium text-text-secondary py-3 px-4">Happiness</th>
                  <th className="text-center font-body font-medium text-text-secondary py-3 px-4">Stress</th>
                  <th className="text-center font-body font-medium text-text-secondary py-3 px-4">Energy</th>
                  <th className="text-center font-body font-medium text-text-secondary py-3 px-4">Impact</th>
                </tr>
              </thead>
              <tbody>
                {activityCorrelationData.map((item, index) => (
                  <tr key={index} className="border-b border-border-light hover:bg-surface gentle-transition">
                    <td className="py-3 px-4 font-body font-medium text-text-primary">{item.activity}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.happiness >= 7 ? 'bg-success-light text-success-dark' : 
                        item.happiness >= 5 ? 'bg-warning-light text-warning-dark': 'bg-error-light text-error-dark'
                      }`}>
                        {item.happiness.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.stress <= 3 ? 'bg-success-light text-success-dark' : 
                        item.stress <= 5 ? 'bg-warning-light text-warning-dark': 'bg-error-light text-error-dark'
                      }`}>
                        {item.stress.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.energy >= 7 ? 'bg-success-light text-success-dark' : 
                        item.energy >= 5 ? 'bg-warning-light text-warning-dark': 'bg-error-light text-error-dark'
                      }`}>
                        {item.energy.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center">
                        {item.happiness >= 7 && item.energy >= 7 && item.stress <= 3 ? (
                          <Icon name="TrendingUp" size={16} className="text-success" />
                        ) : item.happiness >= 5 && item.energy >= 5 && item.stress <= 5 ? (
                          <Icon name="Minus" size={16} className="text-warning" />
                        ) : (
                          <Icon name="TrendingDown" size={16} className="text-error" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionInsightsAnalytics;