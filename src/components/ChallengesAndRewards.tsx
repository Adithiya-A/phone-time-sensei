
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Award, Star, Gift, ThumbsUp, Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type Challenge = {
  id: number;
  title: string;
  description: string;
  progress: number;
  reward: number;
  completed: boolean;
  category: 'daily' | 'weekly' | 'monthly';
};

type Reward = {
  id: number;
  title: string;
  description: string;
  points: number;
  claimed: boolean;
  icon: 'award' | 'star' | 'gift';
};

const ChallengesAndRewards = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<'challenges' | 'rewards'>('challenges');
  const [points, setPoints] = useState<number>(120);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'daily' | 'weekly' | 'monthly'>('all');
  
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Screen Time Under 4 Hours",
      description: "Keep your daily screen time below 4 hours",
      progress: 75,
      reward: 20,
      completed: false,
      category: 'daily'
    },
    {
      id: 2,
      title: "Phone-Free Morning",
      description: "Don't check your phone in the first hour after waking up",
      progress: 100,
      reward: 15,
      completed: true,
      category: 'daily'
    },
    {
      id: 3,
      title: "Digital Detox Weekend",
      description: "Reduce screen time by 30% on weekends",
      progress: 40,
      reward: 50,
      completed: false,
      category: 'weekly'
    },
    {
      id: 4,
      title: "App Diet",
      description: "Use social media apps less than 1 hour per day",
      progress: 60,
      reward: 25,
      completed: false,
      category: 'weekly'
    },
    {
      id: 5,
      title: "Monthly Milestone",
      description: "Reduce average screen time by 20% compared to last month",
      progress: 30,
      reward: 100,
      completed: false,
      category: 'monthly'
    },
  ]);

  const [rewards, setRewards] = useState<Reward[]>([
    {
      id: 1,
      title: "Digital Wellness Badge",
      description: "Unlock a special profile badge",
      points: 50,
      claimed: true,
      icon: 'award'
    },
    {
      id: 2,
      title: "Screen Time Insights",
      description: "Detailed analytics about your usage patterns",
      points: 75,
      claimed: false,
      icon: 'star'
    },
    {
      id: 3,
      title: "Custom Theme",
      description: "Unlock a custom app theme",
      points: 100,
      claimed: false,
      icon: 'gift'
    },
    {
      id: 4,
      title: "Premium Features",
      description: "1-week access to premium features",
      points: 200,
      claimed: false,
      icon: 'award'
    },
  ]);

  const completeChallenge = (id: number) => {
    setChallenges(challenges.map(challenge => {
      if (challenge.id === id && challenge.progress === 100 && !challenge.completed) {
        setPoints(prevPoints => prevPoints + challenge.reward);
        return { ...challenge, completed: true };
      }
      return challenge;
    }));
  };

  const claimReward = (id: number) => {
    const reward = rewards.find(r => r.id === id);
    if (reward && !reward.claimed && points >= reward.points) {
      setRewards(rewards.map(r => 
        r.id === id ? { ...r, claimed: true } : r
      ));
      setPoints(prevPoints => prevPoints - reward.points);
    }
  };

  const filteredChallenges = selectedCategory === 'all' 
    ? challenges 
    : challenges.filter(challenge => challenge.category === selectedCategory);

  const renderIcon = (iconName: 'award' | 'star' | 'gift') => {
    switch (iconName) {
      case 'award':
        return <Award className="h-6 w-6" />;
      case 'star':
        return <Star className="h-6 w-6" />;
      case 'gift':
        return <Gift className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Challenges & Rewards</h1>
        <div className="flex items-center gap-2 bg-accent px-3 py-2 rounded-lg">
          <Star className="h-5 w-5 text-primary" />
          <span className="font-bold">{points} Points</span>
        </div>
      </div>
      
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('challenges')}
          className={`flex-1 pb-2 pt-1 text-center font-medium ${
            activeTab === 'challenges'
              ? 'border-b-2 border-primary text-primary'
              : 'text-muted-foreground'
          }`}
        >
          Challenges
        </button>
        <button
          onClick={() => setActiveTab('rewards')}
          className={`flex-1 pb-2 pt-1 text-center font-medium ${
            activeTab === 'rewards'
              ? 'border-b-2 border-primary text-primary'
              : 'text-muted-foreground'
          }`}
        >
          Rewards
        </button>
      </div>

      {activeTab === 'challenges' && (
        <>
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
            {['all', 'daily', 'weekly', 'monthly'].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category as any)}
                className="whitespace-nowrap"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
          
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {filteredChallenges.map(challenge => (
              <Card key={challenge.id} className={`${challenge.completed ? 'border-primary' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    {challenge.completed && (
                      <Badge className="bg-primary">
                        <Check className="h-3 w-3 mr-1" /> Completed
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-primary" />
                    <span className="text-sm font-medium">{challenge.reward} points</span>
                  </div>
                  {challenge.progress === 100 && !challenge.completed ? (
                    <Button size="sm" onClick={() => completeChallenge(challenge.id)}>
                      <ThumbsUp className="h-4 w-4 mr-1" /> Claim
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      {challenge.completed ? "Claimed" : "In Progress"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}

      {activeTab === 'rewards' && (
        <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {rewards.map(reward => (
            <Card key={reward.id} className={`${reward.claimed ? 'border-primary' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      {renderIcon(reward.icon)}
                    </div>
                    <CardTitle className="text-lg">{reward.title}</CardTitle>
                  </div>
                  {reward.claimed && (
                    <Badge className="bg-primary">
                      <Check className="h-3 w-3 mr-1" /> Claimed
                    </Badge>
                  )}
                </div>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between border-t pt-4 mt-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-primary" />
                  <span className="text-sm font-medium">{reward.points} points</span>
                </div>
                <Button 
                  size="sm" 
                  disabled={reward.claimed || points < reward.points}
                  onClick={() => claimReward(reward.id)}
                  variant={reward.claimed ? "outline" : "default"}
                >
                  {reward.claimed ? "Claimed" : "Redeem"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengesAndRewards;
