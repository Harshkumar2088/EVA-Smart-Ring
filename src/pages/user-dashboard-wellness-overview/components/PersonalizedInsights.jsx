import React from 'react';
import Icon from 'components/AppIcon';

const PersonalizedInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'positive',
      title: 'Great Progress!',
      message: `Your stress levels have decreased by 15% this week. The mindfulness sessions seem to be working well for you.`,
      icon: 'TrendingUp',
      color: 'secondary',
      actionText: 'Continue Routine',
      priority: 'high'
    },
    {
      id: 2,
      type: 'suggestion',
      title: 'Sleep Optimization',
      message: `Your best emotional days correlate with 7.5+ hours of sleep. Consider maintaining a consistent bedtime.`,
      icon: 'Moon',
      color: 'primary',
      actionText: 'Set Sleep Goal',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Journal Streak',
      message: `You're on a 12-day journaling streak! Keep it up to maintain your emotional awareness momentum.`,icon: 'BookOpen',color: 'accent',actionText: 'Write Entry',priority: 'low'
    }
  ];

  const getInsightStyles = (type, color) => {
    const baseStyles = {
      positive: 'border-l-4 border-secondary bg-secondary-50',
      suggestion: 'border-l-4 border-primary bg-primary-50',
      reminder: 'border-l-4 border-accent bg-accent-50'
    };

    const iconColors = {
      secondary: 'var(--color-secondary)',
      primary: 'var(--color-primary)',
      accent: 'var(--color-accent)'
    };

    return {
      container: baseStyles[type] || baseStyles.suggestion,
      iconColor: iconColors[color] || iconColors.primary
    };
  };

  return (
    <div className="bg-background border border-border-light rounded-organic-lg p-6 soft-elevation-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-lg text-text-primary">
          Personalized Insights
        </h3>
        <button className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface">
          <Icon name="RefreshCw" size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const styles = getInsightStyles(insight.type, insight.color);
          
          return (
            <div key={insight.id} className={`p-4 rounded-organic ${styles.container}`}>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Icon name={insight.icon} size={20} color={styles.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-semibold text-text-primary text-sm mb-1">
                    {insight.title}
                  </h4>
                  <p className="font-body text-text-secondary text-xs mb-3 leading-relaxed">
                    {insight.message}
                  </p>
                  <button className={`inline-flex items-center space-x-1 px-3 py-1 rounded-organic text-xs font-medium gentle-transition haptic-feedback ${
                    insight.color === 'secondary' ? 'bg-secondary text-text-inverse hover:bg-secondary-600' :
                    insight.color === 'primary'? 'bg-primary text-text-inverse hover:bg-primary-600' : 'bg-accent text-text-inverse hover:bg-accent-600'
                  }`}>
                    <span>{insight.actionText}</span>
                    <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insights Footer */}
      <div className="mt-6 pt-4 border-t border-border-light">
        <div className="flex items-center space-x-2 text-text-tertiary">
          <Icon name="Brain" size={14} />
          <span className="font-body text-xs">
            Insights powered by AI analysis of your wellness patterns
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedInsights;