
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UsageChart from './UsageChart';
import AppBreakdown from './AppBreakdown';
import DailyTimeline from './DailyTimeline';
import { Progress } from '@/components/ui/progress';
import { Battery, Clock, Smartphone } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Today's Usage</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Screen Time
            </CardTitle>
            <CardDescription>Today's screen usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3h 24m</div>
            <Progress value={65} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">
              65% of your daily goal
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              Unlocks
            </CardTitle>
            <CardDescription>Times you've checked your phone</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <Progress value={80} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">
              80% higher than yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Battery className="h-5 w-5 text-primary" />
              Battery
            </CardTitle>
            <CardDescription>Current battery level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">72%</div>
            <Progress value={72} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Est. 5 hours remaining
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Usage Trends</CardTitle>
            <CardDescription>Screen time over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <UsageChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>App Breakdown</CardTitle>
            <CardDescription>Most used applications</CardDescription>
          </CardHeader>
          <CardContent>
            <AppBreakdown />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daily Timeline</CardTitle>
          <CardDescription>Your phone usage throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <DailyTimeline />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
