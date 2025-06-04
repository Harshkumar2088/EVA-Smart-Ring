import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Icon from 'components/AppIcon';

const DataVisualization = () => {
  const [activeChart, setActiveChart] = useState('engagement');

  const engagementData = [
    { culture: 'Eastern', baseline: 65, withAI: 89, improvement: 37 },
    { culture: 'Western', baseline: 72, withAI: 85, improvement: 18 },
    { culture: 'Indigenous', baseline: 58, withAI: 91, improvement: 57 },
    { culture: 'African', baseline: 61, withAI: 87, improvement: 43 },
    { culture: 'Latin', baseline: 69, withAI: 88, improvement: 28 }
  ];

  const wellnessOutcomes = [
    { month: 'Jan', universal: 68, cultural: 72 },
    { month: 'Feb', universal: 70, cultural: 76 },
    { month: 'Mar', universal: 69, cultural: 79 },
    { month: 'Apr', universal: 71, cultural: 82 },
    { month: 'May', universal: 73, cultural: 85 },
    { month: 'Jun', universal: 72, cultural: 88 }
  ];

  const culturalPreferences = [
    { name: 'Gentle Guidance', value: 34, color: '#E6E6FA' },
    { name: 'Traditional Integration', value: 28, color: '#87CEEB' },
    { name: 'Community Focus', value: 22, color: '#FFB6C1' },
    { name: 'Privacy Priority', value: 16, color: '#DDA0DD' }
  ];

  const charts = [
    { id: 'engagement', label: 'Cultural Engagement', icon: 'TrendingUp' },
    { id: 'outcomes', label: 'Wellness Outcomes', icon: 'Heart' },
    { id: 'preferences', label: 'Cultural Preferences', icon: 'PieChart' }
  ];

  const renderEngagementChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={engagementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E6E6FA" opacity={0.3} />
        <XAxis dataKey="culture" stroke="#718096" />
        <YAxis stroke="#718096" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#F8F9FA', 
            border: '1px solid #E6E6FA', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }} 
        />
        <Bar dataKey="baseline" fill="#87CEEB" name="Baseline Engagement" radius={[4, 4, 0, 0]} />
        <Bar dataKey="withAI" fill="#E6E6FA" name="With Cultural AI" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderOutcomesChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={wellnessOutcomes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E6E6FA" opacity={0.3} />
        <XAxis dataKey="month" stroke="#718096" />
        <YAxis stroke="#718096" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#F8F9FA', 
            border: '1px solid #E6E6FA', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }} 
        />
        <Line 
          type="monotone" 
          dataKey="universal" 
          stroke="#87CEEB" 
          strokeWidth={3}
          name="Universal Approach"
          dot={{ fill: '#87CEEB', strokeWidth: 2, r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="cultural" 
          stroke="#E6E6FA" 
          strokeWidth={3}
          name="Cultural Adaptation"
          dot={{ fill: '#E6E6FA', strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderPreferencesChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={culturalPreferences}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {culturalPreferences.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#F8F9FA', 
            border: '1px solid #E6E6FA', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }} 
        />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderChart = () => {
    switch (activeChart) {
      case 'engagement':
        return renderEngagementChart();
      case 'outcomes':
        return renderOutcomesChart();
      case 'preferences':
        return renderPreferencesChart();
      default:
        return renderEngagementChart();
    }
  };

  const getChartDescription = () => {
    switch (activeChart) {
      case 'engagement':
        return "Comparison of user engagement rates across different cultural backgrounds, showing significant improvements when AI adapts to cultural contexts.";
      case 'outcomes':
        return "Wellness outcome improvements over time, demonstrating the effectiveness of culturally-adapted AI versus universal approaches.";
      case 'preferences':
        return "Distribution of cultural preferences in wellness technology, highlighting the importance of diverse approaches to user experience.";
      default:
        return "";
    }
  };

  return (
    <div className="bg-surface/80 backdrop-blur-gentle rounded-brand p-6 shadow-gentle">
      {/* Chart Navigation */}
      <div className="flex flex-wrap gap-4 mb-6">
        {charts.map((chart) => (
          <button
            key={chart.id}
            onClick={() => setActiveChart(chart.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-brand-sm transition-whisper whisper-ripple ${
              activeChart === chart.id
                ? 'bg-primary/20 text-primary-700 shadow-gentle'
                : 'text-text-secondary hover:text-text-primary hover:bg-primary/10'
            }`}
          >
            <Icon name={chart.icon} size={18} />
            <span className="font-medium">{chart.label}</span>
          </button>
        ))}
      </div>

      {/* Chart Container */}
      <div className="mb-6">
        {renderChart()}
      </div>

      {/* Chart Description */}
      <div className="bg-background/50 rounded-brand-sm p-4">
        <p className="text-text-secondary text-sm">
          {getChartDescription()}
        </p>
      </div>

      {/* Key Insights */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-success/10 rounded-brand-sm p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Engagement Boost</span>
          </div>
          <div className="text-2xl font-heading font-semibold text-text-primary">+43%</div>
          <div className="text-xs text-text-secondary">Average improvement with cultural adaptation</div>
        </div>

        <div className="bg-primary/10 rounded-brand-sm p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Cultural Coverage</span>
          </div>
          <div className="text-2xl font-heading font-semibold text-text-primary">15+</div>
          <div className="text-xs text-text-secondary">Cultural backgrounds studied</div>
        </div>

        <div className="bg-secondary/10 rounded-brand-sm p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Shield" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Privacy Maintained</span>
          </div>
          <div className="text-2xl font-heading font-semibold text-text-primary">100%</div>
          <div className="text-xs text-text-secondary">Data sovereignty preserved</div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;