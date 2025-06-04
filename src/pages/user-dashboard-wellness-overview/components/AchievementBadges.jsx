import React from 'react';
import Icon from 'components/AppIcon';

const AchievementBadges = () => {
  const achievements = [
    {
      id: 1,
      title: 'Mindful Week',
      description: '7 days of meditation',
      icon: 'Brain',
      color: 'secondary',
      earned: true,
      earnedDate: '2024-01-15',
      progress: 100
    },
    {
      id: 2,
      title: 'Journal Master',
      description: '30 journal entries',
      icon: 'BookOpen',
      color: 'primary',
      earned: true,
      earnedDate: '2024-01-10',
      progress: 100
    },
    {
      id: 3,
      title: 'Stress Warrior',
      description: 'Reduce stress by 20%',
      icon: 'Shield',
      color: 'accent',
      earned: false,
      progress: 75
    },
    {
      id: 4,
      title: 'Early Bird',
      description: 'Consistent sleep schedule',
      icon: 'Sun',
      color: 'primary',
      earned: false,
      progress: 60
    },
    {
      id: 5,
      title: 'Emotion Explorer',
      description: 'Track 50 emotions',
      icon: 'Heart',
      color: 'secondary',
      earned: false,
      progress: 84
    },
    {
      id: 6,
      title: 'Wellness Streak',
      description: '14 days active',
      icon: 'Zap',
      color: 'accent',
      earned: true,
      earnedDate: '2024-01-12',
      progress: 100
    }
  ];

  const getColorClasses = (color, earned) => {
    if (!earned) {
      return {
        bg: 'bg-surface',
        icon: 'var(--color-text-tertiary)',
        border: 'border-border-light'
      };
    }

    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'var(--color-primary)',
          border: 'border-primary-200'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          icon: 'var(--color-secondary)',
          border: 'border-secondary-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'var(--color-accent)',
          border: 'border-accent-200'
        };
      default:
        return {
          bg: 'bg-primary-100',
          icon: 'var(--color-primary)',
          border: 'border-primary-200'
        };
    }
  };

  const formatEarnedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-background border border-border-light rounded-organic-lg p-6 soft-elevation-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-lg text-text-primary">
          Achievements
        </h3>
        <div className="flex items-center space-x-2">
          <span className="font-body text-text-secondary text-sm">
            {achievements.filter(a => a.earned).length}/{achievements.length}
          </span>
          <Icon name="Award" size={16} className="text-accent" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {achievements.map((achievement) => {
          const colors = getColorClasses(achievement.color, achievement.earned);
          
          return (
            <div
              key={achievement.id}
              className={`relative p-4 rounded-organic border ${colors.border} ${colors.bg} gentle-transition haptic-feedback hover:scale-105 ${
                achievement.earned ? 'cursor-pointer' : 'opacity-75'
              }`}
            >
              {achievement.earned && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} color="white" />
                </div>
              )}
              
              <div className="text-center space-y-2">
                <div className={`w-10 h-10 mx-auto rounded-organic flex items-center justify-center ${
                  achievement.earned ? colors.bg : 'bg-border-light'
                }`}>
                  <Icon name={achievement.icon} size={20} color={colors.icon} />
                </div>
                
                <div className="space-y-1">
                  <h4 className={`font-body font-semibold text-xs ${
                    achievement.earned ? 'text-text-primary' : 'text-text-secondary'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className="font-body text-text-tertiary text-xs">
                    {achievement.description}
                  </p>
                </div>

                {achievement.earned ? (
                  <div className="text-xs text-text-secondary">
                    Earned {formatEarnedDate(achievement.earnedDate)}
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="w-full bg-border-light rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full ${
                          achievement.color === 'primary' ? 'bg-primary' :
                          achievement.color === 'secondary'? 'bg-secondary' : 'bg-accent'
                        }`}
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-text-tertiary">
                      {achievement.progress}% complete
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Achievement Preview */}
      <div className="mt-6 pt-4 border-t border-border-light">
        <div className="flex items-center space-x-3 p-3 bg-surface rounded-organic">
          <div className="w-8 h-8 bg-accent-100 rounded-organic flex items-center justify-center">
            <Icon name="Target" size={16} color="var(--color-accent)" />
          </div>
          <div className="flex-1">
            <h4 className="font-body font-medium text-text-primary text-sm">
              Next Goal: Consistency Champion
            </h4>
            <p className="font-body text-text-secondary text-xs">
              Use your ring for 30 consecutive days
            </p>
          </div>
          <div className="text-right">
            <div className="font-body font-semibold text-accent text-sm">22/30</div>
            <div className="font-body text-text-tertiary text-xs">days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadges;