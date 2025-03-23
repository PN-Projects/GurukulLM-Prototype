import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  BarChart3Icon, 
  BookOpenIcon,
  ClockIcon,
  TrendingUpIcon,
  TrophyIcon,
  BrainIcon,
  CheckCircleIcon,
  UserIcon,
  CalendarIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Avatar from '@/components/common/Avatar';
import Badge from '@/components/common/Badge';
import AchievementBadge from '@/components/badges/AchievementBadge';

const StudentDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Profile and Stats Card */}
      <Card className="md:col-span-1 overflow-hidden">
        <CardHeader className="p-0">
          <div className="bg-primary/10 p-6 flex flex-col items-center">
            <Avatar 
              src="/placeholder.svg" 
              size="xl" 
              border 
              borderColor="ring-background" 
              status="online"
              className="mb-3"
            />
            <h2 className="font-semibold text-lg mt-2">Alex Johnson</h2>
            <p className="text-sm text-muted-foreground">Computer Science • Year 2</p>
            
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              <Badge type="blue" label="Coding Expert" />
              <Badge type="purple" label="Problem Solver" />
              <Badge type="green" label="Fast Learner" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BarChart3Icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Current GPA</span>
              </div>
              <span className="text-sm font-semibold">3.8/4.0</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Courses Completed</span>
              </div>
              <span className="text-sm font-semibold">12/20</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TrophyIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Achievements</span>
              </div>
              <span className="text-sm font-semibold">18</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Study Hours</span>
              </div>
              <span className="text-sm font-semibold">156 hrs</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BrainIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">AI Mentor Sessions</span>
              </div>
              <span className="text-sm font-semibold">24</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Main Stats and Progress */}
      <div className="md:col-span-2 space-y-6">
        {/* Courses in Progress */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5 text-primary" />
              Courses in Progress
            </CardTitle>
            <CardDescription>Your active courses and current progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  name: 'Advanced Data Structures', 
                  progress: 78, 
                  instructor: 'Dr. Sarah Chen',
                  nextDeadline: 'Project due in 3 days'
                },
                { 
                  name: 'Machine Learning Fundamentals', 
                  progress: 45, 
                  instructor: 'Prof. James Wilson',
                  nextDeadline: 'Quiz tomorrow'
                },
                { 
                  name: 'Web Development', 
                  progress: 92, 
                  instructor: 'Dr. Michael Turner',
                  nextDeadline: 'Final project due in 2 weeks'
                },
              ].map((course, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-sm">{course.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <UserIcon className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{course.instructor}</span>
                        <Separator orientation="vertical" className="h-3" />
                        <CalendarIcon className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{course.nextDeadline}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{course.progress}%</span>
                  </div>
                  
                  <Progress 
                    value={course.progress} 
                    className={cn(
                      course.progress < 50 ? "bg-muted" : 
                      course.progress < 75 ? "bg-blue-100 dark:bg-blue-900/20" : 
                      "bg-green-100 dark:bg-green-900/20",
                      "h-2"
                    )}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Performance Insights */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUpIcon className="h-5 w-5 text-primary" />
              Performance Insights
            </CardTitle>
            <CardDescription>AI-powered analysis of your academic progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                <div className="flex gap-2 items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <h4 className="font-medium text-sm text-green-700 dark:text-green-400">Strengths</h4>
                </div>
                <ul className="mt-2 text-sm text-green-800 dark:text-green-300 space-y-1 pl-6 list-disc">
                  <li>Excellent problem-solving skills in programming assignments</li>
                  <li>Consistent completion of assignments before deadlines</li>
                  <li>Active participation in discussion forums</li>
                </ul>
              </div>
              
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20">
                <div className="flex gap-2 items-center">
                  <TrendingUpIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-medium text-sm text-amber-700 dark:text-amber-400">Areas for Improvement</h4>
                </div>
                <ul className="mt-2 text-sm text-amber-800 dark:text-amber-300 space-y-1 pl-6 list-disc">
                  <li>More practice needed with theoretical concepts in ML course</li>
                  <li>Consider allocating more study time for Data Structures</li>
                  <li>Group project participation could be more consistent</li>
                </ul>
              </div>
              
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                <div className="flex gap-2 items-center">
                  <BrainIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-medium text-sm text-blue-700 dark:text-blue-400">AI Mentor Suggestion</h4>
                </div>
                <p className="mt-2 text-sm text-blue-800 dark:text-blue-300">
                  Based on your performance pattern, scheduling a focused 45-minute study session with your AI mentor on "Advanced Tree Structures" would help improve your understanding before the upcoming exam.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Achievements Row */}
      <Card className="md:col-span-3">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrophyIcon className="h-5 w-5 text-primary" />
            Recent Achievements
          </CardTitle>
          <CardDescription>Badges and accomplishments you've earned recently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <AchievementBadge
              type="gold"
              title="Perfect Score"
              description="Achieved 100% on a major assessment"
              unlocked={true}
              icon={<TrophyIcon size={24} />}
            />
            
            <AchievementBadge
              type="silver"
              title="Code Master"
              description="Completed 50 programming challenges"
              unlocked={true}
              icon={<BrainIcon size={24} />}
            />
            
            <AchievementBadge
              type="bronze"
              title="Consistent Learner"
              description="Studied for 15 days in a row"
              unlocked={true}
              icon={<CheckCircleIcon size={24} />}
            />
            
            <AchievementBadge
              type="blue"
              title="AI Explorer"
              description="Completed the AI foundations course module"
              unlocked={true}
              icon={<BrainIcon size={24} />}
            />
            
            <AchievementBadge
              type="green"
              title="Team Player"
              description="Successfully completed 5 group projects"
              progress={80}
              unlocked={false}
              icon={<UserIcon size={24} />}
            />
            
            <AchievementBadge
              type="purple"
              title="Research Pioneer"
              description="Published first research paper with a professor"
              progress={30}
              unlocked={false}
              icon={<BookOpenIcon size={24} />}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;

