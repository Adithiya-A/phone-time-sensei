
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const GoalSetting = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Usage Goals</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daily Screen Time Goal</CardTitle>
          <CardDescription>Set a limit for your daily device usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Current goal: 5 hours</span>
                <span className="text-sm font-medium">5h 00m</span>
              </div>
              <Slider defaultValue={[5]} max={12} step={0.5} />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-muted-foreground">0h</span>
                <span className="text-xs text-muted-foreground">12h</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <Label htmlFor="notifications" className="flex flex-col gap-1">
                <span>Goal Notifications</span>
                <span className="font-normal text-sm text-muted-foreground">Get reminders when approaching your limit</span>
              </Label>
              <Switch id="notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <Label htmlFor="downtime" className="flex flex-col gap-1">
                <span>Schedule Downtime</span>
                <span className="font-normal text-sm text-muted-foreground">Set times when only certain apps are available</span>
              </Label>
              <Switch id="downtime" />
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <Label htmlFor="focus" className="flex flex-col gap-1">
                <span>Focus Mode</span>
                <span className="font-normal text-sm text-muted-foreground">Limit distractions during specific hours</span>
              </Label>
              <Switch id="focus" />
            </div>

            <Button className="w-full gradient-bg">Save Goals</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>App Usage Limits</CardTitle>
          <CardDescription>Set time limits for specific applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="app-icon bg-primary/10 text-lg">📱</div>
                <div>
                  <div className="font-medium">Social App</div>
                  <div className="text-sm text-muted-foreground">Currently: 1h 45m daily</div>
                </div>
              </div>
              <Button variant="outline">Set Limit</Button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="app-icon bg-primary/10 text-lg">📺</div>
                <div>
                  <div className="font-medium">Video App</div>
                  <div className="text-sm text-muted-foreground">Currently: 1h 15m daily</div>
                </div>
              </div>
              <Button variant="outline">Set Limit</Button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="app-icon bg-primary/10 text-lg">🎮</div>
                <div>
                  <div className="font-medium">Games</div>
                  <div className="text-sm text-muted-foreground">Currently: 45m daily</div>
                </div>
              </div>
              <Button variant="outline">Set Limit</Button>
            </div>

            <Button variant="outline" className="w-full">Add New App Limit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoalSetting;
