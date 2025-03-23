
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
  CoffeeIcon, 
  CalendarIcon, 
  ClipboardListIcon,
  BookOpenIcon,
  BarChart3Icon,
  FilePenIcon,
  BriefcaseIcon,
  FolderIcon,
  ClockIcon,
  BellIcon,
  UserIcon,
  PencilIcon,
  GraduationCapIcon,
  PlusIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const TeacherPrivate: React.FC = () => {
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
              <CoffeeIcon className="text-amber-500" />
              Teacher's Private Space
              <Badge variant="outline" className="ml-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Private
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Your personal workspace - plan lessons and organize your teaching materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Teacher Profile</CardTitle>
                  <CardDescription>Your professional information</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-28 w-28 mb-4 ring-4 ring-amber-500/20">
                    <AvatarImage src="/placeholder.svg" alt="Profile Avatar" />
                    <AvatarFallback className="bg-amber-500 text-white text-xl">MS</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-medium">Mr. Sanjay Kumar</h3>
                  <p className="text-muted-foreground">Physics Teacher</p>
                  
                  <div className="flex mt-4 gap-2">
                    <Badge variant="secondary">10+ Years Exp.</Badge>
                    <Badge variant="secondary">Science Dept.</Badge>
                  </div>
                  
                  <div className="w-full mt-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Classes Completed</span>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mt-6">
                    <Button variant="outline" className="w-full flex items-center gap-2 animate-hover">
                      <PencilIcon size={16} />
                      Edit
                    </Button>
                    <Button className="w-full flex items-center gap-2 bg-amber-500 hover:bg-amber-600 animate-hover">
                      <BriefcaseIcon size={16} />
                      Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BellIcon className="text-amber-500" size={18} />
                    Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                      <ClockIcon className="text-primary" size={18} />
                      <div>
                        <p className="font-medium">Grade Physics Tests</p>
                        <p className="text-xs text-muted-foreground">Due tomorrow</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                      <ClockIcon className="text-primary" size={18} />
                      <div>
                        <p className="font-medium">Department Meeting</p>
                        <p className="text-xs text-muted-foreground">Friday, 2:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                      <ClockIcon className="text-primary" size={18} />
                      <div>
                        <p className="font-medium">Prepare Midterm Exam</p>
                        <p className="text-xs text-muted-foreground">Next week</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-2">
                    <PlusIcon size={16} />
                    Add Reminder
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Tabs defaultValue="lessons" className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="lessons" className="flex items-center gap-1">
                    <BookOpenIcon size={16} />
                    <span className="hidden sm:inline">Lessons</span>
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="flex items-center gap-1">
                    <CalendarIcon size={16} />
                    <span className="hidden sm:inline">Calendar</span>
                  </TabsTrigger>
                  <TabsTrigger value="materials" className="flex items-center gap-1">
                    <FolderIcon size={16} />
                    <span className="hidden sm:inline">Materials</span>
                  </TabsTrigger>
                  <TabsTrigger value="gradebook" className="flex items-center gap-1">
                    <ClipboardListIcon size={16} />
                    <span className="hidden sm:inline">Gradebook</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="lessons" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Lesson Plans</CardTitle>
                      <CardDescription>Your private teaching plans</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {['Motion and Forces', 'Energy Conservation', 'Waves and Optics'].map((lesson, index) => (
                          <div 
                            key={index} 
                            className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer flex justify-between items-center animate-hover"
                          >
                            <div className="flex items-center gap-3">
                              <Badge className="h-10 w-10 rounded-lg p-2 bg-amber-500">
                                <FilePenIcon size={20} />
                              </Badge>
                              <div>
                                <p className="font-medium">{lesson}</p>
                                <p className="text-xs text-muted-foreground">Class X Physics</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="text-muted-foreground">Edit</Button>
                              <Button variant="outline" size="sm">Preview</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full mt-6 bg-amber-500 hover:bg-amber-600">
                        <PlusIcon size={16} className="mr-2" />
                        Create New Lesson Plan
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="calendar">
                  <Card>
                    <CardHeader>
                      <CardTitle>Teaching Schedule</CardTitle>
                      <CardDescription>Your classes and appointments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 text-center bg-accent/50 rounded-lg">
                        <CalendarIcon size={40} className="mx-auto text-amber-500 mb-2" />
                        <p className="text-muted-foreground">Calendar feature coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="materials">
                  <Card>
                    <CardHeader>
                      <CardTitle>Teaching Materials</CardTitle>
                      <CardDescription>Your private resources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Presentations', 'Documents', 'Worksheets', 'Question Banks'].map((type, index) => (
                          <div 
                            key={index} 
                            className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer animate-hover"
                          >
                            <div className="flex items-center gap-3">
                              <Badge className="h-10 w-10 rounded-lg p-2 bg-primary">
                                <FolderIcon size={20} />
                              </Badge>
                              <div>
                                <p className="font-medium">{type}</p>
                                <p className="text-xs text-muted-foreground">
                                  {[12, 8, 15, 20][index]} files
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="gradebook">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gradebook</CardTitle>
                      <CardDescription>Student grades and performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
                            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Class Average</h3>
                            <p className="text-3xl font-bold mt-2">78%</p>
                          </Card>
                          
                          <Card className="p-4 bg-green-50 dark:bg-green-900/20">
                            <h3 className="text-lg font-medium text-green-600 dark:text-green-400">Top Score</h3>
                            <p className="text-3xl font-bold mt-2">96%</p>
                          </Card>
                          
                          <Card className="p-4 bg-amber-50 dark:bg-amber-900/20">
                            <h3 className="text-lg font-medium text-amber-600 dark:text-amber-400">Tests Graded</h3>
                            <p className="text-3xl font-bold mt-2">18/24</p>
                          </Card>
                        </div>
                        
                        <div className="p-4 text-center border rounded-lg">
                          <BarChart3Icon size={30} className="mx-auto text-primary mb-2" />
                          <p className="text-muted-foreground">Detailed grade analysis coming soon</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <Card className="mt-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <CardTitle>Recent Students</CardTitle>
                  <CardDescription>Students you interacted with recently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {['Rahul Patel', 'Priya Singh', 'Ajay Kumar'].map((student, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg animate-hover">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" alt={student} />
                          <AvatarFallback className="bg-accent-foreground/10">
                            {student.split(' ').map(word => word[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student}</p>
                          <p className="text-xs text-muted-foreground">Class X-A</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 text-amber-500">
                    View All Students
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

export default TeacherPrivate;
