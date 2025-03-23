
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpenIcon, 
  BookIcon,
  GraduationCapIcon,
  UsersIcon,
  ClockIcon,
  CheckCircle2Icon,
  FileTextIcon,
  VideoIcon,
  LightbulbIcon,
  MessageSquareIcon,
  ChevronRightIcon,
  UserRoundIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const LearningSpace: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  const subjects = [
    { name: 'Mathematics', progress: 85, icon: <LightbulbIcon size={18} className="text-blue-500" /> },
    { name: 'Physics', progress: 72, icon: <LightbulbIcon size={18} className="text-purple-500" /> },
    { name: 'Chemistry', progress: 65, icon: <LightbulbIcon size={18} className="text-green-500" /> },
    { name: 'Biology', progress: 78, icon: <LightbulbIcon size={18} className="text-amber-500" /> }
  ];

  const assignments = [
    { title: 'Algebra Equations', subject: 'Mathematics', due: '2 days', status: 'Pending' },
    { title: 'Physics Lab Report', subject: 'Physics', due: '5 days', status: 'In Progress' },
    { title: 'Chemical Reactions', subject: 'Chemistry', due: '1 day', status: 'Pending' },
    { title: 'Cell Structure Essay', subject: 'Biology', due: 'Today', status: 'Urgent' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleNavigation} sidebarOpen={navigationOpen} />
      <Sidebar open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      
      <main className={`pt-16 transition-all duration-300 ease-in-out ${!isMobile && navigationOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-2 animate-fade-in">
              <BookOpenIcon className="text-blue-500" />
              Learning Space
              <Badge variant="outline" className="ml-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <UsersIcon size={14} className="mr-1" /> Supervised
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Your learning environment monitored by teachers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Active Courses</CardTitle>
                  <CardDescription>Your current subjects and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjects.map((subject, index) => (
                      <div 
                        key={index} 
                        className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer flex flex-col animate-hover"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            {subject.icon}
                            <h3 className="font-medium">{subject.name}</h3>
                          </div>
                          <Badge variant="outline">
                            <UsersIcon size={12} className="mr-1" /> 24 Students
                          </Badge>
                        </div>
                        
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-medium">{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-2" />
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <ClockIcon size={14} />
                            Updated 2h ago
                          </div>
                          <Button variant="ghost" size="sm" className="text-primary gap-1">
                            View <ChevronRightIcon size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Tabs defaultValue="assignments" className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="assignments" className="flex items-center gap-1">
                    <FileTextIcon size={16} />
                    <span className="hidden sm:inline">Assignments</span>
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="flex items-center gap-1">
                    <BookIcon size={16} />
                    <span className="hidden sm:inline">Resources</span>
                  </TabsTrigger>
                  <TabsTrigger value="lectures" className="flex items-center gap-1">
                    <VideoIcon size={16} />
                    <span className="hidden sm:inline">Lectures</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="assignments">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Assignments</CardTitle>
                      <CardDescription>Tasks assigned by your teachers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {assignments.map((assignment, index) => (
                          <div 
                            key={index} 
                            className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer animate-hover"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{assignment.title}</h3>
                                <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                              </div>
                              <Badge className={
                                assignment.status === 'Urgent' ? 'bg-red-500' : 
                                assignment.status === 'In Progress' ? 'bg-amber-500' : 
                                'bg-blue-500'
                              }>
                                {assignment.status}
                              </Badge>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center gap-1 text-xs">
                                <ClockIcon size={14} className="text-muted-foreground" />
                                <span className={assignment.due === 'Today' ? 'text-red-500' : 'text-muted-foreground'}>
                                  Due: {assignment.due}
                                </span>
                              </div>
                              <Button variant="outline" size="sm">Start</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resources">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Resources</CardTitle>
                      <CardDescription>Materials shared by your teachers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Mathematics', 'Physics', 'Chemistry', 'Biology'].map((subject, index) => (
                          <div 
                            key={index} 
                            className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer animate-hover"
                          >
                            <div className="flex items-center gap-3">
                              <Badge className="h-10 w-10 rounded-lg p-2">
                                <BookOpenIcon size={20} />
                              </Badge>
                              <div>
                                <h3 className="font-medium">{subject} Resources</h3>
                                <p className="text-xs text-muted-foreground">12 documents</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="lectures">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recorded Lectures</CardTitle>
                      <CardDescription>Video classes from your teachers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 text-center bg-accent/50 rounded-lg">
                        <VideoIcon size={40} className="mx-auto text-primary mb-2" />
                        <p className="text-muted-foreground">Lecture recordings coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="md:col-span-1">
              <Card className="animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>Your Teachers</span>
                    <Badge variant="outline" className="font-normal">4</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="space-y-4">
                      {['Dr. Sharma', 'Prof. Singh', 'Mrs. Gupta', 'Mr. Kumar'].map((teacher, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt={teacher} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {teacher.split(' ')[1][0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{teacher}</p>
                            <p className="text-xs text-muted-foreground">
                              {['Mathematics', 'Physics', 'Chemistry', 'Biology'][index]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
              
              <Card className="mt-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Mathematics Quiz</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">Tomorrow, 9:00 AM</span>
                        <Badge variant="outline" className="text-xs">40 min</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Physics Test</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">Friday, 10:30 AM</span>
                        <Badge variant="outline" className="text-xs">60 min</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquareIcon size={16} />
                    Teacher Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-blue-500 text-white">DS</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-medium">Dr. Sharma</p>
                      </div>
                      <p className="text-xs mt-2">Remember to complete your algebra homework</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-3 text-primary text-sm">
                    View All Messages
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningSpace;
