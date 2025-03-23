
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
  CalendarIcon, 
  FolderIcon, 
  LockIcon, 
  NotebookIcon,
  ImageIcon,
  UserRoundIcon,
  GraduationCapIcon,
  SparklesIcon,
  PencilIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const StudentPersonal: React.FC = () => {
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
              <UserRoundIcon className="text-primary" />
              Personal Space
              <Badge variant="outline" className="ml-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Private
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Your secure personal area - only you have access to this content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Personal Profile</CardTitle>
                  <CardDescription>Your information</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-28 w-28 mb-4 ring-4 ring-primary/10">
                    <AvatarImage src="/placeholder.svg" alt="Profile Avatar" />
                    <AvatarFallback className="bg-primary text-white text-xl">RP</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-medium">Rahul Patel</h3>
                  <p className="text-muted-foreground">Class X Science</p>
                  
                  <div className="w-full mt-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Overall Progress</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mt-6">
                    <Button variant="outline" className="w-full flex items-center gap-2 animate-hover">
                      <PencilIcon size={16} />
                      Edit
                    </Button>
                    <Button className="w-full flex items-center gap-2 bg-primary hover:bg-primary/90 animate-hover">
                      <LockIcon size={16} />
                      Privacy
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <SparklesIcon className="text-amber-500" size={18} />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                      <Badge className="bg-amber-500 h-8 w-8 flex items-center justify-center rounded-full p-0">
                        <GraduationCapIcon size={16} />
                      </Badge>
                      <div>
                        <p className="font-medium">Perfect Score</p>
                        <p className="text-xs text-muted-foreground">Mathematics Quiz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                      <Badge className="bg-blue-500 h-8 w-8 flex items-center justify-center rounded-full p-0">
                        <BookOpenIcon size={16} />
                      </Badge>
                      <div>
                        <p className="font-medium">Knowledge Seeker</p>
                        <p className="text-xs text-muted-foreground">Read 10 articles</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 text-primary">
                    View All Achievements
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Tabs defaultValue="notes" className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="notes" className="flex items-center gap-1">
                    <NotebookIcon size={16} />
                    <span className="hidden sm:inline">Notes</span>
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="flex items-center gap-1">
                    <CalendarIcon size={16} />
                    <span className="hidden sm:inline">Calendar</span>
                  </TabsTrigger>
                  <TabsTrigger value="files" className="flex items-center gap-1">
                    <FolderIcon size={16} />
                    <span className="hidden sm:inline">Files</span>
                  </TabsTrigger>
                  <TabsTrigger value="gallery" className="flex items-center gap-1">
                    <ImageIcon size={16} />
                    <span className="hidden sm:inline">Gallery</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="notes" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Notes</CardTitle>
                      <CardDescription>Your private study notes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {['Physics Formulas', 'Chemistry Reactions', 'Biology Diagrams'].map((note, index) => (
                          <div 
                            key={index} 
                            className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer flex justify-between items-center animate-hover"
                          >
                            <div className="flex items-center gap-3">
                              <NotebookIcon className="text-primary" size={20} />
                              <div>
                                <p className="font-medium">{note}</p>
                                <p className="text-xs text-muted-foreground">Last edited: Today</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">Open</Button>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full mt-6">
                        <PencilIcon size={16} className="mr-2" />
                        Create New Note
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="calendar">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Calendar</CardTitle>
                      <CardDescription>Your schedule and reminders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 text-center bg-accent/50 rounded-lg">
                        <CalendarIcon size={40} className="mx-auto text-primary mb-2" />
                        <p className="text-muted-foreground">Calendar feature coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="files">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Files</CardTitle>
                      <CardDescription>Your private documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 text-center bg-accent/50 rounded-lg">
                        <FolderIcon size={40} className="mx-auto text-primary mb-2" />
                        <p className="text-muted-foreground">File storage feature coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="gallery">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Gallery</CardTitle>
                      <CardDescription>Your images and media</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 text-center bg-accent/50 rounded-lg">
                        <ImageIcon size={40} className="mx-auto text-primary mb-2" />
                        <p className="text-muted-foreground">Gallery feature coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentPersonal;
