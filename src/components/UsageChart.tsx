
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.8 },
  { day: 'Wed', hours: 4.2 },
  { day: 'Thu', hours: 3.1 },
  { day: 'Fri', hours: 5.3 },
  { day: 'Sat', hours: 6.2 },
  { day: 'Sun', hours: 3.4 },
];

const UsageChart = () => {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis 
            label={{ value: 'Hours', angle: -90, position: 'insideLeft', offset: -5 }} 
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip
            formatter={(value) => [`${value} hours`, 'Screen Time']}
            labelFormatter={(label) => `${label}`}
          />
          <Bar 
            dataKey="hours" 
            fill="url(#colorGradient)" 
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageChart;
