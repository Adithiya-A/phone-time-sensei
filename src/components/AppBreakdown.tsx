
import React from 'react';
import { Progress } from '@/components/ui/progress';

const apps = [
  { name: 'Social App', icon: '📱', time: '1h 45m', percentage: 32 },
  { name: 'Browser', icon: '🌐', time: '52m', percentage: 16 },
  { name: 'Messages', icon: '💬', time: '34m', percentage: 10 },
  { name: 'Video App', icon: '📺', time: '28m', percentage: 8 },
  { name: 'Email', icon: '📧', time: '15m', percentage: 4 },
];

const AppBreakdown = () => {
  return (
    <div className="space-y-5">
      {apps.map((app) => (
        <div key={app.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="app-icon bg-primary/10 text-lg">
                {app.icon}
              </div>
              <span className="font-medium">{app.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{app.time}</span>
          </div>
          <Progress value={app.percentage} className="h-2" />
          <p className="text-xs text-muted-foreground">{app.percentage}% of screen time</p>
        </div>
      ))}
    </div>
  );
};

export default AppBreakdown;
