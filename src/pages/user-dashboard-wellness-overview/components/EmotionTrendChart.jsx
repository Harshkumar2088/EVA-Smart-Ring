import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EmotionTrendChart = () => {
  const emotionData = [
    { day: 'Mon', happiness: 7.2, stress: 3.1, energy: 6.8, calm: 8.1 },
    { day: 'Tue', happiness: 8.1, stress: 2.8, energy: 7.5, calm: 7.9 },
    { day: 'Wed', happiness: 6.9, stress: 4.2, energy: 6.2, calm: 6.8 },
    { day: 'Thu', happiness: 7.8, stress: 2.9, energy: 7.8, calm: 8.3 },
    { day: 'Fri', happiness: 8.5, stress: 2.1, energy: 8.2, calm: 8.7 },
    { day: 'Sat', happiness: 9.1, stress: 1.8, energy: 8.9, calm: 9.2 },
    { day: 'Sun', happiness: 8.8, stress: 2.0, energy: 8.1, calm: 9.0 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border-light rounded-organic p-3 soft-elevation-2">
          <p className="font-body font-medium text-text-primary mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="font-body text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(1)}/10
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-64 lg:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={emotionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-light)" />
          <XAxis 
            dataKey="day" 
            stroke="var(--color-text-secondary)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            domain={[0, 10]}
            stroke="var(--color-text-secondary)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="happiness" 
            stroke="var(--color-primary)" 
            strokeWidth={3}
            dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
            name="Happiness"
          />
          <Line 
            type="monotone" 
            dataKey="calm" 
            stroke="var(--color-secondary)" 
            strokeWidth={3}
            dot={{ fill: 'var(--color-secondary)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'var(--color-secondary)', strokeWidth: 2 }}
            name="Calm"
          />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="var(--color-accent)" 
            strokeWidth={3}
            dot={{ fill: 'var(--color-accent)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'var(--color-accent)', strokeWidth: 2 }}
            name="Energy"
          />
          <Line 
            type="monotone" 
            dataKey="stress" 
            stroke="var(--color-error)" 
            strokeWidth={3}
            dot={{ fill: 'var(--color-error)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'var(--color-error)', strokeWidth: 2 }}
            name="Stress"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionTrendChart;