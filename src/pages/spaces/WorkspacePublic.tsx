
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BuildingIcon, 
  UsersIcon,
  MessageSquareIcon,
  FileIcon,
  BookIcon,
  ShareIcon,
  PencilIcon,
  CalendarIcon,
  ClockIcon,
  FolderIcon,
  BarChart2Icon,
  GlobeIcon,
  TargetIcon,
  CheckCheckIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const WorkspacePublic: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleNavigation} sidebarOpen={navigationOpen} />
      <Sidebar open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      
      <main className={`pt-16 transition-all duration-300 ease-in-out ${!isMobile && navigationOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-2 animate-fade-in">
              <BuildingIcon className="text-green-500" />
              Teacher Workspace
              <Badge variant="outline" className="ml-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <GlobeIcon size={14} className="mr-1" /> Public
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Collaborative space for teachers to share resources and coordinate
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-green-700 dark:text-green-400">Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <TargetIcon size={24} className="text-green-500" />
                      <span className="text-3xl font-bold text-green-700 dark:text-green-400">8</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-500 mt-2">3 nearing completion</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Shared Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <FileIcon size={24} className="text-blue-500" />
                      <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">126</span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-500 mt-2">12 added this week</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-900/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-purple-700 dark:text-purple-400">Team Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <UsersIcon size={24} className="text-purple-500" />
                      <span className="text-3xl font-bold text-purple-700 dark:text-purple-400">24</span>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-500 mt-2">5 online now</p>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="projects" className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="projects" className="flex items-center gap-1">
                    <TargetIcon size={16} />
                    <span className="hidden sm:inline">Projects</span>
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="flex items-center gap-1">
                    <FolderIcon size={16} />
                    <span className="hidden sm:inline">Resources</span>
                  </TabsTrigger>
                  <TabsTrigger value="discussions" className="flex items-center gap-1">
                    <MessageSquareIcon size={16} />
                    <span className="hidden sm:inline">Discussions</span>
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="flex items-center gap-1">
                    <CalendarIcon size={16} />
                    <span className="hidden sm:inline">Calendar</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="projects">
                  <Card>
                    <CardHeader>
                      <CardTitle>Collaborative Projects</CardTitle>
                      <CardDescription>Work with other teachers on educational initiatives</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: 'Curriculum Development', progress: 65, members: 8, dueDate: 'In 3 weeks' },
                          { title: 'Science Fair Organization', progress: 42, members: 12, dueDate: 'In 2 months' },
                          { title: 'Teaching Methods Workshop', progress: 87, members: 5, dueDate: 'Next week' }
                        ].map((project, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer animate-hover">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-medium">{project.title}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline" className="text-xs">
                                    <UsersIcon size={12} className="mr-1" /> {project.members} members
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    <ClockIcon size={12} className="mr-1" /> {project.dueDate}
                                  </Badge>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                            
                            <div className="mt-2 space-y-1">
                              <div className="flex justify-between items-center text-sm">
                                <span>Progress</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                        Create New Project
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resources">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shared Resources</CardTitle>
                      <CardDescription>Teaching materials shared by colleagues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: 'Lesson Plan Templates', type: 'Templates', count: 12 },
                          { title: 'Interactive Worksheets', type: 'Activities', count: 24 },
                          { title: 'Assessment Materials', type: 'Tests', count: 18 },
                          { title: 'Visual Aids Collection', type: 'Media', count: 42 }
                        ].map((resource, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer animate-hover">
                            <div className="flex items-center gap-3">
                              <Badge className="h-10 w-10 rounded-lg p-2 bg-green-500">
                                <FileIcon size={20} />
                              </Badge>
                              <div>
                                <p className="font-medium">{resource.title}</p>
                                <div className="flex items-center gap-3 mt-1">
                                  <span className="text-xs text-muted-foreground">{resource.type}</span>
                                  <Badge variant="secondary" className="text-xs">{resource.count} items</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <Button variant="outline" className="w-full">
                          <ShareIcon size={16} className="mr-2" />
                          Share Resource
                        </Button>
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                          Browse All
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="discussions">
                  <Card>
                    <CardHeader>
                      <CardTitle>Teacher Discussions</CardTitle>
                      <CardDescription>Collaborate and share ideas with colleagues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: 'Engaging Students in Online Classes', replies: 24, category: 'Teaching Methods', latest: '2 hours ago' },
                          { title: 'Handling Student Behavioral Issues', replies: 18, category: 'Classroom Management', latest: 'Yesterday' },
                          { title: 'Integrating Technology in Lessons', replies: 32, category: 'EdTech', latest: '3 days ago' }
                        ].map((topic, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer animate-hover">
                            <h3 className="font-medium">{topic.title}</h3>
                            <div className="flex items-center gap-3 mt-2">
                              <Badge variant="outline">{topic.category}</Badge>
                              <span className="text-xs text-muted-foreground">
                                <MessageSquareIcon size={12} className="inline mr-1" />
                                {topic.replies} replies
                              </span>
                              <span className="text-xs text-muted-foreground">
                                <ClockIcon size={12} className="inline mr-1" />
                                {topic.latest}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                        Start New Discussion
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="calendar">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shared Calendar</CardTitle>
                      <CardDescription>Department events and meetings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 text-center bg-accent/50 rounded-lg">
                        <CalendarIcon size={40} className="mx-auto text-green-500 mb-2" />
                        <p className="text-muted-foreground">Calendar feature coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>Active Members</span>
                    <Badge variant="outline" className="font-normal text-green-500">8 online</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="space-y-3">
                      {['Dr. Sharma', 'Prof. Singh', 'Mrs. Gupta', 'Mr. Kumar', 'Ms. Verma', 'Dr. Joshi', 'Mr. Patel', 'Mrs. Rao'].map((teacher, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="/placeholder.svg" alt={teacher} />
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {teacher.split(' ')[1][0]}
                              </AvatarFallback>
                            </Avatar>
                            {index < 3 && (
                              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{teacher}</p>
                            <p className="text-xs text-muted-foreground">
                              {['Science', 'Mathematics', 'English', 'Social Science', 'Hindi', 'Physical Education', 'Art', 'Music'][index]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Department Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCheckIcon size={16} className="text-green-500" />
                          <span className="text-sm font-medium">Curriculum Update</span>
                        </div>
                        <span className="text-xs font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCheckIcon size={16} className="text-green-500" />
                          <span className="text-sm font-medium">Teaching Training</span>
                        </div>
                        <span className="text-xs font-medium">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCheckIcon size={16} className="text-green-500" />
                          <span className="text-sm font-medium">Technology Integration</span>
                        </div>
                        <span className="text-xs font-medium">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-blue-500 text-white">DS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">Dr. Sharma shared a new resources</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-purple-500 text-white">PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">Prof. Singh started a new discussion</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs bg-amber-500 text-white">MG</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">Mrs. Gupta commented on your post</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-3 text-green-500 text-sm">
                    View All Activity
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

export default WorkspacePublic;
