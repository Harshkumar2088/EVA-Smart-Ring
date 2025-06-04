import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const GentleMonitoring = ({ culturalLens }) => {
  const [biometricData, setBiometricData] = useState({
    heartRate: 72,
    stressLevel: 3,
    sleepQuality: 8,
    activity: 65
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const culturalContexts = {
    universal: {
      stressResponse: "Elevated stress detected. Consider taking a mindful break.",
      color: "primary",
      practices: ["Deep breathing", "Short walk", "Mindful pause"]
    },
    eastern: {
      stressResponse: "Qi imbalance noticed. Time for gentle restoration.",
      color: "amber",
      practices: ["Tai Chi movements", "Breathing meditation", "Tea ceremony"]
    },
    indigenous: {
      stressResponse: "Energy feels scattered. Reconnect with your center.",
      color: "sage",
      practices: ["Nature connection", "Grounding exercise", "Sacred pause"]
    },
    western: {
      stressResponse: "Stress levels rising. Let\'s optimize your wellness.",
      color: "secondary",
      practices: ["Progressive relaxation", "Cardio break", "Productivity pause"]
    }
  };

  const mockBiometricReadings = [
    { time: '09:00', heartRate: 68, stress: 2, activity: 45 },
    { time: '10:00', heartRate: 75, stress: 4, activity: 70 },
    { time: '11:00', heartRate: 82, stress: 6, activity: 85 },
    { time: '12:00', heartRate: 78, stress: 5, activity: 60 },
    { time: '13:00', heartRate: 72, stress: 3, activity: 55 },
    { time: '14:00', heartRate: 70, stress: 2, activity: 50 }
  ];

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        setBiometricData(prev => ({
          heartRate: Math.max(60, Math.min(100, prev.heartRate + (Math.random() - 0.5) * 4)),
          stressLevel: Math.max(1, Math.min(10, prev.stressLevel + (Math.random() - 0.5) * 2)),
          sleepQuality: Math.max(1, Math.min(10, prev.sleepQuality + (Math.random() - 0.5) * 1)),
          activity: Math.max(0, Math.min(100, prev.activity + (Math.random() - 0.5) * 10))
        }));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const currentContext = culturalContexts[culturalLens];

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-text-primary mb-2">
            Gentle Monitoring
          </h2>
          <p className="text-text-secondary">
            Real-time biometric visualization with {culturalLens} cultural context
          </p>
        </div>
        
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-brand font-medium transition-whisper whisper-ripple ${
            isMonitoring 
              ? 'bg-error/20 text-error hover:bg-error/30' 
              : `bg-${currentContext.color}/20 text-${currentContext.color} hover:bg-${currentContext.color}/30`
          }`}
        >
          <Icon name={isMonitoring ? 'Square' : 'Play'} size={20} />
          <span>{isMonitoring ? 'Stop Demo' : 'Start Demo'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Real-time Metrics */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
            Live Biometric Data
          </h3>
          
          {/* Heart Rate */}
          <div className="bg-background rounded-brand p-4 shadow-gentle">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={20} className="text-error" />
                <span className="font-medium text-text-primary">Heart Rate</span>
              </div>
              <span className="text-2xl font-heading font-semibold text-text-primary">
                {Math.round(biometricData.heartRate)} BPM
              </span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div 
                className="bg-error h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(biometricData.heartRate - 60) / 40 * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Stress Level */}
          <div className="bg-background rounded-brand p-4 shadow-gentle">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={20} className="text-warning" />
                <span className="font-medium text-text-primary">Stress Level</span>
              </div>
              <span className="text-2xl font-heading font-semibold text-text-primary">
                {Math.round(biometricData.stressLevel)}/10
              </span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div 
                className="bg-warning h-2 rounded-full transition-all duration-1000"
                style={{ width: `${biometricData.stressLevel * 10}%` }}
              ></div>
            </div>
          </div>

          {/* Activity Level */}
          <div className="bg-background rounded-brand p-4 shadow-gentle">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Icon name="Activity" size={20} className="text-success" />
                <span className="font-medium text-text-primary">Activity</span>
              </div>
              <span className="text-2xl font-heading font-semibold text-text-primary">
                {Math.round(biometricData.activity)}%
              </span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div 
                className="bg-success h-2 rounded-full transition-all duration-1000"
                style={{ width: `${biometricData.activity}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Cultural Context & Insights */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
            Cultural Context & AI Insights
          </h3>
          
          {/* AI Response */}
          <div className={`bg-${currentContext.color}/10 rounded-brand p-4 border border-${currentContext.color}/20`}>
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full bg-${currentContext.color}/20 flex items-center justify-center flex-shrink-0 mt-1`}>
                <Icon name="Brain" size={16} className={`text-${currentContext.color}`} />
              </div>
              <div>
                <p className="text-text-primary font-medium mb-2">Whisper AI Insight:</p>
                <p className="text-text-secondary text-sm">{currentContext.stressResponse}</p>
              </div>
            </div>
          </div>

          {/* Suggested Practices */}
          <div className="bg-background rounded-brand p-4 shadow-gentle">
            <h4 className="font-medium text-text-primary mb-3">Culturally-Aware Suggestions:</h4>
            <div className="space-y-2">
              {currentContext.practices.map((practice, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-${currentContext.color}`}></div>
                  <span className="text-sm text-text-secondary">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-cream/50 rounded-brand p-4 border border-primary/10">
            <div className="flex items-start space-x-2">
              <Icon name="Shield" size={16} className="text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-text-secondary">
                  <strong>Privacy First:</strong> All biometric data is processed locally on your device. 
                  No health data is transmitted to external servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Chart */}
      <div className="mt-8">
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
          Daily Wellness Pattern
        </h3>
        
        <div className="bg-background rounded-brand p-6 shadow-gentle">
          <div className="flex items-end space-x-4 h-32">
            {mockBiometricReadings.map((reading, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="flex flex-col items-center space-y-1 mb-2">
                  {/* Heart Rate Bar */}
                  <div 
                    className="w-4 bg-error/60 rounded-t"
                    style={{ height: `${(reading.heartRate - 60) / 40 * 60}px` }}
                  ></div>
                  {/* Stress Level Bar */}
                  <div 
                    className="w-4 bg-warning/60 rounded-t"
                    style={{ height: `${reading.stress * 6}px` }}
                  ></div>
                </div>
                <span className="text-xs text-text-secondary">{reading.time}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-surface">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-error/60 rounded"></div>
              <span className="text-xs text-text-secondary">Heart Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning/60 rounded"></div>
              <span className="text-xs text-text-secondary">Stress Level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GentleMonitoring;