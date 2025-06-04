import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const WhisperInsights = ({ culturalLens }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [insightCategory, setInsightCategory] = useState('wellness');
  const [isGenerating, setIsGenerating] = useState(false);

  const culturalInsights = {
    universal: {
      color: "primary",
      wellness: {
        title: "Holistic Wellness Insights",
        recommendations: [
          "Your stress patterns suggest implementing regular mindfulness breaks",
          "Sleep quality could improve with a consistent evening routine",
          "Physical activity levels are optimal - maintain current habits"
        ],
        practices: ["Mindful breathing", "Gratitude journaling", "Nature walks"]
      },
      nutrition: {
        title: "Balanced Nutrition Guidance",
        recommendations: [
          "Consider increasing omega-3 rich foods for brain health",
          "Hydration levels could be improved throughout the day",
          "Meal timing aligns well with your circadian rhythm"
        ],
        practices: ["Mindful eating", "Hydration reminders", "Balanced portions"]
      },
      social: {
        title: "Social Wellness Insights",
        recommendations: [
          "Social connections show positive impact on mood",
          "Consider scheduling regular check-ins with loved ones",
          "Community engagement could enhance overall wellbeing"
        ],
        practices: ["Active listening", "Empathy practice", "Community service"]
      }
    },
    eastern: {
      color: "amber",
      wellness: {
        title: "Harmony & Balance Insights",
        recommendations: [
          "Your qi energy shows imbalance - consider morning tai chi",
          "Meditation practice is strengthening your inner peace",
          "Seasonal transitions require gentle adaptation rituals"
        ],
        practices: ["Tai Chi", "Qigong breathing", "Seasonal eating"]
      },
      nutrition: {
        title: "Traditional Wisdom Nutrition",
        recommendations: [
          "Warm foods in morning align with traditional medicine principles",
          "Consider herbal teas for digestive harmony",
          "Balance of yin and yang foods supports energy flow"
        ],
        practices: ["Herbal medicine", "Seasonal foods", "Mindful preparation"]
      },
      social: {
        title: "Community Harmony Insights",
        recommendations: [
          "Family connections strengthen your ancestral wisdom",
          "Intergenerational relationships provide grounding",
          "Group meditation enhances collective wellbeing"
        ],
        practices: ["Family rituals", "Elder wisdom", "Group harmony"]
      }
    },
    indigenous: {
      color: "sage",
      wellness: {
        title: "Sacred Wellness Insights",
        recommendations: [
          "Your connection to nature is healing your spirit",
          "Ancestral wisdom guides your wellness journey",
          "Seasonal ceremonies align with your natural rhythms"
        ],
        practices: ["Earth connection", "Sacred ceremonies", "Ancestral wisdom"]
      },
      nutrition: {
        title: "Traditional Foods Wisdom",
        recommendations: [
          "Local, seasonal foods honor the land's gifts",
          "Traditional preparation methods enhance nutrition",
          "Gratitude practices deepen food relationships"
        ],
        practices: ["Seasonal harvesting", "Traditional cooking", "Food ceremonies"]
      },
      social: {
        title: "Community Circle Insights",
        recommendations: [
          "Your role in the community circle brings purpose",
          "Storytelling traditions strengthen cultural bonds",
          "Collective healing supports individual wellness"
        ],
        practices: ["Circle sharing", "Storytelling", "Community healing"]
      }
    },
    western: {
      color: "secondary",
      wellness: {
        title: "Evidence-Based Wellness",
        recommendations: [
          "Data shows 23% improvement in stress management this week",
          "Sleep efficiency increased by 15% with routine changes",
          "Exercise consistency correlates with mood improvements"
        ],
        practices: ["HIIT workouts", "Sleep hygiene", "Stress tracking"]
      },
      nutrition: {
        title: "Science-Backed Nutrition",
        recommendations: [
          "Protein intake optimized for muscle recovery",
          "Micronutrient analysis suggests vitamin D supplementation",
          "Meal timing supports metabolic efficiency"
        ],
        practices: ["Macro tracking", "Supplementation", "Meal prep"]
      },
      social: {
        title: "Social Psychology Insights",
        recommendations: [
          "Social support network shows strong correlation with wellbeing",
          "Professional relationships contribute to life satisfaction",
          "Digital communication balance affects mental health"
        ],
        practices: ["Networking", "Boundary setting", "Digital detox"]
      }
    }
  };

  const timeframes = [
    { id: 'day', label: 'Today', icon: 'Sun' },
    { id: 'week', label: 'This Week', icon: 'Calendar' },
    { id: 'month', label: 'This Month', icon: 'BarChart3' },
    { id: 'quarter', label: 'Quarter', icon: 'TrendingUp' }
  ];

  const categories = [
    { id: 'wellness', label: 'Wellness', icon: 'Heart' },
    { id: 'nutrition', label: 'Nutrition', icon: 'Apple' },
    { id: 'social', label: 'Social', icon: 'Users' }
  ];

  const mockMetrics = {
    wellnessScore: 78,
    stressReduction: 23,
    sleepQuality: 85,
    activityGoals: 92,
    mindfulnessMinutes: 145,
    socialConnections: 12
  };

  const generateInsights = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  useEffect(() => {
    generateInsights();
  }, [culturalLens, selectedTimeframe, insightCategory]);

  const currentInsights = culturalInsights[culturalLens][insightCategory];
  const currentColor = culturalInsights[culturalLens].color;

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-text-primary mb-2">
            Whisper Insights
          </h2>
          <p className="text-text-secondary">
            Personalized wellness recommendations with {culturalLens} cultural wisdom
          </p>
        </div>
        
        <button
          onClick={generateInsights}
          disabled={isGenerating}
          className={`flex items-center space-x-2 px-6 py-3 bg-${currentColor}/20 text-${currentColor} rounded-brand font-medium transition-whisper whisper-ripple hover:bg-${currentColor}/30 disabled:opacity-50`}
        >
          <Icon name={isGenerating ? 'Loader2' : 'Sparkles'} size={20} className={isGenerating ? 'animate-spin' : ''} />
          <span>{isGenerating ? 'Generating...' : 'Refresh Insights'}</span>
        </button>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Timeframe Selector */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">Timeframe</h3>
          <div className="grid grid-cols-2 gap-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.id}
                onClick={() => setSelectedTimeframe(timeframe.id)}
                className={`flex items-center space-x-2 p-3 rounded-brand transition-gentle whisper-ripple ${
                  selectedTimeframe === timeframe.id
                    ? `bg-${currentColor}/20 text-${currentColor} shadow-gentle`
                    : 'bg-background text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={timeframe.icon} size={16} />
                <span className="text-sm font-medium">{timeframe.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Selector */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">Focus Area</h3>
          <div className="grid grid-cols-1 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setInsightCategory(category.id)}
                className={`flex items-center space-x-2 p-3 rounded-brand transition-gentle whisper-ripple ${
                  insightCategory === category.id
                    ? `bg-${currentColor}/20 text-${currentColor} shadow-gentle`
                    : 'bg-background text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Insights Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Insights */}
          <div className="bg-background rounded-brand p-6 shadow-gentle">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
              {currentInsights.title}
            </h3>
            
            {isGenerating ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-surface rounded w-full mb-2"></div>
                    <div className="h-4 bg-surface rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {currentInsights.recommendations.map((recommendation, index) => (
                  <div key={index} className={`flex items-start space-x-3 p-4 bg-${currentColor}/5 rounded-brand border border-${currentColor}/10`}>
                    <div className={`w-6 h-6 rounded-full bg-${currentColor}/20 flex items-center justify-center flex-shrink-0 mt-1`}>
                      <Icon name="Lightbulb" size={12} className={`text-${currentColor}`} />
                    </div>
                    <p className="text-text-primary text-sm">{recommendation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recommended Practices */}
          <div className="bg-background rounded-brand p-6 shadow-gentle">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
              Culturally-Aligned Practices
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentInsights.practices.map((practice, index) => (
                <div key={index} className={`p-4 bg-${currentColor}/10 rounded-brand border border-${currentColor}/20 text-center whisper-ripple hover:shadow-gentle transition-gentle`}>
                  <div className={`w-12 h-12 rounded-full bg-${currentColor}/20 flex items-center justify-center mx-auto mb-3`}>
                    <Icon name="Star" size={20} className={`text-${currentColor}`} />
                  </div>
                  <p className="text-sm font-medium text-text-primary">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Sidebar */}
        <div className="space-y-6">
          {/* Wellness Metrics */}
          <div className="bg-background rounded-brand p-6 shadow-gentle">
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Wellness Metrics
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Overall Wellness</span>
                  <span className="text-sm font-medium text-text-primary">{mockMetrics.wellnessScore}%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div 
                    className={`bg-${currentColor} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${mockMetrics.wellnessScore}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Sleep Quality</span>
                  <span className="text-sm font-medium text-text-primary">{mockMetrics.sleepQuality}%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${mockMetrics.sleepQuality}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Activity Goals</span>
                  <span className="text-sm font-medium text-text-primary">{mockMetrics.activityGoals}%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div 
                    className="bg-warning h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${mockMetrics.activityGoals}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Adaptation Info */}
          <div className={`bg-${currentColor}/10 rounded-brand p-4 border border-${currentColor}/20`}>
            <h4 className="font-medium text-text-primary mb-2">Cultural Adaptation</h4>
            <p className="text-sm text-text-secondary mb-3">
              Insights are tailored to {culturalLens} wellness traditions and values.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Brain" size={14} className={`text-${currentColor}`} />
                <span className="text-xs text-text-secondary">AI cultural awareness</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={14} className={`text-${currentColor}`} />
                <span className="text-xs text-text-secondary">Traditional wisdom</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Sparkles" size={14} className={`text-${currentColor}`} />
                <span className="text-xs text-text-secondary">Personalized guidance</span>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-cream/50 rounded-brand p-4 border border-primary/10">
            <div className="flex items-start space-x-2">
              <Icon name="Shield" size={16} className="text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-text-secondary">
                  <strong>Data Privacy:</strong> All insights are generated from your local data. 
                  No personal wellness information leaves your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhisperInsights;