import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import AchievementBadge from '@/components/badges/AchievementBadge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  BookOpenIcon,
  BrainIcon,
  CheckCircleIcon,
  TrophyIcon,
  RocketIcon,
  BarChart2Icon,
  FlameIcon,
  StarIcon,
  ZapIcon,
  PuzzleIcon,
  HeartIcon,
  UserIcon,
  GraduationCapIcon
} from 'lucide-react';
import Badge from '@/components/common/Badge';
import { Progress } from '@/components/ui/progress';

const achievementCategories = [
  { id: 'academic', name: 'Academic Excellence' },
  { id: 'learning', name: 'Learning Journey' },
  { id: 'community', name: 'Community Contribution' },
  { id: 'challenges', name: 'Challenges & Competitions' },
];

interface Achievement {
  id: string;
  title: string;
  description: string;
  type: 'gold' | 'silver' | 'bronze' | 'blue' | 'green' | 'purple';
  icon: React.ReactNode;
  unlocked: boolean;
  progress?: number;
  category: string;
}

const achievements: Achievement[] = [
  // Academic Excellence
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Achieve 100% on any assessment',
    type: 'gold',
    icon: <StarIcon size={24} />,
    unlocked: true,
    category: 'academic',
  },
  {
    id: 'straight-as',
    title: 'Straight As',
    description: 'Maintain an A average for an entire semester',
    type: 'gold',
    icon: <TrophyIcon size={24} />,
    unlocked: false,
    progress: 75,
    category: 'academic',
  },
  {
    id: 'quick-learner',
    title: 'Quick Learner',
    description: 'Complete a course module in record time',
    type: 'silver',
    icon: <RocketIcon size={24} />,
    unlocked: true,
    category: 'academic',
  },
  {
    id: 'consistent-performer',
    title: 'Consistent Performer',
    description: 'Submit all assignments on time for a full course',
    type: 'bronze',
    icon: <CheckCircleIcon size={24} />,
    unlocked: true,
    category: 'academic',
  },
  
  // Learning Journey
  {
    id: 'knowledge-seeker',
    title: 'Knowledge Seeker',
    description: 'Complete 10 optional learning resources',
    type: 'blue',
    icon: <BookOpenIcon size={24} />,
    unlocked: true,
    category: 'learning',
  },
  {
    id: 'master-of-concepts',
    title: 'Master of Concepts',
    description: 'Demonstrate mastery in all key concepts of a course',
    type: 'gold',
    icon: <BrainIcon size={24} />,
    unlocked: false,
    progress: 60,
    category: 'learning',
  },
  {
    id: 'studious',
    title: 'Studious',
    description: 'Study for 30 days in a row',
    type: 'silver',
    icon: <FlameIcon size={24} />,
    unlocked: false,
    progress: 40,
    category: 'learning',
  },
  {
    id: 'deep-diver',
    title: 'Deep Diver',
    description: 'Explore advanced topics beyond the curriculum',
    type: 'purple',
    icon: <ZapIcon size={24} />,
    unlocked: true,
    category: 'learning',
  },
  
  // Community Contribution
  {
    id: 'helpful-peer',
    title: 'Helpful Peer',
    description: 'Help 10 fellow students with their questions',
    type: 'green',
    icon: <HeartIcon size={24} />,
    unlocked: true,
    category: 'community',
  },
  {
    id: 'discussion-leader',
    title: 'Discussion Leader',
    description: 'Start and lead 5 meaningful discussions in forums',
    type: 'silver',
    icon: <UserIcon size={24} />,
    unlocked: false,
    progress: 80,
    category: 'community',
  },
  {
    id: 'feedback-contributor',
    title: 'Feedback Contributor',
    description: 'Provide constructive feedback on 5 courses',
    type: 'bronze',
    icon: <CheckCircleIcon size={24} />,
    unlocked: true,
    category: 'community',
  },
  
  // Challenges & Competitions
  {
    id: 'hackathon-hero',
    title: 'Hackathon Hero',
    description: 'Win or place in the top 3 of a hackathon',
    type: 'gold',
    icon: <TrophyIcon size={24} />,
    unlocked: true,
    category: 'challenges',
  },
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    description: 'Solve 50 coding challenges',
    type: 'blue',
    icon: <PuzzleIcon size={24} />,
    unlocked: false,
    progress: 65,
    category: 'challenges',
  },
  {
    id: 'competitive-spirit',
    title: 'Competitive Spirit',
    description: 'Participate in 5 academic competitions',
    type: 'purple',
    icon: <BarChart2Icon size={24} />,
    unlocked: true,
    category: 'challenges',
  },
];

const Achievements: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('academic');
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const categoryAchievements = achievements.filter(
    achievement => achievement.category === activeCategory
  );
  
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalAchievements = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalAchievements) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className={`pt-16 transition-all duration-300 ease-in-out ${!isMobile && sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Achievements & Badges</h1>
            <p className="text-muted-foreground mt-1">Track your progress and earn recognition for your accomplishments</p>
          </div>
          
          {/* Overview Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Total Progress</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Achievements Unlocked</span>
                    <span>{unlockedCount} / {totalAchievements}</span>
                  </div>
                  <Progress value={completionPercentage} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    You've unlocked {completionPercentage}% of all achievements
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Current Title</h3>
                  <div className="flex items-center gap-2">
                    <Badge 
                      type="gold" 
                      label="Dedicated Scholar" 
                      icon={<GraduationCapIcon size={14} />}
                      size="lg"
                      glow
                      className="mt-1"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Earned for consistent academic excellence
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Rare Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge type="purple" label="Top 5%" glow />
                    <Badge type="blue" label="Pioneer" />
                    <Badge type="green" label="Mentor" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You've earned several rare distinctions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievement Categories */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="mb-6 flex w-full justify-start overflow-x-auto pb-px">
              {achievementCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex-shrink-0 px-4"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {achievementCategories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {category.name}
                    </CardTitle>
                    <CardDescription>
                      {activeCategory === 'academic' && "Achievements for exceptional classroom performance"}
                      {activeCategory === 'learning' && "Milestones in your learning journey"}
                      {activeCategory === 'community' && "Recognition for helping others and contributing to the community"}
                      {activeCategory === 'challenges' && "Awards for competitions and special challenges"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                      {categoryAchievements.map(achievement => (
                        <AchievementBadge
                          key={achievement.id}
                          type={achievement.type}
                          title={achievement.title}
                          description={achievement.description}
                          unlocked={achievement.unlocked}
                          progress={achievement.progress}
                          icon={achievement.icon}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* League System */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrophyIcon className="h-5 w-5 text-primary" />
                Competitive Leagues
              </CardTitle>
              <CardDescription>
                Compete with peers in your field and track your ranking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/20">
                        <TrophyIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">Gold League</h3>
                        <p className="text-xs text-muted-foreground">Computer Science Division</p>
                      </div>
                    </div>
                    <Badge type="gold" label="3rd Place" glow />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center bg-amber-100 dark:bg-amber-900/20 rounded-full text-amber-700 dark:text-amber-400 font-medium text-xs">
                          1
                        </div>
                        <span>Sophia Williams</span>
                      </div>
                      <span className="text-muted-foreground">1840 pts</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center bg-amber-100 dark:bg-amber-900/20 rounded-full text-amber-700 dark:text-amber-400 font-medium text-xs">
                          2
                        </div>
                        <span>Ethan Martinez</span>
                      </div>
                      <span className="text-muted-foreground">1765 pts</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm bg-amber-50 dark:bg-amber-900/10 p-1 rounded">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center bg-amber-100 dark:bg-amber-900/20 rounded-full text-amber-700 dark:text-amber-400 font-medium text-xs">
                          3
                        </div>
                        <span className="font-medium">You</span>
                      </div>
                      <span className="font-medium">1720 pts</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center bg-amber-100 dark:bg-amber-900/20 rounded-full text-amber-700 dark:text-amber-400 font-medium text-xs">
                          4
                        </div>
                        <span>Jacob Thompson</span>
                      </div>
                      <span className="text-muted-foreground">1695 pts</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <StarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm">Silver League</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Advance to Silver League by earning 200 more points
                    </p>
                    <Progress value={60} className="h-1.5" />
                  </div>
                  
                  <div className="p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                        <BookOpenIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                      </div>
                      <h3 className="font-medium text-sm">Academic Challenge</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Next competition starts in 3 days
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <BrainIcon className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                      </div>
                      <h3 className="font-medium text-sm">Knowledge Bowl</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your team ranked 2nd in last week's contest
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
