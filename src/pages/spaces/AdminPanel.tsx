
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
  ShieldIcon, 
  UsersIcon, 
  Settings2Icon,
  AlertCircleIcon,
  DatabaseIcon,
  LayoutDashboardIcon,
  BarChart3Icon,
  UserCheckIcon,
  MessageSquareIcon,
  BellIcon,
  ListChecksIcon,
  ScrollTextIcon,
  ServerIcon,
  SearchIcon,
  RefreshCcwIcon,
  CheckCircleIcon,
  XCircleIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

const AdminPanel: React.FC = () => {
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
              <ShieldIcon className="text-purple-500" />
              Admin Panel
              <Badge variant="outline" className="ml-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Full Access
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              System management and monitoring for administrators
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
              <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-purple-700 dark:text-purple-400">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <UsersIcon size={24} className="text-purple-500" />
                    <span className="text-3xl font-bold text-purple-700 dark:text-purple-400">768</span>
                  </div>
                  <p className="text-sm text-purple-600 dark:text-purple-500 mt-2">+12 since last month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-700 dark:text-blue-400">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <ServerIcon size={24} className="text-blue-500" />
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon size={18} className="text-green-500" />
                      <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Healthy</span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-500 mt-2">All services operational</p>
                </CardContent>
              </Card>
              
              <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Pending Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <MessageSquareIcon size={24} className="text-amber-500" />
                    <span className="text-3xl font-bold text-amber-700 dark:text-amber-400">24</span>
                  </div>
                  <p className="text-sm text-amber-600 dark:text-amber-500 mt-2">8 require immediate attention</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-red-700 dark:text-red-400">System Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <AlertCircleIcon size={24} className="text-red-500" />
                    <span className="text-3xl font-bold text-red-700 dark:text-red-400">3</span>
                  </div>
                  <p className="text-sm text-red-600 dark:text-red-500 mt-2">1 critical, 2 warnings</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <Tabs defaultValue="users" className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <TabsList className="grid grid-cols-5 mb-6">
                  <TabsTrigger value="users" className="flex items-center gap-1">
                    <UsersIcon size={16} />
                    <span className="hidden sm:inline">Users</span>
                  </TabsTrigger>
                  <TabsTrigger value="feedback" className="flex items-center gap-1">
                    <MessageSquareIcon size={16} />
                    <span className="hidden sm:inline">Feedback</span>
                  </TabsTrigger>
                  <TabsTrigger value="spaces" className="flex items-center gap-1">
                    <LayoutDashboardIcon size={16} />
                    <span className="hidden sm:inline">Spaces</span>
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="flex items-center gap-1">
                    <BarChart3Icon size={16} />
                    <span className="hidden sm:inline">Analytics</span>
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center gap-1">
                    <Settings2Icon size={16} />
                    <span className="hidden sm:inline">Settings</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="users">
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle>User Management</CardTitle>
                          <CardDescription>Manage system users and permissions</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="search"
                              placeholder="Search users..."
                              className="w-full md:w-[200px] pl-8"
                            />
                          </div>
                          <Button variant="outline" size="icon">
                            <RefreshCcwIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border">
                          <div className="grid grid-cols-12 p-3 text-sm font-medium bg-muted/50">
                            <div className="col-span-5">User</div>
                            <div className="col-span-3 text-center">Role</div>
                            <div className="col-span-2 text-center">Status</div>
                            <div className="col-span-2 text-right">Actions</div>
                          </div>
                          {[
                            { name: 'Rahul Patel', email: 'rahul.p@example.com', role: 'Student', status: 'Active' },
                            { name: 'Dr. Sharma', email: 'sharma@example.com', role: 'Teacher', status: 'Active' },
                            { name: 'Priya Singh', email: 'priya.s@example.com', role: 'Student', status: 'Inactive' },
                            { name: 'Mr. Kumar', email: 'kumar@example.com', role: 'Teacher', status: 'Active' }
                          ].map((user, index) => (
                            <div 
                              key={index}
                              className={`grid grid-cols-12 p-3 items-center text-sm ${
                                index !== 3 ? 'border-b' : ''
                              }`}
                            >
                              <div className="col-span-5 flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder.svg" />
                                  <AvatarFallback>
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                              </div>
                              <div className="col-span-3 text-center">
                                <Badge variant="outline" className={
                                  user.role === 'Student' ? 'border-blue-500 text-blue-500' :
                                  user.role === 'Teacher' ? 'border-amber-500 text-amber-500' :
                                  'border-purple-500 text-purple-500'
                                }>
                                  {user.role}
                                </Badge>
                              </div>
                              <div className="col-span-2 text-center">
                                {user.status === 'Active' ? (
                                  <Badge variant="outline" className="border-green-500 text-green-500">Active</Badge>
                                ) : (
                                  <Badge variant="outline" className="border-red-500 text-red-500">Inactive</Badge>
                                )}
                              </div>
                              <div className="col-span-2 flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Settings2Icon className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                  <XCircleIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">Previous</Button>
                          <div className="text-sm text-muted-foreground">Page 1 of 12</div>
                          <Button variant="outline" size="sm">Next</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="feedback">
                  <Card>
                    <CardHeader>
                      <CardTitle>Feedback Management</CardTitle>
                      <CardDescription>Review and respond to user feedback</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { user: 'Rahul P.', role: 'Student', message: 'The learning interface is great but could use more interactive elements.', time: '2 hours ago', status: 'New' },
                          { user: 'Dr. Sharma', role: 'Teacher', message: 'Need more administrative controls for managing student assignments.', time: '1 day ago', status: 'Reviewing' },
                          { user: 'Priya S.', role: 'Student', message: 'Would like to see more practice exercises in the mathematics section.', time: '3 days ago', status: 'Resolved' }
                        ].map((feedback, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className={
                                    feedback.role === 'Student' ? 'bg-blue-500 text-white' : 
                                    'bg-amber-500 text-white'
                                  }>
                                    {feedback.user.split(' ')[0][0]}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{feedback.user}</p>
                                  <p className="text-xs text-muted-foreground">{feedback.role}</p>
                                </div>
                              </div>
                              <Badge className={
                                feedback.status === 'New' ? 'bg-blue-500' :
                                feedback.status === 'Reviewing' ? 'bg-amber-500' :
                                'bg-green-500'
                              }>
                                {feedback.status}
                              </Badge>
                            </div>
                            
                            <p className="text-sm mb-3">{feedback.message}</p>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">{feedback.time}</span>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">Reply</Button>
                                {feedback.status !== 'Resolved' && (
                                  <Button variant="outline" size="sm">
                                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                                    Resolve
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        <Button className="w-full">Load More Feedback</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="spaces">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Spaces</CardTitle>
                      <CardDescription>Manage and monitor all platform spaces</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { name: 'Student Personal Space', icon: <UserCheckIcon className="text-purple-500" />, users: 452, status: 'Active' },
                          { name: 'Learning Space', icon: <ScrollTextIcon className="text-blue-500" />, users: 768, status: 'Active' },
                          { name: 'Teacher Private Space', icon: <ShieldIcon className="text-amber-500" />, users: 32, status: 'Active' },
                          { name: 'Teacher Workspace', icon: <UsersIcon className="text-green-500" />, users: 48, status: 'Active' }
                        ].map((space, index) => (
                          <div key={index} className="p-4 border rounded-lg animate-hover">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                                  {space.icon}
                                </div>
                                <div>
                                  <p className="font-medium">{space.name}</p>
                                  <p className="text-xs text-muted-foreground">{space.users} active users</p>
                                </div>
                              </div>
                              <Badge variant="outline" className="border-green-500 text-green-500">{space.status}</Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <Button variant="outline" size="sm">Settings</Button>
                              <Button variant="outline" size="sm">Analytics</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="analytics">
                  <Card>
                    <CardHeader>
                      <CardTitle>System Analytics</CardTitle>
                      <CardDescription>Platform usage and performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 text-center bg-accent/50 rounded-lg">
                        <BarChart3Icon size={40} className="mx-auto text-purple-500 mb-2" />
                        <p className="text-muted-foreground">Detailed analytics dashboard coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>System Settings</CardTitle>
                      <CardDescription>Configure platform settings and preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: 'General Settings', description: 'Basic platform configuration' },
                          { name: 'Security Settings', description: 'User authentication and permissions' },
                          { name: 'Email Configuration', description: 'Notification settings and templates' },
                          { name: 'Content Management', description: 'Manage platform content and resources' }
                        ].map((setting, index) => (
                          <div key={index} className="p-4 border rounded-lg flex justify-between items-center animate-hover">
                            <div>
                              <p className="font-medium">{setting.name}</p>
                              <p className="text-sm text-muted-foreground">{setting.description}</p>
                            </div>
                            <Button variant="outline">Configure</Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Server Load</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Memory Usage</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Storage</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-3 flex items-center gap-2">
                      <CheckCircleIcon size={16} className="text-green-500" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">All Systems Operational</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent System Logs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] pr-4">
                    <div className="space-y-3 text-xs">
                      {[
                        { message: 'User login successful', level: 'info', time: '2 min ago' },
                        { message: 'New content added to Learning Space', level: 'info', time: '15 min ago' },
                        { message: 'Failed login attempt', level: 'warning', time: '1 hour ago' },
                        { message: 'System backup completed', level: 'info', time: '3 hours ago' },
                        { message: 'Database optimization completed', level: 'info', time: '6 hours ago' },
                        { message: 'Memory usage spike detected', level: 'warning', time: '1 day ago' }
                      ].map((log, index) => (
                        <div key={index} className="p-2 border-l-2 pl-3 rounded-sm bg-accent/30" style={{
                          borderLeftColor: log.level === 'info' 
                            ? 'var(--blue-500)' 
                            : log.level === 'warning' 
                            ? 'var(--amber-500)' 
                            : 'var(--red-500)'
                        }}>
                          <p className="font-mono">{log.message}</p>
                          <div className="flex justify-between items-center mt-1">
                            <Badge variant="outline" className={
                              log.level === 'info' ? 'border-blue-500 text-blue-500' :
                              log.level === 'warning' ? 'border-amber-500 text-amber-500' :
                              'border-red-500 text-red-500'
                            }>
                              {log.level}
                            </Badge>
                            <span className="text-muted-foreground">{log.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  
                  <Button variant="outline" className="w-full mt-3 text-xs">
                    View All Logs
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left">
                      <RefreshCcwIcon size={16} className="mr-2" />
                      Refresh System Cache
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <ListChecksIcon size={16} className="mr-2" />
                      Run System Diagnostics
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <DatabaseIcon size={16} className="mr-2" />
                      Backup Database
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
