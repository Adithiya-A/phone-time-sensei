
import React from 'react';

const timelineData = [
  { time: '07:30', event: 'First unlock', duration: '5m' },
  { time: '08:15', event: 'Email check', duration: '8m' },
  { time: '10:45', event: 'Social media', duration: '22m' },
  { time: '12:30', event: 'Video streaming', duration: '15m' },
  { time: '14:20', event: 'Messaging', duration: '10m' },
  { time: '16:45', event: 'Browser usage', duration: '25m' },
  { time: '19:30', event: 'Social media', duration: '35m' },
  { time: '21:15', event: 'Video streaming', duration: '45m' },
];

const DailyTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-9 top-0 bottom-0 w-px bg-muted"></div>
      <ul className="space-y-6 relative">
        {timelineData.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="min-w-16 text-sm text-muted-foreground">{item.time}</div>
            <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
            <div className="flex-1 pb-4 border-b">
              <div className="font-medium">{item.event}</div>
              <div className="text-sm text-muted-foreground">Duration: {item.duration}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyTimeline;
